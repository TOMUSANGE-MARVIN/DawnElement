'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

// Activity/Program data
const activities = [
  {
    id: 18,
    title: 'Her Environment',
    subtitle: 'Climate Adaptation and Resilience',
    emoji: '🌍',
    color: '#2563EB',
    heroImage: '/images/image4.png',
    overview: 'Climate change poses significant risks to vulnerable communities, and deaf women and girls face unique challenges as emergency response mechanisms and resilience programs often fail to consider their specific needs. Her Environment addresses this critical gap by mobilizing deaf women and girls to effectively influence and participate in national, regional, and global climate justice agendas.',
    mission: 'To equip deaf women and girls with climate-smart skills, accessible information, and advocacy platforms to build resilience and drive climate justice in Rwanda.',
    impact: {
      beneficiaries: '150+',
      districts: '12',
      description: 'Deaf women trained in climate adaptation strategies across Rwanda'
    },
    testimonial: {
      quote: 'Before this program, I didn\'t understand why my crops were failing. Now I know about changing weather patterns and how to adapt my farming. The training in sign language made everything clear.',
      author: 'Marie Claire',
      role: 'Program Participant, Musanze District'
    }
  },
  {
    id: 19,
    title: 'Her Voice, Her Power',
    subtitle: 'Leadership, Voice and Agency',
    emoji: '📢',
    color: '#1F2937',
    heroImage: '/images/w1.png',
    overview: 'Her Voice, Her Power is dedicated to strengthening deaf women and girls\' voice, leadership, and participation in all spheres of life. We believe that deaf women must be at the forefront of decisions that affect their lives, communities, and futures.',
    mission: 'To cultivate confident, capable deaf women leaders who can advocate for their rights and drive positive change in their communities and beyond.',
    impact: {
      beneficiaries: '200+',
      districts: '18',
      description: 'Deaf women leaders trained and supported across Rwanda'
    },
    testimonial: {
      quote: 'The Feminist Leadership Institute changed my life. I went from being afraid to speak up to becoming a community leader. Now I represent deaf women at district meetings.',
      author: 'Esperance',
      role: 'Graduate, Feminist Leadership Institute'
    }
  },
  {
    id: 20,
    title: 'My Body, My Rights',
    subtitle: 'Sexual and Reproductive Health and Rights',
    emoji: '🏥',
    color: '#2563EB',
    heroImage: '/images/image2.png',
    overview: 'My Body, My Rights works to enable a legal, policy, social, economic, and cultural environment that promotes, respects, and guarantees sexual and reproductive health and rights (SRHR) for deaf women and girls. We address the unique barriers deaf women face in accessing healthcare information and services.',
    mission: 'To ensure every deaf woman and girl has access to comprehensive, accessible sexual and reproductive health information and services, free from violence and discrimination.',
    impact: {
      beneficiaries: '300+',
      districts: '22',
      description: 'Deaf women and girls reached with SRHR services and information'
    },
    testimonial: {
      quote: 'For years, I couldn\'t understand what doctors were telling me. Now there are interpreters, and the nurses know some sign language. I finally feel like my health matters.',
      author: 'Claudine',
      role: 'Healthcare Program Beneficiary'
    }
  },
  {
    id: 21,
    title: 'Spear N\' Shield',
    subtitle: 'Education, Skilling, Digitalization and Business Development',
    emoji: '📚',
    color: '#FACC15',
    heroImage: '/images/image1.png',
    overview: 'Spear N\' Shield is our flagship economic empowerment program, building and sustaining the education, skills, knowledge, and digital competencies of deaf women and girls. We believe economic independence is foundational to full inclusion and equality.',
    mission: 'To equip deaf women and girls with the education, vocational skills, digital literacy, and business acumen needed for sustainable livelihoods and economic independence.',
    impact: {
      beneficiaries: '400+',
      districts: '22',
      description: 'Deaf women economically empowered through education and skills training'
    },
    testimonial: {
      quote: 'I learned tailoring through RNADW and now I have my own shop. The SACCO helped me get a loan for sewing machines. My children are in school because of my business.',
      author: 'Jeanette',
      role: 'Entrepreneur, Kigali'
    }
  }
];

export default function ActivityDetailPage() {
  const params = useParams();
  const activityId = parseInt(params.id as string);

  const activity = activities.find(a => a.id === activityId);

  if (!activity) {
    notFound();
  }

  // Animations
  const heroSection = useScrollAnimation(0.1);
  const overviewSection = useScrollAnimation(0.1);
  const impactSection = useScrollAnimation(0.1);
  const testimonialSection = useScrollAnimation(0.1);
  const ctaSection = useScrollAnimation(0.1);

  // Get other activities for navigation
  const otherActivities = activities.filter(a => a.id !== activityId);

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={activity.heroImage}
            alt={activity.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div
          ref={heroSection.ref}
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-animate delay-100 ${heroSection.isVisible ? 'visible' : ''}`}
        >
          {/* Back Button */}
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Activities
          </Link>

          {/* Emoji & Badge */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{activity.emoji}</span>
            <span
              className="px-4 py-2 rounded-full text-sm font-black tracking-wider"
              style={{ backgroundColor: activity.color, color: activity.color === '#FACC15' ? '#000' : '#fff' }}
            >
              CORE PROGRAM
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            {activity.title}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl font-light mb-8" style={{ color: activity.color }}>
            {activity.subtitle}
          </p>

          {/* Overview */}
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl">
            {activity.overview}
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        ref={overviewSection.ref}
        className={`py-20 bg-gray-50 scroll-animate delay-100 ${overviewSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: activity.color }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Mission</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: activity.color }} />
            </div>

            <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light">
              {activity.mission}
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section
        ref={testimonialSection.ref}
        className={`py-20 bg-white scroll-animate delay-100 ${testimonialSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: activity.color }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Voices of Change</span>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: activity.color }} />
          </div>

          <div className="relative">
            <span className="absolute -top-8 left-0 text-8xl opacity-10" style={{ color: activity.color }}>&ldquo;</span>
            <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light italic mb-8">
              {activity.testimonial.quote}
            </blockquote>
            <div className="flex flex-col items-center">
              <span className="font-black text-gray-900 text-lg">{activity.testimonial.author}</span>
              <span className="text-gray-500">{activity.testimonial.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PROGRAMS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 rounded-full bg-gray-300" />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Explore Other Programs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherActivities.map((act) => (
              <Link
                key={act.id}
                href={`/activities/${act.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative">
                  <Image
                    src={act.heroImage}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{act.emoji}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{act.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section
        ref={impactSection.ref}
        className={`py-20 bg-gray-900 scroll-animate delay-100 ${impactSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: activity.color }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Impact</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div
                className="text-7xl font-black mb-4"
                style={{ color: activity.color }}
              >
                {activity.impact.beneficiaries}
              </div>
              <p className="text-xl text-white font-medium">Beneficiaries Reached</p>
            </div>

            <div className="text-center p-8">
              <div
                className="text-7xl font-black mb-4"
                style={{ color: activity.color }}
              >
                {activity.impact.districts}
              </div>
              <p className="text-xl text-white font-medium">Districts Covered</p>
            </div>

            <div className="text-center p-8 md:col-span-1">
              <div className="text-white/80 text-lg leading-relaxed">
                {activity.impact.description}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        ref={ctaSection.ref}
        className={`py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 scroll-animate delay-100 ${ctaSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Support{' '}
            <span style={{ color: activity.color }}>{activity.title}</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Your contribution helps us expand this program and reach more deaf women and girls across Rwanda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
              style={{ backgroundColor: activity.color, color: activity.color === '#FACC15' ? '#000' : '#fff' }}
            >
              Donate Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl font-black text-lg text-white border-2 border-white/30 transition-all hover:scale-105 hover:border-white/60 flex items-center justify-center gap-3"
            >
              Partner With Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

