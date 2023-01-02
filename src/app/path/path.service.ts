import { Injectable } from '@nestjs/common';
import { Path } from '../entities/url/path.entity';
import { PathRepositoryContract } from '../repositories/path.repository.contract';

export interface ResponseFindAllPaths {
    paths: Path[]
}

export interface ResponseFindPath {
    path: Path
}

@Injectable()
export class PathService {
    constructor(private readonly repository: PathRepositoryContract) { }

    async findAll(): Promise<ResponseFindAllPaths> {
        const paths = await this.repository.findMany();
        return {
            paths
        }
    }

    async show(id: number): Promise<ResponseFindPath> {
        const path = await this.repository.findOne(id);
        return {
            path
        }
    }

    async getByTag(tag: string): Promise<ResponseFindPath> {
        const path = await this.repository.findByTag(tag);
        return {
            path
        }
    }
}
