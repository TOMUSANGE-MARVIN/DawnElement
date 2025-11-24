'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Contact info animations
  const infoLabel = useScrollAnimation(0.2);
  const infoCard1 = useScrollAnimation(0.2);
  const infoCard2 = useScrollAnimation(0.2);
  const infoCard3 = useScrollAnimation(0.2);
  const infoCard4 = useScrollAnimation(0.2);

  // Form animations
  const formLabel = useScrollAnimation(0.2);
  const formTitle = useScrollAnimation(0.2);
  const formDescription = useScrollAnimation(0.2);
  const formFields = useScrollAnimation(0.2);

  // Map animation
  const mapSection = useScrollAnimation(0.2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">

          {/* Label */}
          <div
            ref={heroLabel.ref}
            className={`flex items-center gap-3 mb-6 scroll-animate delay-100 ${heroLabel.isVisible ? 'visible' : ''}`}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Get In Touch</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Contact<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>RNADW</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            We'd love to hear from you. Whether you have questions, want to get involved, or need support, our team is here to help.
          </p>

        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Label */}
          <div
            ref={infoLabel.ref}
            className={`flex items-center gap-4 mb-12 scroll-animate delay-100 ${infoLabel.isVisible ? 'visible' : ''}`}>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Reach Us</span>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Location Card */}
            <div
              ref={infoCard1.ref}
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-200 ${infoCard1.isVisible ? 'visible' : ''}`}
              style={{ borderColor: '#FACC15', backgroundColor: 'white' }}>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#FEF3C7' }}>
                <svg className="w-8 h-8" style={{ color: '#FACC15' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                KG 11 Ave, Kigali<br />
                Kigali City, Rwanda
              </p>
            </div>

            {/* Phone Card */}
            <div
              ref={infoCard2.ref}
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-300 ${infoCard2.isVisible ? 'visible' : ''}`}
              style={{ borderColor: '#2563EB', backgroundColor: 'white' }}>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#DBEAFE' }}>
                <svg className="w-8 h-8" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">
                +250 788 123 456<br />
                +250 788 654 321
              </p>
            </div>

            {/* Email Card */}
            <div
              ref={infoCard3.ref}
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-400 ${infoCard3.isVisible ? 'visible' : ''}`}
              style={{ borderColor: '#FACC15', backgroundColor: 'white' }}>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#FEF3C7' }}>
                <svg className="w-8 h-8" style={{ color: '#FACC15' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 leading-relaxed">
                info@rnadw.org.rw<br />
                contact@rnadw.org.rw
              </p>
            </div>

            {/* Hours Card */}
            <div
              ref={infoCard4.ref}
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 scroll-animate-scale delay-500 ${infoCard4.isVisible ? 'visible' : ''}`}
              style={{ borderColor: '#2563EB', backgroundColor: 'white' }}>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#DBEAFE' }}>
                <svg className="w-8 h-8" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 mb-3">Office Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Mon - Fri: 8:00 AM - 5:00 PM<br />
                Sat - Sun: Closed
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-16">
            <div
              ref={formLabel.ref}
              className={`flex items-center gap-4 mb-6 scroll-animate delay-100 ${formLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Send Message</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2
              ref={formTitle.ref}
              className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.9] text-gray-900 mb-6 scroll-animate delay-200 ${formTitle.isVisible ? 'visible' : ''}`}>
              Drop Us<br />
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: '#2563EB' }}>A Line</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-20 -z-10" style={{ backgroundColor: '#2563EB' }} />
              </span>
            </h2>

            <p
              ref={formDescription.ref}
              className={`text-xl text-gray-600 font-light leading-relaxed scroll-animate delay-300 ${formDescription.isVisible ? 'visible' : ''}`}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <div
            ref={formFields.ref}
            className={`scroll-animate delay-400 ${formFields.isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all font-medium"
                    placeholder="+250 788 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all font-medium">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Information</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all font-medium resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group px-8 py-4 rounded-2xl font-black text-gray-900 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                  style={{ backgroundColor: '#FACC15' }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-600 font-bold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message sent successfully!
                  </div>
                )}
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section
        ref={mapSection.ref}
        className={`relative h-[500px] bg-gray-200 scroll-animate delay-100 ${mapSection.isVisible ? 'visible' : ''}`}>

        {/* Placeholder for map - Replace with actual Google Maps embed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#FACC15' }}>
              <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">Find Us on the Map</h3>
            <p className="text-gray-600">KG 11 Ave, Kigali, Rwanda</p>
          </div>
        </div>

        {/* Google Maps Embed (Uncomment and add your API key) */}
        {/*
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        */}
      </section>

    </main>
  );
}
