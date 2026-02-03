import { useEffect, useRef } from 'react';
import ScrollAnimate from './ScrollAnimate';

export default function JoinUs() {
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

  const questions = [
    'Do you want to change the world and to shift narratives?',
    'Do you believe businesses have a role to play in solving the world\'s most complex social challenges?',
    'Are you excited at the prospect of turning social ideas and business model concepts on their head?',
    'Do you want to contribute to emerging social development and business model ideas as opposed to simply consuming them?',
    'Do you believe that the forces are complex, subtle and insufficiently known to yield simple formulas?',
    'Are you excited about building creative solutions to complex challenges?',
    'Are you a free thinking outlaw that is constantly wondering why the world is the way it is?',
    'Do you want to undermine the status quo?',
    'Are you conflicted by the saying, "nothing worth doing can be done in a single lifetime?"',
  ];

  return (
    <section
      id="join-us"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#2D3B2D] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-dawn-orange rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-dawn-cream rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimate animation="fade-up" duration={600}>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-white/80 uppercase mb-4 inline-block relative">
              Join Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dawn-orange/20 rounded" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-dawn-orange rounded" />
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              As a Team Member, Partner or Investor
            </h3>
          </div>
        </ScrollAnimate>

        {/* Questions */}
        <div className="space-y-6 mb-12">
          {questions.map((question, index) => (
            <ScrollAnimate key={index} animation="fade-up" delay={index * 50}>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-dawn-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {question}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        {/* Call to action */}
        <ScrollAnimate animation="fade-up" delay={500}>
          <div className="text-center py-12 border-t border-b border-white/20 mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Then you are the one we have been waiting for.
            </p>
          </div>
        </ScrollAnimate>

        {/* Contact */}
        <ScrollAnimate animation="fade-up" delay={600}>
          <div className="text-center">
            <p className="text-lg text-white/80 mb-6">Drop us an email via</p>
            <a
              href="mailto:pesh@dawnelements.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-dawn-orange text-white text-lg font-semibold rounded-full hover:bg-dawn-orange/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              pesh@dawnelements.com
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
