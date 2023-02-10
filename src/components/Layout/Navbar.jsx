import React from 'react'
import logo from '/image/microscope.svg'
import { useContext } from "react";
import { context } from '../../context/context'
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  const { user, setUser, setVisibleLogIn } = useContext(context);

  return (
    <>
      <div className='navbar-container'>
        <div className='logo-container'>
          <NavLink to="/">
            <img src={logo} alt="imagen" />
            <p><strong>MAS</strong></p>
            <p>Micrograph Analysis System</p>
          </NavLink>
        </div>
        <div className='links-container'>
          <ul>
            {user != '' ? (
              <>
                <NavLink to="/">
                  <li>{user}</li>
                </NavLink>
                <NavLink to="/report">
                  <li>Report</li>
                </NavLink>
                <NavLink to="/history">
                  <li>History</li>
                </NavLink>
                <NavLink onClick={() => { setUser(false) }} to="#">
                  <li >Log out</li>
                </NavLink>
              </>

            ) : <>
              <NavLink onClick={() => { setVisibleLogIn(true) }} to="#">
                <li>Log in</li>
              </NavLink>
              <NavLink to="/history">
                <li>Docs</li>
              </NavLink>
              <NavLink to="/history">
                <li>Contact</li>
              </NavLink>
            </>}
          </ul>
        </div>
      </div>
    </>
  )
}
