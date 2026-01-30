import Header from './components/Header';
import Hero from './components/Hero';
import Cause from './components/Cause';
import WhatWeDo from './components/WhatWeDo';
import Impact from './components/Impact';
import Insights from './components/Insights';
import FlipBook from './components/FlipBook';
import Testimonial from './components/Testimonial';
import Donate from './components/Donate';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Cause />
        <WhatWeDo />
        <Impact />
        <Insights />
        <FlipBook />
        <Testimonial />
        <Donate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
