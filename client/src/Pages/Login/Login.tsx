import React from 'react'
import "../Login/Login.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';



function Login() {
    return (

        <div className='Login'>
            <p>We allow companies to optimize their   <br />workforce by benchmarking themselves,<br /> to similar companies and competitors.</p>
            <div id="content">
                <Box style={{ "marginLeft": "1000px", "marginBottom": "9px" }} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <TextField id="input-with-sx" label="Work Email" variant="outlined" />
                </Box>
                <Box style={{ "marginLeft": "1000px" }} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <TextField  id="input-with-sx" label="Password" type="password"
                        variant="outlined" />
                </Box>
                <a href="/">New to Bnch? Sign-Up!</a>
                <Button style={{ "marginLeft": "730px", "marginTop": "11px", "height": "50px", "backgroundColor": "black", "width": "330px","fontFamily":"'Lexend', sans-serif" }} variant="contained">Log-in</Button>

            </div>
            <div id="background">
                <img src={require("../Login/Logo.png")} alt="" />
            </div>


        </div>
    )
}

export default Login