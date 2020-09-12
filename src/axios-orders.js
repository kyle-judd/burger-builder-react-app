import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-38610.firebaseio.com/",
});

export default instance;
