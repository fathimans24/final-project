import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../axiosInterceptor'


const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const  navigate = useNavigate()
    let updateUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    let sendData = (event) => {
        

        axiosInstance.post("http://localhost:3000/client/login",user)
        .then((res) => {
            console.log(res);
            alert(res.data.message)
            if(res.data.usertoken){
                localStorage.setItem("token", res.data.usertoken);
                navigate('/getstart')
            }
        })
    }
  return (
    <div>
    <Box display="flex" >
    <Stack spacing={4} direction="column" sx={{ width: 500, marginLeft: 42}} >
    <Typography variant='h3' sx={{fontWeight: 900, color: '#705C53'}} >Sign In</Typography> 
    <TextField required id="username-field" label="Username" variant="standard" name="username" value={user.username} onChange={updateUser} /> <br />
      <TextField id="password-field" label="Password" type="password" variant="standard" name="password" value={user.password} onChange={updateUser} /> <br /> <br />
          <br /> <br />
    <Button size="large" variant="contained" sx={{backgroundColor: '#705C53', '&:hover': { border: 'none', backgroundColor: '#BC9F8B'},
        '&:focus': {outline: 'none'}}} onClick={sendData}>Submit</Button> <br />
    </Stack>
        </Box>
    </div>
  )
}

export default Login