'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

// Resource interface
interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  type: string;
  size: string;
  icon: string;
  downloadUrl: string;
  viewUrl?: string;
  canView: boolean;
  isExternal: boolean;
  hasVideo?: boolean;
  videoUrl?: string;
}

// Resource Card Component - extracted to properly use hooks
function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  const cardAnimation = useScrollAnimation(0.2);
  const delayClass = `delay-${(index % 6 + 1) * 100}`;

  return (
    <div
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

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* View Document Button */}
            {resource.canView && (
              resource.isExternal ? (
                <a
                  href={resource.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Document
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : resource.downloadUrl && resource.downloadUrl !== '#' ? (
                <a
                  href={resource.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Document
                </a>
              ) : (
                <Link
                  href={`/resource/${resource.id}`}
                  className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Summary
                </Link>
              )
            )}

            {/* Download button */}
            <a
              href={resource.downloadUrl}
              download={!resource.isExternal ? true : undefined}
              target={resource.isExternal ? "_blank" : undefined}
              rel={resource.isExternal ? "noopener noreferrer" : undefined}
              className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
              style={{
                backgroundColor: resource.categoryColor,
                color: resource.categoryColor === '#FACC15' ? '#000' : '#fff'
              }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </a>
          </div>
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
}

export default function ResourcesPage() {
  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Resources data (including media sources)
  const resources = [
    // Policy Briefs
    {
      id: 10,
      title: 'SRHR Policy Brief',
      description: 'Policy brief on Sexual and Reproductive Health Rights for Deaf Women and Girls in Rwanda',
      category: 'Policy Brief',
      categoryColor: '#8B5CF6',
      type: 'PDF',
      size: '3.7 MB',
      icon: '📋',
      downloadUrl: '/documents/policy-briefs/srhr-policy-brief.pdf',
      canView: true,
      isExternal: false,
      hasVideo: true,
      videoUrl: ''
    },
    {
      id: 11,
      title: 'Ministry of Health Brief',
      description: 'Policy brief addressing health sector recommendations for inclusive services for Deaf Women',
      category: 'Policy Brief',
      categoryColor: '#8B5CF6',
      type: 'PDF',
      size: '3.6 MB',
      icon: '📋',
      downloadUrl: '/documents/policy-briefs/ministry-of-health-brief.pdf',
      canView: true,
      isExternal: false,
      hasVideo: true,
      videoUrl: ''
    },
    {
      id: 12,
      title: 'Education Stakeholders Brief',
      description: 'Policy brief for education stakeholders on inclusive education for Deaf Girls and Women',
      category: 'Policy Brief',
      categoryColor: '#8B5CF6',
      type: 'PDF',
      size: '4.4 MB',
      icon: '📋',
      downloadUrl: '/documents/policy-briefs/education-stakeholders-brief.pdf',
      canView: true,
      isExternal: false,
      hasVideo: true,
      videoUrl: ''
    },
    {
      id: 13,
      title: 'Development Partners Brief',
      description: 'Policy brief for development partners on supporting Deaf Women and Girls programs in Rwanda',
      category: 'Policy Brief',
      categoryColor: '#8B5CF6',
      type: 'PDF',
      size: '4.5 MB',
      icon: '📋',
      downloadUrl: '/documents/policy-briefs/development-partners-brief.pdf',
      canView: true,
      isExternal: false,
      hasVideo: false
    },
    // Research & Reports
    {
      id: 14,
      title: 'Baseline Survey on Access to SRHR and GBV Services',
      description: 'Comprehensive baseline survey on access to Sexual and Reproductive Health Rights and Gender-Based Violence services in Huye and Kigali districts',
      category: 'Research',
      categoryColor: '#06B6D4',
      type: 'PDF',
      size: '2.5 MB',
      icon: '📊',
      downloadUrl: '/documents/Baseline survey on Access to SRHR and GBV services in Huye and Kigali.pdf',
      canView: true,
      isExternal: false
    },
    {
      id: 15,
      title: 'Guidelines: Access to Justice for Deaf Women & Girls',
      description: 'Comprehensive guidelines on ensuring access to justice for Deaf Women and Girls in Rwanda',
      category: 'Legal Rights',
      categoryColor: '#2563EB',
      type: 'PDF',
      size: '1.8 MB',
      icon: '⚖️',
      downloadUrl: '/documents/Guidelines_Access_Justice_for_Deaf_Women & Girls  .pdf',
      canView: true,
      isExternal: false
    },
    {
      id: 16,
      title: 'RNADW CEDAW Shadow Report',
      description: 'Shadow report submitted to the CEDAW Committee on the status of Deaf Women and Girls in Rwanda',
      category: 'Advocacy',
      categoryColor: '#EC4899',
      type: 'DOCX',
      size: '1.2 MB',
      icon: '📄',
      downloadUrl: '/documents/RNADW-CEDAW -Shadow Report .docx',
      canView: true,
      isExternal: false
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
            Access educational materials, guides, and tools to support deaf women&apos;s empowerment, advocacy, and economic independence.
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
            {resources.map((resource, index) => (
              <ResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
