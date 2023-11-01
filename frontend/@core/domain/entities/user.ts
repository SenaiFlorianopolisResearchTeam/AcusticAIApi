export type UserProps = {
    id: number,
    email: string,
    name: string,
    password: string
}

export class User {
    constructor(public props: UserProps) {
        this.validateEmail()
    }

    private validateEmail(): void {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.props.email)) {
            throw new Error("Invalid email format")
        }
        if (this.props.email.length < 10) {
            throw new Error("Email must have at least 10 characters")
        }
    }

    toJson() {
        return {
            id: this.props.id,
            email: this.props.email,
            name: this.props.name,
            password: this.props.password
        }
    }
}