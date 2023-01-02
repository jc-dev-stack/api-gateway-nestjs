import Prisma from "@prisma/client";
import { Path } from "src/app/entities/url/path.entity";

export class MapperPrisma {
    static toDomain(raw: Prisma.Path) {
        return (
            new Path(
                {
                    domain: raw.domain,
                    route: raw.route,
                    tag: raw.tag,
                    bearerToken: raw.bearerToken,
                    id: raw.id,
                }
            )
        )
    }
}