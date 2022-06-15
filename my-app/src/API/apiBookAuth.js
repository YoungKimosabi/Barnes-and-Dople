import apiClientNoAuth from './clientNoAuth';

const endpoint = "/book";

const getBooks = async(cancelToken) =>{
    let error;
    let books;

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok){
        books=response.data.books
    }else{
        error="An Unexpected Error has Occured. Please try again later"
    }
    return{
        error, 
        books
    }
}

const getBook = async(id, cancelToken) =>{
    let error;
    let book;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+'/'+id)
    if (response.ok){
        book=response.data
    }else{
        error="An Unexpected Error has Occured. Please try again later"
    }
    return{
        error, 
        book
    }
}

export default {
    getBooks,
    getBook
}