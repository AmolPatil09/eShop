import React, { useEffect, useState } from 'react'
import {getData} from '../ApiHelper/ApiCall'
import Loading from './Loading';
import ProductCard from './ProductCard';
export default function ProductList() {
    const [data,setData]=useState([]);
    const [isLoading,setIsLoding]=useState(true);
    const [errorMessage,setErrorMessage]=useState('')
    useEffect(()=>{
        getData('https://dummyjson.com/products')
        .then((res)=>{
          setData(res.products)
          console.log(res);
        })
        .catch(()=>{
         setErrorMessage('Server Not Responce')
        })
        .finally(()=>{
            setIsLoding(false)
        })
        },[])
  return (
    <div>
         {
            isLoading?<Loading/>:<div className='d-flex flex-wrap container justify-content-evenly align-item-center'>{data.map((vender,index)=>{
          return  <ProductCard key={index} vender={vender}/>
          })}</div>

        }
    </div>
  )
}
