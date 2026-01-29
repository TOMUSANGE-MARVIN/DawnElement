import { useEffect, useRef } from 'react';
import ScrollAnimate from './ScrollAnimate';



export default function Impact() {
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
      id="impact"
      ref={sectionRef}
      className="relative bg-dawn-cream overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Top section with content and image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left content */}
          <div>
            {/* Header */}
            <ScrollAnimate animation="fade-right" duration={600}>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl font-semibold tracking-widest text-dawn-orange uppercase">
                  Impact
                </span>
              </div>
            </ScrollAnimate>

            {/* Main Title */}
            <ScrollAnimate animation="fade-up" delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3B2D] leading-tight mb-8">
                Measuring what matters<br />is how we define success.
              </h2>
            </ScrollAnimate>

            {/* Subtitle & Description */}
            <ScrollAnimate animation="fade-up" delay={200}>
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-[#2D3B2D] mb-3">
                  Social Investments & Narratives
                </h3>
                <p className="text-dawn-gray max-w-2xl">
                  We use our strategic investments in food security and agribusiness value addition 
                  to weave opportunities that acknowledge intersectionality and enable systems change.
                </p>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right image */}
          <ScrollAnimate animation="fade-left" delay={300}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <img 
                  src="/src/assets/images/side.png" 
                  alt="Community impact"
                  className="w-full h-auto object-cover "
                />
                
              </div>
            </div>
          </ScrollAnimate>
        </div>

        

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Social Investments */}
          <ScrollAnimate animation="fade-up" delay={100}>
            <div>
              <h4 className="text-lg font-semibold text-[#2D3B2D] mb-3">
                Social Investments
              </h4>
              <p className="text-dawn-gray mb-8">
                Opportunities allow for people to fulfill their own dreams with agency and dignity. 
                Our work recognises that for people and communities, opportunities come in many shades.
              </p>
              
              {/* Tree Illustration */}
              <div className="relative w-48 h-56">
                <svg viewBox="0 0 200 240" className="w-full h-full">
                  {/* Tree trunk */}
                  <path
                    d="M90 240 L90 160 Q85 140 95 130 L95 240 Z"
                    fill="#8B4513"
                  />
                  <path
                    d="M95 240 L95 130 Q100 120 105 130 L110 240 Z"
                    fill="#A0522D"
                  />
                  {/* Tree foliage layers */}
                  <ellipse cx="100" cy="100" rx="70" ry="55" fill="#228B22" />
                  <ellipse cx="80" cy="85" rx="45" ry="40" fill="#2E8B2E" />
                  <ellipse cx="120" cy="90" rx="40" ry="35" fill="#32CD32" />
                  <ellipse cx="100" cy="70" rx="35" ry="30" fill="#228B22" />
                  <ellipse cx="95" cy="55" rx="25" ry="22" fill="#2E8B2E" />
                </svg>
              </div>
            </div>
          </ScrollAnimate>

          {/* Right Column - Advisory Services */}
          <ScrollAnimate animation="fade-up" delay={250}>
            <div>
              {/* Handshake Illustration */}
              <div className="mb-8">
                <svg viewBox="0 0 200 120" className="w-48 h-28">
                  {/* Left hand */}
                  <path
                    d="M20 60 Q30 40 50 45 L70 55 Q80 58 85 65 L90 75 Q85 85 75 82 L55 75 Q40 72 30 78 Q20 82 15 75 Q10 68 20 60 Z"
                    fill="#2D3B2D"
                    stroke="#1a251a"
                    strokeWidth="2"
                  />
                  {/* Right hand */}
                  <path
                    d="M180 60 Q170 40 150 45 L130 55 Q120 58 115 65 L110 75 Q115 85 125 82 L145 75 Q160 72 170 78 Q180 82 185 75 Q190 68 180 60 Z"
                    fill="#2D3B2D"
                    stroke="#1a251a"
                    strokeWidth="2"
                  />
                  {/* Handshake connection */}
                  <path
                    d="M85 65 L115 65 Q120 60 115 55 L100 50 Q95 48 90 50 L85 55 Q80 60 85 65 Z"
                    fill="#F5DEB3"
                    stroke="#d4c4a8"
                    strokeWidth="1"
                  />
                  {/* Cuff details */}
                  <rect x="5" y="70" width="25" height="15" rx="3" fill="#1a251a" />
                  <rect x="170" y="70" width="25" height="15" rx="3" fill="#1a251a" />
                </svg>
              </div>

              <h4 className="text-lg font-semibold text-[#2D3B2D] mb-3">
                Advisory Services
              </h4>
              <p className="text-dawn-gray">
                We take what we are seeing and learning, to shape and provide advice, 
                information, data and rigorous analysis to those interested in understanding 
                the political-economy and social investment context.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </div>

     
    </section>
  );
}
