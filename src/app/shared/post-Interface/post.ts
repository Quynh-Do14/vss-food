import { Role } from "../auth/roles";

export interface Post {
    username: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    status: string;
    token: string;
    roleName: Role;
}
