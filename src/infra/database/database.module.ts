import { PathRepositoryPrisma } from './prisma/repositories/path.repository.prisma';
import { PrismaService } from './prisma/prisma.service';
import { PathRepositoryContract } from 'src/app/repositories/path.repository.contract';
import { Module } from '@nestjs/common';

@Module({
    providers: [
        PrismaService,
        {
            provide: PathRepositoryContract,
            useClass: PathRepositoryPrisma
        }
    ],
    exports: [
        PathRepositoryContract
    ]
})
export class DatabaseModule { }
