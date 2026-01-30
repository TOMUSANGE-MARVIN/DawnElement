import ScrollAnimate from './ScrollAnimate';

export default function Cause() {
  return (
    <section id="cause" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
            {/* Brush stroke decoration */}
            <ScrollAnimate animation="fade-right" duration={600}>
              <svg
                viewBox="0 0 300 150"
                className="w-48 h-24 mb-8"
                fill="none"
              >
                <path
                  d="M20 100 Q60 40, 140 70 Q220 100, 280 50"
                  stroke="#F5D78E"
                  strokeWidth="40"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="80" cy="65" r="5" fill="white" />
                <circle cx="140" cy="72" r="4" fill="white" />
                <circle cx="200" cy="68" r="6" fill="white" />
              </svg>
            </ScrollAnimate>
            <ScrollAnimate animation="zoom-in" duration={800} delay={100}>
              <h1 
                className="glitch text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-dawn-orange mb-6 tracking-tight"
                data-text="OUR MISSION IS SIMPLE"
              >
                OUR MISSION IS SIMPLE
              </h1>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={200}>
              <span className="inline-block text-sm font-semibold tracking-widest text-dawn-gray uppercase mb-4">
                Cause
              </span>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade-up" delay={300}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark leading-tight mb-6">
                Making Social Investments And Shaping Narratives
              </h2>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade-up" delay={400}>
              <p className="text-lg text-dawn-gray leading-relaxed mb-8">
                The forces of development are too complex, subtle and insufficiently known to yield simple formulas. We work at the intersection of impact investing, storytelling, and systemic change.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={500}>
              <a
                href="#what-we-do"
                className="w-fit inline-flex items-center gap-2 pl-4 pr-0.5 py-0.5 sm:pl-6 sm:pr-1.5 sm:py-1.5 bg-[#2D3B2D] text-white text-xs sm:text-base font-medium rounded-full hover:bg-[#3D4B3D] transition-colors duration-300 group"
              >
                <span>Learn More</span>
                <span className="w-7 h-7 sm:w-10 sm:h-10 bg-dawn-orange rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </a>
            </ScrollAnimate>
          </div>
          
      </div>
    </section>
  );
}
