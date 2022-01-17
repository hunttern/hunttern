import { User } from "./users.model";

export interface AuthState{
    user: User | null;
}
export const initailState: AuthState = {
    user: null
};