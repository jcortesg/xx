const API = "http://138.197.82.101:4002/api";

function headers() {
  const authToken = localStorage.getItem('authToken');

  return {
    Accept: 'application/json',
    Authorization: authToken,
    'Content-Type': 'application/json'
  };
}


function parseResponse(response) {
  return response.json().then((json) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });
}

function queryString(params) {
  const query = Object.keys(params)
          .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
          .join('&');
  return `${query.length ? '?' : ''}${query}`;
}

export default {
  fetch(url, params = {}) {
    return fetch(`${API}${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers(),
    }).then(parseResponse);
  },
  post(url, data) {
    const body = JSON.stringify(data);
    return fetch(`${API}${url}`, {
      method: 'POST',
      headers: headers(),
      body,
    })
      .then(parseResponse);
  },
  patch(url, data) {
    const body = JSON.stringify(data);
    return fetch(`${API}${url}`, {
      method: 'PATCH',
      headers: headers(),
      body,
    })
      .then(parseResponse);
  },
  delete(url) {
    return fetch(`${API}${url}`, {
      method: 'DELETE',
      headers: headers(),
    })
      .then(parseResponse);
  }
}
