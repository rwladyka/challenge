import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { Order } from '../types';
import { getOrder } from '../shared/storage';

type OrderContextProviderProps = {
  children: ReactNode;
};

type OrderContextProps = {
  order: Order[];
  setOrder: Dispatch<SetStateAction<Order[]>>;
};

export const OrderContext = createContext<OrderContextProps>({
  order: [],
  setOrder: () => {},
});

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const [order, setOrder] = useState<Order[]>(getOrder());
  return <OrderContext.Provider value={{ order, setOrder }}>{children}</OrderContext.Provider>;
};

export default OrderContextProvider;
