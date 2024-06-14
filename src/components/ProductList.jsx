import React, { useEffect, useState } from 'react'
import {getData, postDataForCart} from '../ApiHelper/ApiCall'
import Loading from './Loading';
import ProductCard from './ProductCard';
export default function ProductList({search}) {
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
        const addToCart=(data)=>{
          const cartData={
              id:data.id,
              images:data.images[0],
              title:data.title,
              price:Math.round(data.price-((data.price/100)*data.discountPercentage))
   
           }
           postDataForCart('http://localhost:5000/cart',cartData)
           .then((res)=>{
               console.log(res);
               
             })
             .catch(()=>{
              setErrorMessage('Server Not Responce')
             })
           
       }
  return (
    <div>
         {
            isLoading?<Loading/>:search?<div className='d-flex flex-wrap container justify-content-evenly align-item-center'>{data.filter((prod)=>prod.title.toUpperCase().includes(search.toUpperCase())).length==0?<div className='d-flex flex-wrap container justify-content-evenly align-items-center' style={{height:"500px"}}>
                <h4>No Product Avilable to realeted search</h4>
                </div>:data.filter((prod)=>prod.title.toUpperCase().includes(search.toUpperCase())).map((vender,index)=>{
                return  <ProductCard key={index} vender={vender}/>
                })}</div>:<div className='d-flex flex-wrap container justify-content-evenly align-item-center'>{data.map((vender,index)=>{
          return  <ProductCard key={index} vender={vender} addToCart={addToCart}/>
          })}</div>

        }
    </div>
  )
}
