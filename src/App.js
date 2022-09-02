
import './App.css';
import Banner from './Components/Banner';
import Experience from './Components/Experience';
import Header from './Components/Header';
import Protofolio from './Components/Protofolio';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function App() {
  return (
    <div className="App">
    
        <Header />
        <Banner />
        <Protofolio/>
        <Skills/>
        <Experience/>
        <Footer/>
        
    </div>
  );
}

export default App;
