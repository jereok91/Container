
const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();
const rootBuild = path.join(__dirname, 'dist');


//cord
app.options("*", cors());
app.use(cors());


// //Middleware 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) 


// Db connexion 
// const { mongoose } = require('./server/dataserver')

app.set('port', process.env.PORT || 3030);
const HOST = process.env.HOST || "localhost";

// archivos estaticos cargados
app.use(express.static(rootBuild));
//Rutas
app.get("/", (req, res) => {
     res.sendFile('index.html', {root: rootBuild } );
})
app.get("*", (req, res) => {
     res.sendFile('index.html', {root: rootBuild } );
})

// Ejecucion y eleccion de puerto y server ponint 
app.listen(app.get('port'),HOST, ()=>{
    console.log(`estamos copnectados al http://localhost:${app.get('port')}`);
});