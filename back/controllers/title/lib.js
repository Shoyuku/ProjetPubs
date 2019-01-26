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

function get_sales_per_book(req, res){
    opUnwind = {$unwind : "$Sales"};
    opLookUp =  
        { $lookup:
            {
                from: 'stores',
                localField: 'Sales.stor_id',
                foreignField: 'stor_id',
                as: 'store_details'
            }
        };
    opProject = {$project: {"title":1, "store_details.stor_id":1,"store_details.stor_name":1, "Sales.qty":1}};
    Title.aggregate([opUnwind,opLookUp,opProject], function(err, result){
        console.log(result);
        res.json(result)
    })
}

function get_sales_per_publisher(req, res){
    opLookUp =  
    { $lookup:
    {
        from: 'publishers',
        localField: 'pub_id',
        foreignField: 'pub_id',
        as: 'publisher'
    }
    };
    opUnwind = {$unwind : "$Sales"};
    keyGroup = {"pub_city" : "$publisher.city", "pub_name":"$publisher.pub_name"};
    opGroup = {$group : {_id: keyGroup, "tot":{$sum:"$Sales.qty"}} };
    Title.aggregate([opLookUp, opUnwind, opGroup], function(err, result){
        console.log(result);
        res.json(result)
    });

}

function get_range_per_author(req, res){
    var o = {};
    self = this;
    o.map = function () {
        price = this.price;
        if(this.Titleauthor)
            for(i=0; i<this.Titleauthor.length;i++){
                author = this.Titleauthor[i];
                emit({"author": author, "title": this.title}, {"min" : price, "max" : price });
            }
        };
        
    o.reduce = function (key, values) {
        min = values[0].min;
        max = values[0].max;
        for (i=0; i< values.length ; i++){
            if(values[i].min < min) min = values[i].min;
            if(values[i].max > max) min = values[i].max;
        }
        return {"min":min, "max":max};
    };
    o.out = {inline:1};
    o.verbose = true;

    Title.mapReduce(o, function(err, result){
        res.json(result)
      });
    // Missing the aggregate with the lookup operation, for getting the information about the author
}

exports.get_titles = get_titles;
exports.get_sales_per_book = get_sales_per_book;
exports.get_sales_per_publisher = get_sales_per_publisher;
exports.get_range_per_author = get_range_per_author;