const inputChangeAction = (target, value) => dispatch => {

    dispatch({
        type: target,
        payload: value
    });

}
export default inputChangeAction;