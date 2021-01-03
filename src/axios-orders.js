import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-builder-c770b.firebaseio.com/",
});

export default instance;
