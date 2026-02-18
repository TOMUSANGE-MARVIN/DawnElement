'use client';

import { useEffect, useState, useCallback, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

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

function ResourcesPageContent() {
  const searchParams = useSearchParams();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewingResource, setViewingResource] = useState<Resource | null>(null);
  const [docxLoading, setDocxLoading] = useState(false);
  const docxContainerRef = useRef<HTMLDivElement>(null);
  const [shareModalResource, setShareModalResource] = useState<Resource | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const getShareUrl = useCallback((resource: Resource) => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/resource?view=${resource.slug || resource._id}`;
    }
    return '';
  }, []);

  const handleShare = useCallback((resource: Resource, platform: 'whatsapp' | 'twitter' | 'facebook' | 'copy') => {
    const shareUrl = getShareUrl(resource);
    const shareText = `Check out this resource: ${resource.title} - ${resource.description}`;
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl).then(() => {
          setCopySuccess(resource._id);
          setTimeout(() => setCopySuccess(null), 2000);
        });
        break;
    }
  }, [getShareUrl]);

  // Check URL for resource to view and open modal
  useEffect(() => {
    const viewParam = searchParams.get('view');
    if (viewParam && resources.length > 0) {
      const resourceToView = resources.find(
        r => r.slug === viewParam || r._id === viewParam
      );
      if (resourceToView) {
        setViewingResource(resourceToView);
      }
    }
  }, [searchParams, resources]);

  // Update URL when viewing resource changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (viewingResource) {
        url.searchParams.set('view', viewingResource.slug || viewingResource._id);
      } else {
        url.searchParams.delete('view');
      }
      window.history.replaceState({}, '', url.toString());
    }
  }, [viewingResource]);

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
                            <button 
                              onClick={() => setShareModalResource(resource)} 
                              className="w-full py-3 px-4 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white hover:opacity-90 cursor-pointer"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                              </svg>
                              Share
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

      {/* Share Modal */}
      {shareModalResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShareModalResource(null)}>
          <div 
            className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative px-6 py-5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
              <button 
                onClick={() => setShareModalResource(null)} 
                className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Share Resource</h3>
                  <p className="text-white/80 text-sm truncate max-w-[250px]">{shareModalResource.title}</p>
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="p-6 space-y-3">
              <button
                onClick={() => { handleShare(shareModalResource, 'whatsapp'); setShareModalResource(null); }}
                className="w-full py-4 px-5 flex items-center gap-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <span className="font-bold text-gray-900 text-lg">WhatsApp</span>
                  <p className="text-sm text-gray-500">Share via WhatsApp</p>
                </div>
              </button>

              <button
                onClick={() => { handleShare(shareModalResource, 'twitter'); setShareModalResource(null); }}
                className="w-full py-4 px-5 flex items-center gap-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <span className="font-bold text-gray-900 text-lg">X (Twitter)</span>
                  <p className="text-sm text-gray-500">Share on X</p>
                </div>
              </button>

              <button
                onClick={() => { handleShare(shareModalResource, 'facebook'); setShareModalResource(null); }}
                className="w-full py-4 px-5 flex items-center gap-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <span className="font-bold text-gray-900 text-lg">Facebook</span>
                  <p className="text-sm text-gray-500">Share on Facebook</p>
                </div>
              </button>

              <div className="pt-3 border-t border-gray-200">
                <button
                  onClick={() => { handleShare(shareModalResource, 'copy'); }}
                  className="w-full py-4 px-5 flex items-center gap-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {copySuccess === shareModalResource._id ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-gray-900 text-lg">
                      {copySuccess === shareModalResource._id ? 'Link Copied!' : 'Copy Link'}
                    </span>
                    <p className="text-sm text-gray-500">
                      {copySuccess === shareModalResource._id ? 'Ready to paste' : 'Copy to clipboard'}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading resources...</p>
        </div>
      </main>
    }>
      <ResourcesPageContent />
    </Suspense>
  );
}
