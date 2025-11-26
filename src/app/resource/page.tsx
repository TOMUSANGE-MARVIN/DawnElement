'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ResourcesPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Resources data
  const resources = [
    {
      id: 1,
      title: 'SGBV Prevention Guide',
      description: 'Comprehensive guide on preventing sexual and gender-based violence in deaf communities',
      category: 'SGBV/VAWG',
      categoryColor: '#EC4899',
      type: 'PDF',
      size: '2.4 MB',
      icon: '📘',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Sign Language Dictionary',
      description: 'Rwandan sign language reference guide with illustrations',
      category: 'Education',
      categoryColor: '#FACC15',
      type: 'PDF',
      size: '5.8 MB',
      icon: '📖',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'CEDAW Rights Overview',
      description: 'Understanding CEDAW rights for women with disabilities',
      category: 'Legal Rights',
      categoryColor: '#2563EB',
      type: 'PDF',
      size: '1.2 MB',
      icon: '⚖️',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'SRHR Education Materials',
      description: 'Sexual and reproductive health rights educational resources',
      category: 'SRHR/CSE',
      categoryColor: '#EC4899',
      type: 'PDF',
      size: '3.1 MB',
      icon: '🏥',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Business Skills Training',
      description: 'Entrepreneurship and business development workbook for deaf women',
      category: 'Economic Empowerment',
      categoryColor: '#10B981',
      type: 'PDF',
      size: '4.5 MB',
      icon: '💼',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Legal Aid Handbook',
      description: 'Step-by-step guide to accessing legal services and support',
      category: 'Legal Rights',
      categoryColor: '#2563EB',
      type: 'PDF',
      size: '2.8 MB',
      icon: '📜',
      downloadUrl: '#'
    },
    {
      id: 7,
      title: 'Community Organizing Toolkit',
      description: 'Tools and strategies for grassroots advocacy and organizing',
      category: 'Advocacy',
      categoryColor: '#EC4899',
      type: 'PDF',
      size: '3.7 MB',
      icon: '📢',
      downloadUrl: '#'
    },
    {
      id: 8,
      title: 'Financial Literacy Guide',
      description: 'Money management and savings strategies for women entrepreneurs',
      category: 'Economic Empowerment',
      categoryColor: '#10B981',
      type: 'PDF',
      size: '2.1 MB',
      icon: '💰',
      downloadUrl: '#'
    },
    {
      id: 9,
      title: 'Deaf Culture & Identity',
      description: 'Celebrating deaf culture, history, and identity in Rwanda',
      category: 'Education',
      categoryColor: '#FACC15',
      type: 'PDF',
      size: '1.9 MB',
      icon: '🤟',
      downloadUrl: '#'
    },
  ];

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
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Knowledge Hub</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Resources &<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Learning</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-10 scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Access educational materials, guides, and tools to support deaf women's empowerment, advocacy, and economic independence.
          </p>

        </div>
      </section>

      {/* RESOURCES GRID SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">
              {resources.length} Resources Available
            </span>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const cardAnimation = useScrollAnimation(0.2);
              const delayClass = `delay-${(index % 6 + 1) * 100}`;

              return (
                <div
                  key={resource.id}
                  ref={cardAnimation.ref}
                  className={`group relative scroll-animate-scale ${delayClass} ${cardAnimation.isVisible ? 'visible' : ''}`}>

                  {/* Resource Card */}
                  <div className="relative h-full bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    style={{ borderColor: resource.categoryColor }}>

                    {/* Top accent bar */}
                    <div
                      className="h-2"
                      style={{ backgroundColor: resource.categoryColor }}
                    />

                    {/* Content */}
                    <div className="p-6">

                      {/* Icon */}
                      <div className="text-5xl mb-4">
                        {resource.icon}
                      </div>

                      {/* Category badge */}
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4"
                        style={{
                          backgroundColor: `${resource.categoryColor}20`,
                          color: resource.categoryColor
                        }}>
                        {resource.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                        {resource.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="font-semibold">{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>

                      {/* Download button */}
                      <button
                        className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
                        style={{
                          backgroundColor: resource.categoryColor,
                          color: '#000'
                        }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </button>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${resource.categoryColor} 0%, transparent 70%)`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
