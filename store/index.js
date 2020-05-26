import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            mode: 'dark',
            currentLocale: null,
        },
        mutations: {},
        getters: {
            getCurrentLocale: state => () => state.currentLocale,
          }
    })
}

export default createStore