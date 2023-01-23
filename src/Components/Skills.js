import React from 'react';

import './skills.css';

function Skills() {
	return (
		<section className='skills'>
			<ul className='skills-list'>
				<li>
					<div className='container'>
						<div className='group'>
							<label className='group-label'>Front End</label>
							<ul className='skill-list'>
								<li>
									<h4>HTML& CSS</h4>
									<p className='skill-description'>
										A must in every web based app I worked on.
									</p>
								</li>
								<li>
									<h4>BootStrap | TailWind</h4>
									<p className='skill-description'>
										Faster and more efficient to have a functioning UI.
									</p>
								</li>
								<li>
									<h4>React | Next</h4>
									<p className='skill-description'>
										Sophisticated project handling by dividing project into
										components and sub-components
									</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div className='container'>
						<div className='group'>
							<label className='group-label'>Programming languages</label>
							<ul className='skill-list'>
								<li>
									<h4>Java</h4>
									<p className='skill-description'>
										Most of my coursework and problem solving.
									</p>
								</li>
								<li>
									<h4>JavaScript</h4>
									<p className='skill-description'>
										Main language for independant projects and Back-End
										frameworks (ExpressJS, NodeJS).
									</p>
								</li>
								<li>
									<h4>Python</h4>
									<p className='skill-description'>
										Internship experience: Scrapping and Machine Learning.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div className='container'>
						<div className='group'>
							<label className='group-label'>About me</label>
							<ul className='skill-list'>
								<li>
									<h4>Education</h4>
									<p className='skill-description'>
										B.S. Computer Science candidate at University of Rochester.
									</p>
								</li>
								<li>
									<h4>Background</h4>
									<p className='skill-description'>
										Born and raised in Egypt. I currently study and live in U.S.
									</p>
								</li>
								<li>
									<h4>Hobbies</h4>
									<p className='skill-description'>
										Liverpool fan, #YNWA. I like to cook and explore different
										cuisines. Currently, I'm Learning how to play the Oud.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default Skills;
