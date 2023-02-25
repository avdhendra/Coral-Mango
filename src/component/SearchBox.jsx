import React, { useContext } from 'react'
import DataContext from '../context/context'
import "./SearchBox.css"
const SearchBox = () => {
  const{searching,setSearching}=useContext(DataContext)
    return (
        <input className="searchText" id='search' type='text' placeholder='Search Posts' value={searching} onChange={(e) => setSearching(e.target.value)} />
  )
}

export default SearchBox