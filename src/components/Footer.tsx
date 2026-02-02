import ScrollAnimate from './ScrollAnimate';

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Insights', href: '#insights' },
  ],
};



export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-dawn-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-dawn-yellow/5 rounded-full blur-3xl" />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand column */}
          <div>
            <ScrollAnimate animation="fade-up" duration={600}>
              <a href="#home" className="flex items-center mb-6">
                <img 
                  src="/images/footerlogo.png" 
                  alt="Dawn Elements" 
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </a>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Making social investments and shaping narratives to create lasting impact 
                in communities around the world.
              </p>
            </ScrollAnimate>
          </div>

          {/* Quick Links */}
          <ScrollAnimate animation="fade-up" delay={100}>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
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
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with
              <span className="text-dawn-orange animate-pulse">❤</span>
              for the things that matter to us.
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
