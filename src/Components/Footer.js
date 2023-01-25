import React from 'react';
import './footer.css';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import ForwardToInbox from '@mui/icons-material/ForwardToInbox';

import resume from '../Abdelrahman Youssef.pdf';
function Footer() {
	return (
		<footer id='skills'>
			<div className='footer__container'>
				<div>
					<ul className='footer__list'>
						<li>
							<a href={resume} download>
								<h5>Resume</h5>
							</a>
						</li>
						<li>
							<a href='#'>
								<h5>Get in touch</h5>
							</a>
						</li>
					</ul>
				</div>
				<div className='footer__social'>
					<GitHub className='footer__icon' style={{ color: 'white' }} />
					<LinkedIn className='footer__icon' style={{ color: 'white' }} />
					<ForwardToInbox className='footer__icon' style={{ color: 'white' }} />
				</div>
			</div>
			<div className='footer__border'></div>
			<h6 className='copyright'>&copy; Abdelrahman Youssef 2023</h6>
		</footer>
	);
}

export default Footer;
