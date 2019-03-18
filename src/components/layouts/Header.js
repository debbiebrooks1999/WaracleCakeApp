import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (

    <header className="jumbotron" style={headerStyle}>
      <h1>Cake List </h1>
      <NavLink activeStyle={activeLink} style={linkStyle} to="/view">View some Cakes </NavLink> | 
      <NavLink activeStyle={activeLink} style={linkStyle} to="/add">Add your own </NavLink>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom:'10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const activeLink = {
  color:'#fff',
  textDecoration:'underline'
}

export default Header;