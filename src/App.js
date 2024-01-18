import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Work from './pages/Work/Work';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        
      </Routes>  
      <Footer />
      
      
      
      
    </div>
  );
}

export default App;
