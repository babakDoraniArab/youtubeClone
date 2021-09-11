import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAU-VDyU5uGIEwNOfN21zFuQOoKGxYkZvQ",
  },
});

export default request;
