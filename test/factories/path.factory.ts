import { randomUUID } from "crypto";
import { Path, PathProps } from "../../src/app/entities/url/path.entity";

type Override = Partial<PathProps>

export class PathFactory {
    static make(override: Override): Path {
        return (
            new Path({
                domain: 'https://localhost:800',
                route: '/api/users',
                bearerToken: '',
                tag: randomUUID(),
                ...override
            })
        )
    }
}