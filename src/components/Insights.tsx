import { useEffect, useRef, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

const events = [
  {
    id: 1,
    day: '08',
    month: 'Mar',
    title: 'Big Pink Jump March',
    time: '8:00 am',
    location: 'New York',
  },
  {
    id: 2,
    day: '16',
    month: 'Mar',
    title: 'Younger Women Together Online',
    time: '18:00 pm',
    location: 'Online',
  },
  {
    id: 3,
    day: '21',
    month: 'Mar',
    title: 'Women V Cancer – Ride the Night',
    time: '10:00 am',
    location: 'New York',
  },
];

const stories = [
  {
    id: 1,
    date: '20 Jun 2020',
    title: 'How a First-Time Streamer—and a Surprise Visit from Dr. Lupo—Raised $12,000 for Research',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    date: '26 Jun 2020',
    title: 'COVID-19 and Breast Cancer Care: What Patients Need to Know',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    date: '24 Jul 2020',
    title: 'Caridad-Supported Study First to Determine Risk for Women With Gene Mutations',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
  },
];

export default function Insights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'events' | 'stories'>('events');

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
      id="insights"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Minimal background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dawn-cream/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimate animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Brush stroke decoration */}
            <svg
              className="w-32 h-16 mx-auto mb-6"
              viewBox="0 0 200 100"
              fill="none"
            >
              <path
                d="M20 60 Q70 30, 100 50 T180 40"
                stroke="#F5D78E"
                strokeWidth="24"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="70" cy="42" r="4" fill="white" />
              <circle cx="120" cy="48" r="3" fill="white" />
              <circle cx="160" cy="42" r="5" fill="white" />
            </svg>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark mb-6">
              Insights we love to share
            </h2>
            <p className="text-lg text-dawn-gray">
              Ngozi Okonjo-Iweala: How to help Africa? Do business there
            </p>
          </div>
        </ScrollAnimate>

        {/* Tab navigation */}
        <ScrollAnimate animation="fade-up" delay={200}>
          <div className="flex justify-center gap-2 sm:gap-4 mb-12">
            {(['events', 'stories'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 group ${
                  activeTab === tab
                    ? 'bg-[#2D3B2D] text-white shadow-lg'
                    : 'bg-dawn-cream text-dawn-gray hover:bg-dawn-yellow/30'
                }`}
              >
                <span>{tab === 'events' ? 'Upcoming Events' : 'Stories'}</span>
                <span 
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-dawn-orange scale-100' 
                      : 'bg-dawn-gray/20 scale-75 group-hover:scale-90'
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 ${
                      activeTab === tab ? 'text-white ml-0.5' : 'text-dawn-gray'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </ScrollAnimate>

        {/* Content */}
        <ScrollAnimate animation="fade-up" delay={300}>
          <div>
            {activeTab === 'events' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <ScrollAnimate key={event.id} animation="fade-up" delay={index * 100}>
                    <div
                      className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
                    >
                      <div className="flex gap-5">
                        {/* Date */}
                        <div className="flex-shrink-0 w-16 text-center">
                          <div className="text-3xl font-bold text-dawn-dark">{event.day}</div>
                          <div className="text-sm font-medium text-dawn-orange uppercase">{event.month}</div>
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-dawn-dark mb-2 group-hover:text-dawn-orange transition-colors">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-dawn-gray mb-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-dawn-gray">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </div>
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div className="mt-4 h-0.5 bg-gradient-to-r from-dawn-yellow to-dawn-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </ScrollAnimate>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                  <ScrollAnimate key={story.id} animation="fade-up" delay={index * 100}>
                    <article className="group cursor-pointer">
                      {/* Image */}
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gray-100">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="text-sm text-dawn-gray mb-2">{story.date}</div>
                      <h3 className="font-semibold text-dawn-dark leading-snug group-hover:text-dawn-orange transition-colors duration-300">
                        {story.title}
                      </h3>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium text-dawn-orange mt-3 group/link"
                      >
                        Read more
                        <svg
                          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </article>
                  </ScrollAnimate>
                ))}
              </div>
            )}
          </div>
        </ScrollAnimate>

        {/* View all link */}
        <ScrollAnimate animation="fade-up" delay={500}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-dawn-dark text-dawn-dark text-sm sm:text-base font-semibold rounded-full hover:bg-dawn-dark hover:text-white transition-all duration-300"
            >
              View All {activeTab === 'events' ? 'Events' : 'Stories'}
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
