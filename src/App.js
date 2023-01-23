
import './App.css';
import Banner from './Components/Banner';

import Header from './Components/Header';

import Skills from './Components/Skills';
import Footer from './Components/Footer';

import Grid from './Components/Grid';
import ThreeDim from './Components/ThreeDim';
function App() {
	return (
		<div className='App'>
			<Header />
			<Banner />
			<Grid />
			<ThreeDim />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
