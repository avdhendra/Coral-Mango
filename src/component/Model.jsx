import { useNavigate } from "react-router-dom"

import './Model.css'
import { useContext } from "react"
import DataContext from "../context/context"
const Model = () => {

    const navigate = useNavigate()
const {setModel}=useContext(DataContext)

    const handleSignOut = () => {
        setModel((prev)=>!prev)
        localStorage.clear()
        navigate('/auth')
}
    return (
       <div className="DropDown">
                  
                        <div className="DropDownItem" onClick={handleSignOut}>
                            <span className='material-symbols-rounded' >
                                logout
                            </span>
                            <p>Sign Out</p>
                        </div>
               
                 
                   
                    
                    
                </div>
  )
}

export default Model
