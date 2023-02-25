import React, { useContext } from 'react'
import SearchBox from './SearchBox'
import "./Navigation.css"
import avatar from '../Asset/logo.jpeg'
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet } from 'react-router-dom';
import Model from './Model'
import DataContext from '../context/context'
const Navigation = () => {
    const auth = localStorage.getItem('user')
   const {model,setModel}=useContext(DataContext)
    return (
        <>
            <nav className={auth?'navbar':"navbar_auth"}>
          
                <div className={auth?'logo_name':''}>
                    <span className='company_name'>Coral Mango</span>
                </div>
               {auth && <div className='searchbox'>
                    <AiOutlineSearch className='searchicon' />
                    <SearchBox />
                </div>}
                {auth && <div onClick={() => setModel((prev) => !prev)}>

                    <img src={avatar} className='avatar' alt='avatar' />

                </div>}
              
            
            </nav>
{model &&<Model/>}
        <Outlet/>    
        </>
    )
}

export default Navigation
