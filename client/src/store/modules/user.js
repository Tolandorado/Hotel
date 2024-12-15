import { loginUser } from "@/api/user"

const state = {
    user: null,
    isAuth: false
}

//getters 
const getters = {
    getUser(state) {
        return state.user
    },
    isAuth(state) {
        return state.isAuth;
    },
}

// actions
const actions = {
    async login({ commit }, { name, password }) {
        const response = await loginUser(name, password);
        console.log("ACTION user", response)
        console.log("DATA response", (await response).data.name)
        if (response.status === 200) {
            commit('setUser', (await response).data)
            commit('setAuth', true)
        }
        console.log(state.isAuth)
    },
    logout({ commit }) {
        commit('resetUser')
    }
}

//mutations
const mutations = {
    setUser(state, user) {
        state.user = user
    },
    resetUser(state) {
        state.user = null
    },
    setAuth(state, payload) {
        state.isAuth = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}