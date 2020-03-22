const express = require('express');
const faker = require('faker');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
const port = 3000;

app.get('/', (req, res) => { // this is the first route
    res.sendFile(path.join(__dirname + '/public/index.html')); //endpoint
});
app.get('/name', (req, res) => {
    const randomName = faker.name.findName();
    res.json({ name: randomName });
    //res.status(422).send({ message: 'This is an error sent by the server!!!' }); // this message error is sent back by the server
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

