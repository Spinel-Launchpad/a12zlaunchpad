import ConfigureAxios from "./fetchApi";
// import { store } from "~/store/store";

const axiosConfig = new ConfigureAxios({
  configure: {
    method: "GET",
    // baseURL: "http://103.77.243.47:6868",
    baseURL: "https://a12zcapital.com/api-launchpad",
    timeout: 30000,
  },
  setAccessToken() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // const auth = store.getState().auth;
    return "";
  },
  setRefreshToken() {
    return "";
  },
});

const fetchAPI = axiosConfig.create();

axiosConfig.accessToken({
  setCondition(config) {
    return config?.url?.search(/^http/g) === -1;
  },
});

export default fetchAPI;
