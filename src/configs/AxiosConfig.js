/** @format */

import axios from "axios";

const username = "Administrator";
const password = "aquatic";
const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Basic ${encodedCredentials}`,
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    // làm mới token
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default instance;
