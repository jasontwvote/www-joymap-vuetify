export const state = () => ({
    indexCarousel: false,
})

export const getters = {
}

export const mutations = {
    toggle(state, {key , loading}) {
        state[key] = loading;
    }
}

export const actions = {

}