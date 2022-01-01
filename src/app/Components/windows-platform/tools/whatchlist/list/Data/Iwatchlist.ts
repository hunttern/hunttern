export interface Iwatchlist{
    watchlistName: string;
    coins: {symbol: string,last: number, change: number,changePer: number, vol: number}[];
}