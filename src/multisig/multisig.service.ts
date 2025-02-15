import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TransactionStatus } from '@prisma/client';
import Safe from '@safe-global/protocol-kit';
import { RpcConfigService, Chain } from '../config/rpcConfig.service';
import SafeApiKit from '@safe-global/api-kit';
@Injectable()
export class MultisigService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rpcConfigService: RpcConfigService,
    private readonly configService: ConfigService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async checkPendingTransactions() {
    const pendingTransactions = await this.prisma.pendingTransaction.findMany({
      where: {
        status: TransactionStatus.PENDING,
      },
    });
    for (const transaction of pendingTransactions) {
      if (await this.validateTransaction(transaction)) {
        await this.confirmTransaction(
          transaction.chain,
          transaction.transactionHash,
          transaction.multisigAddress,
        );
      }
    }
  }

  async validateTransaction(transaction) {
    console.log(transaction);
    return true;
  }

  async confirmTransaction(
    chain: Chain,
    transactionHash: string,
    multisigAddress: string,
  ) {
    const apiKit = new SafeApiKit({
      chainId: BigInt(this.rpcConfigService.getChain(chain).id),
    });

    const protocolKitOwner = await Safe.init({
      provider: this.rpcConfigService.getChainRpcUrl(chain),
      signer: this.configService.get('AGENT_PRIVATE_KEY'),
      safeAddress: multisigAddress,
    });

    const signature = await protocolKitOwner.signHash(transactionHash);

    // Confirm the Safe transaction
    await apiKit.confirmTransaction(transactionHash, signature.data);

    const safeTransaction = await apiKit.getTransaction(transactionHash);

    await protocolKitOwner.executeTransaction(safeTransaction);

    await this.prisma.pendingTransaction.update({
      where: { transactionHash },
      data: { status: TransactionStatus.CONFIRMED },
    });
    console.log('Transaction confirmed');
  }
}
