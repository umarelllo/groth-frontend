import { TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div>
            <Typography 
            fontFamily='Poppins'
            textAlign='center'
            padding={2}
            variant="h3" component="h2">
             
            </Typography>

            <TextField fullWidth={true} label="E-mail" placeholder='Введите ваш e-mail' id="standard-basic" variant="standard" margin='normal'/>
            <TextField fullWidth={true} label="Password" placeholder='Введите ваш пароль' id="standard-basic" variant="standard" margin='normal' type='password'/>
            <Button variant="contained" fullWidth={true} sx={{marginTop: '10px', background: '#000'}}>Войти</Button>

            <Typography 
            fontFamily='Poppins'
            textAlign='center'
            padding={2}
            variant="body1" component="h2">
             У вас нет аккаунта ?
             <Link to='/register' style={{marginLeft: '5px'}}> Зарегистрироваться</Link>
            </Typography>
        </div>
    )
}