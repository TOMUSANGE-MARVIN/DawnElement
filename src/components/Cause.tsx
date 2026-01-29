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
              className="glitch text-5xl md:text-6xl lg:text-7xl font-extrabold text-dawn-orange mb-6 tracking-tight whitespace-nowrap"
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
            <p className="text-lg text-dawn-gray leading-relaxed">
              The forces of development are too complex, subtle and insufficiently known to yield simple formulas.
            </p>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
