// Use fetch() for API calls
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en

let API_URL = 'http://api.example.com';

function json(response) {
  return response.json();
}

let API = {
  login(email, password) {
    return fetch(`${API_URL}/login`, {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(json);
  }
}

module.exports = API;