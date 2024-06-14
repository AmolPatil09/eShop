import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeLoginState } from '../store/actions/actions'
export default function Logout() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
      dispatch(changeLoginState(false))
      navigate('/login')
    
    },[])
  return (
    <></>
  )
}
