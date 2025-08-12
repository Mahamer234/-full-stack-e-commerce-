import type { Tproduct } from "./product";
export type TOrderItem = {
  id: number;
  userId: number;
  items: Tproduct[];
};
