import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://ecommerce-backend-jv3a.onrender.com/"
})

export default axiosClient;




// baseURL: "http://localhost:8080"