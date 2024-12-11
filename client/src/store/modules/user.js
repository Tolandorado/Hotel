import { loginUser } from "@/api/user"

const state = {
    user: null
}

//getters 
const getters = {
    getUser(state) {
        return state.user
    }
}

// actions
const actions = {
    async login({ commit }, { name, password }) {
        const response = await loginUser(name, password);

        if (response.status === 201 ) {
            return error.value = `Пользователя с именем ${response.data.name} не существует, либо не верный пароль`
          }
        console.log("name local REF: ", name)
        console.log("name local REF: ", password)
        console.log("ACTION user", response)
        console.log("DATA response", (await response).data.name)
        commit('setUser', (await response).data)
    }
}

//mutations
const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}