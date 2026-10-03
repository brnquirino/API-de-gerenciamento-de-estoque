export type User = {
    id: number,
    name: string,
    email: string,
    password: string
}

export type createUser = {
    name: string,
    email: string,
    password: string
}

export type updateUser = {
    name?: string,
    email?:string,
    password?: string
}