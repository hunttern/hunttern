import { User } from "./users.model";

export interface AuthState{
    user: User | null;
    role: string
}
export const initailState: AuthState = {
    user: null,
    role: 'User'
};