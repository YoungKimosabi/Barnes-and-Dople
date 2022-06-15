import apiClientNoAuth from './clientNoAuth';
import apiClientTokenAuth from './clientTokenAuth';
import apiClientBasicAuth from './clientBasicAuth';

const endpoint = '/login';

const endpoint2 ='/user'; 


const post = async (data, cancelToken) =>{
    let error;
    let user; 

    const response = await apiClientNoAuth(cancelToken).post(endpoint2, data);
    if (response.ok){
        user = response.data
    }else{
        error = "An Unexpected Error has Occured. Please Try again later."
    }
    return {
        error,
        user
    }
}


//post first 


const get = async (email, password, cancelToken) =>{
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, cancelToken).get(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error = "Invalid Email/Password Combo"
    }else{
        error = "An Unexpected Error has Occured. Please Try again later."
    }
    return {
        error,
        user
    }
}

const put = async (token, cancelToken) =>{
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint)
    return response.ok 
}

const del = async (token, cancelToken) =>{
    const response = await apiClientTokenAuth(token, cancelToken).del(endpoint)
    return response.ok 
}

export default {
    get,
    post,
    put,
    del
}