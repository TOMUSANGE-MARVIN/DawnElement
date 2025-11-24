'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VideosPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Filter section
  const filterSection = useScrollAnimation(0.2);

  // Video grid animations
  const video1 = useScrollAnimation(0.2);
  const video2 = useScrollAnimation(0.2);
  const video3 = useScrollAnimation(0.2);
  const video4 = useScrollAnimation(0.2);
  const video5 = useScrollAnimation(0.2);
  const video6 = useScrollAnimation(0.2);

  // CTA section
  const ctaSection = useScrollAnimation(0.2);

  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const videoRefs = [video1, video2, video3, video4, video5, video6];

  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

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
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Watch & Learn</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Our<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Video Stories</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Discover the powerful stories of deaf women transforming their lives and communities across Rwanda.
          </p>

        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            ref={filterSection.ref}
            className={`flex flex-wrap items-center justify-center gap-3 scroll-animate-scale delay-100 ${filterSection.isVisible ? 'visible' : ''}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-full font-black text-sm transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'text-white'
                    : 'text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? '#FACC15' : 'transparent'
                }}
              >
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.name}
                </span>

                {/* Glow effect on active */}
                {selectedCategory === category.id && (
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-30 -z-10"
                    style={{ backgroundColor: '#FACC15' }}
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* VIDEO GRID SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing <span className="font-black" style={{ color: '#FACC15' }}>{filteredVideos.length}</span> {filteredVideos.length === 1 ? 'video' : 'videos'}
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => {
              const ref = videoRefs[index % videoRefs.length];
              return (
                <div
                  key={video.id}
                  ref={ref?.ref}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-${100 + index * 100} ${ref?.isVisible ? 'visible' : ''}`}
                  style={{ backgroundColor: 'white', boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)' }}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">

                    {/* Placeholder gradient (will be replaced with actual video thumbnails) */}
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: index % 3 === 0
                          ? 'linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)'
                          : index % 3 === 1
                          ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)'
                          : 'linear-gradient(135deg, #6B7280 0%, #374151 100%)'
                      }}
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all group-hover:bg-black/40">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{ backgroundColor: '#FACC15' }}
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-sm">
                      <span className="text-white text-xs font-bold">{video.duration}</span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(250, 204, 21, 0.9)' }}>
                      <span className="text-gray-900 text-xs font-black uppercase tracking-wide">
                        {categories.find(c => c.id === video.category)?.name || 'Video'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Title */}
                    <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                      {video.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="font-medium">{video.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{video.date}</span>
                      </div>
                    </div>

                  </div>

                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: '2px solid transparent',
                      background: 'linear-gradient(135deg, #FACC15, #2563EB) border-box',
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        ref={ctaSection.ref}
        className={`relative py-24 overflow-hidden scroll-animate delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}
        style={{ backgroundColor: '#1F2937' }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{ backgroundColor: '#FACC15' }}>
            <span className="text-4xl">📹</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Have a Story to Share?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Your story could inspire and empower other deaf women. We'd love to feature your journey on our platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary CTA */}
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

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ backgroundColor: '#FACC15' }} />
            </button>

            {/* Secondary CTA */}
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
