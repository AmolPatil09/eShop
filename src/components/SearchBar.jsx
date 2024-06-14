import React from 'react'

export default function SearchBar({setSearch}) {
  return (
    <div className='d-flex container mt-2 justify-content-end'>
       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
      </form>  
    </div>
  )
}
