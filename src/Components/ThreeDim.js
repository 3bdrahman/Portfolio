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
        This summer, I've developed an interactive project enabling conversation with a ChatGPT-powered avatar. Key features include:
    
    <ul>
        <li className='spotlight_list'>
            <strong>Morph Targets Mapping:</strong>
            <p>I integrated Microsoft-speech-sdk with Oculus Viseme to produce accurate mouth movements. This delivers smooth speech animations synchronized with audio cues.</p>
        </li>

        <li>
            <strong>Interpolation:</strong>
            <p>For lifelike speech animation, I adopted a curve-like transition process. It ensures that mouth expressions transition smoothly, in line with the accompanying audio.</p>
        </li>

        <li>
            <strong>Latency Solutions:</strong>
            <p>Given potential delays from ChatGPT API response times, I'm introducing 'filler' animations. During extended responses, the system will utilize locally stored phrases like "Let me think", enhancing user experience and immersion. Look forward to this in the next update.</p>
        </li>
    </ul>
	</p>
</div>


<iframe
    id='video'
    title='youtubeVideo'
    width="720" 
    height="512"
    src="https://www.youtube.com/embed/xh9OFpcbLtw" 
    frameborder='0' 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen="true"
    onMouseEnter={show}
></iframe>

		</section>
	);
}

export default ThreeDim;
