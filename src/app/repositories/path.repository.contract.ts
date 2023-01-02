import { Path } from "../entities/url/path.entity";

export abstract class PathRepositoryContract {
    abstract findMany(): Promise<Path[]>
    abstract findOne(id: number): Promise<Path>
    abstract findByTag(tag: string): Promise<Path>
} 