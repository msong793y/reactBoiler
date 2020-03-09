import * as Call from "../util/axiosCall"

export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";



export const receiveData = (data)=>({
    type: RECEIVE_RESPONSE,
    data
})


export const get = (url, data) =>(dispatch)=>{
    console.log(url)
    return Call.callGet(url,data)
    .then(data=> {
        console.log(data)
        return dispatch(receiveData(data))}
)}

export const post = (url, data) => (dispatch) => (
    Call.callPost(url, data).then(data => dispatch(receiveData(data)))
)

export const destroy = (url, data) => (dispatch) => (
    Call.callDelete(url, data).then(data => dispatch(receiveData(data)))
)

export const edit = (url, data) => (dispatch) => (
    Call.callPut(url, data).then(data => dispatch(receiveData(data)))
)