import APIInstance from './APIInstance'
import Auth from '../utils/auth'
import { API_BASE_URL,API_ORIGIN_URL } from '../config/config';

const axios = APIInstance.getApiInstance();
const BASE_URL = API_BASE_URL
const ORIGIN_URL = API_ORIGIN_URL

class API {
    /**
     * Make a POST secure request for apis endpoint for new api
     *
     * @param {string} endPoint
     */
    static async postRequest(endPoint, data) {
        const config = {
            headers: {
                Authorization: 'Bearer ' + Auth.getToken(),
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Request-Origin':ORIGIN_URL,
            },
        }
        return axios.post(BASE_URL + endPoint, data, config)
    }

    static putRequest(endPoint, data) {
        const config = {
            headers: {
                Authorization: 'Bearer ' + Auth.getToken(),
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Request-Origin': ORIGIN_URL,
            },
        }

        return axios.put(BASE_URL + endPoint, data, config)
    }

    static deleteRequests(endPoint) {
        const config = {
            headers: {
                Authorization: 'Bearer ' + Auth.getToken(),
                Accept: 'application/json',
                'X-Request-Origin': ORIGIN_URL
            },
        }

        return axios.delete(this.URLS.BASE_API + endPoint, config)
    }
}

export default API
