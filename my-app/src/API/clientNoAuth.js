import {create} from "apisauce";

const apiClientNoAuth = (cancelToken) => create({
    baseURL: 'https://cae-bootstore.herokuapp.com',
    cancelToken
})

export default apiClientNoAuth