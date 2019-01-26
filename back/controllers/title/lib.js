const Title = require('../../schema/schemaTitle.js');

function get_titles(req, res) {
    Title.find(function(err, titles){
        if(err){
            console.log(err)
        }
        else{
            res.status(200).json(titles)
        }
    })
}

//On exporte nos deux fonctions

exports.get_titles = get_titles;