import campaignsService from "@/services/Campaigns/campaignsService";

export default {
  namespaced: true,
  state: {
    loading: false,
    campaigns: [
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
    SET_CAMPAIGNS(state, value) {
      state.campaigns = value;
    },
  },
  actions: {
    async createCampaign({ commit }, value) {
      try {
        commit("SET_LOADING", true);
        await campaignsService.createCampaign(value);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
      }
    },

    async fetchCampaigns({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await campaignsService.fetchCampaigns();
        commit("SET_CAMPAIGNS", response);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_CAMPAIGNS", []);
      }
    },
  },
};
