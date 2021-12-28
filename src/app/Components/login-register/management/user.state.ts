import { User } from "./users.model";

interface AuthState{
    user: User | null;
}
export const initailState = {
    user: null
};