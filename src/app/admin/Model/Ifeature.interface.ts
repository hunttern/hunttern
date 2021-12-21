export interface Ifeature{
    value: string;
    desc: string;
}
export interface Iplan{
    id: string;
    title: string;
    price: string;
    currencey: string;
    features: Ifeature[];
  }