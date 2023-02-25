import React, {useContext, useEffect, useRef, useState } from 'react'
import DataContext from '../context/context'
import "./SignIn.css"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
 const auth=localStorage.getItem('user');
   
   
    const { setAuth } = useContext(DataContext)
    //hooks
    const userRef = useRef()   
    const errRef = useRef()

    //states
    const [username, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const navigate = useNavigate();
    
    useEffect(() => {
        userRef.current.focus()
    }, [userRef])
    useEffect(() => {
        setErrMsg("")
    }, [username, pwd])

useEffect(() => {
        if (auth) {
        navigate("/main")
    }
},[auth,navigate])


    const handleSubmit = async (e) => {
        //prevent from refreshing the page
        e.preventDefault()
        setUser(userRef.current.value)
        //prevent the access if username and pwd are different
        if (username === "demo@coralmango.com" && pwd === "demo123") {
            setAuth({ username, pwd })
            //set the value of the username in localstorage
            localStorage.setItem("user", username)
            setUser('');
            setPwd('');
            
        } else {
            //show message on invalid access
            setErrMsg("Invalid Credentials!")
            errRef.current.focus();
        }




    }
     
    return (
        <div className='signIn' >
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <span>SignIn</span>
            <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
           
        </div>
    )
}

export default SignIn
