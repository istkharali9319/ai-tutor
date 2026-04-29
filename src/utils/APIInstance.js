import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL,API_ORIGIN_URL } from '../config/config'
import Auth from "./auth";

class APIInstance {
  static apiInstance = null;

  static getApiInstance() {
    if (!this.apiInstance) {
      this.apiInstance = axios.create({
        baseURL: API_BASE_URLL, // default base
        timeout: 10000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Request-Origin": API_ORIGIN_URL,
        },
      });
      // Add a request interceptor to inject token dynamically
      this.apiInstance.interceptors.request.use((config) => {
        const token = Auth.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });

      // 🔑 Add a response interceptor for global error handling
      this.apiInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.log("ERROR",error.response)
          if (error.response?.status === 401) {
            console.warn("Unauthorized: 401 detected");

            // Example: clear token + redirect
            Auth.deauthenticateUser()
            window.location.href = "/"; // Or dispatch global modal
          }

          return Promise.reject(error);
        }
      );
    }
    
    return this.apiInstance;
  }
}

export default APIInstance;

