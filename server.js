const express = require('express');
const { response } = require('express');
const app = express()

const hbs = require('hbs');
// no es necesario importa el modulo
require('./hbs/helpers');

//Para agarrar el puerto del servidor, si el mae no existe toma el 3000
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS renderizado
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hello World')

    /* let salida = {
         nombre: 'Esteban',
         edad: 28,
         url: req.url
     };*/

    //res.send(salida);
    res.render('home', {
        nombre: 'Esteban',
        anio: new Date().getFullYear()

    });

});


app.get('/about', (req, res) => {

    res.render('about', { anio: new Date().getFullYear() });

});



/*app.get('/data', (req, res) => {
    res.send('Hello data')

});*/
//no se sabe cual puerto subir
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});