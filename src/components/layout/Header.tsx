'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'What We Do', href: '/activities' },
  { name: 'Videos', href: '/videos' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Resources', href: '/resource' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white shadow-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Image */}
              <div className="relative w-14 h-14 transition-transform group-hover:scale-105">
                <Image
                  src="/Logo.png"
                  alt="RNADW Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Brand Text */}
              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-gray-900 tracking-tight">RNADW</span>
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#FACC15' }} />
                </div>
                <p className="text-xs font-medium text-gray-500 tracking-wide">Empowering Deaf Women</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors"
              >
                {/* Link Text */}
                <span className="relative z-10">{item.name}</span>

                {/* Hover Background */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: index % 2 === 0 ? '#FEF3C7' : '#DBEAFE' }} />

                {/* Bottom Accent Line */}
                <span
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: index % 2 === 0 ? '#FACC15' : '#2563EB' }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="/donate"
              className="group relative px-6 py-3 rounded-full font-black text-sm text-white overflow-hidden transition-all hover:scale-105"
              style={{ backgroundColor: '#FACC15' }}
            >
              {/* Button glow effect */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                style={{ backgroundColor: '#FACC15' }} />

              {/* Button text */}
              <span className="relative z-10 flex items-center gap-2">
                Donate Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all"
              style={{
                borderColor: mobileMenuOpen ? '#FACC15' : '#E5E7EB',
                backgroundColor: mobileMenuOpen ? '#FEF3C7' : 'transparent'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>

              {/* Animated Hamburger Icon */}
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                  style={{ backgroundColor: mobileMenuOpen ? '#FACC15' : '#374151' }}
                />
                <span
                  className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                  style={{ backgroundColor: '#374151' }}
                />
                <span
                  className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                  style={{ backgroundColor: mobileMenuOpen ? '#FACC15' : '#374151' }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gray-100 pt-4 pb-6 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {/* Number badge */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
                  style={{ backgroundColor: index % 2 === 0 ? '#FACC15' : '#2563EB' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Link text */}
                <span className="text-base font-bold text-gray-900 group-hover:text-gray-700">
                  {item.name}
                </span>

                {/* Arrow icon */}
                <svg className="ml-auto w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            {/* Mobile Donate Button */}
            <div className="pt-4 px-4">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl font-black text-base text-white transition-all hover:scale-105"
                style={{ backgroundColor: '#FACC15' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Donate Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
