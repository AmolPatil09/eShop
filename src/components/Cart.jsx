import React, { useEffect, useState } from 'react'
import { getData } from '../ApiHelper/ApiCall'
import Loading from './Loading'
import CartCard from './CartCard'


export default function Cart() {
  const [data, setData] = useState()
  const [isLoading, setIsLoding] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [totalPrice,setTotalPrice]=useState(0)


  useEffect(() => {
    getData('http://localhost:5000/cart')
      .then((res) => {
        setData(res)
        calculateTotalPrice(res)

      })
      .catch(() => {
        setErrorMessage('Server Not Responce')
      })
      .finally(() => {
        setIsLoding(false)
      })
  }, [])

  const calculateTotalPrice=(res)=>{
    let sum=0;
  res.forEach(element => {
     sum+=element.price;
  });

  setTotalPrice(sum)
  
}
  const calculate=(quantity,price,prevQuantity)=>{
    let newprice=totalPrice+quantity*price-prevQuantity*price;
    setTotalPrice(newprice);
   }
  return (
    <div> {
      isLoading ?<Loading/>: <>
        <div className="card m-auto d-none d-md-flex mt-3 d-flex flex-row  align-items-center justify-content-evenly w-sm-[100%] container" style={{ minHeight: "5rem", }} >

          <h5 className="card-title p-md-2 col-md-4">Product</h5>
          <p className="card-text p-md-2 col-md-2">Price/1</p>
          <p className="card-text p-md-2 col-md-1">Quantity</p>
          <p className="card-text p-md-2 col-md-2">Total Price</p>
          <p className="card-text p-md-2 col-md-2">Action</p>
          <p></p>

        </div>
        {data.map((item, index) => {

          return <CartCard item={item} key={index} calculate={calculate} />
        })}
        <div className="card m-auto mt-3 d-md-flex flex-md-row  align-items-center justify-content-around w-sm-[100%]menu container" style={{ minHeight: "5rem", }} >
        <h5 className="card-title p-md-2 col-md-3">eShop</h5>
          <h5 className="card-title p-md-2 col-md-3  ">Check Out</h5>
          <p className="card-text p-md-2 col-md-3">Total Amount : {totalPrice} </p>
          <button className='btn btn-primary'>Check Out</button>
          <p></p>

        </div>
      </>
    }</div>
  )
}
