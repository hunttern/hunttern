enum Currency
{
    USD,
    EUR
}

enum Period
{
    Month,
    Year
} 
export interface Ifeature{
    id: string;
    name: string;
    value: string;
    plans: any[];
}
export interface Iplan{
    id: string;
    name: string;
    amount: number;
    currency: Currency;
    period: Period;
    features: Ifeature[];
    descriptions: string;
  }