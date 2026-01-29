import { useEffect, useRef } from 'react';
import ScrollAnimate from './ScrollAnimate';

export default function Donate() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="join"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dawn-cream overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollAnimate animation="fade-right" duration={600}>
              <span className="inline-block text-sm font-semibold tracking-widest text-dawn-orange uppercase mb-4">
                Make a Difference
              </span>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark leading-tight mb-6">
                Help support{' '}
                <span className="brush-underline">women in need</span>
              </h2>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up" delay={200}>
              <p className="text-lg text-dawn-gray leading-relaxed mb-8">
                Your contribution helps us continue our work in extending opportunities, 
                shaping narratives, and providing advisory services to communities around the world.
              </p>
            </ScrollAnimate>

            

            {/* CTA */}
            <ScrollAnimate animation="fade-up" delay={300}>
              <a
                href="#donate"
                className="inline-flex items-center gap-2 sm:gap-3 pl-5 sm:pl-6 pr-1 sm:pr-1.5 py-1 sm:py-1.5 bg-[#2D3B2D] text-white text-sm sm:text-base font-medium rounded-full hover:bg-[#3D4B3D] transition-colors duration-300 group"
              >
                <span>Contribute Now</span>
                <span className="w-8 h-8 sm:w-10 sm:h-10 bg-dawn-orange rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
              </a>
            </ScrollAnimate>
          </div>

          {/* Ribbon illustration */}
          <ScrollAnimate animation="fade-left" delay={200}>
            <div className="flex justify-center">
              <div className="relative">
                {/* Ribbon SVG */}
                <svg
                  className="w-48 h-64"
                  viewBox="0 0 200 250"
                  fill="none"
                >
                  {/* Ribbon shape */}
                  <path
                    d="M100 20 
                       C60 20, 40 50, 40 80 
                       C40 120, 100 140, 100 140 
                       C100 140, 160 120, 160 80 
                       C160 50, 140 20, 100 20"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  {/* Left tail */}
                  <path
                    d="M70 130 L50 200 L80 170"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Right tail */}
                  <path
                    d="M130 130 L150 200 L120 170"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
