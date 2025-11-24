'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedProgram, setSelectedProgram] = useState('general');

  // Hero animations
  const heroLabel = useScrollAnimation(0.1);
  const heroTitle = useScrollAnimation(0.1);
  const heroDescription = useScrollAnimation(0.1);

  // Amount selector animations
  const amountLabel = useScrollAnimation(0.2);
  const amountOptions = useScrollAnimation(0.2);

  // Programs animations
  const programsLabel = useScrollAnimation(0.2);
  const programsGrid = useScrollAnimation(0.2);

  // Payment animations
  const paymentLabel = useScrollAnimation(0.2);
  const paymentMethods = useScrollAnimation(0.2);

  // Impact animations
  const impactLabel = useScrollAnimation(0.2);
  const impactCards = useScrollAnimation(0.2);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const programs = [
    { id: 'general', name: 'Where Most Needed', icon: '🌟' },
    { id: 'education', name: 'Education & Skills', icon: '📚' },
    { id: 'economic', name: 'Economic Empowerment', icon: '💼' },
    { id: 'health', name: 'Reproductive Health', icon: '🏥' },
    { id: 'violence', name: 'Ending Violence', icon: '🛡️' }
  ];

  const getSelectedAmountValue = () => {
    if (customAmount) return parseFloat(customAmount);
    return selectedAmount || 0;
  };

  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

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
            <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Support Our Mission</span>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
          </div>

          {/* Title */}
          <h1
            ref={heroTitle.ref}
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-white mb-6 scroll-animate delay-200 ${heroTitle.isVisible ? 'visible' : ''}`}>
            Empower<br />
            Deaf Women<br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: '#FACC15' }}>Today</span>
              <div className="absolute bottom-2 left-0 right-0 h-6 opacity-30 -z-10" style={{ backgroundColor: '#FACC15' }} />
            </span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescription.ref}
            className={`text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl scroll-animate delay-300 ${heroDescription.isVisible ? 'visible' : ''}`}>
            Your generous donation creates lasting change for deaf women and girls across Rwanda. Every contribution makes a difference.
          </p>

        </div>
      </section>

      {/* DONATION FORM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Donation Type Toggle */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-2xl p-2 bg-gray-100">
              <button
                onClick={() => setDonationType('one-time')}
                className={`px-8 py-4 rounded-xl font-black text-lg transition-all ${
                  donationType === 'one-time'
                    ? 'bg-white shadow-lg'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                style={{ color: donationType === 'one-time' ? '#2563EB' : undefined }}>
                One-Time
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`px-8 py-4 rounded-xl font-black text-lg transition-all ${
                  donationType === 'monthly'
                    ? 'bg-white shadow-lg'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                style={{ color: donationType === 'monthly' ? '#FACC15' : undefined }}>
                Monthly
              </button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-16">
            <div
              ref={amountLabel.ref}
              className={`flex items-center gap-4 mb-8 scroll-animate delay-100 ${amountLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Select Amount</span>
              <div className="h-1 flex-1 rounded-full bg-gray-200" />
            </div>

            <div
              ref={amountOptions.ref}
              className={`scroll-animate delay-200 ${amountOptions.isVisible ? 'visible' : ''}`}>
              {/* Predefined Amounts */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-6 rounded-2xl font-black text-2xl transition-all duration-300 ${
                      selectedAmount === amount && !customAmount
                        ? 'scale-105 shadow-xl'
                        : 'hover:scale-105'
                    }`}
                    style={{
                      backgroundColor: selectedAmount === amount && !customAmount ? '#FACC15' : '#F3F4F6',
                      color: selectedAmount === amount && !customAmount ? '#1F2937' : '#6B7280'
                    }}>
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-black text-gray-400">$</div>
                <input
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full pl-16 pr-6 py-6 rounded-2xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all font-black text-3xl placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Program Selection */}
          <div className="mb-16">
            <div
              ref={programsLabel.ref}
              className={`flex items-center gap-4 mb-8 scroll-animate delay-100 ${programsLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Choose Program</span>
              <div className="h-1 flex-1 rounded-full bg-gray-200" />
            </div>

            <div
              ref={programsGrid.ref}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 scroll-animate delay-200 ${programsGrid.isVisible ? 'visible' : ''}`}>
              {programs.map((program) => (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                    selectedProgram === program.id
                      ? 'scale-105 shadow-xl'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedProgram === program.id ? '#2563EB' : '#F3F4F6',
                    color: selectedProgram === program.id ? 'white' : '#1F2937'
                  }}>
                  <div className="text-4xl mb-3">{program.icon}</div>
                  <div className="text-lg font-black">{program.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-16">
            <div
              ref={paymentLabel.ref}
              className={`flex items-center gap-4 mb-8 scroll-animate delay-100 ${paymentLabel.isVisible ? 'visible' : ''}`}>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Payment Method</span>
              <div className="h-1 flex-1 rounded-full bg-gray-200" />
            </div>

            <div
              ref={paymentMethods.ref}
              className={`space-y-4 scroll-animate delay-200 ${paymentMethods.isVisible ? 'visible' : ''}`}>

              {/* Mobile Money */}
              <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#FEF3C7' }}>
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-black">Mobile Money</h3>
                </div>
                <p className="text-gray-600 mb-4">MTN Mobile Money or Airtel Money</p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-lg bg-gray-100 font-bold text-sm">+250 788 123 456</div>
                  <div className="px-4 py-2 rounded-lg bg-gray-100 font-bold text-sm">+250 788 654 321</div>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <h3 className="text-2xl font-black">Bank Transfer</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500 font-bold mb-1">Bank Name</div>
                    <div className="font-black">Bank of Kigali</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-bold mb-1">Account Number</div>
                    <div className="font-black">00012345678901</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-bold mb-1">Account Name</div>
                    <div className="font-black">RNADW</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-bold mb-1">Swift Code</div>
                    <div className="font-black">BKIGRWRW</div>
                  </div>
                </div>
              </div>

              {/* Online Payment */}
              <button
                disabled={getSelectedAmountValue() === 0}
                className="w-full p-8 rounded-2xl font-black text-2xl text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-4"
                style={{ backgroundColor: '#FACC15' }}>
                <span>
                  {getSelectedAmountValue() > 0
                    ? `Donate $${getSelectedAmountValue()} ${donationType === 'monthly' ? '/month' : 'Now'}`
                    : 'Select an amount to continue'}
                </span>
                {getSelectedAmountValue() > 0 && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* IMPACT OF YOUR DONATION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            ref={impactLabel.ref}
            className={`text-center mb-16 scroll-animate delay-100 ${impactLabel.isVisible ? 'visible' : ''}`}>
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#FACC15' }} />
              <span className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">Your Impact</span>
              <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#2563EB' }} />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-4">
              What Your<br />
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: '#FACC15' }}>Donation Does</span>
                <div className="absolute bottom-2 left-0 right-0 h-6 opacity-20 -z-10" style={{ backgroundColor: '#FACC15' }} />
              </span>
            </h2>
          </div>

          <div
            ref={impactCards.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate delay-200 ${impactCards.isVisible ? 'visible' : ''}`}>

            {/* Impact 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-6xl mb-4">💰</div>
              <div className="text-4xl font-black mb-3" style={{ color: '#FACC15' }}>$50</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Provides Skills Training</h3>
              <p className="text-gray-600 leading-relaxed">
                One month of vocational skills training for a deaf woman to start her own business.
              </p>
            </div>

            {/* Impact 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-6xl mb-4">📚</div>
              <div className="text-4xl font-black mb-3" style={{ color: '#2563EB' }}>$100</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Supports Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Full literacy program materials and sign language education for 3 months.
              </p>
            </div>

            {/* Impact 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-6xl mb-4">🛡️</div>
              <div className="text-4xl font-black mb-3" style={{ color: '#FACC15' }}>$250</div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Protects Survivors</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive GBV support including counseling and legal aid for one survivor.
              </p>
            </div>

          </div>

          {/* Tax Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              RNADW is a registered non-profit organization with Rwanda Governance Board (RGB).
              All donations are tax-deductible where applicable.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
