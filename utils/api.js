const api = "https://droptheball.herokuapp.com"

// Generate a unique token for storing your bookshelf data on the backend server.
/*let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)*/

const headers = {
    'Accept': 'application/json'
}

export const login = (username, password) =>
    fetch(`${api}/login`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
        })