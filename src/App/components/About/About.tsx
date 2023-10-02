import React from 'react';
import styles from './About.module.scss';
import code from 'App/assets/code.jpg';

const info = {
	title: 'My story',
	subtitle: 'How I started as a web developer',
	description:
		'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui	officia deserunt mollit anim id est laborum aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat.',
};

export const About = () => {
	return (
		<div id="about" className={styles.about}>
			<div className={styles.container}>
				<img
					className={styles.image}
					src={code}
					width={500}
					alt="code screen"
				/>
				<div className={styles.description}>
					<h3>{info.title}</h3>
					<h1>{info.subtitle}</h1>
					<p>{info.description}</p>
				</div>
				<div className={styles.description}>
					<h3>{info.title}</h3>
					<h1>{info.subtitle}</h1>
					<p>{info.description}</p>
				</div>
				<img
					className={styles.image}
					src={code}
					width={500}
					alt="code screen"
				/>
			</div>
		</div>
	);
};
