import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
	return (
		<div className={styles.header}>
			<img
				className={styles.logo}
				src="/banner.png"
				alt="felipenovax logo"
				width="260px"
				height="40px"
			/>
			<nav className={styles.nav}>
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#knowledge">Knowledge</a>
				<a href="#experience">Experience</a>
				<a href="#contact">Contact</a>
			</nav>
			<button>button</button>
		</div>
	);
};
