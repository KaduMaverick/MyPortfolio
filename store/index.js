import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            mode: 'dark'
        },
        mutations: {},
        getters: {}
    })
}

export default createStore