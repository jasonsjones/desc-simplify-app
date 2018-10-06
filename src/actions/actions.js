export const userLogin = creds => {
    return dispatch => {
        dispatch({ type: 'USER_LOGIN_REQUEST' });
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(creds)
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                } else if (response.status === 401) {
                    return Promise.reject({ message: 'Unauthorized user' });
                }
            })
            .then(data => {
                console.log(data);
                if (data) {
                    dispatch({ type: 'USER_LOGIN_SUCCESS', data });
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: 'USER_LOGIN_ERROR', data: err.message });
            });
    };
};
