import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Cause from './components/Cause';
import WhatWeDo from './components/WhatWeDo';
import Insights from './components/Insights';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import OurTribe from './components/OurTribe';

function HomePage() {
  return (
    <>
      <Hero />
      <Cause />
      <WhatWeDo />
      <Insights />
      <JoinUs />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-tribe" element={<OurTribe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
