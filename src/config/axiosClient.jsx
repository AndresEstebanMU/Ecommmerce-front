import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://back-labotika.onrender.com/"
})

export default axiosClient;




// baseURL: "http://localhost:8080"