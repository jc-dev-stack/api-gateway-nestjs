export interface PathProps {
    id?: number
    domain: string
    tag: string
    route: string
    bearerToken?: string | null
}

export class Path {
    private props: PathProps

    constructor(props: PathProps) {
        this.props = props;
    }

    public get id(): number {
        return this.props.id;
    }

    public set tag(tag: string) {
        this.props.tag = tag;
    }

    public get tag(): string {
        return this.props.tag;
    }

    public set domain(domain: string) {
        this.props.domain = domain;
    }

    public get domain(): string {
        return this.props.domain;
    }

    public set route(route: string) {
        this.props.route = route;
    }

    public get route(): string {
        return this.props.route;
    }

    public set bearerToken(bearerToken: string) {
        this.props.bearerToken = bearerToken;
    }

    public get bearerToken(): string {
        return this.props.bearerToken;
    }
}