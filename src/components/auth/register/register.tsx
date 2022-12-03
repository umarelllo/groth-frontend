import { TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
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

      <TextField fullWidth={true} id="standard-basic" label="Username" variant="standard" placeholder='Username' margin='normal' />
      <TextField fullWidth={true} id="standard-basic" label="Email" variant="standard" placeholder='Email' margin='normal' />
      <TextField fullWidth={true} id="standard-basic" label="Choose Password" variant="standard" placeholder='Password' type='password' margin='normal'/>
      <TextField fullWidth={true} id="standard-basic" label="Confirm Password" variant="standard" placeholder='Password' type='password' margin='normal'/>
      <Button variant="contained" fullWidth={true} sx={{marginTop: '10px', background: '#ADD8E', color: 'white'}}>Sign up</Button>   
      <Typography
      fontFamily='Poppins'
      textAlign='center'
      padding={2}
      variant='body1'
      component='h2'>
        Have an account already?
        <Link to='/login' style={{marginLeft: '5px'}}>Log in</Link>
      </Typography>
    </div>
  )
}
