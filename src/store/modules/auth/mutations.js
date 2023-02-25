export default {
    SET_USER (state, user) {
        console.log('Setting user:', user);
        state.user = user
    },
    CLEAR_USER (state) {
        state.user = null
    }
};