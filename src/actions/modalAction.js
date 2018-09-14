export const showModalAction = user => dispatch => {
    dispatch({
        type: 'show modal',
        payload: user
    })
};

export const closeModalAction = event => dispatch => {
    const close = document.getElementById('close');
    if (event.target === event.currentTarget || event.target === close) {
        dispatch({
            type: 'close modal',
            payload: {}
        });
    }
};

