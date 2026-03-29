"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Activity {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  published: boolean;
  order: number;
}

interface Testimonial {
  _id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  sortOrder: number;
  published: boolean;
}

interface Partner {
  _id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  logo: string;
  website: string;
  sortOrder: number;
  published: boolean;
}

// Default video ID fallback
const DEFAULT_VIDEO_ID = 'SFhndjv-PfY';

// Helper to extract YouTube video ID from URL
function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function Home() {
  // Programs/Activities from database
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activitiesLoading, setActivitiesLoading] = useState(true);

  // Testimonials from database
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);

  // Partners from database
  const [partners, setPartners] = useState<Partner[]>([]);
  const [partnersLoading, setPartnersLoading] = useState(true);

  // Hero video from database
  const [heroVideoId, setHeroVideoId] = useState<string>(DEFAULT_VIDEO_ID);

  // Fetch hero video URL on mount
  useEffect(() => {
    async function fetchHeroVideo() {
      try {
        const res = await fetch('/api/public/settings?key=hero_video_url');
        const data = await res.json();
        if (data.success && data.data?.value) {
          const videoId = extractYouTubeId(data.data.value);
          if (videoId) {
            setHeroVideoId(videoId);
          }
        }
      } catch (error) {
        console.error('Error fetching hero video:', error);
      }
    }
    fetchHeroVideo();
  }, []);

  // Fetch activities on mount
  useEffect(() => {
    async function fetchActivities() {
      try {
        const res = await fetch('/api/public/activities');
        const data = await res.json();
        if (data.success && data.data) {
          // Filter published and sort by order
          const sorted = data.data
            .filter((a: Activity) => a.published !== false)
            .sort((a: Activity, b: Activity) => {
              if (a.order !== undefined && b.order !== undefined) {
                return a.order - b.order;
              }
              return a.title.localeCompare(b.title);
            })
            .slice(0, 4); // Only take first 4 programs
          setActivities(sorted);
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setActivitiesLoading(false);
      }
    }
    fetchActivities();
  }, []);

  // Fetch testimonials on mount
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch('/api/public/testimonials');
        const data = await res.json();
        if (data.success && data.data) {
          // Sort by sortOrder and take first 3
          const sorted = data.data
            .sort((a: Testimonial, b: Testimonial) => (a.sortOrder || 0) - (b.sortOrder || 0))
            .slice(0, 3);
          setTestimonials(sorted);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setTestimonialsLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  // Fetch partners on mount
  useEffect(() => {
    async function fetchPartners() {
      try {
        const res = await fetch('/api/public/partners');
        const data = await res.json();
        if (data.success && data.data) {
          const sorted = data.data
            .filter((p: Partner) => p.published !== false)
            .sort((a: Partner, b: Partner) => (a.sortOrder || 0) - (b.sortOrder || 0));
          setPartners(sorted);
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setPartnersLoading(false);
      }
    }
    fetchPartners();
  }, []);

  // Mouse tracking state for center hub animation
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  // Individual component animations - granular control
  // Hero section
  const heroTitle1 = useScrollAnimation(0.1);
  const heroTitle2 = useScrollAnimation(0.1);
  const heroSubtitle = useScrollAnimation(0.1);
  const heroButtons = useScrollAnimation(0.1);

  // Vision & Mission
  const visionCard = useScrollAnimation(0.2);
  const missionCard = useScrollAnimation(0.2);

  // Programs - Granular header animations
  const programsVerticalText = useScrollAnimation(0.2);
  const programsCircle = useScrollAnimation(0.2);
  const programsYear = useScrollAnimation(0.2);
  const programsNumberBadge = useScrollAnimation(0.2);
  const programsNumberLine = useScrollAnimation(0.2);
  const programsHeadingOur = useScrollAnimation(0.2);
  const programsHeadingCore = useScrollAnimation(0.2);
  const programsHeadingPrograms = useScrollAnimation(0.2);
  const programsTagline = useScrollAnimation(0.2);
  const programsStats = useScrollAnimation(0.2);
  const programsCenterHub = useScrollAnimation(0.2);
  const programCard1 = useScrollAnimation(0.1);
  const programCard2 = useScrollAnimation(0.1);
  const programCard3 = useScrollAnimation(0.1);
  const programCard4 = useScrollAnimation(0.1);

  // About section - Granular component animations
  const aboutLabel = useScrollAnimation(0.2);
  const aboutTitle = useScrollAnimation(0.2);
  const aboutSubtitle = useScrollAnimation(0.2);
  const aboutCard1 = useScrollAnimation(0.2);
  const aboutCard2 = useScrollAnimation(0.2);
  const aboutCard3 = useScrollAnimation(0.2);
  const aboutCard4 = useScrollAnimation(0.2);
  const aboutCard5 = useScrollAnimation(0.2);
  const aboutCard6 = useScrollAnimation(0.2);
  const aboutCard7 = useScrollAnimation(0.2);

  // Partners - Granular animations
  const partnersLabel = useScrollAnimation(0.2);
  const partnersTitle = useScrollAnimation(0.2);
  const partnersSubtitle = useScrollAnimation(0.2);
  const partnersDescription = useScrollAnimation(0.2);
  const partnerCard1 = useScrollAnimation(0.2);
  const partnerCard2 = useScrollAnimation(0.2);
  const partnerCard3 = useScrollAnimation(0.2);
  const partnerCard4 = useScrollAnimation(0.2);
  const partnerCard5 = useScrollAnimation(0.2);
  const partnerCard6 = useScrollAnimation(0.2);
  const partnerCard7 = useScrollAnimation(0.2);
  const partnerCard8 = useScrollAnimation(0.2);
  const partnerCard9 = useScrollAnimation(0.2);
  const partnerCard10 = useScrollAnimation(0.2);

  // Testimonials - Granular animations
  const testimonialsLabel = useScrollAnimation(0.2);
  const testimonialsTitle = useScrollAnimation(0.2);
  const testimonialsSubtitle = useScrollAnimation(0.2);
  const testimonialsDescription = useScrollAnimation(0.2);
  const testimonial1 = useScrollAnimation(0.2);
  const testimonial2 = useScrollAnimation(0.2);
  const testimonial3 = useScrollAnimation(0.2);

  // Newsletter - Granular animations
  const newsletterIcon = useScrollAnimation(0.2);
  const newsletterTitle = useScrollAnimation(0.2);
  const newsletterDescription = useScrollAnimation(0.2);
  const newsletterForm = useScrollAnimation(0.2);
  const newsletterPrivacy = useScrollAnimation(0.2);

  // CTA - Granular animations
  const ctaLabel = useScrollAnimation(0.2);
  const ctaTitle = useScrollAnimation(0.2);
  const ctaCard1 = useScrollAnimation(0.2);
  const ctaCard2 = useScrollAnimation(0.2);

  return (
    <>
      {/* HERO SECTION - Full-Width Video with CodePen Effects */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-visible bg-black hero-curved">

        {/* Video container with curved bottom */}
        <div className="absolute inset-0 overflow-hidden video-curved">
          <iframe
            className="absolute inset-0 w-full h-full"
            style={{ width: '100vw', height: '100vh', objectFit: 'cover', pointerEvents: 'none' }}
            src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
            title="RNADW Background Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

        </div>

        {/* Top right content - smaller and repositioned with localized blur */}
        <div className="absolute top-32 right-8 lg:right-16 z-10 max-w-xl text-left">

          {/* Localized backdrop blur behind text */}
          <div className="absolute inset-0 -inset-x-8 -inset-y-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: -1
            }}
          />

          <div className="relative z-10">

          {/* Yellow accent line with blend mode */}
          <div className="w-16 h-1 mb-6 rounded-full animate-pulse"
            style={{ backgroundColor: '#FACC15', mixBlendMode: 'screen' }}
          />

          {/* Main Headline with mix-blend-mode difference effect - smaller */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 tracking-tight blend-text">
            <span
              ref={heroTitle1.ref}
              className={`block scroll-animate-left delay-100 ${heroTitle1.isVisible ? 'visible' : ''}`}>
              Empowering
            </span>
            <span
              ref={heroTitle2.ref}
              className={`block mt-2 relative scroll-animate-right delay-200 ${heroTitle2.isVisible ? 'visible' : ''}`}>
              Deaf Women
            </span>
          </h1>

          {/* Subheadline with blend mode - smaller */}
          <p
            ref={heroSubtitle.ref}
            className={`text-lg sm:text-xl lg:text-2xl font-light mb-8 blend-text scroll-animate delay-300 ${heroSubtitle.isVisible ? 'visible' : ''}`}>
            Building a Rwanda where deaf women thrive
          </p>

          {/* CTA Section - smaller buttons with micro-interactions */}
          <div
            ref={heroButtons.ref}
            className={`flex flex-col sm:flex-row gap-4 scroll-animate-scale delay-400 ${heroButtons.isVisible ? 'visible' : ''}`}>
            <Link href="/aboutus" className="group relative cta-button">
              <div className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: '#FACC15' }}
              />
              <button className="button-ripple hover-glow relative px-8 py-4 rounded-full font-bold text-base text-gray-900 transition-all transform group-hover:scale-110"
                style={{ backgroundColor: '#FACC15' }}>
                Our Story
              </button>
            </Link>

            <Link href="/donate" className="group cta-button">
              <button className="button-ripple hover-glow px-8 py-4 rounded-full font-bold text-base text-white border-3 transition-all transform group-hover:scale-110 backdrop-blur-md group-hover:bg-white/20"
                style={{ borderColor: 'white', borderWidth: '3px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                Donate Now
              </button>
            </Link>
          </div>

          </div>
        </div>

        {/* Scroll indicator with blend mode */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-10 h-14 rounded-full border-3 border-white/60 flex items-start justify-center p-2.5"
            style={{ mixBlendMode: 'difference' }}>
            <div className="w-2 h-4 rounded-full animate-pulse"
              style={{ backgroundColor: '#FACC15' }}
            />
          </div>
        </div>

      </section>

      {/* Curved section pseudo-elements using CSS */}
      <style jsx>{`
        .hero-curved {
          border-bottom-right-radius: 15vw;
          position: relative;
        }

        .hero-curved::before {
          content: "";
          background-color: #000;
          position: absolute;
          top: 100%;
          left: 0;
          width: 15vw;
          height: 15vw;
          z-index: 1;
        }

        .hero-curved::after {
          content: "";
          background-color: #fff;
          position: absolute;
          top: 100%;
          left: 0;
          width: 15vw;
          height: 15vw;
          border-top-left-radius: 15vw;
          z-index: 2;
        }

        .video-curved {
          border-bottom-right-radius: 15vw;
        }

        .blend-text {
          mix-blend-mode: difference !important;
          color: #fff;
          position: relative;
        }

        .cta-button {
          cursor: none;
        }

        @media screen and (max-width: 768px) {
          .hero-curved {
            border-bottom-right-radius: 20vw;
          }

          .hero-curved::before,
          .hero-curved::after {
            width: 20vw;
            height: 20vw;
          }

          .hero-curved::after {
            border-top-left-radius: 20vw;
          }

          .video-curved {
            border-bottom-right-radius: 20vw;
          }
        }
      `}</style>

      {/* ABOUT SECTION - Bento Grid with Stats */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="mb-16">
            <div
              ref={aboutLabel.ref}
              className={`flex items-center gap-3 mb-6 scroll-animate delay-100 ${aboutLabel.isVisible ? 'visible' : ''}`}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Who We Are</span>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>
            <h2
              ref={aboutTitle.ref}
              className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] text-gray-900 mb-4 scroll-animate delay-200 ${aboutTitle.isVisible ? 'visible' : ''}`}>
              An Organization<br />
              <span
                ref={aboutSubtitle.ref}
                className={`relative inline-block scroll-animate-scale delay-300 ${aboutSubtitle.isVisible ? 'visible' : ''}`}>
                <span className="relative z-10" style={{ color: '#2563EB' }}>of People with Disabilities</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-20 -z-10" style={{ backgroundColor: '#2563EB' }} />
              </span>
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">

            {/* Large Text Block - Top Left */}
            <div
              ref={aboutCard1.ref}
              className={`md:col-span-4 bg-white rounded-3xl p-8 lg:p-12 shadow-lg scroll-animate-left delay-100 ${aboutCard1.isVisible ? 'visible' : ''}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">🏛️</div>
                  <div className="h-1 flex-1 max-w-[100px] rounded-full" style={{ backgroundColor: '#FACC15' }} />
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                  Fully Registered with Rwanda Governance Board
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Rwanda National Association of Deaf Women (RNADW) is a Deaf constituency-led organization
                  fully registered with Rwanda Governance Board (RGB) under Registration N° 055/2014.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in <span className="font-black" style={{ color: '#FACC15' }}>2005</span> by Deaf Women Human Rights Activists to advocate for the rights
                  of deaf women and girls. We fight for full and meaningful social integration across all 22 districts of Rwanda.
                </p>

                <Link href="/aboutus" className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-black text-white transition-all hover:scale-105"
                  style={{ backgroundColor: '#2563EB' }}>
                  Learn Our Story
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stat Card 1 - Top Right */}
            <div
              ref={aboutCard2.ref}
              className={`md:col-span-2 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 shadow-lg flex flex-col justify-center items-center text-center min-h-[300px] scroll-animate-right delay-200 ${aboutCard2.isVisible ? 'visible' : ''}`}>
              <div className="text-7xl lg:text-8xl font-black text-white mb-4">
                500+
              </div>
              <div className="text-white/90 font-bold text-lg uppercase tracking-wider">
                Lives Empowered
              </div>
              <div className="mt-6 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>

            {/* Image Card 1 - Middle Left */}
            <div
              ref={aboutCard3.ref}
              className={`md:col-span-3 relative rounded-3xl overflow-hidden shadow-lg min-h-[400px] group scroll-animate-left delay-300 ${aboutCard3.isVisible ? 'visible' : ''}`}>
              <Image
                src="/images/0U9A5550.JPG"
                alt="RNADW Team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-black text-white mb-2">Our Community</h4>
                <p className="text-white/90 text-sm">Empowering deaf women across Rwanda</p>
              </div>
            </div>

            {/* Stat Card 2 - Middle Center */}
            <div
              ref={aboutCard4.ref}
              className={`md:col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 shadow-lg flex flex-col justify-center items-center text-center min-h-[300px] scroll-animate-scale delay-400 ${aboutCard4.isVisible ? 'visible' : ''}`}>
              <div className="text-7xl font-black text-white mb-4">
                19+
              </div>
              <div className="text-white/90 font-bold text-sm uppercase tracking-wider">
                Years of Impact
              </div>
            </div>

            {/* Quote Card - Middle Right */}
            <div
              ref={aboutCard5.ref}
              className={`md:col-span-2 bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-center min-h-[300px] scroll-animate-right delay-500 ${aboutCard5.isVisible ? 'visible' : ''}`}>
              <div className="text-6xl mb-4" style={{ color: '#FACC15' }}>"</div>
              <p className="text-xl font-bold text-gray-900 leading-snug mb-6">
                Advocating for rights and social integration in the Rwandan community
              </p>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                <span className="text-sm font-black uppercase tracking-wider text-gray-400">Our Mission</span>
              </div>
            </div>

            {/* Wide Image Card - Bottom */}
            <div
              ref={aboutCard6.ref}
              className={`md:col-span-4 relative rounded-3xl overflow-hidden shadow-lg min-h-[350px] group scroll-animate delay-600 ${aboutCard6.isVisible ? 'visible' : ''}`}>
              <Image
                src="/images/0U9A5432.JPG"
                alt="RNADW Activities"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-12">
                <h4 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Since 2005
                </h4>
                <p className="text-white/90 text-lg max-w-md">
                  Leading advocacy for deaf women's rights and empowerment across Rwanda
                </p>
              </div>
            </div>

            {/* Icon Grid - Bottom Right */}
            <div
              ref={aboutCard7.ref}
              className={`md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-lg scroll-animate-right delay-700 ${aboutCard7.isVisible ? 'visible' : ''}`}>
              <h4 className="text-white font-black text-xl mb-6">We Focus On</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: '#FACC15' }}>
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">Education</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: '#2563EB' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">Advocacy</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: '#FACC15' }}>
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">Community</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: '#2563EB' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-white text-xs font-semibold">Empowerment</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* VISION & MISSION SECTION - Creative Asymmetric Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

        {/* Split background - Yellow left, Blue right */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full" style={{ backgroundColor: '#FACC15' }} />
          <div className="w-1/2 h-full" style={{ backgroundColor: '#2563EB' }} />
        </div>

        {/* Diagonal split overlay */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="diagonalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FACC15', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#FACC15', stopOpacity: 0.5 }} />
                <stop offset="50%" style={{ stopColor: '#2563EB', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <polygon points="0,0 60,0 40,100 0,100" fill="#FACC15" />
            <polygon points="60,0 100,0 100,100 40,100" fill="#2563EB" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* VISION - Left side (Yellow theme) */}
            <div
              ref={visionCard.ref}
              className={`relative p-12 lg:p-16 flex flex-col justify-center min-h-[600px] scroll-animate-left delay-200 ${visionCard.isVisible ? 'visible' : ''}`}>

              {/* Large decorative number */}
              <div className="absolute top-8 left-8 text-[15rem] font-black leading-none opacity-10 select-none"
                style={{ color: '#000' }}>
                01
              </div>

              <div className="relative z-10">
                {/* Small label */}
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-sm tracking-wider uppercase">
                    <div className="w-12 h-0.5 bg-gray-900" />
                    Vision
                  </div>
                </div>

                {/* Main heading */}
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[0.95] text-gray-900">
                  An Inclusive<br />
                  Just Society
                </h2>

                {/* Content */}
                <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-light">
                  An inclusive and just society where Deaf Women and Girls fully enjoy their rights, participate in decision-making processes and benefit from all aspects of life.
                </p>

                {/* Decorative element */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-white shadow-2xl">
                    🌟
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-gray-900 to-transparent" />
                </div>
              </div>
            </div>

            {/* MISSION - Right side (Blue theme) */}
            <div
              ref={missionCard.ref}
              className={`relative p-12 lg:p-16 flex flex-col justify-center min-h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 scroll-animate-right delay-400 ${missionCard.isVisible ? 'visible' : ''}`}>

              {/* Large decorative number */}
              <div className="absolute top-8 right-8 text-[15rem] font-black leading-none opacity-10 select-none text-white">
                02
              </div>

              <div className="relative z-10">
                {/* Small label */}
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-2 text-yellow-300 font-bold text-sm tracking-wider uppercase">
                    <div className="w-12 h-0.5 bg-yellow-300" />
                    Mission
                  </div>
                </div>

                {/* Main heading */}
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[0.95] text-white">
                  Defend.<br />
                  Promote.<br />
                  Empower.
                </h2>

                {/* Content */}
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                  To defend the rights of Deaf Women and Girls and promote their health rights, human rights, education and socio-economic justice.
                </p>

                {/* Decorative element */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
                    style={{ backgroundColor: '#FACC15' }}>
                    🎯
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-yellow-300 to-transparent" />
                </div>
              </div>

              {/* Floating accent shapes */}
              <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full opacity-20"
                style={{ backgroundColor: '#FACC15', filter: 'blur(40px)' }} />
              <div className="absolute top-1/3 right-12 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: '#FACC15', filter: 'blur(30px)' }} />
            </div>

          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION - Bold Magazine Layout */}
      <section className="relative bg-white text-gray-900 overflow-hidden">

        {/* Section Title - Vertical Sidebar Style */}
        <div className="relative min-h-[400px] flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left - Vertical Text Sidebar */}
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-start py-12 lg:py-0">
              <div className="flex lg:flex-col items-center gap-8 lg:gap-12">
                {/* Rotating "What We Do" on desktop, horizontal on mobile */}
                <div
                  ref={programsVerticalText.ref}
                  className={`hidden lg:block scroll-animate-left delay-100 ${programsVerticalText.isVisible ? 'visible' : ''}`}
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">
                    What We Do
                  </span>
                </div>
                <div
                  ref={programsVerticalText.ref}
                  className={`lg:hidden scroll-animate delay-100 ${programsVerticalText.isVisible ? 'visible' : ''}`}>
                  <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">
                    What We Do
                  </span>
                </div>

                {/* Large decorative circle */}
                <div
                  ref={programsCircle.ref}
                  className={`w-3 h-3 rounded-full scroll-animate-scale delay-200 ${programsCircle.isVisible ? 'visible' : ''}`}
                  style={{ backgroundColor: '#FACC15' }} />

                {/* Year founded */}
                <div
                  ref={programsYear.ref}
                  className={`hidden lg:block text-gray-300 font-black text-2xl scroll-animate-left delay-300 ${programsYear.isVisible ? 'visible' : ''}`}
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  2005
                </div>
              </div>
            </div>

            {/* Right - Main Heading Area */}
            <div className="lg:col-span-10 flex flex-col justify-center py-12 lg:py-24 lg:pl-16 lg:border-l-2 border-gray-100">

              {/* Number badge */}
              <div className="inline-flex items-center gap-4 mb-8">
                <div
                  ref={programsNumberBadge.ref}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-black font-black text-xl scroll-animate-scale delay-100 ${programsNumberBadge.isVisible ? 'visible' : ''}`}
                  style={{ backgroundColor: '#FACC15' }}>
                  04
                </div>
                <div
                  ref={programsNumberLine.ref}
                  className={`h-px flex-1 max-w-[100px] scroll-animate-right delay-200 ${programsNumberLine.isVisible ? 'visible' : ''}`}
                  style={{ backgroundColor: '#FACC15' }} />
              </div>

              {/* Main heading with mixed styles */}
              <div className="mb-12">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] mb-4">
                  <span
                    ref={programsHeadingOur.ref}
                    className={`text-gray-300 scroll-animate-left delay-300 inline-block ${programsHeadingOur.isVisible ? 'visible' : ''}`}>
                    Our
                  </span>{' '}
                  <span
                    ref={programsHeadingCore.ref}
                    className={`text-gray-900 scroll-animate delay-400 inline-block ${programsHeadingCore.isVisible ? 'visible' : ''}`}>
                    Core
                  </span>
                  <br />
                  <span
                    ref={programsHeadingPrograms.ref}
                    className={`relative inline-block scroll-animate-right delay-500 ${programsHeadingPrograms.isVisible ? 'visible' : ''}`}>
                    <span className="relative z-10" style={{ color: '#FACC15' }}>Programs</span>
                    {/* Underline decoration */}
                    <div className="absolute bottom-2 left-0 right-0 h-4 bg-yellow-50 -z-10" />
                  </span>
                </h2>

                {/* Tagline */}
                <p
                  ref={programsTagline.ref}
                  className={`text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mt-8 leading-relaxed scroll-animate delay-600 ${programsTagline.isVisible ? 'visible' : ''}`}>
                  Strategic Plan 2025-2030: Participation ~ Power ~ Partnership!
                </p>
              </div>

              {/* Decorative stats line */}
              <div
                ref={programsStats.ref}
                className={`flex items-center gap-8 text-gray-400 text-sm font-bold tracking-wider scroll-animate delay-700 ${programsStats.isVisible ? 'visible' : ''}`}>
                <span>EST. 2005</span>
                <div className="w-px h-4 bg-gray-200" />
                <span>4 PROGRAMS</span>
                <div className="w-px h-4 bg-gray-200" />
                <span>500+ LIVES</span>
              </div>

            </div>

          </div>
        </div>

        {/* Programs - Circular Orbit Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          {/* Central Hub */}
          <div className="relative flex items-center justify-center min-h-[800px] lg:min-h-[1000px]">

            {/* Center Circle - Interactive Gradient */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                ref={programsCenterHub.ref}
                className={`w-48 h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center scroll-animate-scale delay-100 ${programsCenterHub.isVisible ? 'visible' : ''} relative overflow-hidden cursor-pointer group`}
                style={{
                  boxShadow: isHovering
                    ? '0 40px 100px rgba(250, 204, 21, 0.3), 0 0 80px rgba(37, 99, 235, 0.2)'
                    : '0 30px 80px rgba(0,0,0,0.15)'
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  setMousePosition({ x, y });
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Animated gradient background */}
                <div
                  className="absolute inset-0 rounded-full transition-all duration-500"
                  style={{
                    background: `conic-gradient(from ${isHovering ? mousePosition.x * 3.6 : 0}deg at ${mousePosition.x}% ${mousePosition.y}%,
                      #FACC15 0deg,
                      #2563EB 90deg,
                      #FACC15 180deg,
                      #2563EB 270deg,
                      #FACC15 360deg)`,
                    animation: isHovering ? 'none' : 'spin 8s linear infinite'
                  }}
                />

                {/* White inner circle */}
                <div className="relative w-44 h-44 lg:w-60 lg:h-60 rounded-full bg-white flex flex-col items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                  <div
                    className="text-6xl lg:text-7xl font-black transition-all duration-300"
                    style={{
                      color: isHovering ? '#2563EB' : '#FACC15',
                      transform: isHovering ? 'scale(1.1)' : 'scale(1)'
                    }}>
                    {String(activities.length).padStart(2, '0')}
                  </div>
                  <div className="text-sm font-bold text-gray-400 tracking-wider mt-2">PROGRAMS</div>
                </div>
              </div>
            </div>

            {/* Loading state */}
            {activitiesLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Dynamic Program Cards - Positioned around the circle */}
            {!activitiesLoading && activities.map((activity, index) => {
              // Position configurations for up to 4 cards around the center
              const positions = [
                { // Top
                  className: 'absolute top-0 left-1/2 transform -translate-x-1/2 w-72 lg:w-80',
                  lineClass: 'absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-32 lg:h-48',
                  lineStyle: { background: 'linear-gradient(to bottom, #FACC15, transparent)' },
                  cardHover: 'group-hover:-translate-y-2',
                  gradientClass: 'bg-gradient-to-t from-black via-black/50 to-transparent',
                  badgeColor: '#FACC15',
                  badgeTextColor: 'black',
                  exploreColor: '#FACC15'
                },
                { // Right
                  className: 'absolute top-1/2 right-0 transform -translate-y-1/2 w-72 lg:w-80',
                  lineClass: 'absolute top-1/2 right-full transform -translate-y-1/2 h-0.5 w-32 lg:w-48',
                  lineStyle: { background: 'linear-gradient(to left, #2563EB, transparent)' },
                  cardHover: 'group-hover:translate-x-2',
                  gradientClass: 'bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent',
                  badgeColor: '#FACC15',
                  badgeTextColor: 'black',
                  exploreColor: '#FACC15'
                },
                { // Bottom
                  className: 'absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 lg:w-80',
                  lineClass: 'absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-32 lg:h-48',
                  lineStyle: { background: 'linear-gradient(to top, #FACC15, transparent)' },
                  cardHover: 'group-hover:translate-y-2',
                  gradientClass: 'bg-gradient-to-t from-yellow-900 via-yellow-900/50 to-transparent',
                  badgeColor: '#1F2937',
                  badgeTextColor: 'white',
                  exploreColor: 'white'
                },
                { // Left
                  className: 'absolute top-1/2 left-0 transform -translate-y-1/2 w-72 lg:w-80',
                  lineClass: 'absolute top-1/2 left-full transform -translate-y-1/2 h-0.5 w-32 lg:w-48',
                  lineStyle: { background: 'linear-gradient(to right, #2563EB, transparent)' },
                  cardHover: 'group-hover:-translate-x-2',
                  gradientClass: 'bg-gradient-to-t from-black via-black/50 to-transparent',
                  badgeColor: '#2563EB',
                  badgeTextColor: 'white',
                  exploreColor: '#2563EB'
                }
              ];
              
              const pos = positions[index % 4];

              return (
                <Link 
                  key={activity._id}
                  href={`/activities/${activity._id}`}
                  className={`group ${pos.className}`}>
                  <div className="relative">
                    {/* Connection line */}
                    <div className={pos.lineClass} style={pos.lineStyle} />

                    {/* Card with micro-interactions */}
                    <div className={`hover-lift card-tilt relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 ${pos.cardHover}`}>
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={activity.image || '/images/image1.png'}
                          alt={activity.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 ${pos.gradientClass}`} />
                      </div>

                      {/* Number badge */}
                      <div 
                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg"
                        style={{ backgroundColor: pos.badgeColor, color: pos.badgeTextColor }}>
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-3xl mb-2">{activity.icon || '📋'}</div>
                        <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                          {activity.title.split(' ').slice(0, 3).join(' ')}
                          {activity.title.split(' ').length > 3 && <><br />{activity.title.split(' ').slice(3).join(' ')}</>}
                        </h3>
                        <p className="text-white/80 text-sm mb-3 line-clamp-2">
                          {activity.description}
                        </p>
                        <div 
                          className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all"
                          style={{ color: pos.exploreColor }}>
                          Explore →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

          </div>

        </div>
      </section>

      {/* PARTNERS SECTION - Infinite Scroll Marquee with Flip Cards */}
      <section className="relative py-32 overflow-hidden bg-white">

        {/* Diagonal stripe background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #FACC15,
              #FACC15 10px,
              transparent 10px,
              transparent 20px,
              #2563EB 20px,
              #2563EB 30px,
              transparent 30px,
              transparent 40px
            )`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header - Left Aligned */}
          <div className="mb-20">
            <div
              ref={partnersLabel.ref}
              className={`flex items-center gap-4 mb-6 scroll-animate delay-100 ${partnersLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">
                Our Partners
              </span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2
              ref={partnersTitle.ref}
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-gray-900 mb-6 scroll-animate delay-200 ${partnersTitle.isVisible ? 'visible' : ''}`}>
              Building Impact<br />
              <span
                ref={partnersSubtitle.ref}
                className={`relative inline-block scroll-animate-scale delay-300 ${partnersSubtitle.isVisible ? 'visible' : ''}`}>
                <span className="relative z-10" style={{ color: '#FACC15' }}>Together</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
              </span>
            </h2>

            <p
              ref={partnersDescription.ref}
              className={`text-xl lg:text-2xl text-gray-600 font-light leading-relaxed scroll-animate delay-400 ${partnersDescription.isVisible ? 'visible' : ''}`}>
              Collaborating with leading organizations to create lasting change across Rwanda and beyond
            </p>
          </div>

          {/* Masonry/Bento Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">

            {/* Loading state */}
            {partnersLoading && (
              <div className="col-span-full flex items-center justify-center py-16">
                <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Dynamic Partners */}
            {!partnersLoading && partners.length > 0 && partners.map((partner, i) => {
              const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-100'];
              const spans = ['', '', 'lg:col-span-2', '', '', 'lg:col-span-2', ''];
              const currentDelay = delays[i % delays.length];
              const currentSpan = spans[i % spans.length];
              const partnerColor = partner.color || (i % 2 === 0 ? '#2563EB' : '#FACC15');
              
              return (
                <div
                  key={partner._id}
                  className={`group relative ${currentSpan} min-h-[180px] scroll-animate ${currentDelay} visible`}
                  style={{ 
                    perspective: '1000px',
                    animation: `fadeSlideUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(i + 1) * 0.1}s both`
                  }}
                >
                  {/* Flip card container */}
                  <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180"
                    style={{ transformStyle: 'preserve-3d' }}>

                    {/* Front side */}
                    <div className="absolute inset-0 rounded-2xl p-6 lg:p-8 flex flex-col justify-between border-3 transition-all"
                      style={{
                        borderColor: partnerColor,
                        backgroundColor: 'white',
                        backfaceVisibility: 'hidden'
                      }}>

                      {/* Number badge */}
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg"
                          style={{ backgroundColor: partnerColor }}>
                          {String(i + 1).padStart(2, '0')}
                        </div>

                        {/* Handshake icon */}
                        <svg className="w-8 h-8 opacity-20" style={{ color: partnerColor }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>

                      {/* Partner name */}
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2 leading-tight">
                          {partner.name}
                        </h3>
                        <div className="h-1 w-12 rounded-full mb-2" style={{ backgroundColor: partnerColor }} />
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Partnership
                        </p>
                      </div>
                    </div>

                    {/* Back side */}
                    <div className="absolute inset-0 rounded-2xl p-6 lg:p-8 flex flex-col justify-center items-center text-center"
                      style={{
                        backgroundColor: partnerColor,
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}>
                      <p className="text-white font-bold text-lg mb-3">
                        {partner.category}
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {partner.description || 'Collaborating to empower deaf women through sustainable programs'}
                      </p>

                      {partner.website && (
                        <a href={partner.website} target="_blank" rel="noopener noreferrer"
                          className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-bold rounded-lg transition-colors">
                          Visit Website
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Fallback if no partners */}
            {!partnersLoading && partners.length === 0 && (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-500">Partners coming soon...</p>
              </div>
            )}

          </div>

        </div>

        {/* Floating decorative shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ backgroundColor: '#FACC15' }} />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ backgroundColor: '#2563EB', animationDelay: '1s' }} />

      </section>

      {/* TESTIMONIALS SECTION - Carousel with Impact Stories */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#1F2937' }}>

        {/* Decorative gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header - Left Aligned */}
          <div className="mb-20">
            <div
              ref={testimonialsLabel.ref}
              className={`flex items-center gap-4 mb-6 scroll-animate delay-100 ${testimonialsLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Impact Stories</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2
              ref={testimonialsTitle.ref}
              className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${testimonialsTitle.isVisible ? 'visible' : ''}`}>
              Voices of<br />
              <span
                ref={testimonialsSubtitle.ref}
                className={`relative inline-block scroll-animate-scale delay-300 ${testimonialsSubtitle.isVisible ? 'visible' : ''}`}>
                <span className="relative z-10" style={{ color: '#FACC15' }}>Empowerment</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
              </span>
            </h2>

            <p
              ref={testimonialsDescription.ref}
              className={`text-xl text-gray-400 scroll-animate delay-400 ${testimonialsDescription.isVisible ? 'visible' : ''}`}>
              Real stories from the women and girls whose lives have been transformed
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Loading state */}
            {testimonialsLoading && (
              <div className="col-span-full flex items-center justify-center py-16">
                <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Dynamic Testimonials with CSS-only animations */}
            {!testimonialsLoading && testimonials.length > 0 && testimonials.map((testimonialItem, i) => {
              const delays = ['delay-100', 'delay-300', 'delay-500'];
              const currentDelay = delays[i] || delays[0];
              
              return (
                <div
                  key={testimonialItem._id}
                  className={`group relative scroll-animate ${currentDelay} visible`}
                  style={{ 
                    animation: `fadeSlideUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${(i + 1) * 0.2}s both`
                  }}>
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-2 min-h-[400px] flex flex-col">

                    {/* Quote mark */}
                    <div className="text-7xl font-black mb-6 leading-none" style={{ color: '#FACC15' }}>"</div>

                    {/* Quote text */}
                    <p className="text-white/90 text-lg leading-relaxed mb-8 flex-1">
                      {testimonialItem.quote}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t-2 border-white/10">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonialItem.image || '/images/0U9A5550.JPG'}
                          alt={testimonialItem.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-white font-black text-lg">{testimonialItem.author}</div>
                        <div className="text-gray-400 text-sm">{testimonialItem.role}</div>
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-20"
                      style={{
                        background: 'linear-gradient(135deg, #FACC15 0%, transparent 100%)',
                        borderRadius: '0 24px 0 0'
                      }} />
                  </div>
                </div>
              );
            })}

            {/* Fallback if no testimonials from database */}
            {!testimonialsLoading && testimonials.length === 0 && [
              {
                quote: "RNADW gave me the confidence to pursue my dreams. Today, I'm a business owner employing 5 people.",
                name: "Marie K.",
                role: "Entrepreneur",
                image: "/images/0U9A5550.JPG",
                ref: testimonial1,
                delay: 'delay-100'
              },
              {
                quote: "The skills training program changed my life. I can now support my family and inspire my daughters.",
                name: "Grace M.",
                role: "Program Graduate",
                image: "/images/0U9A5432.JPG",
                ref: testimonial2,
                delay: 'delay-300'
              },
              {
                quote: "Being part of this community showed me I'm not alone. Together we're creating real change.",
                name: "Sarah N.",
                role: "Community Leader",
                image: "/images/0U9A5473.JPG",
                ref: testimonial3,
                delay: 'delay-500'
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                ref={testimonial.ref.ref}
                className={`group relative scroll-animate ${testimonial.delay} ${testimonial.ref.isVisible ? 'visible' : ''}`}>
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/10 hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-2 min-h-[400px] flex flex-col">

                  {/* Quote mark */}
                  <div className="text-7xl font-black mb-6 leading-none" style={{ color: '#FACC15' }}>"</div>

                  {/* Quote text */}
                  <p className="text-white/90 text-lg leading-relaxed mb-8 flex-1">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-white/10">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-20"
                    style={{
                      background: 'linear-gradient(135deg, #FACC15 0%, transparent 100%)',
                      borderRadius: '0 24px 0 0'
                    }} />
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* NEWSLETTER SECTION - Inline Subscribe Form */}
      <section className="relative py-24 overflow-hidden bg-white">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative rounded-3xl p-12 lg:p-16 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)'
            }}>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: '#FACC15' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: '#FACC15' }} />

            {/* Content - Left Aligned */}
            <div className="relative z-10">

              {/* Icon */}
              <div
                ref={newsletterIcon.ref}
                className={`flex items-center justify-center w-20 h-20 rounded-2xl mb-6 scroll-animate-scale delay-100 ${newsletterIcon.isVisible ? 'visible' : ''}`}
                style={{ backgroundColor: '#FACC15' }}>
                <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2
                ref={newsletterTitle.ref}
                className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight scroll-animate delay-200 ${newsletterTitle.isVisible ? 'visible' : ''}`}>
                Stay Connected
              </h2>

              <p
                ref={newsletterDescription.ref}
                className={`text-xl text-white/80 mb-10 scroll-animate delay-300 ${newsletterDescription.isVisible ? 'visible' : ''}`}>
                Get updates on our programs, success stories, and upcoming events delivered to your inbox
              </p>

              {/* Newsletter Form */}
              <div
                ref={newsletterForm.ref}
                className={`flex flex-col sm:flex-row gap-4 max-w-xl scroll-animate-scale delay-400 ${newsletterForm.isVisible ? 'visible' : ''}`}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-2xl text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 transition-all"
                />
                <button className="px-8 py-4 rounded-2xl font-black text-gray-900 transition-all hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                  style={{ backgroundColor: '#FACC15' }}>
                  Subscribe
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <p
                ref={newsletterPrivacy.ref}
                className={`text-white/60 text-sm mt-6 scroll-animate delay-500 ${newsletterPrivacy.isVisible ? 'visible' : ''}`}>
                We respect your privacy. Unsubscribe at any time.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION - Overlapping Tilted Cards with Gradient Mesh Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 50%, #e8e8e8 100%)'
        }}>

        {/* Gradient Mesh Background - Colorful Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 right-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-25"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, #2563EB 100%)' }} />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

          {/* Section Label - Left Aligned */}
          <div className="mb-16 lg:mb-20">
            <div
              ref={ctaLabel.ref}
              className={`flex items-center gap-4 mb-6 scroll-animate delay-100 ${ctaLabel.isVisible ? 'visible' : ''}`}>
              <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Take Action</span>
              <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>
            <h2
              ref={ctaTitle.ref}
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-gray-900 scroll-animate delay-200 ${ctaTitle.isVisible ? 'visible' : ''}`}>
              Join the<br />
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: '#FACC15' }}>Movement</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
              </span>
            </h2>
          </div>

          {/* Overlapping Cards Container - Desktop: Side by Side Tilted, Mobile: Stacked */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center min-h-[600px]">

            {/* CARD 1 - Donate CTA (Yellow, tilted left on desktop) */}
            <div
              ref={ctaCard1.ref}
              className={`group relative scroll-animate-left delay-300 ${ctaCard1.isVisible ? 'visible' : ''}`}>
              <div className="relative transform lg:hover:scale-105 lg:hover:-rotate-2 transition-all duration-500 lg:-rotate-3"
                style={{ transformOrigin: 'center' }}>

                {/* Card glow/shadow */}
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: '#FACC15' }} />

                {/* Main Card */}
                <div className="relative bg-white/90 backdrop-blur-2xl border-4 rounded-3xl p-10 lg:p-12 shadow-2xl"
                  style={{ borderColor: '#FACC15' }}>

                  {/* Card number badge */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full flex items-center justify-center font-black text-3xl text-white shadow-xl"
                    style={{ backgroundColor: '#FACC15' }}>
                    01
                  </div>

                  {/* Icon with bounce interaction */}
                  <div className="icon-bounce w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                    style={{ backgroundColor: '#FACC15' }}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-4xl lg:text-5xl font-black leading-[1.1] mb-4 text-gray-900">
                    Make a<br />Donation
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Empower deaf women and girls through education, advocacy, and community programs. Every contribution creates lasting change.
                  </p>

                  {/* Stats mini */}
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b-2 border-gray-100">
                    <div>
                      <div className="text-2xl font-black" style={{ color: '#FACC15' }}>500+</div>
                      <div className="text-xs font-medium text-gray-500">Lives Changed</div>
                    </div>
                    <div className="w-px h-10 bg-gray-200" />
                    <div>
                      <div className="text-2xl font-black" style={{ color: '#FACC15' }}>19+</div>
                      <div className="text-xs font-medium text-gray-500">Years Impact</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/donate" className="group/btn inline-block w-full">
                    <button className="w-full px-8 py-5 rounded-2xl font-black text-lg text-white transition-all transform group-hover/btn:scale-105 group-hover/btn:shadow-2xl flex items-center justify-center gap-3"
                      style={{ backgroundColor: '#FACC15' }}>
                      Donate Now
                      <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>

                </div>
              </div>
            </div>

            {/* CARD 2 - Contact CTA (Blue, tilted right on desktop) */}
            <div
              ref={ctaCard2.ref}
              className={`group relative scroll-animate-right delay-500 ${ctaCard2.isVisible ? 'visible' : ''}`}>
              <div className="relative transform lg:hover:scale-105 lg:hover:rotate-2 transition-all duration-500 lg:rotate-3"
                style={{ transformOrigin: 'center' }}>

                {/* Card glow/shadow */}
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: '#2563EB' }} />

                {/* Main Card */}
                <div className="relative bg-white/90 backdrop-blur-2xl border-4 rounded-3xl p-10 lg:p-12 shadow-2xl"
                  style={{ borderColor: '#2563EB' }}>

                  {/* Card number badge */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full flex items-center justify-center font-black text-3xl text-white shadow-xl"
                    style={{ backgroundColor: '#2563EB' }}>
                    02
                  </div>

                  {/* Icon with bounce interaction */}
                  <div className="icon-bounce w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                    style={{ backgroundColor: '#2563EB' }}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-4xl lg:text-5xl font-black leading-[1.1] mb-4 text-gray-900">
                    Get in<br />Touch
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Questions? Partnership opportunities? We'd love to hear from you and explore how we can work together.
                  </p>

                  {/* Contact Info Items */}
                  <div className="space-y-4 mb-8 pb-8 border-b-2 border-gray-100">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#EFF6FF' }}>
                        <svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#2563EB' }}>Location</div>
                        <div className="text-gray-900 font-semibold text-sm">KG 125 ST, 304 Ikaro Plaza, Kigali</div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#EFF6FF' }}>
                        <svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#2563EB' }}>Email</div>
                        <div className="text-gray-900 font-semibold text-sm">info@rnadw.org.rw</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact" className="group/btn inline-block w-full">
                    <button className="w-full px-8 py-5 rounded-2xl font-black text-lg text-white transition-all transform group-hover/btn:scale-105 group-hover/btn:shadow-2xl flex items-center justify-center gap-3"
                      style={{ backgroundColor: '#2563EB' }}>
                      Contact Us
                      <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
