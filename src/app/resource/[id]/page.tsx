'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ResourceSection {
  title: string;
  content: string;
}

interface Resource {
  _id: string;
  title: string;
  slug: string;
  description: string;
  introduction: string;
  category: string;
  categoryColor: string;
  fileType: string;
  fileSize: string;
  icon: string;
  downloadUrl: string;
  date: string;
  hasVideo?: boolean;
  videoUrl?: string;
  isPolicyBrief?: boolean;
  content?: {
    sections: ResourceSection[];
  };
  published: boolean;
}

export default function ResourceViewerPage() {
  const params = useParams();
  const resourceId = params.id as string;

  const [resource, setResource] = useState<Resource | null>(null);
  const [allResources, setAllResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const heroSection = useScrollAnimation(0.1);
  const contentSection = useScrollAnimation(0.1);

  useEffect(() => {
    async function fetchResource() {
      try {
        // Fetch the specific resource
        const res = await fetch(`/api/public/resources/${resourceId}`);
        const data = await res.json();
        if (data.success && data.data) {
          setResource(data.data);
        } else {
          setError(true);
        }

        // Fetch all resources for related section
        const allRes = await fetch('/api/public/resources');
        const allData = await allRes.json();
        if (allData.success && allData.data) {
          setAllResources(allData.data.filter((r: Resource) => r.published !== false));
        }
      } catch (err) {
        console.error('Error fetching resource:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (resourceId) {
      fetchResource();
    }
  }, [resourceId]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading resource...</p>
        </div>
      </main>
    );
  }

  if (error || !resource) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Resource Not Found</h1>
          <p className="text-gray-600 mb-8">The resource you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/resource"
            className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}>
            Back to Resources
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section
        ref={heroSection.ref}
        className={`relative py-20 overflow-hidden scroll-animate delay-100 ${heroSection.isVisible ? 'visible' : ''}`}
        style={{ backgroundColor: `${resource.categoryColor}15` }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <Link
            href="/resource"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>

          {/* Icon & Category */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{resource.icon}</span>
            <div
              className="px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider"
              style={{ backgroundColor: resource.categoryColor, color: '#fff' }}
            >
              {resource.category}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
            {resource.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-6">
            {resource.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {resource.fileType} • {resource.fileSize}
            </span>
            {resource.date && (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {resource.date}
              </span>
            )}
          </div>

          {/* Download Button */}
          {resource.downloadUrl && resource.downloadUrl !== '#' && (
            <div className="mt-8">
              <a
                href={resource.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-white transition-all hover:scale-105"
                style={{ backgroundColor: resource.categoryColor }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download {resource.fileType}
              </a>
            </div>
          )}

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section
        ref={contentSection.ref}
        className={`py-16 scroll-animate delay-200 ${contentSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          {resource.introduction && (
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                {resource.introduction}
              </p>
            </div>
          )}

          {/* Table of Contents */}
          {resource.content?.sections && resource.content.sections.length > 0 && (
            <>
              <div className="bg-gray-50 rounded-2xl p-6 mb-12">
                <h2 className="text-lg font-black text-gray-900 mb-4">Contents</h2>
                <ul className="space-y-2">
                  {resource.content.sections.map((section, index) => (
                    <li key={index}>
                      <a
                        href={`#section-${index}`}
                        className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: resource.categoryColor }}
                        >
                          {index + 1}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {resource.content.sections.map((section, index) => (
                  <div key={index} id={`section-${index}`} className="scroll-mt-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: resource.categoryColor }}
                      >
                        {index + 1}
                      </div>
                      <h2 className="text-2xl font-black text-gray-900">{section.title}</h2>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* VIDEO SECTION - For Policy Briefs with videos */}
      {resource.hasVideo && (
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: resource.categoryColor }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Watch Video</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: resource.categoryColor }} />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Video Summary in Sign Language
              </h2>
              <p className="text-gray-600 mb-6">
                Watch the video version of this policy brief presented in Rwanda Sign Language for accessibility.
              </p>

              {resource.videoUrl ? (
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-900">
                  <iframe
                    src={resource.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${resource.title} - Video`}
                  />
                </div>
              ) : (
                <div className="aspect-video rounded-2xl bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">Video coming soon</p>
                    <p className="text-gray-400 text-sm mt-2">The sign language video for this policy brief is being prepared</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* RELATED RESOURCES */}
      {allResources.length > 1 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Other Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allResources
                .filter(r => r._id !== resourceId)
                .slice(0, 3)
                .map((r) => (
                  <Link
                    key={r._id}
                    href={`/resource/${r._id}`}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <span className="text-3xl mb-3 block">{r.icon}</span>
                    <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                    <p className="text-sm text-gray-500">{r.category}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Need More Support?</h2>
          <p className="text-gray-300 mb-8">
            RNADW provides training, resources, and support for deaf women across Rwanda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-black transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
