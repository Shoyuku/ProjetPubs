const Author = require('../../schema/schemaAuthor.js');

function get_authors(req, res) {
    Author.find(function(err, authors){
        if(err){
            console.log(err)
        }
        else{
            res.json(authors)
        }
    })
}

//On exporte nos deux fonctions

exports.get_authors = get_authors;