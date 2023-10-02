import React from 'react';
import styles from './Header.module.scss';
import banner from '../../assets/banner.png';
import { BiMenu } from 'react-icons/bi';

export const Header = () => {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src={banner} alt="felipenovax logo" />
			<nav className={styles.nav}>
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#knowledge">Knowledge</a>
				<a href="#experience">Experience</a>
				<a href="#contact">Contact</a>
			</nav>
			<button className={styles.menu}>
				<BiMenu size={24}>Resume</BiMenu>
			</button>
		</div>
	);
};
