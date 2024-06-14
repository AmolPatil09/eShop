import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import '../css/Cart.css'
export default function CartCard({item,calculate}) {
    const [quantity,setQuantity]=useState(1);
    const [prevQuantity,setPrevQuantity]=useState(1)
   
     useEffect(()=>{
     calculate(quantity,item.price,prevQuantity)
     setPrevQuantity(quantity)
    },[quantity])
    const increment=()=>{
        if(quantity>=10){
            return
        }
        setQuantity(quantity+1)

    }
    const decrement=()=>{
        if(quantity==1){
            return
        }
        setQuantity(quantity-1)

    }
  return (
    <div className="card m-auto mt-3 d-md-flex flex-md-row   align-items-center  justify-content-evenly w-sm-[100%]  container" style={{minHeight:"5rem",}} >
   
              <h5 className="card-title p-md-2 col-md-3 mt-1">{item.title}</h5>
            
              <p className="card-text p-md-2 text-center"><span className='d-md-none'>Price : </span>{item.price}</p>  
              <p className="card-text p-md-2 d-flex flex-row mt-0 m-1"><button onClick={increment} className='buttons m-1'>+</button><input
              className='input text-center '
              value={quantity}
              style={{width:'40px'}}
              onChange={(e)=>{
                     if(isNaN(e.target.value))return
                     if(e.target.value>10)return
                    setQuantity(e.target.value) 
               
              }}
              
              /><button onClick={decrement} className='buttons m-1'>-</button></p>
              <p className="card-text p-md-2"><span className='d-md-none'>Total Price : </span>{quantity*item.price}</p><p></p>
            <p><MdDeleteForever className='icon1 '/></p>
          </div>
  )
}
