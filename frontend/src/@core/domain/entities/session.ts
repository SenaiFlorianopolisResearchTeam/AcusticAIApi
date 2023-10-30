export type SessionProps = {
    id: number,
    name: string,
    userid: number,
    tmin: number,
    data: {}
}

export class Session {
    constructor(public props: SessionProps) { }

}