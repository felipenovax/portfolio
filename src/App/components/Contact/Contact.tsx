import React from 'react';
import {
	BiRightArrowAlt,
	BiLogoLinkedinSquare,
	BiLogoInstagramAlt,
	BiLogoGithub,
	BiLogoFacebookSquare,
} from 'react-icons/bi';

export const Contact = () => {
	return (
		<div id="contact">
			<div>
				<img src="" alt="" />
				<div>
					<h3>Felipe Erick</h3>
					<p>Software Engineer at Welbe Care</p>
				</div>
				<div>
					<BiLogoLinkedinSquare />
					<BiLogoInstagramAlt />
					<BiLogoGithub />
					<BiLogoFacebookSquare />
				</div>
			</div>
			<div>
				<div>
					<h1>Get in Touch</h1>
					<BiRightArrowAlt size={52} />
				</div>
				<div>
					<p>EMAIL ME:</p>
					<p>CALL ME:</p>
				</div>
				<div>
					<p>novax00@gmail.com</p>
					<p>+55 11 9 9999-9999</p>
				</div>
			</div>
		</div>
	);
};
