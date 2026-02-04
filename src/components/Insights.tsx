import { useEffect, useRef, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';
import BlogDetail from './BlogDetail';

const blogPosts = [
  {
    id: 1,
    date: '02 Feb 2026',
    title: 'The Road to Cultural Influence',
    excerpt: 'For most of 2023 and 2024, Twasiima Bigirwa, the international development expert turned poet and fiction writer was in a fury of activity involving endless hours of writing-this-and-editing-that.',
    image: '/images/The road to cultural influence.png',
    category: 'Narratives',
    readTime: '15 min read',
  },
  {
    id: 2,
    date: '02 Feb 2026',
    title: 'A Museum, a Lodge and Other Short Stories',
    excerpt: 'In 2019, our investment arm, Dawn Elements Ventures, acquired four properties strategically overlooking the shores of Lake Victoria. Africa’s largest freshwater lake. On paper, our goal is to build a chain of eco-lodges. ',
    image: '/images/A museaum, a lodge and short stories.jpg',
    category: 'Social Investment',
    readTime: '12 min read',
  },
  {
    id: 3,
    date: '02 Feb 2026',
    title: 'Building a New Oven',
    excerpt: 'The dominant external narrative on African investment is riddled with contradictions, fixated on potential yet blind to lived economic reality. There must be a way to not simply ask for a larger slice of the pie but to instead build new ovens and new systems.',
    image: '/images/b1.png',
    category: 'Investment',
    readTime: '14 min read',
  },
];

export default function Insights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedBlog, setSelectedBlog] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {selectedBlog && (
        <BlogDetail blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
      
      <section
        id="insights"
        ref={sectionRef}
        className="relative py-24 lg:py-32 bg-white overflow-hidden"
      >
        {/* Minimal background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-dawn-cream/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimate animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Brush stroke decoration */}
            <svg
              className="w-32 h-16 mx-auto mb-6"
              viewBox="0 0 200 100"
              fill="none"
            >
              <path
                d="M20 60 Q70 30, 100 50 T180 40"
                stroke="#F5D78E"
                strokeWidth="24"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="70" cy="42" r="4" fill="white" />
              <circle cx="120" cy="48" r="3" fill="white" />
              <circle cx="160" cy="42" r="5" fill="white" />
            </svg>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark mb-6">
              Insights & Perspectives
            </h2>
            <p className="text-lg text-dawn-gray">
              What we are thinking and feeling
            </p>
          </div>
        </ScrollAnimate>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollAnimate key={post.id} animation="fade-up" delay={index * 100}>
              <article 
                onClick={() => setSelectedBlog(post)}
                className="group cursor-pointer h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-dawn-orange text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="font-bold text-xl text-dawn-dark leading-tight mb-3 group-hover:text-dawn-orange transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-dawn-gray leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <a
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBlog(post);
                    }}
                    className="w-fit inline-flex items-center gap-2 pl-4 pr-0.5 py-0.5 bg-[#2D3B2D] text-white text-xs font-medium rounded-full hover:bg-[#3D4B3D] transition-colors duration-300 group/link"
                  >
                    <span>Read Full Article</span>
                    <span className="w-7 h-7 bg-dawn-orange rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            </ScrollAnimate>
          ))}
        </div>

        {/* View all link */}
        <ScrollAnimate animation="fade-up" delay={500}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-dawn-dark text-dawn-dark text-base font-semibold rounded-full hover:bg-dawn-dark hover:text-white transition-all duration-300"
            >
              View All Insights
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
    </>
  );
}
