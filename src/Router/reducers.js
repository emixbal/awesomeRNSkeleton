import type from './actions'

const main = (state = defaultState(), action) => {
    switch (action.type) {
        case type.RESET:
            return {
                ...defaultState(),
            };
        case type.CHANGE_LOADING:
            return {
                ...state,
                isLoading: action.value
            };
        case type.CHANGE_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.value
            };
        case type.CHANGE_SPLASH_SHOW:
            return {
                ...state,
                isSplashShow: action.value
            };
        default:
            return state
    }
}

const defaultState = () => ({
    isLoading: false,
    isSplashShow: true,
    accessToken: '',
})

export default main
