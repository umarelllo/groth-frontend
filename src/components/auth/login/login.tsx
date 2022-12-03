import { TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const LoginPage = ({setEmail, setPassword}: any) => {
  return (
    <div>
      <Typography
      fontFamily='Poppins'
      textAlign='center'
      padding={2}
      variant='h3'
      component='h2'>
        Lmis
      </Typography>

      <TextField fullWidth={true} id="standard-basic" label="Username or email" variant="standard" placeholder='Username or email' margin='normal' onChange={e => setEmail(e.target.value)} />
      <TextField fullWidth={true} id="standard-basic" label="Password" variant="standard" placeholder='Password' type='password' margin='normal' onChange={e => setPassword(e.target.value)}/>
      <Button variant="contained" fullWidth={true} sx={{marginTop: '10px', background: '#ADD8E', color: 'white'}} type='submit'>Log in</Button>   
      <Typography
      fontFamily='Poppins'
      textAlign='center'
      padding={2}
      variant='body1'
      component='h2'>
        Don't have an account?
        <Link to='/register' style={{marginLeft: '5px'}}>Sign up</Link>
      </Typography>
    </div>
  )
}
