import { useLocation } from 'react-router-dom'
import { LoginPage } from './login/login'
import { RegisterPage } from './register/register'
import { Box } from '@mui/material'
import style from './style.module.scss'
import { useState } from 'react'
import axios from 'axios'

export const AuthRootComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        
        const user = await axios.post('http://localhost:5000/login', userData)
    }
    return (
    <div className={style.root}>
        <form onSubmit={handleSubmit}>
            <Box 
            width={600}
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            boxShadow='2px 2px 8px #ccc'
            borderRadius={3}
            padding={5}
            >
                {location.pathname === '/register' ? (
                 <RegisterPage/>
                   ) : location.pathname === '/login' ? (
                  <LoginPage setEmail={setEmail} setPassword={setPassword}/>
                   ) : null}
            </Box>
        </form>
    </div>
    )
}