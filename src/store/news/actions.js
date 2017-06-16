import News from '../../api/News.js';

export const types = {
    GET_NEWS_REQUEST: Symbol('GET_NEWS_REQUEST'),
	GET_NEWS_SUCCESS: Symbol('GET_NEWS_SUCCESS'),
	GET_NEWS_FAIL: Symbol('GET_NEWS_FAIL')
};

export default {

    getNews: () => {
        return dispatch => {
            dispatch({type: types.GET_NEWS_REQUEST});
            News.getNews()
                .then((res) => {
                    dispatch({type: types.GET_NEWS_SUCCESS, res});
                })
                .catch((res) => {
                    let error = 'Что-то пошло не так';
                    dispatch({type: types.GET_NEWS_FAIL, error});
                });
        }
    }

};
