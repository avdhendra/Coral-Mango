import React, { useEffect } from 'react'
import DataContext from './context/context';
import { useContext } from 'react';
import Table from './page/Table';
import Card from './page/Card';

import Switch from './component/Switch';
import './Main.css'
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const { data,searchResults, fetchError, isLoading, toggle } = useContext(DataContext);
    const auth=localStorage.getItem('user');
    const navigate=useNavigate()
    useEffect(() => {
        if (!auth) {
        navigate("/auth")
    }
},[auth,navigate])
    return (
        <div className='content'>
           {(data.length>searchResults.length) &&<span className='filter_dialog'>
                <p>You are Viewing Filtered Result !</p>
            </span>}
            <div className='switch'>
                <Switch />
                <span className='toggle_name'>{toggle? 'Card' : 'Table'}</span>
           </div>
            <div>

                {toggle ? (<Card searchItem={searchResults} error={fetchError} isLoading={isLoading} />) : (<Table searchItem={searchResults} error={fetchError} isLoading={isLoading} />)}



            </div>
        </div>
    )
}

export default Main
