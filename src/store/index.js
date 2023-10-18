import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";
import userService from "@/services/User/userService";
// import { USERDATA } from "@/constants/constants";
import ln from "./ln";
import wallet from "./wallet";
import campaigns from "./campaigns";

Vue.use(Vuex);
Vue.use(VueCookies);

export default new Vuex.Store({
  modules: {
    ln,
    wallet,
    campaigns
  },
  state: {
    user: null,
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
    ]
  },
  getters: {},
  mutations: {
    SET_USER(state, value) {
      state.user = value.data;
      sessionStorage.setItem("userData", JSON.stringify(value.data));
      VueCookies.set("token", value.token, "10m", {
        secure: true,
        httpOnly: true,
      });
    },

    SET_LOADING(state, loading) {
      state.loading = loading;
    },

    FETCH_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser: ({ commit }, value) => {
      commit("SET_USER", value);
    },
    fetchUser: async ({ commit }) => {
        commit("SET_LOADING", true);
        try {
          const response = await userService.fetchUser();
          const user = response.data;
          commit("FETCH_USER", user);
          commit("SET_LOADING", false);
        } catch (error) {
          commit("SET_LOADING", false);
      }
    },
  },
});
