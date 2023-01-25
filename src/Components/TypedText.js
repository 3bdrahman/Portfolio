import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
	const typedRef = useRef(null);

	useEffect(() => {
		if (!typedRef.current) {
			typedRef.current = new Typed('.typed', {
				strings: strings,
				typeSpeed: 50,
				backDelay: 10,
				backSpeed: 30,
				loop: true,
				showCursor: false,
			});
		}
	}, []);

	return <div className='typed'></div>;
};

export default TypedText;
