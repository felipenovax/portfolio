import React from 'react'
import { Logo } from '../Logo/Logo'
import './NavBar.styles.css'

export const NavBar = () => {
  return (
		<div className="topnav" id="myTopnav">
			<a href="#home" className="active">Home</a>
			<a href="#news">News</a>
			<a href="#contact" className="menu-item">Contact</a>
			<a href="#about">About</a>
			<a href="javascript:void(0);" className="icon">
				<i className="fa fa-bars"></i>
			</a>
	</div>
  )
}
