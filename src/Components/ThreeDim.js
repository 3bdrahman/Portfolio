import React from 'react';
import './ThreeDim.css';
function ThreeDim() {
	function show() {
		const title = document.querySelector('h2.neonText');
		if (title) {
			title.classList.add('slide-in-up');
			title.style.visibility = 'visible';
		}
		const desc = document.querySelector('p.desc');
		if (desc) {
			desc.classList.add('slide-in-up');
			desc.style.visibility = 'visible';
		}
	}

	return (
		<section id='explore' className='ThreeD'>
			<div className='description' id='desc'>
				<h2 className='explored neonText'>SPOTLIGHT</h2>
				<p className='desc'>
					I've been exploring the use of Spline in building interactive 3D user
					interfaces and environments, which allows for the creation of smooth,
					curving lines and surfaces. By using Spline, I am able to create more
					organic and natural-looking shapes, rather than the rigid, straight
					lines often seen in traditional 3D interfaces.
				</p>
			</div>

			<iframe
				id='scene'
				title='car'
				src='https://my.spline.design/carcampingphysicscopy-c1bd9086c90d594caa52dc9193da504c/'
				frameborder='0'
				onMouseEnter={show}
			></iframe>
		</section>
	);
}

export default ThreeDim;
