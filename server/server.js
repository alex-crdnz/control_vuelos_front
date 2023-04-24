const express = require('express')
const bodyParser = require('body-parser')
var cors = require("cors")
const port = 8000
const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let vuelosRegistrados = []

let users = [
    { id: 1, user: "pancho", password: "123456", email: "pancho@gmail.com", created: "2023-02-10T15:35:20.704Z", lastUpdate: null, status: true },
    { id: 2, user: "jose", password: "123456", email: "jose@gmail.com", created: "2023-02-11T16:37:22.704Z", lastUpdate: null, status: true },
    { id: 3, user: "pepe", password: "123456", email: "pepe@gmail.com", created: "2023-02-12T15:35:29.704Z", lastUpdate: null, status: true },
    { id: 4, user: "gato", password: "123456", email: "gato@gmail.com", created: "2023-02-13T15:36:30.754Z", lastUpdate: null, status: true },
    { id: 5, user: "perro", password: "123456", email: "perro@gmail.com", created: "2023-02-14T15:45:20.324Z", lastUpdate: null, status: true },
]
app.get('/', (req, res) => {
    res.send('Servidor listo')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let user = users.find(x => x.id === id)
    res.send(user);
})

app.get('/vuelos', (req, res) => {
    const vuelos = [
        { label: "ciudad 1", values: "1" },
        { label: "ciudad 2", values: "2" },
        { label: "ciudad 3", values: "3" },
        { label: "ciudad 4", values: "4" },
        { label: "ciudad 5", values: "5" }
    ]
    res.send(vuelos)
})

app.get('/vuelos/registrados', (req, res) => {
    res.send(vuelosRegistrados)
})

app.post('/vuelo', (req, res) => {
    const { origen, destino, nombre, apellido } = req.body;

    vuelosRegistrados.push({ origen, destino, nombre, apellido });
    res.send(vuelosRegistrados[vuelosRegistrados.length - 1]);

})

app.post('/user', (req, res) => {
    let user = req.body.user;
    let password = req.body.password;
    let email = req.body.email;
    let created = new Date();

    const maxId = users.reduce((max, u) => (u.id > max ? u.id : max), users[0].id);
    let id = maxId + 1;

    let newUser = { id, user, password, email, created }
    users.push(newUser)
    res.send(newUser)
})

app.put('/user/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let index = users.findIndex(x => x.id === id);
    console.log(id);

    if (index !== -1) {
        users[index].email = req.body.email;
        users[index].password = req.body.password;
        users[index].lastUpdate = new Date();
    }
    console.log(users[index])
    res.send(users[index])
})

app.delete('/user/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let index = users.findIndex(x => x.id === id);

    if (index) {
        users[index].status = false;
    }

    res.send(users[index])
})

app.get('/login/usuario/:user/password/:password', (req, res) => {
    let userName = req.params.user
    let password = req.params.password
    console.log(userName, password);
    let response = { status: false, msg: "Usuario o password incorrecto" }

    let exist = users.find(x => x.user === userName && x.password === password && x.status);

    if (exist) {
        response.status = true,
            response.msg = "Bienvenido"
    }
    res.send(response)
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)
})