import { TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <div>
        <Typography 
        fontFamily='Poppins'
        textAlign='center'
        padding={2}
        variant="h3" component="h2">
         Регистрация
        </Typography>

        <TextField fullWidth={true} label="Username" placeholder='Введите ваш username' id="standard-basic" variant="standard" margin='normal'/>
        <TextField fullWidth={true} label="E-mail" placeholder='Введите ваш e-mail' id="standard-basic" variant="standard" margin='normal'/>
        <TextField fullWidth={true} label="Пароль" placeholder='Введите ваш пароль' id="standard-basic" variant="standard" margin='normal' type='password'/>
        <TextField fullWidth={true} label="Введите еще раз" placeholder='Введите ваш пароль' id="standard-basic" variant="standard" margin='normal' type='password'/>
        <Button variant="contained" fullWidth={true} sx={{marginTop: '10px', background: '#000'}}>Авторизоваться</Button>

        <Typography 
        fontFamily='Poppins'
        textAlign='center'
        padding={2}
        variant="body1" component="h2">
         У вас есть аккаунт ?
         <Link to='/login' style={{marginLeft: '5px'}}> Войти</Link>
        </Typography>
    </div>
    )
}