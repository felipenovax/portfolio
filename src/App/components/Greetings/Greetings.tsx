import React from 'react';
import styles from './Greetings.module.scss';

const info = {
	title: "Hi, I'm ",
	subtitle: 'I create amazing products and remarkable experiences',
	name: 'Felipe Erick',
	description: {
		prepend: "I'm a ",
		stack: 'Frontend Engineer',
		prefix: ' based in ',
		location: 'São Paulo, Brasil',
		append:
			". I enjoy turning complex problems into simple, beautiful and intuitive screens. When I'm not coding, you'll find me cooking, gardening or playing Chess.",
	},
	button: "Let's Talk",
};

export const Greetings = () => {
	return (
		<div id="greetings" className={styles.greetings}>
			<div className={styles.content}>
				<div className={styles.content__text}>
					<h1 className={styles.title}>
						{info.title}
						<strong>{info.name}</strong>
					</h1>
					<p className={styles.subtitle}>{info.subtitle}</p>
					<p className={styles.description}>
						{info.description.prepend}
						<strong>{info.description.stack}</strong>
						{info.description.prefix}
						<strong>{info.description.location}</strong>
						{info.description.append}
					</p>
					<div className={styles.experienceContainer}>
						<div className={styles.experience}>
							<p>
								{new Date().getFullYear() - 2016}
								<strong>+</strong>
							</p>
							<p>Years of experience</p>
						</div>
						<div className={styles.experience}>
							<p>
								15<strong>+</strong>
							</p>
							<p>Successful projects</p>
						</div>
					</div>
					<button>{info.button}</button>
				</div>
				<div className={styles.content__image}>
					<img
						className={styles.logo}
						src="/felipe.png"
						alt="felipe portrait"
					/>
				</div>
			</div>
		</div>
	);
};
