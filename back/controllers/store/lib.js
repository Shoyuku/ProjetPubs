const Store = require('../../schema/schemaStore.js');

function get_stores(req, res) {
    Store.find(function(err, stores){
        if(err){
            console.log(err)
        }
        else{
            res.json(stores)
        }
    })
}

//On exporte nos deux fonctions

exports.get_stores = get_stores;