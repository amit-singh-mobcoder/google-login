import React from 'react'
import '../App.css'
import {useGoogleLogin} from '@react-oauth/google'
import {googleAuth} from './api'
import {useNavigate} from 'react-router-dom'

function GoogleLogin() {

    const navigate = useNavigate();

    const responseGoogle = async (authResult) => {
        try {
            if(authResult['code']){
                console.log(authResult['code'])
                const result = await googleAuth(authResult['code']);
                const {email, name, image} = result.data.user;
                const token = result.data.token;
                // storing user info in the local storage
                const obj = {email, name, image, token};
                localStorage.setItem('user-info', JSON.stringify(obj)); 

                // console.log(' result.data.user--- ', result.data.user)
                // console.log('token', token)

                navigate('/dashboard')
            }
        } catch (error) {
            console.error('Error while requesting google code', error)
        }
    }
    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code'
    })

  return (
    <div className='App'>
        <button 
            onClick={googleLogin}
        >
        Login with Google
        </button>
    </div>
  )
}

export default GoogleLogin