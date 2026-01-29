import { useEffect, useRef } from 'react';
import ScrollAnimate from './ScrollAnimate';

export default function Testimonial() {
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
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.9)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&auto=format&fit=crop')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-dawn-yellow rounded-full opacity-40 animate-gentle-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-dawn-orange rounded-full opacity-30 animate-float" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Quote icon */}
          <ScrollAnimate animation="zoom-in" duration={600}>
            <div className="inline-flex items-center justify-center w-16 h-16 mb-8">
              <svg className="w-8 h-8 text-dawn-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </ScrollAnimate>

          {/* Quote text */}
          <ScrollAnimate animation="fade-up" delay={200}>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
              "Being a survivor now, I realized I was not educated or aware about what breast cancer actually was and how it{' '}
              <span className="text-dawn-yellow">impacted and affected people.</span>"
            </blockquote>
          </ScrollAnimate>

          {/* Author */}
          <ScrollAnimate animation="fade-up" delay={400}>
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dawn-orange to-dawn-yellow mb-4 p-1 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face" 
                  alt="Rena Hart"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-lg font-semibold text-white">Rena Hart</div>
              <div className="text-dawn-orange-light">Breast Cancer Survivor & Caridad Supporter</div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
