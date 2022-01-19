// # Position = ['PRZ', 'Entry', 'StopLosses', 'TargetPoints', LastPointLocation, PositionType, 'User_RRR']

export interface Iposition{
    PRZ: number[];
    Entry: number;
    StopLosses: number[];
    TargetPoints: number[];
    LastPointLocation: number[];
    PositionType: string[];
    User_RRR: any;
}