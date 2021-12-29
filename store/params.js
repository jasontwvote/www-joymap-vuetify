export const state = () => ({
    cities: [],
    tags: [],
    food_types: [],
})

export const getters = {

}

export const mutations = {
    setCities(state, cities = []) {
        state.cities = cities;
    },
    setTags(state, tags = []) {
        state.tags = tags;
    },
    setFoodTypes(state, food_types = []) {
        state.food_types = food_types;
    },
}

export const actions = {
    async fetchData({ commit }) {
        let { cities, tags, food_types } = await this.$api.map.getSearchParams();
        commit('setCities', cities);
        commit('setTags', tags);
        commit('setFoodTypes', food_types);
    }
}