import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimate from './ScrollAnimate';

const teamMembers = [
  {
    name: 'Pesh',
    image: '/images/team/Pesh Casual.png',
    bio: 'Pesh comes to Dawn Elements with experience that spans from tax advisory to climate-smart agribusiness and value addition. For over 10 years, she worked in the climate-smart agribusiness production value chain, from supporting farming communities, to managing manufacturing processes. Eventually, negotiating cutting-edge deals to move products across Africa, Europe and Asia. She is a blazing free spirit, and a karaoke regular.',
  },
  {
    name: 'Cynthia',
    image: '/images/team/cynthia.png',
    bio: 'Cynthia is prolific at organizing and connecting the dots. She has previously worked across a spectrum of industries ranging from pharmaceuticals to tourism. Her work at Dawn Elements is a cocktail of research, shaping ideas through comms, investment analysis, and advisory services. She is a fan of history, reality shows, and all things that involve weekend escapes out of the city.',
  },
  {
    name: 'Twasiima',
    image: '/images/team/Twasiima.png',
    bio: 'Twasiima Bigirwa is a writer and artist. For more than 10 years, Twasiima worked as a lawyer, and later in philanthropy and impact investment. She has an incredible ability to cut through the noise and to see or say things for what they are. Today she spends most of her time in liminal spaces, and currently lives in the UAE where she is in between writing that and editing this for her fifth book.',
  },
  {
    name: 'Pross',
    image: '/images/team/Pross.png',
    bio: 'Pross is our "resident" tax expert, with over a decade of experience, advising on tax solutions for diverse clients, from multinationals to local firms, on tax compliance, optimization, and risk management. She is a magician at designing tax-efficient structures, managing risks, and navigating international taxation complexities. Her thought-leadership extends to publications and high-level forums advising on compliance mechanisms. Her goal at Dawn Elements is to leverage her expertise for impactful social investments and advancing human progress. Pross is "a nomad at heart" and is always ready to indulge in a good travel experience.',
  },
  {
    name: 'Eva',
    image: '/images/team/Eva.png',
    bio: 'With over a decade of experience in social impact, she is a driving force dedicated to addressing critical societal challenges through impact work in social development and community-led actions. Her expertise extends to strategic venture philanthropy, insights on sustainable development and designing system solutions. At Dawn Elements, she advises on making impactful social investments and shaping narratives for human progress. Eva will "leave it all behind," if she was ever offered an opportunity to play in the soccer world cup.',
  },
  {
    name: 'Eshban',
    image: '/images/team/Eshban.png',
    bio: 'Eshban has built experience applying deep systems thinking to an evolving development context. His early career started in the private sector and later evolved to international development and philanthropy. He has over 13 years experience advising impact investment and development organizations as well as governments on creative solutions to complex challenges. He has published on agriculture, macro-financial policy, feminism, energy, and governance. He needs no convincing for plans that involve spending time at the beach.',
  },
  {
    name: 'Stuart',
    image: '/images/team/Stuart.png',
    bio: 'Stuart AKA "Design Carpenter" leads our design thinking work. He has worked extensively across both for-profit and non-profit organisations supporting them to elevate narratives that work. He is our resident design thinker, who moves seamlessly across abstract and practical matters, and is also a farmer. A true problem solver in all the ways.',
  },
];

export default function OurTribe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-white pt-28 pb-24">
      {/* Hero area */}
      <div className="relative overflow-hidden">
        <img
          src="/images/team/fawn%20header.png"
          alt="Our Tribe"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <ScrollAnimate animation="fade-up" duration={600}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              Our Tribe
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We are a small part of the many that are building what comes next. We believe that current systems were built by people — so people can build new systems that work for all. We are part of that effort. Come join us.
            </p>
          </ScrollAnimate>
        </div>
      </div>

      {/* Team grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {teamMembers.map((member, index) => {
            const card = (
              <div className="group">
                {/* Image placeholder */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-dawn-cream">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      className="relative z-10 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.classList.remove('opacity-0');
                        const fallback = img.parentElement?.querySelector('[data-fallback]');
                        if (fallback) (fallback as HTMLElement).style.display = 'none';
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  {/* Fallback placeholder shown when image hasn't loaded */}
                  <div data-fallback className="absolute inset-0 flex flex-col items-center justify-center text-dawn-gray/40 pointer-events-none">
                    <svg
                      className="w-16 h-16 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm font-medium">{member.name}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3B2D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-dawn-dark mb-3 group-hover:text-dawn-orange transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Bio */}
                <p className="text-dawn-gray leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            );

            // First 3 cards visible immediately, rest animate on scroll
            return index < 3 ? (
              <div key={member.name}>{card}</div>
            ) : (
              <ScrollAnimate key={member.name} animation="fade-up" delay={(index - 3) * 100}>
                {card}
              </ScrollAnimate>
            );
          })}
        </div>
      </div>

      {/* Back to home CTA */}
      <div className="text-center pb-12">
        <ScrollAnimate animation="fade-up">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D3B2D] text-white font-semibold rounded-full hover:bg-dawn-orange transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Back to Home
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  );
}
