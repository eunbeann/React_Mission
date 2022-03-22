import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "870285eb9b0837f84db373ba373907b7",
    language: "ko-KR",
  },
});

export default instance;
