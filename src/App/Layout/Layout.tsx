import React from 'react'
import { Footer } from './Footer/Footer'
import { NavBar } from './NavBar/NavBar'
import './Layout.styles.scss'
import { Content } from './Content/Content'

export const Layout = () => {
  return (
		<div className='layout-container'>
			<NavBar />
			<Content />
			<Footer />
		</div>
  )
}
