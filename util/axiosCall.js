import axios from 'axios';

export const callGet = (url, data) => {
    console.log(url)
    return axios.get(url, data)
}

export const callPost = (url, data) => (
    axios.post(url, data)
)


export const callDelete = (url, data) => (
    axios.delete(url, data)
)

export const callPut = (url, data) => (
    axios.put(url, data)
)