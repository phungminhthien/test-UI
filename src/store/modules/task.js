import * as types from "@/store/mutation-types";
import Task from "@/api/task";

const state = {
  tasks: [],
  news: [],
  count: {},
};

const getters = {
  news: state => state.news,
  tasks: state => state.tasks,
  count: state => state.count,
};

const mutations = {
  [types.SET_NEWS](state, data) {
    state.news = data;
  },
  [types.SET_TASKS](state, data) {
    state.tasks = data;
  },
  [types.SET_TYPE_TASKS](state) {
    const count = {};
    state.tasks.forEach(el => {
      if (!count[el.status]) {
        count[el.status] = 1;
      } else {
        count[el.status] += 1;
      }
    });
    state.count = count;
  },
  [types.UPDATE_TASK](state, data) {
    const idx = state.tasks.findIndex(el => el.id === data.id);
    if (idx > -1) {
      state.tasks[idx] = data;
    }
  },
  [types.REMOVE_TASK](state, data) {
    const idx = state.tasks.findIndex(el => el.id === data.id);
    if (idx > -1) {
      state.tasks.splice(idx, 1);
    }
  },
  [types.ADD_TASK](state, data) {
    state.tasks.unshift(data);
  },
};

const actions = {
  getNews: ({ commit }) =>
    new Promise(resolve => {
      Task.getNews().then(data => {
        commit(types.SET_NEWS, data);
        resolve(true);
      });
    }),

  getTasks: ({ commit }) =>
    new Promise(resolve => {
      Task.getTasks().then(data => {
        commit(types.SET_TASKS, data);
        commit(types.SET_TYPE_TASKS);
        resolve(true);
      });
    }),
  updateTask({ commit }, data) {
    commit(types.UPDATE_TASK, data);
    commit(types.SET_TYPE_TASKS);
  },
  removeTask({ commit }, data) {
    commit(types.REMOVE_TASK, data);
    commit(types.SET_TYPE_TASKS);
  },
  addTask({ commit }, data) {
    commit(types.ADD_TASK, data);
    commit(types.SET_TYPE_TASKS);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};