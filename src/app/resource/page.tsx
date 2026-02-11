'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

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
  const [viewingResource, setViewingResource] = useState<Resource | null>(null);
  const [docxLoading, setDocxLoading] = useState(false);
  const docxContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewingResource) return;
    const fileType = (viewingResource.fileType || 'PDF').toUpperCase();
    if (fileType !== 'DOCX' && fileType !== 'DOC') return;

    let cancelled = false;
    setDocxLoading(true);

    (async () => {
      try {
        const response = await fetch(viewingResource.downloadUrl);
        const blob = await response.blob();
        if (cancelled || !docxContainerRef.current) return;
        const docxPreview = await import('docx-preview');
        if (cancelled || !docxContainerRef.current) return;
        docxContainerRef.current.innerHTML = '';
        await docxPreview.renderAsync(blob, docxContainerRef.current, undefined, {
          className: 'docx-preview',
          inWrapper: true,
          ignoreWidth: false,
          ignoreHeight: false,
          ignoreFonts: false,
          breakPages: true,
        });
      } catch (error) {
        console.error('DOCX preview failed:', error);
        if (docxContainerRef.current && !cancelled) {
          docxContainerRef.current.innerHTML = '<p style="text-align:center;padding:2rem;color:#666;">Failed to load document preview.</p>';
        }
      } finally {
        if (!cancelled) setDocxLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, [viewingResource]);

  const handleDownload = useCallback(async (resource: Resource) => {
    try {
      const response = await fetch(resource.downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const filename = resource.title.replace(/[^a-zA-Z0-9\s-]/g, '').trim() + '.' + (resource.fileType || 'pdf').toLowerCase();
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(resource.downloadUrl, '_blank');
    }
  }, []);

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
                            <button onClick={() => setViewingResource(resource)} className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 cursor-pointer" style={{ backgroundColor: resource.categoryColor || '#2563EB', color: resource.categoryColor === '#FACC15' ? '#000' : '#fff' }}>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View Document
                            </button>
                            <button onClick={() => handleDownload(resource)} className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800 cursor-pointer">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Download {resource.fileType || 'PDF'}
                            </button>
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

      {viewingResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setViewingResource(null)}>
          <div className="relative w-full h-full max-w-6xl max-h-[95vh] m-4 flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl flex-shrink-0">{viewingResource.icon || '📄'}</span>
                <div className="min-w-0">
                  <h3 className="font-black text-gray-900 truncate">{viewingResource.title}</h3>
                  <p className="text-xs text-gray-500">{viewingResource.fileType || 'PDF'} &bull; {viewingResource.fileSize || 'N/A'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button onClick={() => handleDownload(viewingResource)} className="py-2 px-4 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
                <button onClick={() => setViewingResource(null)} className="p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer" aria-label="Close viewer">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 bg-gray-100 overflow-auto">
              {(viewingResource.fileType || 'PDF').toUpperCase() === 'PDF' ? (
                <iframe src={viewingResource.downloadUrl} className="w-full h-full border-0" title={viewingResource.title} />
              ) : ['DOCX', 'DOC'].includes((viewingResource.fileType || '').toUpperCase()) ? (
                <div className="relative h-full">
                  {docxLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-gray-600 font-medium">Loading document preview...</p>
                      </div>
                    </div>
                  )}
                  <div ref={docxContainerRef} className="h-full overflow-auto bg-white" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-6 p-8 text-center">
                  <div className="text-7xl">{viewingResource.icon || '📄'}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Preview not available for {viewingResource.fileType} files</h4>
                    <p className="text-gray-600 mb-6">Download the document to view its contents.</p>
                    <button onClick={() => handleDownload(viewingResource)} className="py-3 px-6 rounded-lg font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 text-white cursor-pointer" style={{ backgroundColor: viewingResource.categoryColor || '#2563EB' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download {viewingResource.fileType || 'PDF'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
