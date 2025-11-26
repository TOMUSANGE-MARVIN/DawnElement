'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function GalleryPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Gallery images with categories - Real RNADW photos from International Week of Deaf People 2025
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.pixieset.com/763373001/312a2946fc306bd81120cac612274c59-cover.jpg',
      title: 'Community Workshop',
      category: 'Training & Education',
      categoryColor: '#FACC15',
      description: 'Skills development workshop for deaf women'
    },
    {
      id: 2,
      url: 'https://images.pixieset.com/763373001/8b5564626598f9d4a1a8b19670b10d67-large.jpg',
      title: 'Leadership Summit',
      category: 'Events',
      categoryColor: '#2563EB',
      description: 'Annual leadership conference bringing women together'
    },
    {
      id: 3,
      url: 'https://images.pixieset.com/763373001/2b255b3c3c31e09d0bad31e02f62cb40-large.jpg',
      title: 'Sign Language Class',
      category: 'Training & Education',
      categoryColor: '#FACC15',
      description: 'Teaching sign language to community members'
    },
    {
      id: 4,
      url: 'https://images.pixieset.com/763373001/7eb1454c02cd1fbbc86b79d9cb977edd-large.jpg',
      title: 'Advocacy Campaign',
      category: 'Advocacy',
      categoryColor: '#EC4899',
      description: 'Raising awareness for deaf women\'s rights'
    },
    {
      id: 5,
      url: 'https://images.pixieset.com/763373001/b603c9b9c49700a8fcdd4f08d3286575-large.jpg',
      title: 'Vocational Training',
      category: 'Economic Empowerment',
      categoryColor: '#10B981',
      description: 'Tailoring and crafts training program'
    },
    {
      id: 6,
      url: 'https://images.pixieset.com/763373001/891771924f7d80bdf9469eb5a30ee93c-large.jpg',
      title: 'Team Meeting',
      category: 'Events',
      categoryColor: '#2563EB',
      description: 'Planning session with RNADW leadership'
    },
    {
      id: 7,
      url: 'https://images.pixieset.com/763373001/ed73e7a7f1d57bc95e8d7f8d927007e2-large.jpg',
      title: 'Health Awareness',
      category: 'SRHR',
      categoryColor: '#EC4899',
      description: 'Sexual and reproductive health education session'
    },
    {
      id: 8,
      url: 'https://images.pixieset.com/763373001/859411c7dc6201ba5807bf4c3d1ebef9-large.jpg',
      title: 'Business Training',
      category: 'Economic Empowerment',
      categoryColor: '#10B981',
      description: 'Entrepreneurship workshop for deaf women'
    },
    {
      id: 9,
      url: 'https://images.pixieset.com/763373001/ee422d904fcfc700aed8265655dd9490-large.jpg',
      title: 'Community Outreach',
      category: 'Advocacy',
      categoryColor: '#EC4899',
      description: 'Reaching out to rural communities'
    },
    {
      id: 10,
      url: 'https://images.pixieset.com/763373001/46bbd7376face3762ac1aee2b8f3c5c7-large.jpg',
      title: 'Celebration Event',
      category: 'Events',
      categoryColor: '#2563EB',
      description: 'Celebrating achievements and milestones'
    },
    {
      id: 11,
      url: 'https://images.pixieset.com/763373001/417d1e5956c2290edbec562c2f465284-large.jpg',
      title: 'Mentorship Program',
      category: 'Training & Education',
      categoryColor: '#FACC15',
      description: 'One-on-one mentorship for young deaf women'
    },
    {
      id: 12,
      url: 'https://images.pixieset.com/763373001/14667cda9a43afd88b47f71884ac3374-large.jpg',
      title: 'Cooperative Meeting',
      category: 'Economic Empowerment',
      categoryColor: '#10B981',
      description: 'Women\'s savings cooperative gathering'
    },
  ];

  // Category badge colors
  const getCategoryGlow = (color: string) => {
    const glowMap: { [key: string]: string } = {
      '#FACC15': 'rgba(250, 204, 21, 0.5)',
      '#2563EB': 'rgba(37, 99, 235, 0.5)',
      '#EC4899': 'rgba(236, 72, 153, 0.5)',
      '#10B981': 'rgba(16, 185, 129, 0.5)',
    };
    return glowMap[color] || 'rgba(255, 255, 255, 0.3)';
  };

  return (
    <main className="min-h-screen">

      {/* HERO SECTION - Left Aligned */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">

          {/* Label */}
          <div
            ref={heroLabel.ref}
            className={`flex items-center gap-3 mb-6 scroll-animate delay-100 ${heroLabel.isVisible ? 'visible' : ''}`}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Photo Gallery</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Moments That<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Matter</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-10 scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Capturing the journey of empowerment, education, and advocacy. Explore snapshots from our workshops, events, and community initiatives across Rwanda.
          </p>

        </div>
      </section>

      {/* GALLERY SECTION - Neon Billboard Grid */}
      <section className="relative py-24 bg-black overflow-hidden">

        {/* Animated neon lines background */}
        <div className="absolute inset-0">
          {/* Horizontal moving lines */}
          <div className="absolute top-0 left-0 w-full h-px opacity-20 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, #FACC15, transparent)',
              animation: 'slide 8s linear infinite'
            }} />
          <div className="absolute top-1/3 left-0 w-full h-px opacity-20 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, #2563EB, transparent)',
              animation: 'slide 10s linear infinite',
              animationDelay: '2s'
            }} />
          <div className="absolute top-2/3 left-0 w-full h-px opacity-20 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, #EC4899, transparent)',
              animation: 'slide 12s linear infinite',
              animationDelay: '4s'
            }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-1 w-16 rounded-full animate-pulse" style={{ backgroundColor: '#FACC15', boxShadow: '0 0 20px #FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-white">
              {galleryImages.length} Photos
            </span>
            <div className="h-1 w-16 rounded-full animate-pulse" style={{ backgroundColor: '#2563EB', boxShadow: '0 0 20px #2563EB' }} />
          </div>

          {/* Neon Billboard Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
            {galleryImages.map((image, index) => {
              const cardAnimation = useScrollAnimation(0.2);

              // Bento-style spans for varied sizes
              const layouts = [
                'md:col-span-2 md:row-span-2', // Large
                'md:col-span-1 md:row-span-1', // Small
                'md:col-span-1 md:row-span-2', // Tall
                'md:col-span-2 md:row-span-1', // Wide
                'md:col-span-1 md:row-span-1', // Small
                'md:col-span-1 md:row-span-1', // Small
                'md:col-span-2 md:row-span-1', // Wide
                'md:col-span-1 md:row-span-2', // Tall
                'md:col-span-1 md:row-span-1', // Small
                'md:col-span-2 md:row-span-2', // Large
                'md:col-span-1 md:row-span-1', // Small
                'md:col-span-1 md:row-span-1', // Small
              ];
              const layout = layouts[index % layouts.length];

              return (
                <div
                  key={image.id}
                  ref={cardAnimation.ref}
                  className={`group relative overflow-hidden scroll-animate-scale ${layout} ${cardAnimation.isVisible ? 'visible' : ''}`}
                  style={{
                    transitionDelay: `${(index % 6) * 50}ms`
                  }}>

                  {/* Neon Billboard Card */}
                  <div className="relative w-full h-full overflow-hidden cursor-pointer">

                    {/* Neon border effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                      style={{
                        background: `linear-gradient(45deg, ${image.categoryColor}, transparent)`,
                        filter: 'blur(20px)',
                      }}
                    />

                    {/* Image */}
                    <div className="relative w-full h-full overflow-hidden"
                      style={{
                        border: `2px solid ${image.categoryColor}30`,
                        boxShadow: `0 0 30px ${image.categoryColor}40, inset 0 0 30px rgba(0,0,0,0.5)`
                      }}>

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                      />

                      {/* Scanline effect overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                        }}
                      />

                      {/* Neon category badge */}
                      <div
                        className="absolute top-4 left-4 px-4 py-2 font-black text-xs uppercase tracking-widest"
                        style={{
                          backgroundColor: `${image.categoryColor}20`,
                          color: image.categoryColor,
                          border: `2px solid ${image.categoryColor}`,
                          boxShadow: `0 0 20px ${image.categoryColor}, inset 0 0 10px ${image.categoryColor}30`,
                          textShadow: `0 0 10px ${image.categoryColor}`
                        }}>
                        {image.category}
                      </div>

                      {/* Content overlay - hidden by default */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black bg-opacity-90">

                        {/* Animated title reveal */}
                        <h3
                          className="text-3xl md:text-4xl font-black mb-4 text-center uppercase tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                          style={{
                            color: image.categoryColor,
                            textShadow: `0 0 20px ${image.categoryColor}, 0 0 40px ${image.categoryColor}80`,
                            letterSpacing: '0.05em'
                          }}>
                          {image.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="text-white text-sm md:text-base leading-relaxed text-center max-w-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100"
                          style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                          }}>
                          {image.description}
                        </p>

                        {/* Animated corner brackets */}
                        <div
                          className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ borderColor: image.categoryColor }}
                        />
                        <div
                          className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ borderColor: image.categoryColor }}
                        />
                        <div
                          className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ borderColor: image.categoryColor }}
                        />
                        <div
                          className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ borderColor: image.categoryColor }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FULL EVENT ALBUMS SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Full Albums</span>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              International Week of Deaf People 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the complete photo albums from our three-day celebration
            </p>
          </div>

          {/* Gallery Links Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Day 1 - Parents */}
            <a
              href="https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="relative h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pixieset.com/763373001/312a2946fc306bd81120cac612274c59-cover.jpg"
                  alt="Day 1 - Parents Day"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3"
                    style={{ backgroundColor: '#FACC15', color: '#000' }}>
                    Day 1
                  </div>
                  <h3 className="text-2xl font-black mb-2">Parents Day</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Celebrating with parents and families
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#FACC15' }}>
                    <span>View Full Album</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Day 2 */}
            <a
              href="https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day2/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="relative h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pixieset.com/763373001/8b5564626598f9d4a1a8b19670b10d67-large.jpg"
                  alt="Day 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3"
                    style={{ backgroundColor: '#2563EB', color: '#fff' }}>
                    Day 2
                  </div>
                  <h3 className="text-2xl font-black mb-2">Community Celebration</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Coming together as a community
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#2563EB' }}>
                    <span>View Full Album</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Day 3 */}
            <a
              href="https://emmanuelirumva.pixieset.com/internationalweekofdeafpeople2025day3/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="relative h-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pixieset.com/763373001/2b255b3c3c31e09d0bad31e02f62cb40-large.jpg"
                  alt="Day 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3"
                    style={{ backgroundColor: '#EC4899', color: '#fff' }}>
                    Day 3
                  </div>
                  <h3 className="text-2xl font-black mb-2">Final Celebration</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Closing festivities and achievements
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#EC4899' }}>
                    <span>View Full Album</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
