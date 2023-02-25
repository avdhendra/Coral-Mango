import React from 'react'
import './Card.css'
import avatar from "../Asset/logo.jpeg"
const Card = ({searchItem, error, isLoading}) => {
   
    
  return (
      <div className='User_Card'>
        {isLoading && <p className='statusMsg'>Loading Data...</p>}
          {!isLoading && error && <p className='statusMsg' style={{ color: 'red' }}>{error}</p>}
          {searchItem?.length? <div className='Card_container'>
          {!isLoading && !error &&(searchItem?.map((searchResult) => {
            return  (
                  
                 <div className='Card' key={searchResult.name} >
                      <div className='card_img'>
                          <img src={avatar} alt="avatar" className='avatar_card' />
                      </div>
                      <div className='details'>
                        <span className='username'>{searchResult.name}</span>
                        <span className='occupation'>{searchResult.occupation}</span>
                        <span className='age'>{searchResult.age } years</span>
                      </div>
                 </div>
              )
          }))}
               </div>:<p>No Data ....</p>}
    </div>
  )
}

export default Card
