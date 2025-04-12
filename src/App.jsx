import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './component/navbar';
import Footer from './component/foooter';
import CustomCursor from './component/cursor';
import useAutoScroll from './component/cursor/autoscole';
import SocialSidebar from './component/social/index';

function App() {
  useAutoScroll();

  return (
    <div className="bg-royal min-h-screen text-white">
      <CustomCursor/>
      <SocialSidebar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
