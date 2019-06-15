const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    // res.send('Hola Mundo');

    res.render('home', {
        nombre: 'fernando',
    });
});

app.get('/about', (req, res) => {
    // res.send('Hola Mundo');

    res.render('about');
});

app.get('/pruebafrbs', (req, res) => {
    // res.send('Hola Mundo');

    res.send({
        nombre: "Antony Romero",
        vehiculo: "ABC-496"
    });
});

/* app.get('/data', (req, res) => {
    res.send('Hola Mundo');
}); */

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});