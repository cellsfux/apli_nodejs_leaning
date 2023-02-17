//import
const express      = require('express')
const bodyParser   = require('body-parser')
const bdd          = require('./core/Db')
const Controller = require('./Controllers/Controler').router;

//Instatiation du serverr
const App = express();


//Body parser configuration
App.use(bodyParser.urlencoded({extended: true}));
App.use(bodyParser.json())



//Route de docummentation
App.get('/', (req, res)=>{
    
    res.send('<h1>This is documentation of Cellsflux api</h1>')
} );

App.use('/', Controller);







//On demare le server
App.listen(2000, ()=>{
    console.log('server runig at http://localhost:2000')
})