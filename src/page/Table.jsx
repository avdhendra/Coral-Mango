import React from 'react'
import "./Table.css"


const Table = ({searchItem, error ,isLoading}) => {
    

    return (
        <>
            {isLoading && <p className='statusMsg'>Loading Data...</p>}
            {!isLoading && error && <p className='statusMsg' style={{ color: 'red' }}>{error}</p>}
            
       { !isLoading && !error &&(searchItem?.length? <div>
            
            <table className='content-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {searchItem?.map((people) =>
                        <tr key={people.age}>
                            <td>{people.name}</td>
                            <td>{people.age}</td>
                            <td>{people.occupation}</td>
                    </tr>
                    
                    )}
                </tbody>
      </table>
    </div>:<p>No Data ...</p>)}
</>
            )
}

export default Table;
