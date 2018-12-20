const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const connection = require(`./conf`);
const PORT_SERVER = 59390;

app.use(bodyparser.urlencoded({ extended: false}));
// Etre capable de lire les données envoyées en json *en plus* de la route
app.use(bodyparser.json());
//pouvoir recuperer la réponse de serveur dans le navigateur de mon client
app.use(cors());

app.post(`/utilisateur`, (req, res)=>{
    const formData = req.body;
    console.log(`called POST '/utilisateur : I'll liste my utilisateur`);
    connection.query(`INSERT INTO utilisateur set?`,formData, (err, results) =>{
        if(err){
            res.status(500)
                .send(`not found ${err}`);
        }else{
            res.send(results);
        }
    });
});

app.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
  });
  
  app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Not found');
  });
  
app.listen(PORT_SERVER,(err)=>{
    if(err){
        throw new Error("Something bad happened...");
    }
    console.log(`server is listening on ${PORT_SERVER}`);
});