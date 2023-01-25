import React from 'react';

import './banner.css';
import TypedText from './TypedText';

function Banner() {
	return (
		<section id='hero' className='hero'>
			<div className='content'>
				<TypedText
					strings={[
						"Hi, Welcome to my website. I'm Abdelrahman Youssef.",
						'I study Computer Science and Business at the University of Rochester.',
						"I'm passionate about web development and design.",
						'After graduation, I look forward to applying my skills to real-world projects.',
						'Enjoy your stay!',
					]}
				/>
			</div>

			<ul class='circles'>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</section>
	);
}

export default Banner;
