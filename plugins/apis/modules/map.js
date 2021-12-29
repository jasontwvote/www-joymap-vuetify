export default axios => ({
    async search(page, params) {
        return await axios.post(`/map/search?page=${page}`, params);
    },
    async getSearchParams(){
        return await axios.get(`/map/search/params`);
    }
});