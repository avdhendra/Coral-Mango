


import './App.css';
import Navigation from './component/Navigation';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './page/SignIn';
import Main from './Main';
import { useEffect } from 'react';


function App() {
  const auth = localStorage.getItem("user")
const navigate=useNavigate()

  useEffect(() => {
    if (auth) {
      navigate('/main')
      
    } else if (!auth) {
      navigate('/auth')
  }
},[auth,navigate])


  const ProtectedRoute = ({ children }) => {
    if (!auth) {
      return <Navigate to='/auth' />
    }
    return children
  }
  const SignInProtected = ({ children }) => {
    if (auth) {
      return <Navigate to='/main'/>
    }
    return children
  }
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
          <Route path="/auth" element={<SignInProtected><SignIn /></SignInProtected>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
