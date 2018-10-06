export const reducer = (
    state = {
        isFetching: false,
        isAuth: false,
        contextUser: null,
        token: null,
        error: ''
    },
    action
) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                isFetching: true
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                isAuth: true,
                contextUser: action.data.payload.user,
                token: action.data.payload.token,
                error: ''
            };
        case 'USER_LOGIN_ERROR':
            return {
                ...state,
                isFetching: false,
                error: action.data
            };
        default:
            return state;
    }
};
