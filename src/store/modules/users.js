import * as types from "../mutation-types";
import User from "../../api/user";

const state = {
  name: "",
};

const getters = {
  username: state => state.name,
};

const mutations = {
  [types.SET_USER_NAME](state, data) {
    state.name = data;
  },
};

const actions = {
  getUserInfo: ({ commit }) =>
    new Promise(resolve => {
      User.getUserInfo().then(data => {
        commit(types.SET_USER_NAME, data.name);
        resolve(true);
      });
    }),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
