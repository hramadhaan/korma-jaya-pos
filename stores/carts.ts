import { defineStore } from "pinia";

interface IState {
  carts: Cart[];
}

interface Cart {
  name: string;
  id: number;
}

export const useMyCartsStore = defineStore("stores", {
  state: (): IState => {
    return {
      carts: [],
    };
  },
  actions: {
    addCart(item: Cart) {
      this.carts.push(item);
    },
  },
});
