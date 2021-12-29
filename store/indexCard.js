export const state = () => ({
    stores: [],
    current_page: 0,
    total_pages: 1,
    filter: {
        city: null,
        date: null,
        keyword: null,
        food_types: null,
        tags: null,
        total_people: null,
        limit: 5
    },

})

export const getters = {
    hasNextPage: (state) => {
        if (state.current_page >= state.total_pages || state.current_page == state.total_pages) {
            return false;
        }

        return true;
    },
    filter: (state) => {
        let f = {};
        Object.keys(state.filter).map((k, v) => {
            if (state.filter[k]) {
                f[k] = state.filter[k];
            }
        })
        return f;
    }
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
    setFilter(state, filter = null) {
        if (filter == null) {
            state.filter = {
                city: null,
                date: null,
                keyword: null,
                food_types: null,
                tags: null,
                total_people: null,
                limit: 5
            }
        } else {
            Object.keys(filter).map((k, v) => {
                if (state.filter[k] && filter[k]) {
                    state.filter[k] = v;
                }
            })
        }
        // state.filter = filter;
    },
}

export const actions = {
    async fetchData({ state, getters, commit }) {
        commit('setNextPage');
        let { data, pagination } = await this.$api.map.search(state.current_page, getters.filter);
        data.forEach(element => {
            commit('pushStores', element);
        });
        commit('setCurrentPage', pagination.current_page);
        commit('setTotalPages', pagination.total_pages);
    }
}