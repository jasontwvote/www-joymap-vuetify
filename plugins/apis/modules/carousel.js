export default axios => ({
    async getCarousel() {
        return await axios.get('/carousel');
    }
});