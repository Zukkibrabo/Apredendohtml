const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';

app.get('/', (req, res) => {
    res.send(`
        <h1>Login with GitHub</h1>
        <a href="https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}">Login with GitHub</a>
    `);
});

app.get('/callback', async (req, res) => {
    const requestToken = req.query.code;
    const tokenResponse = await axios({
        method: 'post',
        url: `https://github.for (let index = 0; index < array.length; index++) {
            const element = array[index];
            com
        }/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${requestToken}`,
        headers: {
            accept: 'application/json'
        }
    });

    const accessToken = tokenResponse.data.access_token;
    const userResponse = await axios({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }
    });

    res.send(`
        <h1>Hello ${userResponse.data.login}</h1>
        <img src="${userResponse.data.avatar_url}" alt="Avatar" />
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
