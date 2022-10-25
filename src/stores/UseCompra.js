import { defineStore } from "pinia";

export const useCompra = defineStore("compra", {
  state: () => ({
    compra: [],
  }),
  getters: {
    getcompra: (state) => state.compra,
  },
  actions: {
    addCompra(compra) {
      this.compra.push(compra);
    },
  },
});
