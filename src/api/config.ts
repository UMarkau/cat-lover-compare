import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

instance.defaults.headers["x-api-key"] =
  "live_9jfcVlTU40mLuyA0c3ZabVc9905IB0YF6QARcW6H6FdSgTxJVp6tr5p6uPnqY7A0";

export default instance;
