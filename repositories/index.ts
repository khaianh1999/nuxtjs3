import { AxiosInstance } from "axios";

export default (api: AxiosInstance) => {
    return {
        getAllArticles(params: any = {}) {
            return api.get('/articles', {
                params,
            });
        },
        login(params: any = {}) {
            return api.post('/users/login, params');
        },
        getAllTags(params: any = {}) {
            return api.get('/tags', {
                params,
            });
        },

        getListUser(params: any = {}) {
            return api.get(`/v2/users`, {
                params,
            });
        },
        getUserDetail(params: any = {}, uId: Number) {
            return api.get(`/v2/users/${uId}`, {
                params,
            });
        },
        createUser(params: any = {}) {
            return api.post('/v2/users', params);
        },
        updateUser(params: any = {}, uId: Number) {
            return api.put(`/v2/users/${uId}`, params);
        },
        deleteUser(params: any = {}, uId: Number) {
            return api.delete(`/v2/users/${uId}`, params);
        },

    }   
}