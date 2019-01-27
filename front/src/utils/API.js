import axios from 'axios';
const headers = {
    'Content-Type': 'application/json'
}
const burl = "http://localhost:8000"

export default {
    // get all data from database
    get_authors : function() {
        return axios.get(burl + '/author/get_authors',{},{
            headers: headers
        })
    },
    get_employees : function() {
        return axios.get(burl + '/employee/get_employees',{},{
            headers: headers
        })
    },
    get_publishers : function() {
        return axios.get(burl + '/publisher/get_publishers',{},{
            headers: headers
        })
    },
    get_stores : function() {
        return axios.get(burl + '/store/get_stores',{},{
            headers: headers
        })
    },
    get_titles : function() {
        return axios.get(burl + '/title/get_titles',{},{
            headers: headers
        })
    },
    // queries
    get_book_sales_per_author : function() {
        return axios.get(burl + '/title/get_book_sales_per_author',{},{
            headers: headers
        })
    },
    get_book_per_author : function() {
        return axios.get(burl + '/title/get_book_per_author',{},{
            headers: headers
        })
    },
    get_sales_per_book : function() {
        return axios.get(burl + '/title/get_sales_per_book',{},{
            headers: headers
        })
    },
    get_sales_per_publishers : function() {
        return axios.get(burl + '/title/get_sales_per_publisher',{},{
            headers: headers
        })
    },
    get_list_employees : function() {
        return axios.get(burl + '/title/get_list_employees',{},{
            headers: headers
        })
    },
    get_range_per_author : function() {
        return axios.get(burl + '/title/get_range_per_author',{},{
            headers: headers
        })
    },
    get_type_by_sales : function() {
        return axios.get(burl + '/title/get_type_by_sales',{},{
            headers: headers
        })
    },
}
