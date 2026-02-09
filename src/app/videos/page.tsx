'use client';

import { useState, useEffect } from 'react';

interface Video {
  _id: string;
  videoId: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  published: boolean;
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Videos', icon: '🎬' },
    { id: 'sgbv', name: 'SGBV/VAWG', icon: '🛡️' },
    { id: 'cedaw', name: 'CEDAW', icon: '⚖️' },
    { id: 'srhr', name: 'SRHR/CSE', icon: '🏥' },
    { id: 'hiv', name: 'HIV/AIDS', icon: '🎗️' },
    { id: 'menstruation', name: 'Menstrual Health', icon: '🩺' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'about', name: 'About RNADW', icon: '🏛️' }
  ];

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch('/api/admin/videos');
        const data = await res.json();
        if (data.success && data.data) {
          setVideos(data.data.filter((v: Video) => v.published !== false));
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  const filteredVideos = selectedCategory === 'all' ? videos : videos.filter(v => v.category === selectedCategory);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading videos...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Video Library</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6">
            Stories That<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Inspire Change</span>
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-6">
            Watch our collection of educational content, survivor stories, and community initiatives.
          </p>
          <div className="flex items-center justify-center gap-12 mb-8">
            <div>
              <div className="text-4xl font-black" style={{ color: '#FACC15' }}>{videos.length}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Videos</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div>
              <div className="text-4xl font-black" style={{ color: '#2563EB' }}>{categories.length - 1}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Categories</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-40 py-6 bg-black/90 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-6 py-3 rounded-full font-black text-sm transition-all hover:scale-105 ${selectedCategory === category.id ? 'text-black' : 'text-white border-2 border-gray-700 hover:border-gray-600'}`} style={{ backgroundColor: selectedCategory === category.id ? '#FACC15' : 'transparent' }}>
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center justify-start">
            <div className="relative flex items-center gap-6 px-10 py-6 rounded-2xl border-2 backdrop-blur-sm" style={{ borderColor: '#FACC15', backgroundColor: 'rgba(31, 41, 55, 0.6)' }}>
              <div className="flex items-center justify-center w-16 h-16 rounded-xl" style={{ backgroundColor: '#FACC15' }}>
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black" style={{ color: '#FACC15' }}>{filteredVideos.length}</span>
                  <span className="text-2xl font-bold text-gray-400">{filteredVideos.length === 1 ? 'video' : 'videos'}</span>
                </div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">{selectedCategory === 'all' ? 'Total Collection' : categories.find(c => c.id === selectedCategory)?.name}</p>
              </div>
            </div>
          </div>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-2">No videos yet</h3>
              <p className="text-gray-400">Check back soon for new video content.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => {
                const neonColors = [
                  { primary: '#FACC15', glow: 'rgba(250, 204, 21, 0.5)' },
                  { primary: '#2563EB', glow: 'rgba(37, 99, 235, 0.5)' },
                  { primary: '#EC4899', glow: 'rgba(236, 72, 153, 0.5)' },
                  { primary: '#10B981', glow: 'rgba(16, 185, 129, 0.5)' },
                ];
                const colors = neonColors[index % neonColors.length];
                const categoryInfo = categories.find(c => c.id === video.category);

                return (
                  <div key={video._id} className="group relative" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="relative transform-gpu transition-all duration-700 hover:scale-105 hover:-rotate-2">
                      <div className="absolute -inset-4 opacity-0 group-hover:opacity-70 transition-all duration-700 blur-2xl" style={{ background: `radial-gradient(circle at 50% 50%, ${colors.glow} 0%, transparent 70%)` }} />
                      <div className="relative overflow-hidden backdrop-blur-xl border border-white/20 transition-all duration-700" style={{ background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primary}25 100%)`, borderRadius: '2rem', boxShadow: `0 8px 32px 0 ${colors.glow}` }}>
                        <div className="p-6">
                          <div className="relative rounded-xl overflow-hidden mb-4 ring-2 ring-white/30 shadow-2xl">
                            <div className="relative aspect-video bg-black/20 backdrop-blur-sm">
                              <iframe src={`https://www.youtube.com/embed/${video.videoId}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
                            </div>
                          </div>
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.primary}30 100%)`, border: `1px solid ${colors.primary}50` }}>
                            <span className="text-2xl">{categoryInfo?.icon}</span>
                            <span className="text-xs font-black uppercase tracking-wider text-white">{categoryInfo?.name}</span>
                          </div>
                          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="text-xl font-black leading-tight line-clamp-2" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{video.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: '#2563EB' }}>
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Stay Connected with RNADW</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">Subscribe to our YouTube channel for more inspiring stories and educational content.</p>
          <a href="https://www.youtube.com/@rwandanationalassociationo8664" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 rounded-full font-black text-lg text-white transition-all hover:scale-105 inline-flex items-center gap-2" style={{ backgroundColor: '#2563EB' }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit Our YouTube Channel →
          </a>
        </div>
      </section>
    </main>
  );
}
