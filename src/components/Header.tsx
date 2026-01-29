import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'What We Do', href: '#what-we-do' },
  { name: 'Insights', href: '#insights' },
  { name: 'Join Us', href: '#join' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src="/images/log.png" 
              alt="Dawn Elements" 
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-dawn-gray hover:text-dawn-orange transition-colors duration-300 link-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 sm:gap-3 pl-4 sm:pl-5 pr-1 py-1 bg-[#2D3B2D] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#3D4B3D] transition-colors duration-300 group"
            >
              <span>Get in Touch</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 bg-dawn-orange rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-dawn-dark transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-dawn-dark transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-dawn-dark transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-dawn-gray hover:text-dawn-orange transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 pl-4 pr-1 py-1 bg-[#2D3B2D] text-white text-xs font-medium rounded-full"
              >
                <span>Get in Touch</span>
                <span className="w-7 h-7 bg-dawn-orange rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
