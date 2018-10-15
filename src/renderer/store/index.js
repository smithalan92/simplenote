import Vue from 'vue';
import modules from './modules';

const Vuex = require('vuex');

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    store.hotUpdate({
      modules: require('./modules').default, // eslint-disable-line
    });
  });
}

export default store;
