import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import MasonryGallery from './pages/MasonryGallery';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Page from './pages/Company/Page'
import Company from './pages/Company/Company';
import Mentors from './pages/Company/mentors'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/gallery' element={<MasonryGallery/>} />
        </Routes>
        <Routes>
          <Route path='/company' element={<Company/>} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <Routes>
          <Route path='/faq' element={<Faq />} />
        </Routes>
        <Routes>
          <Route path='/mentors' element={<Mentors />} />
        </Routes>
        <Routes>
        <Route path='/company/:id' element={<Page/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
