export const state = () => ({
    stores: [],
    current_page: 0,
    total_pages: 1,
})

export const getters = {
    hasNextPage: (state) => {
        if (state.current_page >= state.total_pages || state.current_page == state.total_pages) {
            return false;
        }

        return true;
    },
}

export const mutations = {
    setStores(state, stores = []) {
        state.stores = stores;
    },
    pushStores(state, store) {
        state.stores.push(store);
    },
    setNextPage(state) {
        state.current_page++;
    },
    setCurrentPage(state, page = 0) {
        state.current_page = page;
    },
    setTotalPages(state, page = 0) {
        state.total_pages = page;
    },
}

export const actions = {
    async fetchData({ state, commit }) {
        commit('setNextPage');

        let { data, pagination } = await this.$api.map.search(state.current_page, {
            limit: 10,
        });
        data.forEach(element => {
            commit('pushStores', element);
        });

        commit('setCurrentPage', pagination.current_page);
        commit('setTotalPages', pagination.total_pages);
    }
}