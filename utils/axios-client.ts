import axios from "axios";

const instance = axios.create({
  baseURL: "https://korma-jaya-api.shopnstore.my.id",
  timeout: 60000,
});

instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization =
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.3_W4k1P3-CdtWRMFk7dJb4IUtGoCRmbPlIBN6Ssx7VI";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
