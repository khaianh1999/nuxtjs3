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
    }   
}