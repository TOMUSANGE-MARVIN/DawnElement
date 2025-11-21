import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      {/* Premium Hero Section - Full Height with Split Design */}
      <section className="relative min-h-screen overflow-hidden bg-white">
        {/* Animated Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/2 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
              animationDelay: '1s'
            }}
          />
          <div
            className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full opacity-15 blur-3xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, #EC4899 0%, transparent 70%)',
              animationDelay: '2s'
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Eyebrow Text */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Est. 2005 • Kigali, Rwanda</span>
              </div>

              {/* Main Heading - Ultra Bold, Large */}
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight">
                  <span className="block text-gray-900">Empowering</span>
                  <span
                    className="block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #EC4899 50%, #FACC15 100%)'
                    }}
                  >
                    Deaf Women
                  </span>
                  <span className="block text-gray-900">in Rwanda</span>
                </h1>

                {/* Decorative Line */}
                <div className="flex items-center gap-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"></div>
                  <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full"></div>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
                Through advocacy, education, and community building, we're creating a more inclusive society for deaf women and girls.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-200">
                <div>
                  <div className="text-4xl font-bold text-gray-900">19+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Impact</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Lives Changed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Partners</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/donate" className="group relative">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #EC4899)' }}
                  />
                  <button className="relative px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-transform group-hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #2563EB, #EC4899)' }}>
                    Support Our Mission →
                  </button>
                </Link>

                <Link href="/aboutus">
                  <button className="px-8 py-4 rounded-2xl font-semibold text-gray-900 text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                    Learn Our Story
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image - 5 columns with Creative Layout */}
            <div className="lg:col-span-5 relative">
              {/* Main Image with Tilt Effect */}
              <div className="relative">
                {/* Floating Card Background */}
                <div
                  className="absolute inset-0 rounded-3xl transform rotate-3 opacity-20"
                  style={{ background: 'linear-gradient(135deg, #FACC15, #EC4899)' }}
                />

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                      alt="Deaf women empowerment"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.3) 100%)' }}
                    />
                  </div>
                </div>

                {/* Floating Info Card */}
                <div
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs"
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                      style={{ background: 'linear-gradient(135deg, #FACC15, #EC4899)' }}>
                      ✨
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">RNADW</div>
                      <div className="text-sm text-gray-600">Rwanda National Association of Deaf Women</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission Statement - Full Width with Background */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8">
            <span>Our Mission</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Creating an <span className="italic" style={{ color: '#2563EB' }}>inclusive society</span> where deaf women's rights are{' '}
            <span style={{ color: '#EC4899' }}>respected</span> and their potential is{' '}
            <span style={{ color: '#FACC15' }}>unlimited</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Since 2005, RNADW has been at the forefront of advocating for the rights of deaf women and girls in Rwanda,
            addressing gaps in service provision and championing their integration into the community.
          </p>
        </div>
      </section>

      {/* Programs Section - Bento Grid Layout */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-semibold mb-6">
              <span>What We Do</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Four Pillars of <span style={{ color: '#EC4899' }}>Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to empowering deaf women and girls across Rwanda
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 - Economic Empowerment (Tall) */}
            <div className="md:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=800&fit=crop"
                  alt="Economic Empowerment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[500px]">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-6 border border-white/20">
                  💼
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Economic Empowerment</h3>
                <p className="text-white/90 text-lg mb-6">Life skills and entrepreneurship training for sustainable livelihoods</p>
                <Link href="/activities" className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 2 - Reproductive Health (Wide) */}
            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                  alt="Reproductive Health"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[250px]">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-6 border border-white/20">
                  🏥
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Reproductive Health Rights</h3>
                <p className="text-white/90 text-lg mb-4 max-w-xl">Comprehensive sexual education and health rights advocacy</p>
                <Link href="/activities" className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 3 - Ending Violence (Tall) */}
            <div className="md:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop"
                  alt="Ending Violence"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-900/60 to-transparent"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[500px]">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-6 border border-white/20">
                  🛡️
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Ending Violence</h3>
                <p className="text-white/90 text-lg mb-6">GBV/SGBV prevention and protection for deaf women and girls</p>
                <Link href="/activities" className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 4 - Education & Training (Wide) */}
            <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
                  alt="Education & Training"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 via-yellow-900/70 to-transparent"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[250px]">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-6 border border-white/20">
                  📚
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Education & Skills Training</h3>
                <p className="text-white/90 text-lg mb-4 max-w-xl">Accessible education and vocational training opportunities</p>
                <Link href="/activities" className="text-white font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Modern Marquee */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 text-sm font-semibold mb-6">
              <span>Trusted Partners</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Building Impact <span style={{ color: '#FACC15' }}>Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading organizations to create lasting change
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              'US Embassy',
              'RIB',
              'UNHCR',
              'UNFPA',
              'Ministry of Youth',
              'German Embassy',
              'AWDF',
              'KVINHA',
              'NUDOR',
              'Sweden Embassy'
            ].map((partner, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-2xl p-8 flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <span className="text-gray-700 font-semibold text-center text-sm group-hover:text-gray-900 transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Split Design */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left - Donate */}
          <div className="relative p-16 lg:p-24 flex flex-col justify-center min-h-[600px]"
            style={{ background: 'linear-gradient(135deg, #2563EB 0%, #EC4899 100%)' }}>
            <div className="max-w-xl">
              <div className="text-6xl mb-8">💝</div>
              <h2 className="text-5xl font-bold text-white mb-6">Make a Difference</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your support helps us continue empowering deaf women and girls across Rwanda through education, advocacy, and community programs.
              </p>
              <Link href="/donate" className="group inline-block">
                <button className="px-8 py-4 rounded-2xl font-semibold text-lg bg-white text-gray-900 hover:bg-gray-100 transition-all transform group-hover:scale-105">
                  Donate Now →
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Contact */}
          <div className="relative p-16 lg:p-24 flex flex-col justify-center min-h-[600px] bg-gray-900">
            <div className="max-w-xl">
              <div className="text-6xl mb-8">💬</div>
              <h2 className="text-5xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Have questions? Want to partner with us? We'd love to hear from you and explore how we can work together.
              </p>
              <Link href="/contact" className="group inline-block">
                <button className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all transform group-hover:scale-105">
                  Contact Us →
                </button>
              </Link>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="space-y-4 text-white/70">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>KK 78ST Kanombe, Kigali</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@rnadw.org.rw</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
