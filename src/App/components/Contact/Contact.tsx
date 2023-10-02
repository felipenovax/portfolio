import React from 'react';
import {
	BiRightArrowAlt,
	BiLogoLinkedinSquare,
	BiLogoInstagramAlt,
	BiLogoGithub,
	BiLogoFacebookSquare,
} from 'react-icons/bi';
import styles from './Contact.module.scss';

const profileImage =
	'https://media.licdn.com/dms/image/D4E03AQHRTVwM3iSClg/profile-displayphoto-shrink_800_800/0/1670537430780?e=1701302400&v=beta&t=827oZntUuiOrxazZtmhOgL_ntZeAgi3vAVb_v20nAIY';
export const Contact = () => {
	return (
		<>
			<div id="contact" className={styles.contact}>
				<div className={styles.contactAbout}>
					<img
						className={styles.image}
						src={profileImage}
						alt="felipe profile image"
					/>
					<div>
						<div>
							<h1>Felipe Erick</h1>
							<p className={styles.description}>
								Software Engineer at Welbe Care
							</p>
						</div>
						<div className={styles.social}>
							<BiLogoLinkedinSquare
								size={30}
								role="button"
								aria-label="linkedin button"
								onClick={() =>
									window.open(
										'https://www.linkedin.com/in/felipe-erick/',
										'_blank',
									)
								}
							/>
							<BiLogoInstagramAlt
								size={30}
								role="button"
								aria-label="Instagram button"
								onClick={() =>
									window.open(
										'https://www.instagram.com/felipenovax/',
										'_blank',
									)
								}
							/>
							<BiLogoGithub
								size={30}
								role="button"
								aria-label="GitHub button"
								onClick={() =>
									window.open('https://github.com/felipenovax', '_blank')
								}
							/>
							<BiLogoFacebookSquare
								size={30}
								role="button"
								aria-label="Facebook button"
								onClick={() =>
									window.open('https://www.facebook.com/felipenovax', '_blank')
								}
							/>
						</div>
					</div>
				</div>
				<div className={styles.contactInfo}>
					<div className={styles.contactSection}>
						<h1>Get in Touch</h1>
						<BiRightArrowAlt size={42} />
					</div>
					<div className={styles.contactSectionInfo}>
						<p className={styles.description}>Email me:</p>
						<p className={styles.description}>Call me:</p>
					</div>
					<div className={styles.contactSectionInfo}>
						<p className={styles.social}>novax00@gmail.com</p>
						<p className={styles.social}>+55 11 9 9999-9999</p>
					</div>
				</div>
			</div>
			<hr className={styles.horizontalRuler} />
		</>
	);
};
