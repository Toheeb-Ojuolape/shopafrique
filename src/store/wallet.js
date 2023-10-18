import walletService from "@/services/Wallet/walletService";

export default {
  namespaced: true,
  state: {
    loading: false,
    transactions: [
      {
        title: "New Campaign",
        status: "Active",
        date: "02-11-2022 10:00pm",
        budget: 3000,
        clicks: 1200,
        impressions: 1000,
      },
      {
        title: "New Campaign",
        status: "Active",
        date: "02-11-2022 10:00pm",
        budget: 3000,
        clicks: 1200,
        impressions: 1000,
      },
      {
        title: "New Campaign",
        status: "Active",
        date: "02-11-2022 10:00pm",
        budget: 3000,
        clicks: 1200,
        impressions: 1000,
      },
    ],
  },
  mutations: {
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_TRANSACTIONS(state,value){
      state.transactions = value
    }
  },
  actions: {
    async fundWallet({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        await walletService.fundWallet(value);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
      }
    },

    async fetchTransactions({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await walletService.fetchTransactions();
        commit("SET_TRANSACTIONS", response);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_TRANSACTIONS", []);
      }
    },
  },
};
