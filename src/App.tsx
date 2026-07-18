import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import Academics from './pages/Academics';
import CodingHub from './pages/CodingHub';
import Opportunities from './pages/Opportunities';
import CampusGuide from './pages/CampusGuide';
import StateCommunities from './pages/StateCommunities';
import SeniorCorner from './pages/SeniorCorner';
import ClubsEvents from './pages/ClubsEvents';
import StudentToolkit from './pages/StudentToolkit';
import FreshersGuide from './pages/FreshersGuide';
import Resources from './pages/Resources';
import StudentSpotlight from './pages/StudentSpotlight';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <main key={location.pathname} className="flex-1 page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/coding-hub" element={<CodingHub />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/campus-guide" element={<CampusGuide />} />
        <Route path="/state-communities" element={<StateCommunities />} />
        <Route path="/senior-corner" element={<SeniorCorner />} />
        <Route path="/clubs-events" element={<ClubsEvents />} />
        <Route path="/student-toolkit" element={<StudentToolkit />} />
        <Route path="/freshers-guide" element={<FreshersGuide />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/student-spotlight" element={<StudentSpotlight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      {!booted && <PageLoader />}
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
