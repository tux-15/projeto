// import axios from "axios";
const axios = require('axios').default;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(username, password) {
        return axios.post(API_URL + "signin", {
            username,
            password,
        },
            {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:8080',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                // console.log(response.data)
                return response.data;
            })
    };

    logout() {
        localStorage.removeItem("user");
    };

    getCurrentUser() {
        try{
            return JSON.parse(localStorage.getItem('user'))
        }
        catch(e){
            return null;
        }
    };
}

export default new AuthService();

// const register = (username, password) => {
//     return axios.post(API_URL + "signup", {
//         username,
//         email,
//         password,
//     })
// };
