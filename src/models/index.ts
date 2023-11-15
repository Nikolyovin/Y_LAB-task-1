export interface ILoginData {
    email: string
    password: string
}

export interface ILoginResponse extends ILoginData {
    id: number
}
