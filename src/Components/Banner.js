import React from 'react';

import './banner.css';
import TypedText from './TypedText';

function Banner() {
	return (
		<section id='hero' className='hero'>
			<div className='content'>
				<TypedText
					strings={[
						"Welcome to my digital portfolio, I'm Abdelrahman Youssef.",
						'Computer Science student and Web Developer.',
						'Bringing ideas to life with code.',
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
