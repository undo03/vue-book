/**
 * Created by 35107 on 2017/6/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  collects: JSON.parse(localStorage.getItem('collects')) || []
};

export default new Vuex.Store({
  state,
  getters,
  mutations
})
