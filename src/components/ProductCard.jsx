import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/ProductCard.css'

export default function ProductCard({vender,addToCart}) {
    const navigate=useNavigate()
  return (
    <div>
        <div className="card m-auto mt-5" style={{width: '18rem'}}>
            <div><img src={vender.images[0]} className="card-img-top img" alt="..."/></div>
            <div className="card-body">
              <h5 className="card-title title">{vender.title}</h5>
              <div className='d-flex mt-3 justify-content-center'>
              <p className="card-text "><s>Rs. {vender.price}</s></p>
              <p className="card-text ms-3">Rs. {Math.round(vender.price-((vender.price/100)*vender.discountPercentage))}</p>
              </div>
              
              <div className='d-flex'>
              <button className='btn btn-primary button form-control '
              onClick={()=>{
                navigate(`/product/${vender.id}`)
              }}
              >More Details</button>
            
              </div>
            </div>
          </div>
    </div>
  )
}
