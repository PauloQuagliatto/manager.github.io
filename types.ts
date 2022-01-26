export interface ICategory {
  name: string;
  products: IProduct[] | [];
}

export interface IConfigurations {
  waiterTax: boolean;
  waiterPart: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IOrder {
  _id: string;
  openedAt: number;
  closedAt: number;
  table: string;
  items: IProduct[];
  total: number;
  waiterTax: boolean;
  waiterPart: number;
  appPart: number;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  active: boolean;
  price: number;
  taxes: {
    ncm: number | null;
    cest: number | null;
    icmsIss: number | null;
    cfop: number | null;
    csosn: number | null;
    fcp: number | null;
    pisConfins: number | null;
    pis: number | null;
    confins: number | null;
  };
}

export interface IStore {
  _id: string;
  name: string;
  email: string;
  cnpj: string;
  categories: ICategory[];
  waiters: IWaiter[] | [];
  openOrders: IOrder[] | [];
  closedOrders: IOrder[] | [];
  configurations: IConfigurations;
}

export interface IWaiter {
  _id: string;
  nick: string;
  password: string;
}
