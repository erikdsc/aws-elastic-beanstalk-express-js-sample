const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('erik var her. erik var her igjen, og igjen'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
