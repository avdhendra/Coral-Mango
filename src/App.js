


import './App.css';
import Navigation from './component/Navigation';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './page/SignIn';
import Main from './Main';
import { useEffect } from 'react';
import NotFound from './page/NotFound';

function App() {
  //getting value of username from localstorage  
  const auth = localStorage.getItem("user")
const navigate=useNavigate()

  //hook execute on change of auth and navigate variable
//   useEffect(() => {
//     if (auth) {
//       navigate('/main')
      
//     } else if (!auth) {
//       navigate('/auth')
//   }
// },[auth,navigate])

// //protect the component from unauthorized access
//   const ProtectedRoute = ({ children }) => {
//     if (!auth) {
//       return <Navigate to='/auth' />
//     }
//     return children
//   }

//   const SignInProtected = ({ children }) => {
//     if (auth) {
//       return <Navigate to='/main'/>
//     }
//     return children
//   }
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path="/main" element={<Main />} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
