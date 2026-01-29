import ScrollAnimate from './ScrollAnimate';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
  ],
  resources: [
    { name: 'Insights', href: '#insights' },
    { name: 'Stories', href: '#stories' },
    { name: 'Events', href: '#events' },
    { name: 'News', href: '#news' },
  ],
  services: [
    { name: 'Social Investments', href: '#investments' },
    { name: 'Narratives', href: '#narratives' },
    { name: 'Advisory', href: '#advisory' },
    { name: 'Ghostwriting', href: '#ghostwriting' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
  ],
};

const socialLinks = [
  {
    name: 'X',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-dawn-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-dawn-yellow/5 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollAnimate animation="fade-right" duration={600}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Stay connected with our journey
                </h3>
                <p className="text-gray-400">
                  Subscribe to receive insights, stories, and updates on our social investment initiatives.
                </p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-left" delay={200}>
              <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full sm:w-auto px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-dawn-orange transition-colors"
                />
                <button className="w-fit inline-flex items-center gap-2 pl-4 pr-0.5 py-0.5 sm:pl-6 sm:pr-1.5 sm:py-1.5 bg-dawn-orange text-white text-xs sm:text-base font-medium rounded-full hover:bg-dawn-orange-light transition-colors duration-300 group">
                  <span>Subscribe</span>
                  <span className="w-7 h-7 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <ScrollAnimate animation="fade-up" duration={600}>
              <a href="#home" className="flex items-center mb-6">
                <img 
                  src="/images/log.png" 
                  alt="Dawn Elements" 
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </a>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-xs">
                Making social investments and shaping narratives to create lasting impact 
                in communities around the world.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-dawn-orange hover:border-dawn-orange hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </ScrollAnimate>
          </div>

          {/* Links columns */}
          <ScrollAnimate animation="fade-up" delay={100}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-dawn-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-dawn-orange group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={200}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-dawn-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-dawn-orange group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={300}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-dawn-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-dawn-orange group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-up" delay={400}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-dawn-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-dawn-orange group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimate>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dawn Elements. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-gray-500 text-sm hover:text-dawn-orange transition-colors">Privacy</a>
              <a href="#terms" className="text-gray-500 text-sm hover:text-dawn-orange transition-colors">Terms</a>
              <a href="#cookies" className="text-gray-500 text-sm hover:text-dawn-orange transition-colors">Cookies</a>
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with
              <span className="text-dawn-orange animate-pulse">♥</span>
              for a better world
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#home"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-[#2D3B2D] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-dawn-orange transform hover:-translate-y-1 transition-all duration-300 z-40 group"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  );
}
