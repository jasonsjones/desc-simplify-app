export const reducer = (
    state = {
        isFetching: false,
        isAuth: !!window.localStorage.getItem('userToken'),
        contextUser: JSON.parse(window.localStorage.getItem('contextUser')),
        token: window.localStorage.getItem('userToken'),
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
        case 'USER_LOGOUT_REQUEST':
            console.log('handling user logout request...');
            return {
                ...state,
                isFetching: true
            };
        case 'USER_LOGOUT_SUCCESS':
            console.log('handling user logout success...');
            return {
                ...state,
                isAuth: false,
                contextUser: null,
                isFetching: false,
                token: '',
                error: ''
            };
        default:
            return state;
    }
};
