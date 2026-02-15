'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/components/editor/RichTextEditor'), { ssr: false });

type Tab = 'overview' | 'blogs' | 'videos' | 'gallery';

interface Stats {
  blogs: number;
  videos: number;
  gallery: number;
  activities: number;
  resources: number;
  partners: number;
  team: number;
  testimonials: number;
}

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  categoryColor: string;
  image: string;
  published: boolean;
}

interface Video {
  _id: string;
  videoId: string;
  title: string;
  description: string;
  category: string;
  published: boolean;
}

interface GalleryImage {
  _id: string;
  src: string;
  title: string;
  category: string;
  published: boolean;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [stats, setStats] = useState<Stats | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [modalType, setModalType] = useState<'blog' | 'video' | 'gallery'>('blog');
  const [blogContent, setBlogContent] = useState('');
  const [loadingItemId, setLoadingItemId] = useState<string | null>(null);

  useEffect(() => {
    loadStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'blogs') loadBlogs();
    if (activeTab === 'videos') loadVideos();
    if (activeTab === 'gallery') loadGallery();
  }, [activeTab]);

  async function loadStats() {
    try {
      const res = await fetch('/api/cms/stats');
      const data = await res.json();
      if (data.success) setStats(data.data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  async function loadBlogs() {
    const res = await fetch('/api/cms/blogs');
    const data = await res.json();
    if (data.success) setBlogs(data.data);
  }

  async function loadVideos() {
    const res = await fetch('/api/cms/videos');
    const data = await res.json();
    if (data.success) setVideos(data.data);
  }

  async function loadGallery() {
    const res = await fetch('/api/cms/gallery');
    const data = await res.json();
    if (data.success) setGallery(data.data);
  }

  async function openModal(type: 'blog' | 'video' | 'gallery', item?: any) {
    setModalType(type);
    let fullItem = item || null;

    // For blogs, the list view excludes content to speed up loading.
    // Fetch the full item by ID so we get the content for editing.
    if (type === 'blog' && item?._id) {
      setLoadingItemId(item._id);
      try {
        const res = await fetch(`/api/cms/blogs/${item._id}`);
        const data = await res.json();
        if (data.success && data.data) {
          fullItem = data.data;
        }
      } catch {
        console.error('Failed to load full blog content');
      } finally {
        setLoadingItemId(null);
      }
    }

    setEditingItem(fullItem);
    if (type === 'blog') {
      setBlogContent(fullItem?.content || '');
    }
    setShowModal(true);
  }

  async function handleDelete(type: 'blogs' | 'videos' | 'gallery', id: string) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    await fetch(`/api/cms/${type}/${id}`, { method: 'DELETE' });
    if (type === 'blogs') loadBlogs();
    if (type === 'videos') loadVideos();
    if (type === 'gallery') loadGallery();
    loadStats();
  }

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data.published = (form.querySelector('[name="published"]') as HTMLInputElement)?.checked ?? true;
    if (modalType === 'blog') {
      data.content = blogContent;
    }

    const endpoint = modalType === 'blog' ? 'blogs' : modalType === 'video' ? 'videos' : 'gallery';
    const method = editingItem ? 'PUT' : 'POST';
    const url = editingItem ? `/api/cms/${endpoint}/${editingItem._id}` : `/api/cms/${endpoint}`;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    setShowModal(false);
    setEditingItem(null);
    if (modalType === 'blog') loadBlogs();
    if (modalType === 'video') loadVideos();
    if (modalType === 'gallery') loadGallery();
    loadStats();
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'blogs', label: 'Blog Posts', icon: '📝' },
    { id: 'videos', label: 'Videos', icon: '🎬' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-xl">🛡️</div>
            <div>
              <h1 className="font-bold">RNADW Admin</h1>
              <p className="text-xs text-gray-400">Content Management</p>
            </div>
          </div>
          <a href="/" className="text-sm text-gray-400 hover:text-white">← Back to Site</a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white rounded-xl p-2 shadow">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab.id ? 'bg-yellow-400 text-gray-900' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loading ? (
              <p className="col-span-4 text-center py-10 text-gray-500">Loading...</p>
            ) : stats && (
              <>
                <StatCard label="Blog Posts" count={stats.blogs} color="bg-pink-500" />
                <StatCard label="Videos" count={stats.videos} color="bg-red-500" />
                <StatCard label="Gallery Images" count={stats.gallery} color="bg-purple-500" />
                <StatCard label="Activities" count={stats.activities} color="bg-blue-500" />
                <StatCard label="Resources" count={stats.resources} color="bg-green-500" />
                <StatCard label="Partners" count={stats.partners} color="bg-yellow-500" />
                <StatCard label="Team Members" count={stats.team} color="bg-indigo-500" />
                <StatCard label="Testimonials" count={stats.testimonials} color="bg-teal-500" />
              </>
            )}
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="bg-white rounded-xl shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-bold text-gray-800">Blog Posts ({blogs.length})</h2>
              <button
                onClick={() => openModal('blog')}
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm font-bold hover:bg-yellow-500"
              >
                + Add Blog
              </button>
            </div>
            <div className="divide-y">
              {blogs.map(blog => (
                <div key={blog._id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    {blog.image && <img src={blog.image} alt="" className="w-12 h-12 rounded object-cover" />}
                    <div>
                      <h3 className="font-medium text-gray-800">{blog.title}</h3>
                      <p className="text-sm text-gray-500">{blog.category} • {blog.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => openModal('blog', blog)} disabled={loadingItemId === blog._id} className="text-blue-500 hover:text-blue-700 disabled:opacity-50 inline-flex items-center gap-1">
                      {loadingItemId === blog._id ? (
                        <><div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" /> Loading...</>
                      ) : 'Edit'}
                    </button>
                    <button onClick={() => handleDelete('blogs', blog._id)} className="text-red-500 hover:text-red-700">Delete</button>
                  </div>
                </div>
              ))}
              {blogs.length === 0 && <p className="p-8 text-center text-gray-400">No blog posts yet</p>}
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="bg-white rounded-xl shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-bold text-gray-800">Videos ({videos.length})</h2>
              <button
                onClick={() => openModal('video')}
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm font-bold hover:bg-yellow-500"
              >
                + Add Video
              </button>
            </div>
            <div className="divide-y">
              {videos.map(video => (
                <div key={video._id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <img src={`https://img.youtube.com/vi/${video.videoId}/default.jpg`} alt="" className="w-16 h-12 rounded object-cover" />
                    <div>
                      <h3 className="font-medium text-gray-800">{video.title}</h3>
                      <p className="text-sm text-gray-500">{video.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => openModal('video', video)} className="text-blue-500 hover:text-blue-700">Edit</button>
                    <button onClick={() => handleDelete('videos', video._id)} className="text-red-500 hover:text-red-700">Delete</button>
                  </div>
                </div>
              ))}
              {videos.length === 0 && <p className="p-8 text-center text-gray-400">No videos yet</p>}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="bg-white rounded-xl shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-bold text-gray-800">Gallery ({gallery.length})</h2>
              <button
                onClick={() => openModal('gallery')}
                className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm font-bold hover:bg-yellow-500"
              >
                + Add Image
              </button>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 p-4">
              {gallery.map(img => (
                <div key={img._id} className="relative group">
                  <img src={img.src} alt={img.title} className="w-full aspect-square object-cover rounded" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                    <button onClick={() => handleDelete('gallery', img._id)} className="text-white text-sm">🗑️</button>
                  </div>
                </div>
              ))}
              {gallery.length === 0 && <p className="col-span-6 p-8 text-center text-gray-400">No images yet</p>}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className={`bg-white rounded-2xl w-full max-h-[90vh] overflow-y-auto ${modalType === 'blog' ? 'max-w-4xl' : 'max-w-lg'}`}>
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-bold text-gray-800">
                {editingItem ? 'Edit' : 'Add'} {modalType === 'blog' ? 'Blog Post' : modalType === 'video' ? 'Video' : 'Image'}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <form onSubmit={handleSave} className="p-4 space-y-4">
              {modalType === 'blog' && (
                <>
                  <Input label="Title" name="title" defaultValue={editingItem?.title} required />
                  <Input label="Excerpt" name="excerpt" defaultValue={editingItem?.excerpt} />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <RichTextEditor
                      content={editingItem?.content || ''}
                      onChange={(html) => setBlogContent(html)}
                      placeholder="Write your blog post here..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Author" name="author" defaultValue={editingItem?.author || 'RNADW Team'} />
                    <Input label="Date" name="date" defaultValue={editingItem?.date} placeholder="Jan 2025" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Category" name="category" defaultValue={editingItem?.category} />
                    <Input label="Category Color" name="categoryColor" type="color" defaultValue={editingItem?.categoryColor || '#2563EB'} />
                  </div>
                  <Input label="Image URL" name="image" defaultValue={editingItem?.image} />
                  <Checkbox label="Published" name="published" defaultChecked={editingItem?.published !== false} />
                </>
              )}
              {modalType === 'video' && (
                <>
                  <Input label="YouTube Video ID" name="videoId" defaultValue={editingItem?.videoId} required placeholder="e.g. dQw4w9WgXcQ" />
                  <Input label="Title" name="title" defaultValue={editingItem?.title} required />
                  <Textarea label="Description" name="description" defaultValue={editingItem?.description} rows={3} />
                  <Select label="Category" name="category" defaultValue={editingItem?.category} options={[
                    { value: 'sgbv', label: 'SGBV/VAWG' },
                    { value: 'cedaw', label: 'CEDAW' },
                    { value: 'srhr', label: 'SRHR/CSE' },
                    { value: 'hiv', label: 'HIV/AIDS' },
                    { value: 'stories', label: 'Impact Stories' }
                  ]} />
                  <Checkbox label="Published" name="published" defaultChecked={editingItem?.published !== false} />
                </>
              )}
              {modalType === 'gallery' && (
                <>
                  <Input label="Image URL" name="src" defaultValue={editingItem?.src} required />
                  <Input label="Title" name="title" defaultValue={editingItem?.title} />
                  <Input label="Category" name="category" defaultValue={editingItem?.category} />
                  <Checkbox label="Published" name="published" defaultChecked={editingItem?.published !== false} />
                </>
              )}
              <div className="flex gap-3 pt-4">
                <button type="submit" className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500">
                  Save
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, count, color }: { label: string; count: number; color: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center text-white mb-2`}>
        {count}
      </div>
      <p className="text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
}

function Input({ label, name, type = 'text', defaultValue, required, placeholder }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function Textarea({ label, name, defaultValue, rows = 4 }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function Select({ label, name, defaultValue, options }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
      >
        <option value="">Select...</option>
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, name, defaultChecked }: any) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} className="w-4 h-4 rounded" />
      <label className="text-sm font-medium text-gray-700">{label}</label>
    </div>
  );
}
