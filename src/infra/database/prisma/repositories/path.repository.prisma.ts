import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Path } from "src/app/entities/url/path.entity";
import { PathRepositoryContract } from "src/app/repositories/path.repository.contract";
import { MapperPrisma } from '../../mapper/mapper.prisma';

@Injectable()
export class PathRepositoryPrisma extends PathRepositoryContract {
    constructor(
        private readonly prisma: PrismaService
    ) {
        super()
    }

    async findMany(): Promise<Path[] | null> {
        const response = await this.prisma.path.findMany();
        if (response) {
            return response.map(MapperPrisma.toDomain);
        }
        return null;
    }
    async findOne(id: number): Promise<Path | null> {
        const response = await this.prisma.path.findFirst({
            where: {
                id
            }
        })

        if (response) {
            return MapperPrisma.toDomain(response);
        }

        return null
    }

    async findByTag(tag: string): Promise<Path | null> {

        const response = await this.prisma.path.findFirst({
            where: {
                tag
            }
        })
        if (response) {
            return MapperPrisma.toDomain(response);
        }
        return null;
    }

}