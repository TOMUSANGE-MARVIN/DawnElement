'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

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
  // Detail page specific fields (optional)
  subtitle?: string;
  color?: string;
  overview?: string;
  mission?: string;
  impact?: {
    beneficiaries: string;
    districts: string;
    description: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function ActivityDetailPage() {
  const params = useParams();
  const activityId = params.id as string;
  
  const [activity, setActivity] = useState<Activity | null>(null);
  const [otherActivities, setOtherActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      try {
        // Fetch all activities
        const res = await fetch('/api/admin/activities');
        const data = await res.json();
        
        if (data.success && data.data) {
          const allActivities = data.data.filter((a: Activity) => a.published !== false);
          
          // Find current activity by slug or _id
          const current = allActivities.find((a: Activity) => 
            a.slug === activityId || a._id === activityId
          );
          
          if (current) {
            setActivity(current);
            setOtherActivities(allActivities.filter((a: Activity) => a._id !== current._id).slice(0, 3));
          }
        }
      } catch (error) {
        console.error('Error fetching activity:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchActivity();
  }, [activityId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-2xl text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!activity) {
    notFound();
  }
  
  // Set default values for optional fields
  const color = activity.color || '#2563EB';
  const heroImage = activity.image || '/images/image1.png';
  const emoji = activity.icon || '📋';
  const subtitle = activity.subtitle || 'Our Program';
  const overview = activity.overview || activity.description;
  const mission = activity.mission || activity.description;

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={activity.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            <span className="text-6xl">{emoji}</span>
            <span
              className="px-4 py-2 rounded-full text-sm font-black tracking-wider"
              style={{ backgroundColor: color, color: color === '#FACC15' ? '#000' : '#fff' }}
            >
              CORE PROGRAM
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            {activity.title}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl font-light mb-8" style={{ color: color }}>
            {subtitle}
          </p>

          {/* Overview */}
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl">
            {overview}
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Mission</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
            </div>

            <p className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light">
              {mission}
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION - Only show if testimonial exists */}
      {activity.testimonial && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Voices of Change</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
            </div>

            <div className="relative">
              <span className="absolute -top-8 left-0 text-8xl opacity-10" style={{ color: color }}>&ldquo;</span>
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
      )}

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
                key={act._id}
                href={`/activities/${act.slug || act._id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative">
                  <Image
                    src={act.image || '/images/image1.png'}
                    alt={act.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{act.icon || '📋'}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{act.subtitle || act.description?.substring(0, 100)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Impact</span>
          </div>

          {/* Show impact data or features */}
          {activity.impact ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div
                  className="text-7xl font-black mb-4"
                  style={{ color: color }}
                >
                  {activity.impact.beneficiaries}
                </div>
                <p className="text-xl text-white font-medium">Beneficiaries Reached</p>
              </div>

              <div className="text-center p-8">
                <div
                  className="text-7xl font-black mb-4"
                  style={{ color: color }}
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
          ) : (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-white mb-8 text-center">Key Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activity.features && activity.features.length > 0 ? (
                  activity.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div 
                        className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-white/90 text-lg leading-relaxed">{feature}</p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8">
                    <p className="text-white/60 text-lg">
                      This program focuses on empowering deaf women and girls across Rwanda through comprehensive support and advocacy.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Support{' '}
            <span style={{ color: color }}>{activity.title}</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Your contribution helps us expand this program and reach more deaf women and girls across Rwanda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
              style={{ backgroundColor: color, color: color === '#FACC15' ? '#000' : '#fff' }}
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

