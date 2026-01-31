'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function BlogsPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Blog posts data - Real RNADW photos from International Week of Deaf People 2025
  const blogPosts = [
    {
      id: 1,
      title: 'Loud in Silence: Launching Our Strategic Plan 2025-2030',
      excerpt: 'RNADW proudly unveils our new Strategic Plan themed "Loud in Silence: Deaf Women and Girls Driving Change" - a bold vision for the next five years focusing on Participation, Power, and Partnership.',
      author: 'Executive Director',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      category: 'Announcements',
      categoryColor: '#FACC15',
      image: '/images/image12.png',
      featured: true
    },
    {
      id: 2,
      title: 'Umucyo Sign Language App: Digital Innovation for Accessibility',
      excerpt: 'Introducing the Umucyo Sign Language App - our groundbreaking digital platform providing remote sign language interpretation, accessible information, and community building for deaf women across Rwanda.',
      author: 'ICT Team',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      category: 'Digital Innovation',
      categoryColor: '#2563EB',
      image: '/images/image8.png',
      featured: false
    },
    {
      id: 3,
      title: 'Her Environment: Climate Adaptation for Deaf Women',
      excerpt: 'Our new Climate Adaptation and Resilience program equips deaf women with climate-smart agriculture skills and ensures climate information is accessible in Rwanda Sign Language.',
      author: 'Programs Team',
      date: 'Jan 5, 2025',
      readTime: '7 min read',
      category: 'Climate Action',
      categoryColor: '#10B981',
      image: '/images/image11.png',
      featured: false
    },
    {
      id: 4,
      title: 'Deaf Women Leaders Forum: Building Collective Power',
      excerpt: 'The Deaf Women Leaders Forum brings together emerging leaders from across 22 districts for peer support, collective strategy, and sustained advocacy for disability rights.',
      author: 'Leadership Team',
      date: 'Dec 20, 2024',
      readTime: '5 min read',
      category: 'Leadership',
      categoryColor: '#EC4899',
      image: '/images/image13.png',
      featured: false
    },
    {
      id: 5,
      title: 'Feminist Leadership Institute: Cultivating the Next Generation',
      excerpt: 'Our Feminist Leadership Institute and boot camps are nurturing emerging deaf women leaders through targeted training, mentorship programs, and confidence-building workshops.',
      author: 'Advocacy Team',
      date: 'Dec 15, 2024',
      readTime: '6 min read',
      category: 'Leadership',
      categoryColor: '#EC4899',
      image: '/images/image14.png',
      featured: false
    },
    {
      id: 6,
      title: 'Deaf Theatre: Using Art to Advocate for SRHR',
      excerpt: 'Deaf Theatre has become a powerful platform for building agency and raising awareness about sexual and reproductive health rights among deaf women and girls.',
      author: 'SRHR Team',
      date: 'Dec 10, 2024',
      readTime: '5 min read',
      category: 'SRHR',
      categoryColor: '#F97316',
      image: '/images/image15.png',
      featured: false
    },
    {
      id: 7,
      title: 'SACCO Success: Financial Independence for Deaf Women',
      excerpt: 'Our Saving and Credit Cooperative (SACCO) initiative is helping deaf women access capital, build savings, and achieve economic independence through community-based financial services.',
      author: 'Economic Empowerment',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      category: 'Economic Empowerment',
      categoryColor: '#10B981',
      image: '/images/image9.png',
      featured: false
    },
    {
      id: 8,
      title: 'Expanding to 22 Districts: RNADW Across All Provinces',
      excerpt: 'RNADW now has robust programming and members across 22 districts in all 5 provinces of Rwanda - from Nyagatare to Rusizi, Musanze to Huye.',
      author: 'Operations Team',
      date: 'Nov 28, 2024',
      readTime: '4 min read',
      category: 'Growth',
      categoryColor: '#2563EB',
      image: '/images/image16.png',
      featured: false
    },
    {
      id: 9,
      title: 'My Body, My Rights: Comprehensive Sexuality Education for Deaf Girls',
      excerpt: 'Our Deaf-friendly CSE Module is transforming how healthcare providers deliver inclusive and accessible sexuality education to deaf women and girls.',
      author: 'Health Team',
      date: 'Nov 20, 2024',
      readTime: '7 min read',
      category: 'SRHR',
      categoryColor: '#F97316',
      image: '/images/image17.png',
      featured: false
    },
    {
      id: 10,
      title: 'Rwanda Sign Language Digitalization: Breaking Communication Barriers',
      excerpt: 'Our initiative to promote and digitalize Rwanda Sign Language (RSL) is enhancing access to information, education, and services for deaf women and girls nationwide.',
      author: 'Education Team',
      date: 'Nov 15, 2024',
      readTime: '5 min read',
      category: 'Education',
      categoryColor: '#FACC15',
      image: '/images/image18.png',
      featured: false
    },
    {
      id: 11,
      title: 'PSEAH: Preventing Sexual Exploitation and Abuse',
      excerpt: 'RNADW is committed to Prevention of Sexual Exploitation, Abuse and Harassment (PSEAH) - creating safe spaces and support systems for deaf women survivors.',
      author: 'Protection Team',
      date: 'Nov 10, 2024',
      readTime: '6 min read',
      category: 'SGBV/VAWG',
      categoryColor: '#EC4899',
      image: '/images/image7.png',
      featured: false
    },
    {
      id: 12,
      title: 'Partnering with NUDOR: Strengthening the Disability Movement',
      excerpt: 'Our strategic partnership with the National Union of Disability Organizations of Rwanda (NUDOR) amplifies advocacy for deaf women within the broader disability rights movement.',
      author: 'Partnerships',
      date: 'Nov 5, 2024',
      readTime: '5 min read',
      category: 'Partnerships',
      categoryColor: '#2563EB',
      image: '/images/image10.png',
      featured: false
    },
    {
      id: 13,
      title: 'Children of Deaf Women (CODA): Supporting the Whole Family',
      excerpt: 'Our ecological model extends support to Children of Deaf Women (CODA), recognizing the importance of the entire family ecosystem in empowering deaf women.',
      author: 'Community Team',
      date: 'Oct 28, 2024',
      readTime: '5 min read',
      category: 'Community',
      categoryColor: '#10B981',
      image: '/images/image19.png',
      featured: false
    },
    {
      id: 14,
      title: 'Climate Justice: Deaf Women in Environmental Decision-Making',
      excerpt: 'Advocating for disability-inclusive climate policies and ensuring deaf women participate in climate adaptation planning and environmental conservation efforts.',
      author: 'Advocacy Team',
      date: 'Oct 20, 2024',
      readTime: '6 min read',
      category: 'Climate Action',
      categoryColor: '#10B981',
        image: '/images/image20.png',
        featured: false
    },
    {
      id: 15,
      title: 'From 2005 to 2025: 20 Years of Empowering Deaf Women',
      excerpt: 'Celebrating two decades of advocacy, from our founding by deaf women human rights activists to becoming a leading OPD with presence across all provinces of Rwanda.',
      author: 'RNADW Team',
      date: 'Oct 15, 2024',
      readTime: '8 min read',
      category: 'Impact Stories',
      categoryColor: '#FACC15',
      image: '/images/image21.png',
      featured: false
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Featured post animations
  const featuredBadge = useScrollAnimation(0.2);
  const featuredCategory = useScrollAnimation(0.2);
  const featuredTitle = useScrollAnimation(0.2);
  const featuredMeta = useScrollAnimation(0.2);
  const featuredCTA = useScrollAnimation(0.2);

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
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Blog</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Stories &<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Insights</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-10 scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Updates, stories, and insights from RNADW's work empowering deaf women across Rwanda.
          </p>

        </div>
      </section>

      {/* FEATURED POST - Magazine Hero Style */}
      {featuredPost && (
        <section className="relative py-0 overflow-hidden bg-black">
          <div className="relative h-[600px] lg:h-[700px]">

            {/* Background Image with Parallax */}
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-end">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">

                {/* Featured badge */}
                <div
                  ref={featuredBadge.ref}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md scroll-animate delay-100 ${featuredBadge.isVisible ? 'visible' : ''}`}
                  style={{
                    backgroundColor: `${featuredPost.categoryColor}30`,
                    border: `2px solid ${featuredPost.categoryColor}`
                  }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: featuredPost.categoryColor }} />
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: featuredPost.categoryColor }}>
                    Featured Story
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">

                  {/* Title section */}
                  <div className="lg:col-span-2">
                    {/* Category */}
                    <div
                      ref={featuredCategory.ref}
                      className={`inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-4 scroll-animate delay-200 ${featuredCategory.isVisible ? 'visible' : ''}`}
                      style={{
                        backgroundColor: featuredPost.categoryColor,
                        color: '#000'
                      }}>
                      {featuredPost.category}
                    </div>

                    <h2
                      ref={featuredTitle.ref}
                      className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight scroll-animate delay-300 ${featuredTitle.isVisible ? 'visible' : ''}`}>
                      {featuredPost.title}
                    </h2>

                    {/* Meta */}
                    <div
                      ref={featuredMeta.ref}
                      className={`flex items-center gap-4 text-sm text-gray-400 scroll-animate delay-400 ${featuredMeta.isVisible ? 'visible' : ''}`}>
                      <span className="font-semibold text-white">{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  {/* CTA section */}
                  <div
                    ref={featuredCTA.ref}
                    className={`lg:flex lg:justify-end scroll-animate-scale delay-500 ${featuredCTA.isVisible ? 'visible' : ''}`}>
                    <Link
                      href={`/blogs/${featuredPost.id}`}
                      className="px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
                      style={{
                        backgroundColor: featuredPost.categoryColor,
                        color: '#000'
                      }}>
                      Read Full Story
                      <span className="transition-transform duration-300 group-hover:translate-x-1 text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 opacity-50" style={{ borderColor: featuredPost.categoryColor }} />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 opacity-50" style={{ borderColor: featuredPost.categoryColor }} />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 opacity-50" style={{ borderColor: featuredPost.categoryColor }} />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 opacity-50" style={{ borderColor: featuredPost.categoryColor }} />
          </div>
        </section>
      )}

      {/* BLOG POSTS - Masonry Grid with Expanding Overlays */}
      <section className="py-24 bg-white relative overflow-hidden">

        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, #FACC15 0px, transparent 50%),
                radial-gradient(circle at 80% 70%, #2563EB 0px, transparent 50%),
                radial-gradient(circle at 40% 80%, #EC4899 0px, transparent 50%)
              `
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-800">
              Latest Posts
            </span>
            <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Masonry Grid - Varied Heights */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {regularPosts.map((post, index) => {
              const cardAnimation = useScrollAnimation(0.2);

              // Varied card heights for masonry effect
              const heights = ['h-[400px]', 'h-[500px]', 'h-[450px]', 'h-[550px]', 'h-[480px]', 'h-[520px]', 'h-[460px]'];
              const height = heights[index % heights.length];

              return (
                <article
                  key={post.id}
                  ref={cardAnimation.ref}
                  className={`group relative ${height} break-inside-avoid mb-6 scroll-animate-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
                  style={{
                    transitionDelay: `${(index % 6) * 100}ms`
                  }}>

                  {/* Card with expanding overlay */}
                  <Link href={`/blogs/${post.id}`} className="block relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer">

                    {/* Background Image */}
                    <div className="absolute inset-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Static overlay - Always visible */}
                    <div
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{
                        background: `linear-gradient(to bottom, ${post.categoryColor}00 0%, ${post.categoryColor}40 60%, ${post.categoryColor}90 100%)`
                      }}
                    />

                    {/* Minimal Info - Always visible at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white transform transition-transform duration-700 group-hover:translate-y-[-100%]">

                      {/* Category pill */}
                      <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3"
                        style={{
                          backgroundColor: post.categoryColor,
                          color: '#000'
                        }}>
                        {post.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-black mb-2 leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="font-semibold opacity-90">{post.date}</span>
                      </div>
                    </div>

                    {/* Expanding Overlay - Appears on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center items-center p-8 text-center"
                      style={{
                        background: `linear-gradient(135deg, ${post.categoryColor}f5 0%, ${post.categoryColor}e8 100%)`
                      }}>

                      {/* Icon pulse */}
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-pulse"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.3)',
                          border: '3px solid white'
                        }}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>

                      {/* Category */}
                      <div className="inline-block px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.2)',
                          color: 'white'
                        }}>
                        {post.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-white text-sm leading-relaxed mb-6 line-clamp-4 max-w-md opacity-95">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-center gap-3 text-sm text-white mb-6 opacity-90">
                        <span className="font-bold">{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* CTA Button */}
                      <span className="px-8 py-3 rounded-full bg-white text-black font-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center gap-2">
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>

                    {/* Corner accent - visible on hover */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `linear-gradient(135deg, transparent 50%, white 50%)`,
                        clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                      }}
                    />
                  </Link>
                </article>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
