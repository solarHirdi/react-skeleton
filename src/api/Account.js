import Rest from '../utils/Rest.js';

export default{
    /**
     * Signin
     * @param login
     * @param password
     * @param remember
     * @returns {Promise}
     */
    login: (login, password, remember = false) => {
        return new Promise(function(resolve, reject){
        	VK.Auth.login(res => {
				if (res.session) {
					resolve(res);
				}else {
					reject('error');
				}
			}, 4);
        });
    },

    /**
     * Signout
     * @returns {Promise}
     */
    logout: () => {
        return Rest.delete(`/api/auth?full=false`);
    },

    /**
     * Authorization
     * @returns {Promise}
     */
    account: () => {
        return Rest.get(`/api/account`);
    },
}
