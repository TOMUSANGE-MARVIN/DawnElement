import { useEffect, useRef, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

const services = [
  {
    id: 'opportunities',
    title: 'Extending Opportunities',
    description:
      'extending opportunities” with “Social Investment” under that including this text “We deploy capital across sectors from housing and agriculture to private credit and money markets. We believe in investing in the full spectrum of human needs for blended returns.” Also replace the words “Food Security” with the “Marifa Village',
    highlights: ['Food Security', 'Agribusiness Value Addition'],
    quote: '',
    quoteAuthor: 'Audre Lorde',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop',
  },
  {
    id: 'narratives',
    title: 'Narratives',
    description:
      'Narratives shape our perceptions, which in turn form our realities. Those realities influence our attitudes and our actions. We believe narratives, storytelling and thought leadership are one of the most powerful ways to influence and inspire thought and action.',
    highlights: ['Public Art', 'Alternative Thinking Spaces'],
    quote: null,
    quoteAuthor: null,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
  },
  {
    id: 'advisory',
    title: 'Advisory Services',
    description:
      'We take what we are seeing and learning, to shape and provide advice, information, data and rigorous analysis to those interested in understanding the political-economy and social investment context.',
    highlights: ['Strategy & Insights', 'Knowledge Economy'],
    quote: null,
    quoteAuthor: null,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop',
  },
  
  
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-animate through services
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on user interaction, resume after 10 seconds
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

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
      id="what-we-do"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#FFF8F0] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimate animation="fade-up" duration={600}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-dawn-gray uppercase mb-4 inline-block relative">
              What We Do
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dawn-orange/20 rounded" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-dawn-orange rounded" />
            </h2>
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate animation="fade-up" delay={200}>
          <div className="max-w-3xl mx-auto mb-16 text-center">
         
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark leading-tight mb-6">
             Building bridges between social investment and the things that matter to us.
            </h2>
            <p className="text-lg text-dawn-gray leading-relaxed">
             We use our strategic investments to advance systems (social) change for the development issues that are not seen as "sexy " or "urgent enough.”
            </p>
          </div>
        </ScrollAnimate>


        {/* Expandable Card Carousel */}
        <ScrollAnimate animation="fade-up" delay={300}>
          <div className="card-carousel">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card-item ${index === activeIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${service.image})` }}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-item-content">
                  <h3>{service.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="highlights flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-dawn-orange/90 text-white text-xs font-medium rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  {service.quote && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-xs text-white/70 italic">{service.quote}</p>
                      <p className="text-xs text-dawn-orange mt-1">— {service.quoteAuthor}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
