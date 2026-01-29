import ScrollAnimate from './ScrollAnimate';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Texture background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Visible grain/noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Diagonal lines pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #E8730C 0,
              #E8730C 1px,
              transparent 1px,
              transparent 20px
            )`,
          }}
        />
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #2D3B2D 1.5px, transparent 1.5px)`,
            backgroundSize: '30px 30px'
          }}
        />
        {/* Warm accent blob */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-dawn-cream/50 rounded-full blur-3xl" />
        {/* Additional accent blob */}
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-dawn-yellow/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dawn-dark leading-tight mb-6 animate-slide-up">
              Making Social Investments
              <br />
              And Shaping Narratives
            </h1>
            
            <p className="text-lg text-dawn-gray leading-relaxed mb-8 max-w-xl animate-slide-up delay-200" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              The forces of development are too complex, subtle and insufficiently 
              known to yield simple formulas. We work at the intersection of impact 
              investing, storytelling, and systemic change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 bg-[#2D3B2D] text-white font-medium rounded-full hover:bg-[#3D4B3D] transition-colors duration-300 group"
              >
                <span>Learn More</span>
                <span className="w-10 h-10 bg-dawn-orange rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </div>
            
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative flex items-center justify-center">
              {/* Large irregular blob background - yellow */}
              <div 
                className="absolute w-[450px] h-[450px] lg:w-[550px] lg:h-[550px]"
                style={{
                  background: '#F5C842',
                  borderRadius: '60% 40% 50% 70% / 50% 60% 40% 50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              {/* Smaller orange blob - offset */}
              <div 
                className="absolute w-[350px] h-[380px] lg:w-[420px] lg:h-[450px]"
                style={{
                  background: '#E8730C',
                  borderRadius: '70% 30% 50% 60% / 40% 70% 30% 60%',
                  top: '55%',
                  left: '35%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              {/* Small red accent blob */}
              <div 
                className="absolute w-[120px] h-[140px] lg:w-[150px] lg:h-[170px]"
                style={{
                  background: '#D64545',
                  borderRadius: '50% 60% 40% 70% / 60% 40% 70% 50%',
                  bottom: '10%',
                  left: '10%',
                }}
              />
              <img
                src="/src/assets/images/hero1.png"
                alt="Hero"
                className="relative w-full max-w-lg mx-auto object-cover z-10"
              />
            </div>
          </div>
        </div>

        {/* Circular Text Animation */}
        <ScrollAnimate animation="zoom-in" delay={500}>
          <div className="flex justify-center mt-16 lg:mt-24">
            <a href="#what-we-do" className="circular-text-container group cursor-pointer">
              <svg className="circular-text text-dawn-dark" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath href="#circlePath">
                    • EXPLORE MORE • EXPLORE MORE 
                  </textPath>
                </text>
              </svg>
              <div className="circular-text-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-dawn-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
