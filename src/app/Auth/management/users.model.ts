export interface AuthResponseData{
    accessToken: string;
    refreshToken: string;
    role: string;
    // expire: string;
}
export class User{
    constructor(
        private token: string,
        private localId: string,
        private role: string = 'User',
        // private expireDate: Date
    ) {}
}