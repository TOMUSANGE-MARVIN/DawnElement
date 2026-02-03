import Header from './components/Header';
import Hero from './components/Hero';
import Cause from './components/Cause';
import WhatWeDo from './components/WhatWeDo';
import Insights from './components/Insights';
import JoinUs from './components/JoinUs';
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
        <Insights />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
