import ScrollAnimate from './ScrollAnimate';

export default function Hero() {
  return (
    <>
      {/* Video Hero Section */}
      <section
        id="home"
        className="relative h-screen overflow-hidden"
      >
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Dawn.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Circular Text Animation - at bottom of video */}
        <div className="absolute bottom-8 lg:bottom-16 left-0 right-0 flex justify-center z-10">
          <ScrollAnimate animation="zoom-in" delay={500}>
            <a href="#hero-content" className="group cursor-pointer relative w-[120px] h-[120px] block">
              {/* Rotating text */}
              <svg 
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
                style={{ animationDuration: '10s' }}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text className="text-[9px] font-semibold uppercase tracking-wider" fill="#1A1A1A">
                  <textPath href="#circlePath">
                    • EXPLORE MORE • EXPLORE MORE • EXPLORE MORE 
                  </textPath>
                </text>
              </svg>
              {/* Orange center button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-dawn-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </a>
          </ScrollAnimate>
        </div>
      </section>
    </>
  );
}
