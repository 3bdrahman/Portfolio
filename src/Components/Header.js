import React, { useState, useEffect } from 'react';
import 'intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ForwardToInbox from '@mui/icons-material/ForwardToInbox';
import './header.css';
import resume from '../Abdelrahman Youssef.pdf';
function Header() {
	const [transparent, setTransparent] = useState(false);
	useEffect(() => {
		const Banner = document.getElementById('hero');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(
				(entry) => {
					if (entry.intersectionRatio < 0.5) {
						setTransparent(true);
					} else {
						setTransparent(false);
					}
				},
				{ threshold: [0.1] }
			);
		});
		observer.observe(Banner);

		return () => observer.unobserve(Banner);
	}, []);
	const handleClick = (e) => {
		e.preventDefault();
		const sectionId = e.target.getAttribute('href').slice(1);

		const sectionRef = document.getElementById(sectionId);
		if (sectionId === 'protofolio' || sectionId === 'explore') {
			sectionRef.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		} else {
			sectionRef.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
			});
		}
	};

	return (
		<div className='nav-container'>
			<header>
				<a href='#hero' onClick={handleClick} className='logo'>
					Abdelrahman Youssef
				</a>
				<nav>
					<ul id='nav-list'>
						<li>
							<a href='#protofolio' onClick={handleClick}>
								Protofolio
							</a>
						</li>

						<li>
							<a href='#explore' onClick={handleClick}>
								Spotlight
							</a>
						</li>
						<li>
							<a href='#skills' onClick={handleClick}>
								Skills
							</a>
						</li>
						<li>
							<a id='resume' href={resume} download>
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<div className={`social-header ${transparent} ? "transparent" : ""}`}>
				<ul>
					<li>
						<a href='https://www.linkedin.com/in/ayosef/'>
							<LinkedInIcon />
						</a>
					</li>
					<li>
						<a href='https://github.com/3bdrahman'>
							<GitHubIcon />
						</a>
					</li>
					<li>
						<a href='mailto:ayosef@u.rochester.edu'>
							<ForwardToInbox />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
