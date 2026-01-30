import { useRef, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

export default function Cause() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="cause" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-3xl">
            {/* Brush stroke decoration */}
            <ScrollAnimate animation="fade-right" duration={600}>
              <svg
                viewBox="0 0 300 150"
                className="w-48 h-24 mb-8"
                fill="none"
              >
                <path
                  d="M20 100 Q60 40, 140 70 Q220 100, 280 50"
                  stroke="#F5D78E"
                  strokeWidth="40"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="80" cy="65" r="5" fill="white" />
                <circle cx="140" cy="72" r="4" fill="white" />
                <circle cx="200" cy="68" r="6" fill="white" />
              </svg>
            </ScrollAnimate>
            <ScrollAnimate animation="zoom-in" duration={800} delay={100}>
              <h1 
                className="glitch text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-dawn-orange mb-6 tracking-tight"
                data-text="OUR MISSION IS SIMPLE"
              >
                OUR MISSION IS SIMPLE
              </h1>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={200}>
              <span className="inline-block text-sm font-semibold tracking-widest text-dawn-gray uppercase mb-4">
                Cause
              </span>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade-up" delay={300}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark leading-tight mb-6">
                Making Social Investments And Shaping Narratives
              </h2>
            </ScrollAnimate>
            
            <ScrollAnimate animation="fade-up" delay={400}>
              <p className="text-lg text-dawn-gray leading-relaxed">
                The forces of development are too complex, subtle and insufficiently known to yield simple formulas.
              </p>
            </ScrollAnimate>
          </div>

          {/* Right video */}
          <ScrollAnimate animation="fade-left" delay={300}>
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-dawn-orange"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Dawn.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dawn-dark/40 to-transparent pointer-events-none" />
              
              {/* Controls overlay */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Play/Pause center button */}
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6 text-dawn-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-dawn-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Bottom controls bar */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {/* Left controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    {isPlaying ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    {isMuted ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
