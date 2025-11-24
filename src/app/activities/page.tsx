'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import Link from 'next/link';

export default function ActivitiesPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Programs animations
  const programsLabel = useScrollAnimation(0.2);
  const program1 = useScrollAnimation(0.2);
  const program2 = useScrollAnimation(0.2);
  const program3 = useScrollAnimation(0.2);
  const program4 = useScrollAnimation(0.2);

  // Impact animations
  const impactLabel = useScrollAnimation(0.2);
  const impactTitle = useScrollAnimation(0.2);
  const impact1 = useScrollAnimation(0.2);
  const impact2 = useScrollAnimation(0.2);
  const impact3 = useScrollAnimation(0.2);

  // CTA animation
  const ctaSection = useScrollAnimation(0.2);

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
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">What We Do</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Four Pillars<br />
            of<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Empowerment</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Transforming lives across Rwanda through education, economic empowerment, healthcare access, and advocacy for the rights of deaf women and girls.
          </p>

        </div>
      </section>

      {/* OUR PROGRAMS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div
            ref={programsLabel.ref}
            className={`flex items-center gap-4 mb-16 scroll-animate delay-100 ${programsLabel.isVisible ? 'visible' : ''}`}>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Core Programs</span>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Program 1: Economic Empowerment */}
            <div
              ref={program1.ref}
              className={`group scroll-animate-scale delay-200 ${program1.isVisible ? 'visible' : ''}`}>
              <Link href="/activities/21" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Image */}
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="https://bkend.rnadw.org.rw/uploads/blog-images/featuredImage-4_820x620-1755000886621-95849572.jpg"
                      alt="Economic Empowerment"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center text-black font-black text-2xl"
                    style={{ backgroundColor: '#FACC15' }}>
                    01
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-5xl mb-4">💼</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                      Economic<br />Empowerment
                    </h3>
                    <p className="text-white/90 text-lg mb-4 leading-relaxed">
                      Life skills and entrepreneurship training for sustainable livelihoods and financial independence.
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Vocational training programs</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Business development skills</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Financial literacy workshops</span>
                      </li>
                    </ul>

                    <div className="flex items-center gap-2 text-base font-bold group-hover:gap-3 transition-all"
                      style={{ color: '#FACC15' }}>
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Program 2: Reproductive Health Rights */}
            <div
              ref={program2.ref}
              className={`group scroll-animate-scale delay-300 ${program2.isVisible ? 'visible' : ''}`}>
              <Link href="/activities/20" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Image */}
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="https://bkend.rnadw.org.rw/uploads/blog-images/featuredImage-3_820x620-1755000263234-690758480.jpg"
                      alt="Reproductive Health Rights"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl"
                    style={{ backgroundColor: '#2563EB' }}>
                    02
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-5xl mb-4">🏥</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                      Reproductive<br />Health Rights
                    </h3>
                    <p className="text-white/90 text-lg mb-4 leading-relaxed">
                      Comprehensive sexual education and health rights advocacy for informed decision-making.
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Sexual health education</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Access to healthcare services</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Family planning support</span>
                      </li>
                    </ul>

                    <div className="flex items-center gap-2 text-base font-bold group-hover:gap-3 transition-all"
                      style={{ color: '#FACC15' }}>
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Program 3: Ending Violence */}
            <div
              ref={program3.ref}
              className={`group scroll-animate-scale delay-400 ${program3.isVisible ? 'visible' : ''}`}>
              <Link href="/activities/19" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Image */}
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="https://bkend.rnadw.org.rw/uploads/blog-images/featuredImage-2_820x620-1754999964914-58402428.jpg"
                      alt="Ending Violence"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 via-yellow-900/50 to-transparent" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl bg-gray-900">
                    03
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-5xl mb-4">🛡️</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                      Ending<br />Violence
                    </h3>
                    <p className="text-white/90 text-lg mb-4 leading-relaxed">
                      GBV/SGBV prevention and protection for deaf women and girls through awareness and support.
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>GBV awareness campaigns</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Survivor support services</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Community protection networks</span>
                      </li>
                    </ul>

                    <div className="flex items-center gap-2 text-base font-bold group-hover:gap-3 transition-all text-white">
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Program 4: Education & Skills */}
            <div
              ref={program4.ref}
              className={`group scroll-animate-scale delay-500 ${program4.isVisible ? 'visible' : ''}`}>
              <Link href="/activities/18" className="block">
                <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Image */}
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="https://bkend.rnadw.org.rw/uploads/blog-images/featuredImage-main_2-1754996414270-440707368.jpg"
                      alt="Education & Skills Training"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl"
                    style={{ backgroundColor: '#2563EB' }}>
                    04
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                      Education &<br />Skills Training
                    </h3>
                    <p className="text-white/90 text-lg mb-4 leading-relaxed">
                      Literacy programs and skills development for personal growth and career advancement.
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Sign language education</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Literacy & numeracy programs</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/80">
                        <span style={{ color: '#FACC15' }}>●</span>
                        <span>Technical skills workshops</span>
                      </li>
                    </ul>

                    <div className="flex items-center gap-2 text-base font-bold group-hover:gap-3 transition-all"
                      style={{ color: '#FACC15' }}>
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-16">
            <div
              ref={impactLabel.ref}
              className={`flex items-center gap-4 mb-6 scroll-animate delay-100 ${impactLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Impact</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2
              ref={impactTitle.ref}
              className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] text-gray-900 scroll-animate delay-200 ${impactTitle.isVisible ? 'visible' : ''}`}>
              Making a<br />
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: '#2563EB' }}>Difference</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-20 -z-10" style={{ backgroundColor: '#2563EB' }} />
              </span>
            </h2>
          </div>

          {/* Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Impact 1 */}
            <div
              ref={impact1.ref}
              className={`bg-white p-8 rounded-3xl shadow-lg scroll-animate-scale delay-300 ${impact1.isVisible ? 'visible' : ''}`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#FEF3C7' }}>
                <svg className="w-8 h-8" style={{ color: '#FACC15' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-5xl font-black mb-3" style={{ color: '#FACC15' }}>500+</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Lives Empowered</h3>
              <p className="text-gray-600 leading-relaxed">
                Deaf women and girls have benefited from our programs since 2005, gaining skills and confidence.
              </p>
            </div>

            {/* Impact 2 */}
            <div
              ref={impact2.ref}
              className={`bg-white p-8 rounded-3xl shadow-lg scroll-animate-scale delay-400 ${impact2.isVisible ? 'visible' : ''}`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#DBEAFE' }}>
                <svg className="w-8 h-8" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-5xl font-black mb-3" style={{ color: '#2563EB' }}>200+</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Economic Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Women trained in vocational skills and entrepreneurship, now running their own businesses.
              </p>
            </div>

            {/* Impact 3 */}
            <div
              ref={impact3.ref}
              className={`bg-white p-8 rounded-3xl shadow-lg scroll-animate-scale delay-500 ${impact3.isVisible ? 'visible' : ''}`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#FEF3C7' }}>
                <svg className="w-8 h-8" style={{ color: '#FACC15' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-5xl font-black mb-3" style={{ color: '#FACC15' }}>100+</div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Protected Lives</h3>
              <p className="text-gray-600 leading-relaxed">
                Survivors of GBV supported with counseling, legal aid, and community protection services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        ref={ctaSection.ref}
        className={`py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 scroll-animate delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
            Join Us in<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Making Change</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h2>

          <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Your support helps us continue empowering deaf women and girls across Rwanda. Together, we can create lasting change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="group px-8 py-4 rounded-2xl font-black text-lg text-gray-900 transition-all hover:scale-105 flex items-center justify-center gap-3"
              style={{ backgroundColor: '#FACC15' }}>
              Donate Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="group px-8 py-4 rounded-2xl font-black text-lg text-white border-2 transition-all hover:scale-105 flex items-center justify-center gap-3"
              style={{ borderColor: '#2563EB' }}>
              Get Involved
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
