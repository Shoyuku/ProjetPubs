const Title = require('../../schema/schemaTitle.js');

function get_titles(req, res) { // get all titles
    Title.find(function(err, titles){
        if(err){
            console.log(err)
        }
        else{
            res.status(200).json(titles)
        }
    })
}

function get_book_sales_per_author(req, res){ // 1 get the author whom its books has been sold the most by year
    
    opUnwind = {$unwind : "$Titleauthor"};
    opLookUp =  
        { $lookup:
            {
                from: 'authors',
                localField: 'Titleauthor.au_id',
                foreignField: 'au_id',
                as: 'author'
            }
        };
    opProject = {$project: {"title":1, "type":1,"price":1, "notes":1, "ytd_sales":1,"author":1}};
    opSort = {$sort: {"ytd_sales":-1}}

    Title.aggregate([opUnwind,opLookUp,opProject], function(err, result){
        res.status(200).json(result)
    });  
}

function get_book_per_author(req, res){ // 2 get all books by author
    
    opUnwind = {$unwind : "$Titleauthor"};
    opLookUp =  
        { $lookup:
            {
                from: 'authors',
                localField: 'Titleauthor.au_id',
                foreignField: 'au_id',
                as: 'author'
            }
        };
    opProject = {$project: {"title":1, "type":1,"price":1, "notes":1, "author":1}};

    Title.aggregate([opUnwind,opLookUp,opProject], function(err, titles){
        res.status(200).json(titles)
    })
    
}

function get_sales_per_book(req, res){ // 3 get the number of book sales by store
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
        res.status(200).json(result)
    })
}

function get_sales_per_publisher(req, res){ // 4 get the number of book sales by publishers
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
        res.status(200).json(result)
    });

}

function get_range_per_author(req, res){ // 2 get the book price range for each author by stores
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
        if(err){
            console.log(err)
        }
        res.status(200).json(result)
      });
    // Missing the aggregate with the lookup operation, for getting the information about the author
}

function get_list_employees(req, res){
    opProject1 = {$project: {"title":1, "title_id":1, "pub_id":1}};

    opLookUp1 = 
        { $lookup:
        {
            from: 'publishers',
            localField: 'pub_id',
            foreignField: 'pub_id',
            as: 'publisher_info'
        }
    };

    opLookUp2 =  
        { $lookup:
        {
            from: 'employees',
            localField: 'pub_id',
            foreignField: 'pub_id',
            as: 'list_employees'
        }
    };
        
    opProject2 = {$project: {"title":1, "title_id":1, "publisher_info.pub_name":1, 
        "list_employees.emp_id":1, 
        "list_employees.fname":1, 
        "list_employees.lname":1,
        "list_employees.Jobs.job_id":1, 
        "list_employees.Jobs.job_desc":1}};
        
    Title.aggregate([opProject1, opLookUp1, opLookUp2, opProject2], function(err, result){
        res.status(200).json(result)
    });
}

exports.get_titles = get_titles;
exports.get_book_per_author = get_book_per_author;
exports.get_book_sales_per_author = get_book_sales_per_author;
exports.get_sales_per_book = get_sales_per_book;
exports.get_sales_per_publisher = get_sales_per_publisher;
exports.get_range_per_author = get_range_per_author;
exports.get_list_employees = get_list_employees;