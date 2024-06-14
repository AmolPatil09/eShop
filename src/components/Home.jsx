import React, { useState } from 'react'
import ProductList from './ProductList'
import SearchBar from './SearchBar'
export default function Home() {
    const [search,setSearch]=useState();
  return (
    <div>
        <SearchBar setSearch={setSearch}/>
        <ProductList search={search}/>
    </div>
  )
}
