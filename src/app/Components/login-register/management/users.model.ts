export interface AuthResponseData{
    accessToken: string;
    refreshToken: string;
    // expire: string;
}
export class User{
    constructor(
        private token: string,
        private localId: string,
        // private expireDate: Date
    ) {}
}