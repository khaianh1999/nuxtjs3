import axios, { AxiosInstance } from 'axios';
import repositories from '~/repositories';

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const BAD_REQUEST = 400;
const SERVER_ERROR = 500;
const OK = 200;

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const apiBaseUrl = config.public.apiBaseUrl;
    const access_token = useCookie('access_token') || '';
    const instance: AxiosInstance = axios.create({
        baseURL: apiBaseUrl,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
    instance.interceptors.request.use(function (config) {
        const accessToken :string = String(access_token);
        if (accessToken) {
            config.headers['Authorization'] = accessToken;
        }
        return config;
    });
    instance.interceptors.response.use(
        (response): any => {
            return {
                success: true,
                data: response.data,
                status: response.status,
            };
        },
        (error): any => {
            return {
                success: false,
                data: null,
                status: error.status,
            };            
        }
    );
    const mainRepository = repositories(instance);
    return {
      provide: {
        api: mainRepository,
      }
    }
})