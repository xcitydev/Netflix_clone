/** @format */

import axios from "axios";
//make request to database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
