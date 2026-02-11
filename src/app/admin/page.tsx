'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/components/editor/RichTextEditor'), { ssr: false });

// CMS Admin Panel - Redesigned
const API_BASE = '/api/admin';

// Default admin credentials
const DEFAULT_ADMIN = {
  email: 'admin@rnadw.org.rw',
  password: 'Admin@123'
};

// Icons for Settings component
const SettingsIcons = {
  Key: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Email: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

// Settings View Component - Extracted to prevent re-render focus issues
function SettingsView() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  
  const [newEmail, setNewEmail] = useState('');
  const [emailPassword, setEmailPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState('');
  
  const [currentEmail, setCurrentEmail] = useState(DEFAULT_ADMIN.email);
  
  useEffect(() => {
    setCurrentEmail(localStorage.getItem('admin_user_email') || DEFAULT_ADMIN.email);
  }, []);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    
    const storedPassword = localStorage.getItem('admin_password') || DEFAULT_ADMIN.password;
    
    if (currentPassword !== storedPassword) {
      setPasswordError('Current password is incorrect');
      return;
    }
    
    if (newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    
    localStorage.setItem('admin_password', newPassword);
    setPasswordSuccess('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    
    setTimeout(() => setPasswordSuccess(''), 3000);
  };

  const handleChangeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setEmailSuccess('');
    
    const storedPassword = localStorage.getItem('admin_password') || DEFAULT_ADMIN.password;
    
    if (emailPassword !== storedPassword) {
      setEmailError('Password is incorrect');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    localStorage.setItem('admin_email', newEmail);
    localStorage.setItem('admin_user_email', newEmail);
    setCurrentEmail(newEmail);
    setEmailSuccess('Email changed successfully!');
    setNewEmail('');
    setEmailPassword('');
    
    setTimeout(() => setEmailSuccess(''), 3000);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h2 className="text-3xl font-black text-slate-800 mb-2">Settings</h2>
        <p className="text-slate-500">Manage your account settings</p>
      </div>
      
      {/* Change Email Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
            <SettingsIcons.Email />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Change Email</h3>
            <p className="text-slate-500 text-sm">Update your admin email address</p>
          </div>
        </div>
        
        <form onSubmit={handleChangeEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">New Email Address</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="newadmin@rnadw.org.rw"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Confirm with Password</label>
            <input
              type="password"
              value={emailPassword}
              onChange={(e) => setEmailPassword(e.target.value)}
              placeholder="Enter your current password"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors"
              required
            />
          </div>
          
          {emailError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200">
              <p className="text-red-600 text-sm">{emailError}</p>
            </div>
          )}
          
          {emailSuccess && (
            <div className="p-3 rounded-xl bg-green-50 border border-green-200 flex items-center gap-2">
              <SettingsIcons.Check />
              <p className="text-green-600 text-sm">{emailSuccess}</p>
            </div>
          )}
          
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold rounded-xl transition-all"
          >
            Update Email
          </button>
        </form>
      </div>
      
      {/* Change Password Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white">
            <SettingsIcons.Key />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Change Password</h3>
            <p className="text-slate-500 text-sm">Update your account password</p>
          </div>
        </div>
        
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors"
              required
              minLength={8}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors"
              required
            />
          </div>
          
          {passwordError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200">
              <p className="text-red-600 text-sm">{passwordError}</p>
            </div>
          )}
          
          {passwordSuccess && (
            <div className="p-3 rounded-xl bg-green-50 border border-green-200 flex items-center gap-2">
              <SettingsIcons.Check />
              <p className="text-green-600 text-sm">{passwordSuccess}</p>
            </div>
          )}
          
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold rounded-xl transition-all"
          >
            Update Password
          </button>
        </form>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Account Info</h3>
        <div className="space-y-3">
          <div className="flex justify-between py-3 border-b border-slate-100">
            <span className="text-slate-500">Email</span>
            <span className="font-medium text-slate-800">{currentEmail}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-slate-500">Role</span>
            <span className="font-medium text-slate-800">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContentItem {
  _id: string;
  title?: string;
  name?: string;
  published?: boolean;
  [key: string]: unknown;
}

interface UploadingFile {
  fieldName: string;
  progress: number;
}

interface UploadedDocument {
  url: string;
  fileSize: string;
  fileType: string;
}

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}

// Icons as components
const Icons = {
  Dashboard: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Blog: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  Activities: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  Resources: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Gallery: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Videos: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Team: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Partners: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Testimonials: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Settings: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Logout: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Edit: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  Delete: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  Close: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Upload: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  ),
  Eye: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  EyeOff: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  ),
  Key: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [data, setData] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState<ContentItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});
  const [uploadedDocs, setUploadedDocs] = useState<Record<string, UploadedDocument>>({});
  const [uploading, setUploading] = useState<UploadingFile | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [blogContent, setBlogContent] = useState('');
  const [saving, setSaving] = useState(false);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const docInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) setIsLoggedIn(true);
  }, []);

  // Load data when tab changes
  useEffect(() => {
    if (isLoggedIn && activeTab !== 'dashboard' && activeTab !== 'settings' && activeTab !== 'site-settings') {
      loadData();
    }
  }, [activeTab, isLoggedIn]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Get stored credentials or use defaults
    const storedEmail = localStorage.getItem('admin_email') || DEFAULT_ADMIN.email;
    const storedPassword = localStorage.getItem('admin_password') || DEFAULT_ADMIN.password;
    
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('admin_token', 'authenticated');
      localStorage.setItem('admin_user_email', email);
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user_email');
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/${activeTab}`);
      const json = await res.json();
      setData(json.data || []);
    } catch {
      console.error('Failed to load data');
      setData([]);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item? This action cannot be undone.')) return;
    try {
      await fetch(`${API_BASE}/${activeTab}/${id}`, { method: 'DELETE' });
      loadData();
    } catch {
      alert('Failed to delete');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const body: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      if (key === 'published' || key === 'featured') {
        body[key] = value === 'on';
      } else if (!key.startsWith('file_')) {
        body[key] = value;
      }
    });

    // Include rich text editor content for blogs
    if (activeTab === 'blogs') {
      body.content = blogContent;
    }

    // Handle all uploaded images - this includes both new uploads and existing ones
    // The value can be a URL (uploaded/existing) or empty string (removed)
    Object.keys(uploadedImages).forEach((key) => {
      // Always include the field - even empty string means image was removed
      body[key] = uploadedImages[key];
    });

    Object.keys(uploadedDocs).forEach((key) => {
      const doc = uploadedDocs[key];
      if (doc?.url) {
        body[key] = doc.url;
        body['fileSize'] = doc.fileSize;
        body['fileType'] = doc.fileType;
      }
    });

    try {
      const url = editItem?._id
        ? `${API_BASE}/${activeTab}/${editItem._id}`
        : `${API_BASE}/${activeTab}`;

      await fetch(url, {
        method: editItem?._id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      setShowForm(false);
      setEditItem(null);
      setUploadedImages({});
      setUploadedDocs({});
      loadData();
    } catch {
      alert('Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleFileUpload = async (fieldName: string, file: File) => {
    setUploading({ fieldName, progress: 0 });
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', 'image');
      
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      if (data.success) {
        setUploadedImages(prev => ({ ...prev, [fieldName]: data.url }));
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch {
      alert('Upload failed');
    }
    setUploading(null);
  };

  const handleDocumentUpload = async (fieldName: string, file: File) => {
    setUploading({ fieldName, progress: 0 });
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', 'document');
      
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      if (data.success) {
        setUploadedDocs(prev => ({ 
          ...prev, 
          [fieldName]: {
            url: data.url,
            fileSize: data.fileSize,
            fileType: data.fileType
          }
        }));
      } else {
        alert('Upload failed: ' + data.error);
      }
    } catch {
      alert('Upload failed');
    }
    setUploading(null);
  };

  const openForm = (item: ContentItem | null = null) => {
    setEditItem(item);
    setShowForm(true);
    setBlogContent((item?.content as string) || '');
    if (item) {
      const imageFields: Record<string, string> = {};
      // Only initialize image fields that exist on the item or are common image field names
      const possibleImageFields = ['image', 'src', 'logo', 'photo'];
      possibleImageFields.forEach(field => {
        // Only add the field if it exists on the item (even if empty)
        if (field in item) {
          imageFields[field] = (item[field] as string) || '';
        }
      });
      setUploadedImages(imageFields);
      
      const docFields: Record<string, UploadedDocument> = {};
      if (item.downloadUrl && typeof item.downloadUrl === 'string') {
        docFields['downloadUrl'] = {
          url: item.downloadUrl as string,
          fileSize: (item.fileSize as string) || '',
          fileType: (item.fileType as string) || 'PDF'
        };
      }
      setUploadedDocs(docFields);
    } else {
      setUploadedImages({});
      setUploadedDocs({});
    }
  };

  const filteredData = data.filter(item => {
    const searchTerm = searchQuery.toLowerCase();
    const title = String(item.title || item.name || '').toLowerCase();
    const category = String(item.category || item.role || '').toLowerCase();
    return title.includes(searchTerm) || category.includes(searchTerm);
  });

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/30">
              <Image src="/images/rnadw-logo.png" alt="RNADW" width={48} height={48} className="rounded-lg" />
            </div>
            <h1 className="text-3xl font-black text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400">Sign in to RNADW Admin Panel</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                </button>
              </div>
            </div>
            
            {error && (
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center text-slate-500 text-sm mt-6">
            RNADW Content Management System
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Icons.Dashboard },
    { id: 'blogs', label: 'Blog Posts', icon: Icons.Blog },
    { id: 'activities', label: 'Activities', icon: Icons.Activities },
    { id: 'resources', label: 'Resources', icon: Icons.Resources },
    { id: 'gallery', label: 'Gallery', icon: Icons.Gallery },
    { id: 'videos', label: 'Videos', icon: Icons.Videos },
    { id: 'team', label: 'Team', icon: Icons.Team },
    { id: 'partners', label: 'Partners', icon: Icons.Partners },
    { id: 'testimonials', label: 'Testimonials', icon: Icons.Testimonials },
    { id: 'site-settings', label: 'Site Settings', icon: Icons.Settings },
  ];

  const getFormFields = (): FormField[] => {
    switch (activeTab) {
      case 'blogs':
        return [
          { name: 'title', label: 'Title', type: 'text', required: true },
          { name: 'excerpt', label: 'Excerpt', type: 'textarea' },
          { name: 'content', label: 'Content', type: 'richtext' },
          { name: 'author', label: 'Author', type: 'text' },
          { name: 'category', label: 'Category', type: 'text' },
          { name: 'image', label: 'Image', type: 'file' },
          { name: 'date', label: 'Date', type: 'text' },
          { name: 'published', label: 'Published', type: 'checkbox' },
          { name: 'featured', label: 'Featured', type: 'checkbox' },
        ];
      case 'activities':
        return [
          { name: 'title', label: 'Title', type: 'text', required: true },
          { name: 'subtitle', label: 'Subtitle', type: 'text' },
          { name: 'description', label: 'Description', type: 'textarea' },
          { name: 'icon', label: 'Icon (emoji)', type: 'text' },
          { name: 'image', label: 'Image', type: 'file' },
          { name: 'published', label: 'Published', type: 'checkbox' },
        ];
      case 'resources':
        return [
          { name: 'title', label: 'Title', type: 'text', required: true },
          { name: 'description', label: 'Description', type: 'textarea' },
          { name: 'category', label: 'Category', type: 'text' },
          { name: 'categoryColor', label: 'Category Color (hex)', type: 'text', placeholder: '#2563EB' },
          { name: 'icon', label: 'Icon (emoji)', type: 'text', placeholder: '📄' },
          { name: 'downloadUrl', label: 'Document File', type: 'document' },
          { name: 'published', label: 'Published', type: 'checkbox' },
        ];
      case 'gallery':
        return [
          { name: 'src', label: 'Image', type: 'file', required: true },
          { name: 'title', label: 'Title', type: 'text', required: true },
          { name: 'category', label: 'Category', type: 'text' },
          { name: 'categoryColor', label: 'Category Color (hex)', type: 'text', placeholder: '#FACC15' },
          { name: 'description', label: 'Description', type: 'textarea' },
          { name: 'published', label: 'Published', type: 'checkbox' },
        ];
      case 'videos':
        return [
          { name: 'videoId', label: 'YouTube Video ID', type: 'text', required: true },
          { name: 'title', label: 'Title', type: 'text', required: true },
          { name: 'description', label: 'Description', type: 'textarea' },
          { name: 'category', label: 'Category', type: 'text' },
          { name: 'published', label: 'Published', type: 'checkbox' },
        ];
      case 'team':
        return [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'role', label: 'Role', type: 'text', required: true },
          { name: 'description', label: 'Bio', type: 'textarea' },
          { name: 'image', label: 'Photo', type: 'file' },
          { name: 'sortOrder', label: 'Display Order', type: 'number', placeholder: '1' },
          { name: 'published', label: 'Published', type: 'checkbox' },
        ];
      case 'partners':
        return [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Brief description of the partnership...' },
          { name: 'category', label: 'Category', type: 'text' },
          { name: 'logo', label: 'Logo', type: 'file' },
          { name: 'website', label: 'Website', type: 'text' },
          { name: 'published', label: 'Published', type: 'checkbox' },
        ];
      case 'testimonials':
        return [
          { name: 'quote', label: 'Quote', type: 'textarea', required: true },
          { name: 'author', label: 'Author', type: 'text', required: true },
          { name: 'role', label: 'Role', type: 'text' },
          { name: 'image', label: 'Photo', type: 'file' },
          { name: 'published', label: 'Published', type: 'checkbox' },
        ];
      default:
        return [];
    }
  };

  // Dashboard Stats
  const DashboardView = () => {
    const [stats, setStats] = useState<Record<string, number>>({});
    
    useEffect(() => {
      const fetchStats = async () => {
        const collections = ['blogs', 'activities', 'resources', 'gallery', 'videos', 'team', 'partners', 'testimonials'];
        const newStats: Record<string, number> = {};
        
        for (const col of collections) {
          try {
            const res = await fetch(`${API_BASE}/${col}`);
            const json = await res.json();
            newStats[col] = json.data?.length || 0;
          } catch {
            newStats[col] = 0;
          }
        }
        setStats(newStats);
      };
      fetchStats();
    }, []);

    const statCards = [
      { id: 'blogs', label: 'Blog Posts', icon: Icons.Blog, color: 'from-blue-500 to-blue-600' },
      { id: 'activities', label: 'Activities', icon: Icons.Activities, color: 'from-green-500 to-green-600' },
      { id: 'resources', label: 'Resources', icon: Icons.Resources, color: 'from-purple-500 to-purple-600' },
      { id: 'gallery', label: 'Gallery Images', icon: Icons.Gallery, color: 'from-pink-500 to-pink-600' },
      { id: 'videos', label: 'Videos', icon: Icons.Videos, color: 'from-red-500 to-red-600' },
      { id: 'team', label: 'Team Members', icon: Icons.Team, color: 'from-yellow-500 to-yellow-600' },
      { id: 'partners', label: 'Partners', icon: Icons.Partners, color: 'from-indigo-500 to-indigo-600' },
      { id: 'testimonials', label: 'Testimonials', icon: Icons.Testimonials, color: 'from-teal-500 to-teal-600' },
    ];

    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">Dashboard</h2>
          <p className="text-slate-500">Welcome back! Here&apos;s an overview of your content.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => setActiveTab(card.id)}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all text-left"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent />
                </div>
                <p className="text-4xl font-black text-slate-800 mb-1">{stats[card.id] ?? '...'}</p>
                <p className="text-slate-500 text-sm font-medium">{card.label}</p>
              </button>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-slate-900">
          <h3 className="text-2xl font-black mb-2">Quick Actions</h3>
          <p className="text-slate-800/70 mb-6">Get started with common tasks</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Add Blog Post', tab: 'blogs' },
              { label: 'Upload to Gallery', tab: 'gallery' },
              { label: 'Add Video', tab: 'videos' },
              { label: 'Add Resource', tab: 'resources' },
            ].map((action) => (
              <button
                key={action.tab}
                onClick={() => { setActiveTab(action.tab); setTimeout(() => openForm(null), 100); }}
                className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
              >
                + {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Site Settings View (Hero Video, etc.)
  const SiteSettingsView = () => {
    const [heroVideoUrl, setHeroVideoUrl] = useState('');
    const [settingsLoading, setSettingsLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState('');
    const [saveError, setSaveError] = useState('');

    // Load current settings
    useEffect(() => {
      const loadSettings = async () => {
        try {
          const res = await fetch('/api/admin/settings');
          const json = await res.json();
          if (json.data) {
            const videoSetting = json.data.find((s: { key: string }) => s.key === 'hero_video_url');
            if (videoSetting) {
              setHeroVideoUrl(videoSetting.value || '');
            }
          }
        } catch (error) {
          console.error('Failed to load settings:', error);
        }
        setSettingsLoading(false);
      };
      loadSettings();
    }, []);

    // Extract YouTube video ID from various URL formats
    const extractYouTubeId = (url: string): string | null => {
      const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
        /^([a-zA-Z0-9_-]{11})$/
      ];
      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
      }
      return null;
    };

    const handleSaveHeroVideo = async () => {
      setSaving(true);
      setSaveError('');
      setSaveSuccess('');

      // Validate YouTube URL
      const videoId = extractYouTubeId(heroVideoUrl);
      if (!videoId && heroVideoUrl.trim()) {
        setSaveError('Invalid YouTube URL. Please enter a valid YouTube video URL.');
        setSaving(false);
        return;
      }

      try {
        // Check if setting exists
        const checkRes = await fetch('/api/admin/settings');
        const checkJson = await checkRes.json();
        const existingSetting = checkJson.data?.find((s: { key: string }) => s.key === 'hero_video_url');

        if (existingSetting) {
          // Update existing
          await fetch(`/api/admin/settings/${existingSetting._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              key: 'hero_video_url',
              value: heroVideoUrl,
              label: 'Hero Section Video URL',
              description: 'YouTube video URL for the hero section background',
              type: 'url'
            }),
          });
        } else {
          // Create new
          await fetch('/api/admin/settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              key: 'hero_video_url',
              value: heroVideoUrl,
              label: 'Hero Section Video URL',
              description: 'YouTube video URL for the hero section background',
              type: 'url'
            }),
          });
        }

        setSaveSuccess('Hero video URL saved successfully!');
        setTimeout(() => setSaveSuccess(''), 3000);
      } catch {
        setSaveError('Failed to save settings. Please try again.');
      }
      setSaving(false);
    };

    const videoId = extractYouTubeId(heroVideoUrl);

    return (
      <div className="space-y-8 max-w-4xl">
        <div>
          <h2 className="text-3xl font-black text-slate-800 mb-2">Site Settings</h2>
          <p className="text-slate-500">Manage global site settings and configurations</p>
        </div>

        {settingsLoading ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white">
                <Icons.Videos />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Hero Section Video</h3>
                <p className="text-slate-500 text-sm">Set the YouTube video for the homepage hero background</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">YouTube Video URL</label>
                <input
                  type="text"
                  value={heroVideoUrl}
                  onChange={(e) => setHeroVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=SFhndjv-PfY"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors"
                />
                <p className="mt-2 text-sm text-slate-500">
                  Enter the full YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID)
                </p>
              </div>

              {/* Video Preview */}
              {videoId && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preview</label>
                  <div className="relative w-full aspect-video bg-slate-100 rounded-xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1`}
                      title="Video Preview"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Video ID: <code className="bg-slate-100 px-2 py-1 rounded">{videoId}</code>
                  </p>
                </div>
              )}

              {saveError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-red-600 text-sm">{saveError}</p>
                </div>
              )}

              {saveSuccess && (
                <div className="p-3 rounded-xl bg-green-50 border border-green-200 flex items-center gap-2">
                  <Icons.Check />
                  <p className="text-green-600 text-sm">{saveSuccess}</p>
                </div>
              )}

              <button
                onClick={handleSaveHeroVideo}
                disabled={saving}
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold rounded-xl transition-all disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Hero Video'}
              </button>
            </div>
          </div>
        )}

        {/* Instructions Card */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-3">How to get a YouTube Video URL:</h4>
          <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
            <li>Go to YouTube and find the video you want to use</li>
            <li>Click the &quot;Share&quot; button below the video</li>
            <li>Copy the URL (e.g., https://youtu.be/SFhndjv-PfY)</li>
            <li>Paste it in the field above and click Save</li>
          </ol>
          <p className="mt-4 text-sm text-slate-500">
            <strong>Tip:</strong> The video will autoplay muted and loop continuously on the homepage hero section.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-slate-900 transition-all duration-300 z-40 ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-slate-800">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <span className="text-lg font-black text-slate-900">R</span>
              </div>
              <div>
                <h1 className="font-bold text-white">RNADW</h1>
                <p className="text-xs text-slate-500">Admin Panel</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sidebarCollapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"} />
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setShowForm(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <IconComponent />
                {!sidebarCollapsed && <span className="font-medium">{tab.label}</span>}
              </button>
            );
          })}
        </nav>
        
        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all mb-2 ${
              activeTab === 'settings'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Icons.Settings />
            {!sidebarCollapsed && <span className="font-medium">Settings</span>}
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
          >
            <Icons.Logout />
            {!sidebarCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div>
            <h2 className="text-xl font-bold text-slate-800 capitalize">
              {activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'settings' ? 'Settings' : activeTab === 'site-settings' ? 'Site Settings' : activeTab}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            {activeTab !== 'dashboard' && activeTab !== 'settings' && activeTab !== 'site-settings' && (
              <>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none w-64 text-sm"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Icons.Search />
                  </div>
                </div>
                <button
                  onClick={() => openForm(null)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-yellow-500/20"
                >
                  <Icons.Plus />
                  Add New
                </button>
              </>
            )}
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === 'dashboard' ? (
            <DashboardView />
          ) : activeTab === 'settings' ? (
            <SettingsView />
          ) : activeTab === 'site-settings' ? (
            <SiteSettingsView />
          ) : (
            <>
              {/* Form Modal */}
              {showForm && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                  <div className={`bg-white rounded-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl ${activeTab === 'blogs' ? 'max-w-5xl' : 'max-w-2xl'}`}>
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
                      <h3 className="text-xl font-bold text-slate-800">
                        {editItem ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}
                      </h3>
                      <button
                        onClick={() => { setShowForm(false); setEditItem(null); setUploadedImages({}); setUploadedDocs({}); }}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-600"
                      >
                        <Icons.Close />
                      </button>
                    </div>
                    <form onSubmit={handleSave} className="p-6 space-y-5 overflow-y-auto max-h-[calc(90vh-140px)]">
                      {getFormFields().map((field) => (
                        <div key={field.name}>
                          {field.type === 'checkbox' ? (
                            <label className="flex items-center gap-3 cursor-pointer group">
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  name={field.name}
                                  defaultChecked={editItem?.[field.name] as boolean ?? true}
                                  className="peer sr-only"
                                />
                                <div className="w-6 h-6 rounded-lg border-2 border-slate-300 peer-checked:border-yellow-400 peer-checked:bg-yellow-400 transition-all flex items-center justify-center">
                                  <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{field.label}</span>
                            </label>
                          ) : field.type === 'file' ? (
                            <>
                              <label className="block text-sm font-medium text-slate-700 mb-2">{field.label}</label>
                              <div className="space-y-3">
                                {uploadedImages[field.name] && (
                                  <div className="relative inline-block">
                                    <img 
                                      src={uploadedImages[field.name]} 
                                      alt="Preview" 
                                      className="h-32 w-auto rounded-xl border-2 border-slate-200 object-cover shadow-sm"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setUploadedImages(prev => ({ ...prev, [field.name]: '' }))}
                                      className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 shadow-lg"
                                    >
                                      ×
                                    </button>
                                  </div>
                                )}
                                <div className="flex items-center gap-3">
                                  <input
                                    ref={(el) => { fileInputRefs.current[field.name] = el; }}
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) handleFileUpload(field.name, file);
                                    }}
                                    className="hidden"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => fileInputRefs.current[field.name]?.click()}
                                    disabled={uploading?.fieldName === field.name}
                                    className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl border-2 border-dashed border-slate-300 hover:border-slate-400 transition-all"
                                  >
                                    {uploading?.fieldName === field.name ? (
                                      <>
                                        <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                                        Uploading...
                                      </>
                                    ) : (
                                      <>
                                        <Icons.Upload />
                                        {uploadedImages[field.name] ? 'Change Image' : 'Upload Image'}
                                      </>
                                    )}
                                  </button>
                                  {uploadedImages[field.name] && (
                                    <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                                      <Icons.Check /> Ready
                                    </span>
                                  )}
                                </div>
                              </div>
                            </>
                          ) : field.type === 'document' ? (
                            <>
                              <label className="block text-sm font-medium text-slate-700 mb-2">{field.label}</label>
                              <div className="space-y-3">
                                {uploadedDocs[field.name]?.url && (
                                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                      <Icons.Resources />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium text-slate-900 truncate">
                                        {uploadedDocs[field.name].url.split('/').pop()}
                                      </p>
                                      <p className="text-xs text-slate-500">
                                        {uploadedDocs[field.name].fileType} • {uploadedDocs[field.name].fileSize}
                                      </p>
                                    </div>
                                    <div className="flex gap-2">
                                      <a
                                        href={uploadedDocs[field.name].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors"
                                      >
                                        View
                                      </a>
                                      <button
                                        type="button"
                                        onClick={() => setUploadedDocs(prev => ({ ...prev, [field.name]: { url: '', fileSize: '', fileType: '' } }))}
                                        className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                )}
                                <div className="flex items-center gap-3">
                                  <input
                                    ref={(el) => { docInputRefs.current[field.name] = el; }}
                                    type="file"
                                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) handleDocumentUpload(field.name, file);
                                    }}
                                    className="hidden"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => docInputRefs.current[field.name]?.click()}
                                    disabled={uploading?.fieldName === field.name}
                                    className="flex items-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-xl border-2 border-dashed border-blue-300 hover:border-blue-400 transition-all"
                                  >
                                    {uploading?.fieldName === field.name ? (
                                      <>
                                        <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                                        Uploading...
                                      </>
                                    ) : (
                                      <>
                                        <Icons.Upload />
                                        {uploadedDocs[field.name]?.url ? 'Change Document' : 'Upload Document'}
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : field.type === 'richtext' ? (
                            <>
                              <label className="block text-sm font-medium text-slate-700 mb-2">{field.label}</label>
                              <RichTextEditor
                                content={(editItem?.[field.name] as string) || ''}
                                onChange={(html) => setBlogContent(html)}
                                placeholder="Write your blog post here..."
                              />
                            </>
                          ) : (
                            <>
                              <label className="block text-sm font-medium text-slate-700 mb-2">{field.label}</label>
                              {field.type === 'textarea' ? (
                                <textarea
                                  name={field.name}
                                  rows={field.rows || 4}
                                  defaultValue={(editItem?.[field.name] as string) || ''}
                                  placeholder={field.placeholder || ''}
                                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                                  required={field.required}
                                />
                              ) : (
                                <input
                                  type={field.type}
                                  name={field.name}
                                  defaultValue={(editItem?.[field.name] as string) || ''}
                                  placeholder={field.placeholder || ''}
                                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-yellow-400 focus:outline-none transition-colors"
                                  required={field.required}
                                />
                              )}
                            </>
                          )}
                        </div>
                      ))}
                      <div className="flex gap-3 pt-4 border-t border-slate-100">
                        <button
                          type="submit"
                          disabled={saving}
                          className="flex-1 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {saving ? (
                            <>
                              <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                              Saving...
                            </>
                          ) : (
                            editItem ? 'Save Changes' : 'Create'
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => { setShowForm(false); setEditItem(null); setUploadedImages({}); setUploadedDocs({}); }}
                          className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Data Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {loading ? (
                  <div className="p-16 text-center">
                    <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-slate-500">Loading...</p>
                  </div>
                ) : filteredData.length === 0 ? (
                  <div className="p-16 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icons.Resources />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">No items found</h3>
                    <p className="text-slate-500 mb-6">
                      {searchQuery ? 'Try a different search term' : 'Get started by adding your first item'}
                    </p>
                    {!searchQuery && (
                      <button
                        onClick={() => openForm(null)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-xl"
                      >
                        <Icons.Plus />
                        Add First Item
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                            {activeTab === 'team' || activeTab === 'partners' || activeTab === 'testimonials' ? 'Name/Author' : 'Title'}
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Category/Role</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredData.map((item) => (
                          <tr key={item._id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <span className="font-medium text-slate-800">
                                {String(item.title || item.name || item.author || 'Untitled')}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-slate-500">
                                {String(item.category || item.role || '-')}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                                item.published !== false
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-slate-100 text-slate-600'
                              }`}>
                                {item.published !== false ? 'Published' : 'Draft'}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => openForm(item)}
                                  className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                                  title="Edit"
                                >
                                  <Icons.Edit />
                                </button>
                                <button
                                  onClick={() => handleDelete(item._id)}
                                  className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <Icons.Delete />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
