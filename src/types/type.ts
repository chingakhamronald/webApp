export enum Eform {
  indivisual = "indivisual",
  enterprise = "enterprise",
  government = "government",
}

export interface ICustomCard {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}
