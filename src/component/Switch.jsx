import React,{useContext} from 'react'
import './Switch.css'
import DataContext from '../context/context'
const Switch = () => {
    const{toggle,setToggle}=useContext(DataContext)
    const handleClick = () => {
    setToggle((prev)=>!prev)
}
  return (
     
      <div onClick={handleClick} className="ToggleSwitch">
        <div className={toggle ? 'knob active' : 'knob'} />
        
      </div>
  )
}

export default Switch
