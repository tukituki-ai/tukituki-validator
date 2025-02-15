import { Module } from '@nestjs/common';
import { MultisigModule } from './multisig/multisig.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MultisigModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
  ],
  providers: [PrismaService],
})
export class AppModule {}
