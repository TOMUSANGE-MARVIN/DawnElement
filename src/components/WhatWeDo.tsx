import { useEffect, useRef, useState } from 'react';
import CircularGallery from './CircularGallery';
import ScrollAnimate from './ScrollAnimate';

const services = [
  {
    id: 'opportunities',
    title: 'Extending Opportunities',
    description:
      'Opportunities allow for people to fulfill their own dreams with agency and dignity. Our work recognises that for people and communities, opportunities come in many shades.',
    highlights: ['Food Security', 'Agribusiness Value Addition'],
    quote: '"There is no such thing as a single-issue struggle because we do not live single-issue lives."',
    quoteAuthor: 'Audre Lorde',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop',
  },
  {
    id: 'narratives',
    title: 'Narratives',
    description:
      'Narratives shape our perceptions, which in turn form our realities. Those realities influence our attitudes and our actions. We believe narratives, storytelling and thought leadership are one of the most powerful ways to influence and inspire thought and action.',
    highlights: ['Peacock Village', 'Arts & Culture Platform'],
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
  {
    id: 'community',
    title: 'Community Building',
    description:
      'We foster connections between changemakers, innovators, and communities. By creating spaces for dialogue and collaboration, we help build resilient networks that drive lasting social change.',
    highlights: ['Network Development', 'Partnership Building'],
    quote: null,
    quoteAuthor: null,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop',
  },
  {
    id: 'research',
    title: 'Research & Learning',
    description:
      'We generate knowledge and insights that inform better decision-making. Through rigorous research and continuous learning, we contribute to the evidence base for effective social investment.',
    highlights: ['Impact Measurement', 'Policy Research'],
    quote: null,
    quoteAuthor: null,
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&auto=format&fit=crop',
  },
  {
    id: 'capacity',
    title: 'Capacity Strengthening',
    description:
      'We invest in building the capabilities of individuals and organizations. From leadership development to organizational strengthening, we help partners maximize their impact potential.',
    highlights: ['Leadership Programs', 'Skills Development'],
    quote: null,
    quoteAuthor: null,
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop',
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
        <ScrollAnimate animation="fade-right" duration={600}>
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-dawn-gray uppercase mb-4 relative inline-block">
              What We Do
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dawn-orange/20 rounded" />
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-dawn-orange rounded" />
            </h2>
          </div>
        </ScrollAnimate>
        
        <ScrollAnimate animation="fade-up" delay={200}>
          <div className="max-w-3xl mb-16">
         
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark leading-tight mb-6">
              Building bridges between impact and opportunity
            </h2>
            <p className="text-lg text-dawn-gray leading-relaxed">
              We use our strategic investments in food security and agribusiness value addition 
              to weave opportunities that acknowledge intersectionality and enable systems change 
              for the world's most marginalised groups.
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

        {/* Circular Gallery */}
        <ScrollAnimate animation="zoom-in" delay={400}>
          <div className="mt-20">
            <div className="h-[500px] w-full">
              <CircularGallery
                bend={2}
                textColor="#1A1A1A"
                borderRadius={0.05}
                font="bold 24px sans-serif"
              />
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
