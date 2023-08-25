import axios from "axios";

const API_BASE_URL = "http://localhost:3001/";

export const publicRequest = axios.create({
  baseURL: API_BASE_URL,
});

export const apiService = {
  public: {
    get: (url, config) => publicRequest.get(url, config),
    post: (url, data, config) => publicRequest.post(url, data, config),
    patch: (url, data, config) => publicRequest.patch(url, data, config),
    delete: (url, config) => publicRequest.delete(url, config),
  },
};
