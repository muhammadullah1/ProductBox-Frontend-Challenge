import axios from "axios";

// const token =  JSON.parse(localStorage.getItem("user"))?.token
export const apiClient = axios.create({
    baseURL: "http://localhost:3000/",
    //   headers:token && {
    //     'Authorization': `Bearer ${token}`
    //   },
});