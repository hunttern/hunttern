export interface iPlatformState{
    inputs: {zigzag: boolean,prediction: boolean,sensitivity: number, error: number},
    candlePatterns: string[],
    classicPatterns: string[],
    harmonicPatterns: string[],
    screener: {id: number, symbol: string,type: 'long' | 'short', timeFrame: string, entry: number, tp: number, sl: number, data: Date}[],
    watchlists: {name: string, coins: string[]}[],
    loading: boolean
}
export const initialPlatformState: iPlatformState = {
    inputs: {zigzag: false,prediction: false,sensitivity: 10, error: 10},
    candlePatterns: [],
    classicPatterns: [],
    harmonicPatterns: [],
    screener: [],
    watchlists: [{name: 'default1', coins: ['BTCUSDT','ETHUSDT','ADAUSDT']}],
    loading: false
}