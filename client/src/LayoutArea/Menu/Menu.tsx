import { NavLink } from "react-router-dom";
import "./Menu.css"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

function Menu() {
  return (

    <div className="Menu">
      <img src={require("../../LayoutArea/Menu/bnch.png")} alt="" />
      <div className="buttonsDiv">

        <Button style={{ "marginRight": "10px" }} variant="outlined">
          <NavLink className="CompanysBtn" style={{ textDecoration: 'none' }} to="/Companys">Home</NavLink>
        </Button>
        <Button style={{ "marginRight": "10px" }} variant="outlined">
          <NavLink className="CompanysBtn" style={{ textDecoration: 'none' }} to="/login">Login</NavLink>
        </Button>
        <Button style={{ "marginRight": "10px" }} variant="outlined">
          <NavLink className="CompanysBtn" style={{ textDecoration: 'none' }} to="/">Home</NavLink>
        </Button>
        <Button style={{ "marginRight": "10px" }} variant="outlined">
          <NavLink className="CompanysBtn" style={{ textDecoration: 'none' }} to="/">Home</NavLink>
        </Button>
        <Button style={{ "marginRight": "10px" }} variant="outlined">
          <NavLink className="CompanysBtn" style={{ textDecoration: 'none' }} to="/">Home</NavLink>
        </Button>
        <Button style={{ "marginRight": "10px" }} variant="outlined">
          <NavLink className="CompanysBtn" style={{ textDecoration: 'none' }} to="/">Home</NavLink>
        </Button>

      </div>


      <div className="footer">
        All Rights Reserved® Bnch.
      </div>
    </div>

  );
}


export default Menu
