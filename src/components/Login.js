import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('/api/login', { email, password })
            if (response.data.success) {
                navigate('/dashboard')
            }
        } catch (error){
            console.error('Login failed', error)
        }
    }

    return(
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login