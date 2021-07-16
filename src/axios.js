import axios from "axios";
const instanse = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instanse;
