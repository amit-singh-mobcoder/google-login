import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('user-info')
    const userData = JSON.parse(data);
    setUserInfo(userData);
  }, [])


  const handleLogout = () => {
    localStorage.removeItem('user-info');
    navigate('/login')
  }

  return (
    <div className='login'>
      <img src={userInfo?.image} alt={userInfo?.email}/>
      <h1>Welcome {userInfo?.name}</h1>
      <h3>Email: {userInfo?.email}</h3>

      <button onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Dashboard