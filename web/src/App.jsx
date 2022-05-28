import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import ToTop from './components/ToTop/ToTop';

const App = () => {
  const featureRef = useRef(null);
  const faqRef = useRef(null);
  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      minHeight: "100vh", 
      paddingBottom: "40rem", 
      backgroundColor: "#FAFAFA" 
    }}>
      <BrowserRouter>
        <Navbar featureRef={featureRef} faqRef={faqRef} />
        <Routes>
          <Route path='/' exact element={<Home featureRef={featureRef} faqRef={faqRef} />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer featureRef={featureRef} faqRef={faqRef} />
        <ToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
