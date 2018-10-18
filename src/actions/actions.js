export const userLogin = creds => {
    return dispatch => {
        dispatch({ type: 'USER_LOGIN_REQUEST' });
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(creds)
        })
            .then(response => {
                if (response.ok && response.status === 200) {
                    return response.json();
                } else if (response.status === 401) {
                    return Promise.reject({ message: 'Unauthorized user' });
                }
            })
            .then(data => {
                if (data) {
                    window.localStorage.setItem('contextUser', JSON.stringify(data.payload.user));
                    window.localStorage.setItem('userToken', data.payload.token);
                    dispatch({ type: 'USER_LOGIN_SUCCESS', data });
                }
            })
            .catch(err => dispatch({ type: 'USER_LOGIN_ERROR', data: err.message }));
    };
};

export const userLogout = () => {
    return dispatch => {
        dispatch({ type: 'USER_LOGOUT_REQUEST' });
        fetch('http://localhost:3000/api/auth/logout')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.localStorage.removeItem('contextUser');
                    window.localStorage.removeItem('userToken');
                    dispatch({ type: 'USER_LOGOUT_SUCCESS' });
                }
            });
    };
};
