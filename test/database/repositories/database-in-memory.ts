import { Path } from "src/app/entities/url/path.entity";
import { PathRepositoryContract } from "src/app/repositories/path.repository.contract";

export class DatabaseInMemory implements PathRepositoryContract {
    public paths: Path[] = [];

    async findMany(): Promise<Path[]> {
        return this.paths;
    }

    async findOne(id: number): Promise<Path> {
        const index = this.paths.findIndex(path => path.id == id);
        return this.paths[index];
    }

    async findByTag(tag: string): Promise<Path> {
        const index = this.paths.findIndex(path => path.tag == tag);
        return this.paths[index];
    }
}