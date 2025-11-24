'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VideosPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Featured video
  const featuredVideo = useScrollAnimation(0.2);

  // Filter section
  const filterSection = useScrollAnimation(0.2);

  // Bento grid animations
  const bentoCard1 = useScrollAnimation(0.2);
  const bentoCard2 = useScrollAnimation(0.2);
  const bentoCard3 = useScrollAnimation(0.2);
  const bentoCard4 = useScrollAnimation(0.2);
  const bentoCard5 = useScrollAnimation(0.2);
  const bentoCard6 = useScrollAnimation(0.2);

  // CTA section
  const ctaSection = useScrollAnimation(0.2);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Videos', icon: '🎬' },
    { id: 'stories', name: 'Impact Stories', icon: '💪' },
    { id: 'programs', name: 'Our Programs', icon: '📚' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'awareness', name: 'Awareness', icon: '🗣️' }
  ];

  const videos = [
    {
      id: 1,
      title: 'Empowering Deaf Women Through Skills Training',
      description: 'Meet Sarah, who transformed her life through our vocational training program.',
      category: 'stories',
      thumbnail: '/videos/thumbnail-1.jpg',
      duration: '4:32',
      views: '1.2K',
      date: 'Nov 15, 2024'
    },
    {
      id: 2,
      title: 'RNADW Annual Conference 2024 Highlights',
      description: 'Highlights from our largest gathering of deaf women leaders across Rwanda.',
      category: 'events',
      thumbnail: '/videos/thumbnail-2.jpg',
      duration: '8:45',
      views: '3.5K',
      date: 'Nov 10, 2024'
    },
    {
      id: 3,
      title: 'Understanding Reproductive Health Rights',
      description: 'Educational video on reproductive health access for deaf women.',
      category: 'awareness',
      thumbnail: '/videos/thumbnail-3.jpg',
      duration: '6:20',
      views: '2.1K',
      date: 'Oct 28, 2024'
    },
    {
      id: 4,
      title: 'Economic Empowerment Program Overview',
      description: 'Learn about our entrepreneurship training and microfinance initiatives.',
      category: 'programs',
      thumbnail: '/videos/thumbnail-4.jpg',
      duration: '5:15',
      views: '1.8K',
      date: 'Oct 20, 2024'
    },
    {
      id: 5,
      title: 'Breaking the Silence on Gender-Based Violence',
      description: 'Survivor stories and support resources for deaf women facing violence.',
      category: 'awareness',
      thumbnail: '/videos/thumbnail-5.jpg',
      duration: '7:30',
      views: '4.2K',
      date: 'Oct 12, 2024'
    },
    {
      id: 6,
      title: 'From Silence to Success: Rose\'s Journey',
      description: 'How our education program helped Rose achieve her dreams.',
      category: 'stories',
      thumbnail: '/videos/thumbnail-6.jpg',
      duration: '3:50',
      views: '2.8K',
      date: 'Oct 5, 2024'
    }
  ];

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  const bentoRefs = [bentoCard1, bentoCard2, bentoCard3, bentoCard4, bentoCard5, bentoCard6];

  return (
    <main className="min-h-screen bg-black">

      {/* CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Animated film grain overlay */}
        <div className="absolute inset-0 bg-black opacity-95" />

        {/* Glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 60%)', animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-pulse"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 60%)', animationDuration: '6s' }} />
        </div>

        {/* Film strip borders */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-around py-8"
          style={{ background: 'linear-gradient(90deg, #1F2937 0%, transparent 100%)' }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-sm mx-auto" style={{ backgroundColor: '#FACC15' }} />
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-12 flex flex-col justify-around py-8"
          style={{ background: 'linear-gradient(270deg, #1F2937 0%, transparent 100%)' }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-sm mx-auto" style={{ backgroundColor: '#2563EB' }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">

          {/* Film clapper icon */}
          <div
            ref={heroLabel.ref}
            className={`inline-flex items-center gap-4 mb-8 scroll-animate delay-100 ${heroLabel.isVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)' }}>
                <span className="text-3xl">🎬</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-ping" style={{ backgroundColor: '#FACC15' }} />
            </div>
            <div>
              <span className="block text-xs font-black tracking-[0.4em] uppercase" style={{ color: '#FACC15' }}>Now Showing</span>
              <span className="block text-xs font-medium text-gray-500">2024 Collection</span>
            </div>
          </div>

          {/* Massive Title with 3D effect */}
          <h1
            ref={heroTitle.ref}
            className={`mb-8 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] text-white mb-4"
              style={{
                textShadow: '8px 8px 0px rgba(250, 204, 21, 0.3), 16px 16px 0px rgba(37, 99, 235, 0.2)',
                letterSpacing: '-0.03em'
              }}>
              VOICES
            </div>
            <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] mb-4"
              style={{
                color: '#FACC15',
                textShadow: '8px 8px 0px rgba(0, 0, 0, 0.4)',
                letterSpacing: '-0.03em'
              }}>
              UNHEARD
            </div>
            <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] text-white"
              style={{
                textShadow: '8px 8px 0px rgba(37, 99, 235, 0.3)',
                letterSpacing: '-0.03em'
              }}>
              NO MORE
            </div>
          </h1>

          {/* Subtitle with marquee effect */}
          <p
            ref={heroDescription.ref}
            className={`text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mb-12 scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}
            style={{ color: '#E5E7EB' }}>
            Stories of <span className="font-black" style={{ color: '#FACC15' }}>resilience</span>, <span className="font-black" style={{ color: '#2563EB' }}>empowerment</span>, and <span className="font-black text-white">transformation</span> from deaf women across Rwanda
          </p>

          {/* Play all CTA */}
          <button
            className="group relative px-10 py-5 rounded-2xl font-black text-xl text-black overflow-hidden transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}>

            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch All Stories
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Glow pulse */}
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 animate-pulse transition-opacity"
              style={{ backgroundColor: '#FACC15' }} />
          </button>

        </div>
      </section>

      {/* CATEGORY TABS - Vertical Film Strip Style */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            ref={filterSection.ref}
            className={`flex flex-wrap items-center justify-center gap-4 scroll-animate-scale delay-100 ${filterSection.isVisible ? 'visible' : ''}`}>
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-8 py-4 rounded-2xl font-black text-sm transition-all duration-500 hover:scale-110 ${
                  selectedCategory === category.id
                    ? 'text-black scale-110'
                    : 'text-white border-2 hover:border-white/40'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? '#FACC15' : 'transparent',
                  borderColor: selectedCategory === category.id ? '#FACC15' : 'rgba(255, 255, 255, 0.2)',
                  transform: selectedCategory === category.id ? 'rotate(-2deg)' : 'rotate(0deg)'
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl transform group-hover:scale-125 transition-transform">{category.icon}</span>
                  <span className="uppercase tracking-wider">{category.name}</span>
                </span>

                {/* Active indicator - film strip style */}
                {selectedCategory === category.id && (
                  <>
                    <div className="absolute -top-2 -left-2 w-3 h-3 rounded-sm" style={{ backgroundColor: '#2563EB' }} />
                    <div className="absolute -top-2 -right-2 w-3 h-3 rounded-sm" style={{ backgroundColor: '#2563EB' }} />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-sm" style={{ backgroundColor: '#2563EB' }} />
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-sm" style={{ backgroundColor: '#2563EB' }} />

                    {/* Animated glow */}
                    <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 animate-pulse -z-10"
                      style={{ backgroundColor: '#FACC15', animationDuration: '3s' }} />
                  </>
                )}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ASYMMETRIC BENTO GRID - Creative Magazine Layout */}
      <section className="py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-16 flex items-center justify-between">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-2">Latest Stories</h2>
              <p className="text-xl text-gray-400">
                <span className="font-black" style={{ color: '#FACC15' }}>{filteredVideos.length}</span> powerful journeys to discover
              </p>
            </div>
          </div>

          {/* BENTO GRID - Asymmetric 6-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">

            {filteredVideos.map((video, index) => {
              const ref = bentoRefs[index % bentoRefs.length];
              const isHovered = hoveredVideo === video.id;

              // Define unique sizes for each card position
              const cardSizes = [
                'md:col-span-4 md:row-span-2', // Large hero (top-left)
                'md:col-span-2 md:row-span-1', // Tall right
                'md:col-span-2 md:row-span-1', // Medium
                'md:col-span-3 md:row-span-1', // Wide
                'md:col-span-3 md:row-span-1', // Wide
                'md:col-span-6 md:row-span-1'  // Full width
              ];

              const aspectRatios = [
                'aspect-[16/12]',  // Large card
                'aspect-square',   // Square
                'aspect-square',   // Square
                'aspect-video',    // Video
                'aspect-video',    // Video
                'aspect-[21/9]'    // Cinematic ultra-wide
              ];

              return (
                <div
                  key={video.id}
                  ref={ref?.ref}
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  className={`group relative ${cardSizes[index % cardSizes.length]} rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] scroll-animate-scale delay-${100 + index * 100} ${ref?.isVisible ? 'visible' : ''}`}
                  style={{
                    backgroundColor: '#1F2937',
                    boxShadow: isHovered
                      ? '0 40px 80px -20px rgba(250, 204, 21, 0.4), 0 0 0 2px rgba(250, 204, 21, 0.5)'
                      : '0 20px 40px -10px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Video Thumbnail with 3D depth */}
                  <div className={`relative ${aspectRatios[index % aspectRatios.length]} overflow-hidden`}>

                    {/* Gradient background */}
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      style={{
                        background: index % 3 === 0
                          ? 'linear-gradient(135deg, #FACC15 0%, #F59E0B 50%, #DC2626 100%)'
                          : index % 3 === 1
                          ? 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #DB2777 100%)'
                          : 'linear-gradient(135deg, #059669 0%, #0891B2 50%, #6366F1 100%)'
                      }}
                    />

                    {/* Noise texture overlay */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}
                    />

                    {/* Play button - 3D style */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-black/60' : 'bg-black/30'}`}>
                      <div
                        className="relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500"
                        style={{
                          backgroundColor: isHovered ? '#FACC15' : 'rgba(255, 255, 255, 0.9)',
                          transform: isHovered ? 'scale(1.2) rotate(90deg)' : 'scale(1) rotate(0deg)',
                          boxShadow: isHovered ? '0 20px 40px rgba(250, 204, 21, 0.6)' : '0 10px 20px rgba(0, 0, 0, 0.3)'
                        }}
                      >
                        <svg className={`w-10 h-10 ml-1 transition-colors ${isHovered ? 'text-black' : 'text-gray-900'}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>

                        {/* Spinning ring */}
                        <div
                          className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/50 animate-spin"
                          style={{ animationDuration: '3s' }}
                        />
                      </div>
                    </div>

                    {/* Duration chip */}
                    <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl backdrop-blur-md font-black text-sm"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#FACC15' }}>
                      {video.duration}
                    </div>

                    {/* Category chip - Top left */}
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-xl backdrop-blur-md font-black text-xs uppercase tracking-wider"
                      style={{ backgroundColor: 'rgba(250, 204, 21, 0.95)', color: '#000' }}>
                      {categories.find(c => c.id === video.category)?.icon} {categories.find(c => c.id === video.category)?.name}
                    </div>

                  </div>

                  {/* Content overlay - Slides up on hover */}
                  <div className={`absolute inset-x-0 bottom-0 p-6 lg:p-8 transition-all duration-500 ${isHovered ? 'translate-y-0 bg-gradient-to-t from-black via-black/95 to-transparent' : 'translate-y-4 bg-gradient-to-t from-black/80 to-transparent'}`}>

                    {/* Title */}
                    <h3 className={`font-black text-white mb-3 leading-tight transition-all duration-500 ${index === 0 ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'} ${isHovered ? 'text-shadow-lg' : ''}`}
                      style={{ textShadow: isHovered ? '0 4px 20px rgba(250, 204, 21, 0.5)' : 'none' }}>
                      {video.title}
                    </h3>

                    {/* Description - Shows on hover */}
                    <p className={`text-gray-300 leading-relaxed mb-4 transition-all duration-500 overflow-hidden ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {video.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="font-bold">{video.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-bold">{video.date}</span>
                      </div>
                    </div>

                  </div>

                  {/* Corner accents - Film strip style */}
                  <div className={`absolute top-4 right-4 w-4 h-4 rounded-sm transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-50'}`}
                    style={{ backgroundColor: '#2563EB' }} />
                  <div className={`absolute bottom-4 left-4 w-4 h-4 rounded-sm transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-50'}`}
                    style={{ backgroundColor: '#2563EB' }} />

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CINEMATIC CTA SECTION */}
      <section
        ref={ctaSection.ref}
        className={`relative py-40 overflow-hidden scroll-animate delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}
        style={{ backgroundColor: '#000' }}
      >
        {/* Spotlight effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 60%)', animationDuration: '5s' }} />
        </div>

        {/* Film strip decoration */}
        <div className="absolute top-0 left-0 right-0 h-2 flex gap-4 px-8">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 h-full rounded-sm" style={{ backgroundColor: i % 2 === 0 ? '#FACC15' : '#2563EB' }} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Director's clapper */}
          <div className="inline-flex items-center gap-6 mb-10">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center transform hover:rotate-12 transition-transform"
                style={{ background: 'linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)' }}>
                <span className="text-5xl">🎬</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-ping" style={{ backgroundColor: '#FACC15' }} />
            </div>
            <div className="h-16 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #FACC15 0%, #2563EB 100%)' }} />
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center transform hover:-rotate-12 transition-transform"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' }}>
                <span className="text-5xl">📹</span>
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full animate-ping" style={{ backgroundColor: '#2563EB', animationDelay: '1s' }} />
            </div>
          </div>

          {/* Title with 3D effect */}
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
            style={{ textShadow: '6px 6px 0px rgba(250, 204, 21, 0.3), 12px 12px 0px rgba(37, 99, 235, 0.2)' }}>
            BE THE NEXT<br />
            <span style={{ color: '#FACC15' }}>STORYTELLER</span>
          </h2>

          {/* Description */}
          <p className="text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Your voice matters. Your journey inspires. Share your story and become part of a movement that's <span className="font-black text-white">changing lives</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* Primary CTA - Film reel style */}
            <button
              className="group relative px-10 py-6 rounded-2xl font-black text-xl text-black overflow-hidden transition-all hover:scale-110"
              style={{ backgroundColor: '#FACC15' }}
            >
              {/* Animated film grain */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />

              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
                Share Your Story
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              {/* Glow pulse */}
              <div className="absolute inset-0 rounded-2xl blur-3xl opacity-0 group-hover:opacity-60 animate-pulse transition-opacity"
                style={{ backgroundColor: '#FACC15' }} />
            </button>

            {/* Secondary CTA - Cinematic border */}
            <button
              className="group relative px-10 py-6 rounded-2xl font-black text-xl text-white border-4 transition-all hover:scale-110 overflow-hidden"
              style={{ borderColor: '#2563EB' }}
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' }} />

              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Browse Collection
              </span>
            </button>

          </div>

          {/* Tagline */}
          <p className="mt-12 text-sm font-black tracking-[0.3em] uppercase text-gray-600">
            <span style={{ color: '#FACC15' }}>VOICES</span> · <span style={{ color: '#2563EB' }}>UNHEARD</span> · <span className="text-white">NO MORE</span>
          </p>

        </div>

        {/* Bottom film strip decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-2 flex gap-4 px-8">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 h-full rounded-sm" style={{ backgroundColor: i % 2 === 0 ? '#2563EB' : '#FACC15' }} />
          ))}
        </div>
      </section>

    </main>
  );
}
