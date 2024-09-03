import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import GoogleLogin from './components/GoogleLogin'
import Dashboard from './components/Dashboard'
import PageNotFound from './components/PageNotFound'
import {GoogleOAuthProvider} from '@react-oauth/google'
import { useState } from 'react'
import RefreshHandler from './components/RefreshHandler'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId='684662528931-dbg5au34iakjoaq8rsqnucvanab6pb2p.apps.googleusercontent.com'>
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    )
  }

  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to='/login' />
  }

  return (
    <BrowserRouter>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<GoogleAuthWrapper/>} />
      <Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>}/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
