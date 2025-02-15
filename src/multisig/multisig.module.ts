import { Module } from '@nestjs/common';
import { MultisigService } from './multisig.service';
import { PrismaService } from '../prisma/prisma.service';
import { RpcConfigService } from '../config/rpcConfig.service';
@Module({
  providers: [MultisigService, PrismaService, RpcConfigService],
})
export class MultisigModule {}
