'use client';

import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VideosPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Results count animation
  const resultsCount = useScrollAnimation(0.2);

  // Video card animations - create hooks for each video
  const videoCards = Array.from({ length: 11 }, (_, i) => useScrollAnimation(0.2));

  const [selectedCategory, setSelectedCategory] = useState('all');

  // Horizontal scroll container ref
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Videos', icon: '🎬' },
    { id: 'sgbv', name: 'SGBV/VAWG', icon: '🛡️' },
    { id: 'cedaw', name: 'CEDAW', icon: '⚖️' },
    { id: 'srhr', name: 'SRHR/CSE', icon: '🏥' },
    { id: 'stories', name: 'Impact Stories', icon: '💪' }
  ];

  const videos = [
    {
      id: 'CpKlW3lK6XI',
      title: 'Genderbasedviolence-Dufatanye kurwanya ihohoterwa rikorerwa Abana',
      description: 'Join us in fighting violence against children through awareness and community action.',
      category: 'sgbv'
    },
    {
      id: 'rQ5UpQzFvxE',
      title: 'Gukumira no kurwanya ihohoterwa rishingiye ku gitsina mu rubyiruko',
      description: 'Preventing and fighting gender-based violence among youth.',
      category: 'sgbv'
    },
    {
      id: 'YUTe3E5UqQM',
      title: 'Uburyo bwo Gufasha uwahohotewe',
      description: 'Ways to help survivors of violence and support their recovery journey.',
      category: 'sgbv'
    },
    {
      id: 'A5VWUFgIAOg',
      title: 'RIB launched the investigators training of sign language',
      description: 'American embassy sponsored project to train investigators in sign language.',
      category: 'stories'
    },
    {
      id: 'BlwM1aYGHak',
      title: "Dative's Story: I am a role model for Persons with Disabilities",
      description: 'An inspiring story of empowerment and leadership in the deaf community.',
      category: 'stories'
    },
    {
      id: '0l_TZZqnbE8',
      title: 'CEDAW Quick and Concise Explaining the Principle of Non Discrimination',
      description: 'Understanding the Convention on the Elimination of All Forms of Discrimination Against Women.',
      category: 'cedaw'
    },
    {
      id: 'OUV738An43g',
      title: 'CEDAW Quick and Concise (Rwanda Sign Language)',
      description: 'CEDAW principles explained in Rwanda Sign Language.',
      category: 'cedaw'
    },
    {
      id: 'Jr8TDRCxv28',
      title: 'CEDAW Demystified Substantive Equality (Rwanda Sign Language)',
      description: 'Understanding substantive equality through CEDAW framework.',
      category: 'cedaw'
    },
    {
      id: '8ENkmxqhghM',
      title: 'UBUZIMA BW\'IMYOROROKERE / Comprehensive Sexual Education',
      description: 'Comprehensive sexual education for reproductive health awareness.',
      category: 'srhr'
    },
    {
      id: 'enlmQx3695Q',
      title: 'UBUMENYI KU MIBEREHO N\'IMIBANIRE Y\'URUBYIRUKO',
      description: 'Knowledge about youth behavior and relationships.',
      category: 'srhr'
    },
    {
      id: 'KyyhxMSJvjA',
      title: 'SERIVICE Z\'UBUZIMA BW\'IMYOROROKERE',
      description: 'Reproductive health services and access for all.',
      category: 'srhr'
    }
  ];

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  return (
    <main className="min-h-screen bg-black">

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">

          {/* Label */}
          <div
            ref={heroLabel.ref}
            className={`flex items-center gap-3 mb-6 scroll-animate delay-100 ${heroLabel.isVisible ? 'visible' : ''}`}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Video Library</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Stories That<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Inspire Change</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-10 scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Watch our collection of educational content, survivor stories, and community initiatives empowering deaf women across Rwanda.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-12 mb-8">
            <div>
              <div className="text-4xl font-black" style={{ color: '#FACC15' }}>{videos.length}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Videos</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div>
              <div className="text-4xl font-black" style={{ color: '#2563EB' }}>{categories.length - 1}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Categories</div>
            </div>
          </div>

        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 py-6 bg-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-black text-sm transition-all hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'text-black'
                    : 'text-white border-2 border-gray-700 hover:border-gray-600'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? '#FACC15' : 'transparent'
                }}
              >
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Results count - Enhanced UI */}
          <div
            ref={resultsCount.ref}
            className={`mb-16 flex items-center justify-start scroll-animate-scale delay-100 ${resultsCount.isVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* Decorative background blob */}
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #FACC15 0%, #2563EB 100%)' }} />

              {/* Main stats card */}
              <div className="relative flex items-center gap-6 px-10 py-6 rounded-2xl border-2 backdrop-blur-sm"
                style={{
                  borderColor: '#FACC15',
                  backgroundColor: 'rgba(31, 41, 55, 0.6)'
                }}>

                {/* Video icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-xl"
                  style={{ backgroundColor: '#FACC15' }}>
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>

                {/* Divider */}
                <div className="w-px h-12 bg-gray-700" />

                {/* Count display */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black" style={{ color: '#FACC15' }}>
                      {filteredVideos.length}
                    </span>
                    <span className="text-2xl font-bold text-gray-400">
                      {filteredVideos.length === 1 ? 'video' : 'videos'}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">
                    {selectedCategory === 'all' ? 'Total Collection' : categories.find(c => c.id === selectedCategory)?.name}
                  </p>
                </div>

                {/* Decorative accent */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-pulse"
                  style={{ backgroundColor: '#2563EB' }} />
              </div>
            </div>
          </div>

          {/* Video Grid - 3D Floating Cards with Magnetic Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                {filteredVideos.map((video, index) => {
                  const categoryInfo = categories.find(c => c.id === video.category);
                  const cardAnimation = videoCards[index];

                  // Alternate neon colors
                  const neonColors = [
                    { primary: '#FACC15', secondary: '#F59E0B', glow: 'rgba(250, 204, 21, 0.5)' },
                    { primary: '#2563EB', secondary: '#3B82F6', glow: 'rgba(37, 99, 235, 0.5)' },
                    { primary: '#EC4899', secondary: '#F472B6', glow: 'rgba(236, 72, 153, 0.5)' },
                    { primary: '#10B981', secondary: '#34D399', glow: 'rgba(16, 185, 129, 0.5)' },
                  ];
                  const colors = neonColors[index % neonColors.length];

                  // Staggered delays for cascading effect
                  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200', 'delay-300', 'delay-100', 'delay-200'];
                  const delayClass = delays[index % delays.length];

                  return (
                    <div
                      key={video.id}
                      ref={cardAnimation.ref}
                      className={`group relative scroll-animate-scale ${delayClass} ${cardAnimation.isVisible ? 'visible' : ''}`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                  {/* 3D Morphing Blob Container */}
                  <div className="relative transform-gpu transition-all duration-700 hover:scale-105 hover:-rotate-2" style={{ transformStyle: 'preserve-3d' }}>

                    {/* Floating glow shadow */}
                    <div
                      className="absolute -inset-4 opacity-0 group-hover:opacity-70 transition-all duration-700 blur-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${colors.glow} 0%, transparent 70%)`,
                        transform: 'translateZ(-20px)'
                      }}
                    />

                    {/* Glassomorphism card */}
                    <div
                      className="relative overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-700"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.secondary}25 100%)`,
                        borderRadius: '2rem',
                        boxShadow: `0 8px 32px 0 ${colors.glow}`,
                      }}
                    >

                      {/* Animated gradient orb */}
                      <div
                        className="absolute top-4 right-4 w-24 h-24 rounded-full opacity-40 blur-2xl animate-pulse"
                        style={{ background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)` }}
                      />

                      {/* Main content area */}
                      <div className="p-6">

                        {/* Video section with frosted glass */}
                        <div className="relative rounded-xl overflow-hidden mb-4 ring-2 ring-white/30 shadow-2xl">
                          <div className="relative aspect-video bg-black/20 backdrop-blur-sm">
                            <iframe
                              src={`https://www.youtube.com/embed/${video.id}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        </div>

                        {/* Category badge with glow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.secondary}30 100%)`,
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${colors.primary}50`
                          }}>
                          <span className="text-2xl">{categoryInfo?.icon}</span>
                          <span className="text-xs font-black uppercase tracking-wider text-white">
                            {categoryInfo?.name}
                          </span>
                        </div>

                        {/* Title with gradient - hidden by default, revealed on hover */}
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                          <h3
                            className="text-2xl font-black leading-tight line-clamp-3"
                            style={{
                              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}>
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{ backgroundColor: '#FACC15' }}>
            <span className="text-4xl">📹</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Have a Story to Share?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Your story could inspire and empower other deaf women. We'd love to feature your journey on our platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="group relative px-8 py-4 rounded-full font-black text-lg text-gray-900 transition-all hover:scale-105"
              style={{ backgroundColor: '#FACC15' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Submit Your Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button
              className="group relative px-8 py-4 rounded-full font-black text-lg text-white border-2 transition-all hover:scale-105"
              style={{ borderColor: '#2563EB' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Subscribe to Channel
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
