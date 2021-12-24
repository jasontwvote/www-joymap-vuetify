export const state = () => ({
    show: false,
})

export const getters = {
}

export const mutations = {
    toggle(state, show = null) {
        if (show === null) {
            state.show = !state.show
        } else {
            state.show = show
        }
    }
}

export const actions = {
    toggle({ commit }, show = null) {
        commit('toggle', show)
    }
}