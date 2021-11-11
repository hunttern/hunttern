export interface Prediction {
    LastPatternPoint: number[];
    Location: number[];
    Price: number[];
    Status: string;
    Time: Date[];
    Type: 'Bearish' | 'Bullish';
}
