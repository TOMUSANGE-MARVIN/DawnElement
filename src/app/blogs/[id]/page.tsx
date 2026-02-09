'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
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

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/admin/blogs/${postId}`);
        const data = await res.json();
        if (data.success && data.data) {
          setPost(data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading article...</p>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blogs"
            className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}>
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.image || '/images/placeholder.jpg'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Category */}
          <div
            className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-6"
            style={{
              backgroundColor: post.categoryColor || '#2563EB',
              color: '#000'
            }}>
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: post.categoryColor || '#2563EB', color: '#000' }}>
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{post.author}</div>
                <div className="text-sm text-white/60">{post.authorRole}</div>
              </div>
            </div>
            <span className="hidden sm:block">•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Content */}
          <div>

            {/* Excerpt */}
            <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-12 pb-12 border-b-2 border-gray-100">
              {post.excerpt}
            </p>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-gray-700 prose-li:my-2
                prose-strong:text-gray-900
                prose-blockquote:border-l-4 prose-blockquote:border-yellow-400 prose-blockquote:bg-yellow-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-800
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t-2 border-gray-100">
              <h3 className="text-lg font-black text-gray-900 mb-4">Share this article</h3>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </button>
                <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE ARTICLES CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Want to read more?</h2>
          <p className="text-gray-600 mb-8">Explore all our stories and insights from RNADW&apos;s work.</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}>
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
