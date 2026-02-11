'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  image: string;
  featured: boolean;
  published: boolean;
}

export default function BlogsPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/admin/blogs');
        const data = await res.json();
        if (data.success && data.data) {
          setBlogPosts(data.data.filter((post: BlogPost) => post.published !== false));
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => post._id !== featuredPost?._id);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading blogs...</p>
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
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Our Blog</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6">
            Stories &<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Insights</span>
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mb-10">
            Updates, stories, and insights from RNADW&apos;s work empowering deaf women across Rwanda.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="relative py-0 overflow-hidden bg-black">
          <div className="relative h-[600px] lg:h-[700px]">
            <div className="absolute inset-0">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex items-end">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md" style={{ backgroundColor: `${featuredPost.categoryColor || '#EC4899'}30`, border: `2px solid ${featuredPost.categoryColor || '#EC4899'}` }}>
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: featuredPost.categoryColor || '#EC4899' }}>Featured Story</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                  <div className="lg:col-span-2">
                    <div className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-4" style={{ backgroundColor: featuredPost.categoryColor || '#EC4899', color: '#000' }}>{featuredPost.category}</div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">{featuredPost.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="font-semibold text-white">{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="lg:flex lg:justify-end">
                    <Link href={`/blogs/${featuredPost._id}`} className="px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center gap-3 group" style={{ backgroundColor: featuredPost.categoryColor || '#EC4899', color: '#000' }}>
                      Read Full Story <span className="transition-transform duration-300 group-hover:translate-x-1 text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-800">{blogPosts.length} Posts</span>
            <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-600">Check back soon for new stories and updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post._id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Link href={`/blogs/${post._id}`} className="block">
                    <div className="aspect-[4/3] relative">
                      <img src={post.image || '/images/placeholder.jpg'} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <div className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3" style={{ backgroundColor: post.categoryColor || '#2563EB', color: '#000' }}>{post.category}</div>
                      <h3 className="text-xl font-black mb-2 leading-tight line-clamp-2">{post.title}</h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
