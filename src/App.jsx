import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

function App() {

  return (
 
   <BrowserRouter>
      <NavigationBar /> 
     <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App
