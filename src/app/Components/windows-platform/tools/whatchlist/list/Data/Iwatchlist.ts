export interface Iwatchlist{
    watchlistName: string;
    coins: {symbol: string,last: number, change: number, vol: number}[];
}