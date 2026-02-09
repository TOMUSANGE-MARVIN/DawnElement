'use client';

import { useEffect, useState } from 'react';

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
  externalUrl: string;
  date: string;
  published: boolean;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await fetch('/api/admin/resources');
        const data = await res.json();
        if (data.success && data.data) {
          setResources(data.data.filter((r: Resource) => r.published !== false));
        }
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchResources();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading resources...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Knowledge Hub</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6">
            Resources &<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Learning</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-10">
            Access educational materials, guides, and tools to support deaf women&apos;s empowerment, advocacy, and economic independence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">{resources.length} Resources Available</span>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {resources.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No resources yet</h3>
              <p className="text-gray-600">Check back soon for new resources and materials.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div key={resource._id} className="group relative">
                  <div className="relative h-full bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ borderColor: resource.categoryColor || '#2563EB' }}>
                    <div className="h-2" style={{ backgroundColor: resource.categoryColor || '#2563EB' }} />
                    <div className="p-6">
                      <div className="text-5xl mb-4">{resource.icon || '📄'}</div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4" style={{ backgroundColor: `${resource.categoryColor || '#2563EB'}20`, color: resource.categoryColor || '#2563EB' }}>{resource.category}</div>
                      <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">{resource.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{resource.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="font-semibold">{resource.fileType || 'PDF'}</span>
                        <span>•</span>
                        <span>{resource.fileSize || 'N/A'}</span>
                      </div>
                      <div className="space-y-3">
                        {resource.downloadUrl && resource.downloadUrl !== '#' && (
                          <>
                            <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105" style={{ backgroundColor: resource.categoryColor || '#2563EB', color: resource.categoryColor === '#FACC15' ? '#000' : '#fff' }}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Document
                            </a>
                            <a href={resource.downloadUrl} download className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Download {resource.fileType || 'PDF'}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${resource.categoryColor || '#2563EB'} 0%, transparent 70%)` }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
