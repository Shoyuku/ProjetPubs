const Publisher = require('../../schema/schemaPublisher.js');

function get_publishers(req, res) {
    Publisher.find(function(err, publishers){
        if(err){
            console.log(err)
        }
        else{
            res.json(publishers)
        }
    })
}

//On exporte nos deux fonctions

exports.get_publishers = get_publishers;