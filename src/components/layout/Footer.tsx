'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const quickLinks = [
  { name: 'About Us', href: '/aboutus' },
  { name: 'Donate', href: '/donate' },
  { name: 'Projects', href: '/activities' },
  { name: 'Contact', href: '/contact' },
  { name: 'Gallery', href: '/gallery' },
];

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/RwandaDeafwomen',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/rwandadeafwomen',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/RwandaNationalAssociationofDeafwomen',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    )
  },
];

export default function Footer() {
  // Footer animations
  const footerBrand = useScrollAnimation(0.2);
  const footerSince = useScrollAnimation(0.2);
  const footerTitle = useScrollAnimation(0.2);
  const footerTagline = useScrollAnimation(0.2);
  const footerDescription = useScrollAnimation(0.2);
  const footerRegistration = useScrollAnimation(0.2);
  const footerSocialLabel = useScrollAnimation(0.2);
  const footerSocialLinks = useScrollAnimation(0.2);

  const footerQuickLinksTitle = useScrollAnimation(0.2);
  const footerQuickLink1 = useScrollAnimation<HTMLLIElement>(0.2);
  const footerQuickLink2 = useScrollAnimation<HTMLLIElement>(0.2);
  const footerQuickLink3 = useScrollAnimation<HTMLLIElement>(0.2);
  const footerQuickLink4 = useScrollAnimation<HTMLLIElement>(0.2);
  const footerQuickLink5 = useScrollAnimation<HTMLLIElement>(0.2);

  const footerContactTitle = useScrollAnimation(0.2);
  const footerLocation = useScrollAnimation<HTMLLIElement>(0.2);
  const footerPhone = useScrollAnimation<HTMLLIElement>(0.2);
  const footerEmail = useScrollAnimation<HTMLLIElement>(0.2);
  const footerHours = useScrollAnimation<HTMLLIElement>(0.2);

  const footerCopyright = useScrollAnimation(0.2);
  const footerLegal = useScrollAnimation(0.2);

  return (
    <footer className="relative overflow-hidden bg-gray-900">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Yellow blob */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#FACC15' }} />
        {/* Blue blob */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#2563EB' }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">

        {/* Top Section - Large Typography & Info Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* LEFT - Large Brand Section */}
            <div className="lg:col-span-5">

              {/* Large RNADW Typography */}
              <div className="mb-8">
                <div
                  ref={footerSince.ref}
                  className={`flex items-center gap-4 mb-4 scroll-animate delay-100 ${footerSince.isVisible ? 'visible' : ''}`}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FACC15' }} />
                  <span className="text-xs font-black tracking-[0.3em] uppercase text-gray-500">Since 2005</span>
                </div>

                <h2
                  ref={footerTitle.ref}
                  className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 scroll-animate-left delay-200 ${footerTitle.isVisible ? 'visible' : ''}`}>
                  <span className="text-white">RNADW</span>
                </h2>

                <div
                  ref={footerTagline.ref}
                  className={`flex items-center gap-3 mb-6 scroll-animate delay-300 ${footerTagline.isVisible ? 'visible' : ''}`}>
                  <div className="h-1 w-16" style={{ backgroundColor: '#FACC15' }} />
                  <p className="text-sm font-bold tracking-wider uppercase" style={{ color: '#FACC15' }}>
                    Empowering Deaf Women
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                ref={footerDescription.ref}
                className={`text-gray-400 text-base leading-relaxed mb-6 max-w-md scroll-animate delay-400 ${footerDescription.isVisible ? 'visible' : ''}`}>
                Rwanda National Association of Deaf Women — Empowering deaf women and girls through advocacy, education, and community building.
              </p>

              <p
                ref={footerRegistration.ref}
                className={`text-gray-500 text-sm leading-relaxed max-w-md scroll-animate delay-500 ${footerRegistration.isVisible ? 'visible' : ''}`}>
                Organization of People with Disabilities (OPD) fully registered with Rwanda Governance Board (RGB) under Registration N° 055/2014.
              </p>

              {/* Social Links - Large Buttons */}
              <div className="mt-10">
                <p
                  ref={footerSocialLabel.ref}
                  className={`text-xs font-black tracking-[0.2em] uppercase text-gray-500 mb-4 scroll-animate delay-600 ${footerSocialLabel.isVisible ? 'visible' : ''}`}>Follow Us</p>
                <div
                  ref={footerSocialLinks.ref}
                  className={`flex gap-3 scroll-animate-scale delay-700 ${footerSocialLinks.isVisible ? 'visible' : ''}`}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/5 border-2 border-white/10 flex items-center justify-center text-gray-400 hover:border-yellow-400 hover:text-yellow-400 transition-all hover:bg-white/10"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT - Navigation & Contact Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">

              {/* Quick Links */}
              <div>
                <div
                  ref={footerQuickLinksTitle.ref}
                  className={`flex items-center gap-3 mb-6 scroll-animate delay-100 ${footerQuickLinksTitle.isVisible ? 'visible' : ''}`}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                  <h3 className="text-xs font-black tracking-[0.2em] uppercase text-gray-500">Quick Links</h3>
                </div>

                <ul className="space-y-3">
                  {quickLinks.map((link, i) => (
                    <li
                      key={link.name}
                      ref={[footerQuickLink1, footerQuickLink2, footerQuickLink3, footerQuickLink4, footerQuickLink5][i].ref}
                      className={`scroll-animate-left delay-${(i + 2) * 100} ${[footerQuickLink1, footerQuickLink2, footerQuickLink3, footerQuickLink4, footerQuickLink5][i].isVisible ? 'visible' : ''}`}>
                      <Link
                        href={link.href}
                        className="group text-white hover:text-yellow-400 transition-colors text-lg font-bold flex items-center gap-2"
                      >
                        <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-6 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <div
                  ref={footerContactTitle.ref}
                  className={`flex items-center gap-3 mb-6 scroll-animate delay-100 ${footerContactTitle.isVisible ? 'visible' : ''}`}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#FACC15' }} />
                  <h3 className="text-xs font-black tracking-[0.2em] uppercase text-gray-500">Get in Touch</h3>
                </div>

                <ul className="space-y-5">
                  {/* Location */}
                  <li
                    ref={footerLocation.ref}
                    className={`group scroll-animate-right delay-200 ${footerLocation.isVisible ? 'visible' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-400 transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">Address</p>
                        <p className="text-sm text-gray-300 leading-relaxed">KG 125 ST, 304, Ikaro Plaza,<br />Nyarugunga, Kicukiro, Kigali</p>
                      </div>
                    </div>
                  </li>

                  {/* Phone */}
                  <li
                    ref={footerPhone.ref}
                    className={`group scroll-animate-right delay-300 ${footerPhone.isVisible ? 'visible' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-400 transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">Phone</p>
                        <a href="tel:+250784591495" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors block">
                          +250 784 591 495
                        </a>
                        <a href="tel:+250788428965" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors block">
                          +250 788 428 965
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* Email */}
                  <li
                    ref={footerEmail.ref}
                    className={`group scroll-animate-right delay-400 ${footerEmail.isVisible ? 'visible' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 group-hover:border-blue-400 transition-colors">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">Email</p>
                        <a href="mailto:info@rnadw.org.rw" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                          info@rnadw.org.rw
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* Hours */}
                  <li
                    ref={footerHours.ref}
                    className={`scroll-animate-scale delay-500 ${footerHours.isVisible ? 'visible' : ''}`}>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-2">Office Hours</p>
                      <p className="text-sm text-gray-300">Monday - Friday</p>
                      <p className="text-sm text-gray-400">9:00 AM - 5:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

              {/* Copyright */}
              <div
                ref={footerCopyright.ref}
                className={`flex items-center gap-4 scroll-animate delay-100 ${footerCopyright.isVisible ? 'visible' : ''}`}>
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} RNADW. All rights reserved.
                </p>
                <div className="hidden sm:block w-px h-4 bg-gray-700" />
                <p className="text-xs text-gray-600">Made with ❤️ in Rwanda</p>
              </div>

              {/* Legal Links */}
              <div
                ref={footerLegal.ref}
                className={`flex items-center gap-6 text-xs text-gray-500 scroll-animate delay-300 ${footerLegal.isVisible ? 'visible' : ''}`}>
                <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Use</Link>
              </div>

            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}
