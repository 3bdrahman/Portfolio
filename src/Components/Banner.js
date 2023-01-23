import React from 'react';
import Typed from 'react-typed';


import './banner.css';

function Banner() {
	return (
		<section id='hero' className='hero'>
			<div className='content'>
				<Typed
					className='typed'
					strings={[
						"Hi, Welcome to my website. I'm Abdelrahman Youssef.",
						'I study Computer Science and Business at the University of Rochester.',
						"I'm passionate about web development and design.",
						'After graduation, I look forward to applying my skills to real-world projects.',
						'Enjoy your stay!',
					]}
					typeSpeed={50}
					backDelay={10}
					backSpeed={30}
					loop={true}
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
