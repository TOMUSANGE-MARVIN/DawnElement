'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export default function AboutPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Mission & Vision animations
  const missionLabel = useScrollAnimation(0.2);
  const missionCard = useScrollAnimation(0.2);
  const visionCard = useScrollAnimation(0.2);
  const valuesCard = useScrollAnimation(0.2);

  // Story animations
  const storyLabel = useScrollAnimation(0.2);
  const storyTitle = useScrollAnimation(0.2);
  const story1 = useScrollAnimation(0.2);
  const story2 = useScrollAnimation(0.2);
  const story3 = useScrollAnimation(0.2);

  // Impact animations
  const impactLabel = useScrollAnimation(0.2);
  const impactStat1 = useScrollAnimation(0.2);
  const impactStat2 = useScrollAnimation(0.2);
  const impactStat3 = useScrollAnimation(0.2);
  const impactStat4 = useScrollAnimation(0.2);

  // Team animations
  const teamLabel = useScrollAnimation(0.2);
  const teamTitle = useScrollAnimation(0.2);
  const teamDescription = useScrollAnimation(0.2);

  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

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
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Who We Are</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Empowering<br />
            Deaf Women<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Since 2005</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Rwanda National Association of Deaf Women (RNADW) is an Organization of People with Disabilities (OPD)
            fully registered with Rwanda Governance Board (RGB), dedicated to advocating for the rights and empowerment
            of deaf women and girls across Rwanda.
          </p>

        </div>
      </section>

      {/* MISSION, VISION & VALUES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div
            ref={missionLabel.ref}
            className={`flex items-center gap-4 mb-12 scroll-animate delay-100 ${missionLabel.isVisible ? 'visible' : ''}`}>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Purpose</span>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Mission Card */}
            <div
              ref={missionCard.ref}
              className={`group relative p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-200 ${missionCard.isVisible ? 'visible' : ''}`}
              style={{ backgroundColor: '#FACC15' }}>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-800 leading-relaxed">
                To advocate for the rights of deaf women and girls, promote their social and economic empowerment,
                and ensure equal access to education, healthcare, and opportunities across Rwanda.
              </p>
            </div>

            {/* Vision Card */}
            <div
              ref={visionCard.ref}
              className={`group relative p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-300 ${visionCard.isVisible ? 'visible' : ''}`}
              style={{ backgroundColor: '#2563EB' }}>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-white mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                A Rwanda where every deaf woman and girl has equal opportunities, full inclusion in society,
                and the ability to reach their full potential without barriers or discrimination.
              </p>
            </div>

            {/* Values Card */}
            <div
              ref={valuesCard.ref}
              className={`group relative p-8 lg:p-10 rounded-3xl border-2 bg-white transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-400 ${valuesCard.isVisible ? 'visible' : ''}`}
              style={{ borderColor: '#FACC15' }}>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#FEF3C7' }}>
                <svg className="w-8 h-8" style={{ color: '#FACC15' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FACC15' }}>●</span>
                  <span><strong>Inclusion:</strong> Everyone belongs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FACC15' }}>●</span>
                  <span><strong>Empowerment:</strong> Enabling self-determination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FACC15' }}>●</span>
                  <span><strong>Advocacy:</strong> Speaking up for rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FACC15' }}>●</span>
                  <span><strong>Community:</strong> Stronger together</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-16">
            <div
              ref={storyLabel.ref}
              className={`flex items-center gap-4 mb-6 scroll-animate delay-100 ${storyLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Journey</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2
              ref={storyTitle.ref}
              className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] text-gray-900 scroll-animate delay-200 ${storyTitle.isVisible ? 'visible' : ''}`}>
              How We<br />
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: '#2563EB' }}>Started</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-20 -z-10" style={{ backgroundColor: '#2563EB' }} />
              </span>
            </h2>
          </div>

          {/* Story Timeline */}
          <div className="space-y-8">

            {/* Story 1: 2005 - Foundation */}
            <div
              ref={story1.ref}
              className={`flex flex-col lg:flex-row gap-8 items-start scroll-animate-left delay-200 ${story1.isVisible ? 'visible' : ''}`}>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center text-4xl font-black text-white"
                  style={{ backgroundColor: '#FACC15' }}>
                  2005
                </div>
              </div>
              <div className="flex-1 bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-4">The Beginning</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  RNADW was founded by a group of passionate deaf women human rights activists who recognized
                  critical gaps in service provision and insufficient advocacy efforts for deaf women and girls
                  in Rwanda. They came together with a shared vision to create lasting change.
                </p>
              </div>
            </div>

            {/* Story 2: Growth & Recognition */}
            <div
              ref={story2.ref}
              className={`flex flex-col lg:flex-row gap-8 items-start scroll-animate-right delay-300 ${story2.isVisible ? 'visible' : ''}`}>
              <div className="flex-shrink-0 lg:order-2">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#2563EB' }}>
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 lg:order-1 bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Official Recognition</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  RNADW achieved full registration with the Rwanda Governance Board (RGB) as an Organization
                  of People with Disabilities (OPD). This official recognition enabled us to expand our reach
                  and strengthen our advocacy efforts across the country.
                </p>
              </div>
            </div>

            {/* Story 3: Today */}
            <div
              ref={story3.ref}
              className={`flex flex-col lg:flex-row gap-8 items-start scroll-animate-left delay-400 ${story3.isVisible ? 'visible' : ''}`}>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center text-white"
                  style={{ backgroundColor: '#FACC15' }}>
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Today & Beyond</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, RNADW has empowered over 500 lives through our four core programs: Education & Literacy,
                  Economic Empowerment, Healthcare Access, and Advocacy & Rights. We continue to grow our impact,
                  partnering with leading organizations to create lasting change across Rwanda and beyond.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IMPACT STATS SECTION */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div
            ref={impactLabel.ref}
            className={`flex items-center gap-4 mb-16 justify-center scroll-animate delay-100 ${impactLabel.isVisible ? 'visible' : ''}`}>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Impact</span>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Stat 1 */}
            <div
              ref={impactStat1.ref}
              className={`text-center scroll-animate-scale delay-200 ${impactStat1.isVisible ? 'visible' : ''}`}>
              <div className="text-6xl lg:text-7xl font-black mb-4" style={{ color: '#FACC15' }}>500+</div>
              <div className="text-xl font-bold text-gray-300">Lives Empowered</div>
            </div>

            {/* Stat 2 */}
            <div
              ref={impactStat2.ref}
              className={`text-center scroll-animate-scale delay-300 ${impactStat2.isVisible ? 'visible' : ''}`}>
              <div className="text-6xl lg:text-7xl font-black mb-4" style={{ color: '#2563EB' }}>19</div>
              <div className="text-xl font-bold text-gray-300">Years of Service</div>
            </div>

            {/* Stat 3 */}
            <div
              ref={impactStat3.ref}
              className={`text-center scroll-animate-scale delay-400 ${impactStat3.isVisible ? 'visible' : ''}`}>
              <div className="text-6xl lg:text-7xl font-black mb-4" style={{ color: '#FACC15' }}>04</div>
              <div className="text-xl font-bold text-gray-300">Core Programs</div>
            </div>

            {/* Stat 4 */}
            <div
              ref={impactStat4.ref}
              className={`text-center scroll-animate-scale delay-500 ${impactStat4.isVisible ? 'visible' : ''}`}>
              <div className="text-6xl lg:text-7xl font-black mb-4" style={{ color: '#2563EB' }}>10+</div>
              <div className="text-xl font-bold text-gray-300">Partner Organizations</div>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-16 text-center">
            <div
              ref={teamLabel.ref}
              className={`flex items-center gap-4 mb-6 justify-center scroll-animate delay-100 ${teamLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Leadership</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2
              ref={teamTitle.ref}
              className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] text-gray-900 mb-6 scroll-animate delay-200 ${teamTitle.isVisible ? 'visible' : ''}`}>
              Meet Our<br />
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: '#FACC15' }}>Team</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-20 -z-10" style={{ backgroundColor: '#FACC15' }} />
              </span>
            </h2>

            <p
              ref={teamDescription.ref}
              className={`text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto scroll-animate delay-300 ${teamDescription.isVisible ? 'visible' : ''}`}>
              Led by passionate advocates and experts dedicated to creating lasting change for deaf women and girls across Rwanda.
            </p>
          </div>

          {/* Team Placeholder - Can be populated with actual team members */}
          <div className="bg-gray-50 rounded-3xl p-12 text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#FEF3C7' }}>
              <svg className="w-10 h-10" style={{ color: '#FACC15' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Team Profiles Coming Soon</h3>
            <p className="text-gray-600">We're updating our team section with detailed profiles of our leadership and staff.</p>
          </div>

        </div>
      </section>

    </main>
  );
}
