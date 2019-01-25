import axios from 'axios';
const headers = {
    'Content-Type': 'application/json'
}
const burl = "http://localhost:8000"

export default {
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
    signup : function(send){
        return axios.post(burl + '/user/signup',send,{headers: headers})
    },
    
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },
    logout : function() {
        localStorage.clear();
    }
}
