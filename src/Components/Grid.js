import { Visibility } from '@mui/icons-material';
import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Grid.css';
import { projectData } from './projectData';
const Grid = () => {
	const show = (key) => {
		const title = document.querySelector('h3.neonText' + `${key + 1}`);
		if (title) {
			if (key % 2 == 0) {
				if (title.classList.contains('slide-out-left')) {
					title.classList.remove('slide-out-left');
				}
				title.classList.add('slide-in-left');
			} else {
				if (title.classList.contains('slide-out-right')) {
					title.classList.remove('slide-out-right');
				}
				title.classList.add('slide-in-right');
			}

			title.style.visibility = 'visible';
		}
		const desc = document.querySelector('p.neonText' + `${key + 1}`);
		if (desc) {
			if (key % 2 == 0) {
				if (desc.classList.contains('slide-out-left')) {
					desc.classList.remove('slide-out-left');
				}
				desc.classList.add('slide-in-left');
			} else {
				if (desc.classList.contains('slide-out-right')) {
					desc.classList.remove('slide-out-right');
				}
				desc.classList.add('slide-in-right');
			}
			desc.style.visibility = 'visible';
		}
	};
	const hide = (key) => {
		const title = document.querySelector('h3.neonText' + `${key + 1}`);
		if (title) {
			if (key % 2 == 0) {
				title.classList.remove('slide-in-left');
				title.classList.add('slide-out-left');
			} else {
				title.classList.remove('slide-in-left');
				title.classList.add('slide-out-right');
			}
			title.style.visibility = 'hidden';
		}
		const desc = document.querySelector('p.neonText' + `${key + 1}`);
		if (desc) {
			if (key % 2 == 0) {
				desc.classList.add('slide-out-left');
				desc.classList.remove('slide-in-left');
			} else {
				desc.classList.add('slide-out-right');
				desc.classList.remove('slide-in-right');
			}
			desc.style.visibility = 'hidden';
		}
	};
	return (
		<section id='protofolio' className='container'>
			<div className='grid image-grid'>
				{projectData.map((data, key) => {
					return (
						<div
							key={key}
							className='grid-block'
							onMouseEnter={() => {
								show(key);
							}}
							onMouseLeave={() => {
								hide(key);
							}}
						>
							<div className='tile'>
								{(key + 1) % 2 === 0 && (
									<div className='tile-details'>
										<h3 className={'tile-title neonText' + `${key + 1}`}>
											{data.title}
										</h3>
										<p className={'tile-desc neonText' + `${key + 1}`}>
											{data.description}
										</p>
									</div>
								)}
								{(key + 1) % 2 === 1 && (
									<div className='tile-details-right'>
										<h3 className={'tile-title neonText' + `${key + 1}`}>
											{data.title}
										</h3>
										<p className={'tile-desc neonText' + `${key + 1}`}>
											{data.description}
										</p>
									</div>
								)}
								<a className='tile-link ' href={data.link}>
									{console.log(data.image)}
									<img
										className={'tile-img tile-img' + `${key + 1}`}
										src={data.image}
										alt='img'
									/>
								</a>
							</div>
						</div>
					);
				})}
			</div>
			{/* <div class='grid image-grid'>
				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img1'
								src='https://lh3.googleusercontent.com/pw/ACtC-3eqDpYXSzQK9Gr8Dm6pRBTXg65teqvPUlndvrG31BEmbHGYSiGja4ZhpI86_b5pYG_nWHZvi0-a2svpmvqtfGHSqLAypliNdl9vI-xGKT0XixvVSzroZ0e7HXFeyVoNyU5XMuMoEzf5f6VgQbmIO2yr=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img2'
								src='https://lh3.googleusercontent.com/pw/ACtC-3eO9L51TGiTghLao-VLNhO_C0egdgv7NfamlpdYbMAKCfXNlkk7WPPcxMJTaU9hO-HNnTqUivtavZ-6iK9mzoq0Qf3kJ5MAcnCoDUqbzd8VzpFKhu3mqDYZBG0KNGVxNHSEUwUiTxCUEFf_yFnNNLL0=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img3'
								src='https://lh3.googleusercontent.com/pw/ACtC-3dhqk2CMZiOyFNPfjfffFIRIp1r9XjSNhfWHXk3gHDNf0hGwwWtXlQbtTf7DBp9t_KnCVull_WGpXNDVRtLkslw1qskUAjbSMEilFituKSeJVKqzVbsTFOeLfvd92nowevb7EGG3Pno37_WfsShZnYP=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img4'
								src='https://lh3.googleusercontent.com/pw/ACtC-3eYKEnL-pUFhF9aCKHKKRNrWEyJJ-7SCD8-EJLpBkVKp6jIHEKvBGiOL0hPW5f6UAcyoxaR06XRDUayk0NaQMxpSWCjnNyqdypHsIzrPfSwQZmOBR4-i3VCc0Ywg9CUmFYv2vs-rbmEmio2-4ZUuokZ=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img5'
								src='https://lh3.googleusercontent.com/pw/ACtC-3ckl0QrFbuW3W6VJ88rW0TeCZYumT9H7ZzN1dW6nrxOcf6mxEYT79iai43_T8i9AbiViFkpJBqVtS6d7loh-IgUwviFhdnkg1U-BNgeBPvstSBHCqWokHbx3EIHTkZFh3QkaTykBxZH7BqYvni2ukTL=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img6'
								src='https://lh3.googleusercontent.com/pw/ACtC-3csXE_23DqssKWd76nUGNa5re7em4ySmZEif2L_jxJBpIV0pV3qHYXQope682nX2Qs04nhMHVZlNNwbUGzz6CWjaywX5VaH5TX2Wrh0iocAk5aRrN2ud7H55mGYdR-z-QEyK5ckiZ4BGZLiSpXe-TmD=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img7'
								src='https://lh3.googleusercontent.com/pw/ACtC-3fbpkwsUjaB8Cv6JFW_Z5E_7WjTwR3hEfafXoDmSsxBN_I_TKHLw3ngMCcOhYVv0KrzdJpjBfRzmTPVUikRZpyy53lb10ENbvWxrP-Hf83Y1KXc2RG0zLXoXqQjaT7NP9bBKEY7iv2I8sRIUJxCU9ql=w1703-h973-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img8'
								src='https://lh3.googleusercontent.com/pw/ACtC-3cCwp7dKtvwMA8uf_Y3OTxZz-CiYRpay0fSZhfqYXCeDWBBfQERYnB7DzDCbsyyzdzoOU7_9BbW3WR5VaY9YPD3syn3VgZDxj6-2qTOwDw_HDlnLd92LlvCZIEr8oDKVt4AU7q-oJNHE6O9sRhGAVMi=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img9'
								src='https://lh3.googleusercontent.com/pw/ACtC-3ffctj4lOMbhO6QA2a-9o24LTDFytAw4WAnxkpZr3fCDQHPyXTXeXqaI7KrD2ktnpXyfzGKvsax_oekoUGojWEGc9Ghte4ycSxgx6ZydR3LsnJlXO5zKwpoZYIBCIlYxxpq2PNcc9irUdA7P68_rdSY=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>

				<div class='grid-block'>
					<div class='tile'>
						<a class='tile-link' href='#'>
							<img
								class='tile-img tile-img10'
								src='https://lh3.googleusercontent.com/pw/ACtC-3dM37DnDx6OrPA4-VazUuGM5p9grWJtW8SLNQ9vo3xZlGTHw8wt6NXShF3umpCjoaM6XUyvIDl8una8MAd4z-hU23Fuz9_AjCkTpQ4YV3k5C0cXPzAq70WhaKHAEFHKcDXGVqAZVl5HgOSr9hSbHrLr=w1384-h791-no'
								alt='Image'
							/>
						</a>
					</div>
				</div>
			</div> */}
		</section>
	);
};

export default Grid;
