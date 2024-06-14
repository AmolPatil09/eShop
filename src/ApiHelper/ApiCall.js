import { BASE_URL } from './ApiConfig';

 import axios from 'axios'
 export const getData=(url)=>{
    console.log(url);
    return axios.get(url)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err;
    })
 }

 export const postData=(url,data)=>{
    return axios.post(BASE_URL+url,data)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err;
    })
 }
 export const postDataForCart=(url,data)=>{
    console.log(url);
    console.log(data);
    return axios.post(url,data)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        return err;
    })
 }