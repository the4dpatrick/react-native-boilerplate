let axios = require('axios');

let API_URL = 'http://api.example.com';

let API = {
  login(email, password) {
    return axios.post(`${API_URL}/login`), {
      email: email,
      password: password
    });
  }
}

module.exports = API;