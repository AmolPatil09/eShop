import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getData } from '../ApiHelper/ApiCall';
import '../css/ProductDetails.css'
import RatingComp from './RatingComp';
import Loading from './Loading';
export default function ProductDetails() {
 const {id}=useParams()
 const [data,setData]=useState([]);
 const [isLoading,setIsLoding]=useState(true);
 const [errorMessage,setErrorMessage]=useState('')
 useEffect(()=>{
    getData('https://dummyjson.com/products/'+id)
    .then((res)=>{
      setData(res)
      console.log(res.reviews);
      
    })
    .catch(()=>{
     setErrorMessage('Server Not Responce')
    })
    .finally(()=>{
        setIsLoding(false)
    })
    },[])
  return (
   isLoading?<Loading/>: <div className=' container mtr-2'>
   <div className='d-md-flex container mt-4 '>
       <div>
       <img src={data.images} className="card-img-top image1  col-md-4" alt="..."/>
       </div>
       <div className='p-md-4 m-md-5 text-start'>
       <h3>{data.title}</h3>
       <h6>{data.brand}</h6>
       <p>{data.description}</p>
       <div className='d-flex mt-3 text-start'>
             <h6 className="card-text "><s>Rs. {data.price}</s></h6>
             <h6 className="card-text ms-3">Rs. {Math.round(data.price-((data.price/100)*data.discountPercentage))}</h6>
             </div>
             <button className='btn btn-success mt-3'>Add To Cart</button>
       </div>
      
   </div>
   <div>
       <h4 className='text-start border-bottom p-2'>Reviews</h4>
        {
           data.reviews.map((review)=>{
               return <div className='card mt-1 text-start p-2'>
                   <h6>{review.reviewerName}</h6>
                   <p>{review.reviewerEmail}</p>
                   <p>{review.comment}</p>
                   <RatingComp rating={review.rating}/>
                   


               </div>
           })

        }
   </div>
   </div>
  )
}
