//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

//Connexion à la base de donnée
mongoose.connect('mongodb://localhost:27017/pubs', {useNewUrlParser: true }).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});
mongoose.set('useCreateIndex', true)

//On définit notre objet express nommé app
const app = express();

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//On définit la route Hello
app.get('/hello',function(req,res){
    res.json(__dirname)
})

//Définition du routeur
var router = express.Router();

app.use('/author', router);
require(__dirname + '/controllers/authorController')(router);

app.use('/employee', router);
require(__dirname + '/controllers/employeeController')(router);

app.use('/publisher', router);
require(__dirname + '/controllers/publisherController')(router);

app.use('/store', router);
require(__dirname + '/controllers/storeController')(router);

app.use('/title', router);
require(__dirname + '/controllers/titleController')(router);

/*const Author = require('./schema/schemaAuthor.js');
app.use('/author',router);
router.route('/get_authors').get(function(req, res) {
    Author.find(function(err, author) {
        if (err) {
            console.log(err);
        } else {
            res.json(author);
        }
    });
});*/

//Définition et mise en place du port d'écoute
var port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
