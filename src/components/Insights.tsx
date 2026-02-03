import { useEffect, useRef, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';
import BlogDetail from './BlogDetail';

const blogPosts = [
  {
    id: 1,
    date: '02 Feb 2026',
    title: 'Building a New Oven: Hegemony, Capital and the African Investor\'s Dilemma',
    excerpt: 'The dominant external narrative on African investment is riddled with contradictions, fixated on potential yet blind to lived economic reality.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop',
    category: 'Investment',
    readTime: '12 min read',
  },
  {
    id: 2,
    date: '02 Feb 2026',
    title: 'Beyond Risk Models: Why Political Fixers Matter More Than PEPs',
    excerpt: 'What global finance labels a "Politically Exposed Person" is often, in context, a vital "Political Fixer" who understands how power and regulation actually function.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop',
    category: 'Analysis',
    readTime: '8 min read',
  },
  {
    id: 3,
    date: '02 Feb 2026',
    title: 'Contextual Intelligence: The Ultimate Competitive Advantage',
    excerpt: 'Local investors deploy intimate understanding of informal supply chains, community trust networks, and real purchasing power. In nascent markets, this intelligence is everything.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    category: 'Strategy',
    readTime: '7 min read',
  },
  {
    id: 4,
    date: '02 Feb 2026',
    title: 'The Psychology Barrier: Reimagining Capitalist Systems',
    excerpt: 'The most significant barrier is often not capital but psychology. African investors must see themselves as people helping to reimagine the systems we all live in.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    category: 'Thought Leadership',
    readTime: '6 min read',
  },
  {
    id: 5,
    date: '02 Feb 2026',
    title: 'Cooperatives as Capital Engines: Beyond Primitive Finance',
    excerpt: 'SACCOs, mutual investment funds, and collective vehicles are not substitutes for "real" finance. They are sophisticated mechanisms rooted in social trust and patient capital.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    category: 'Alternative Finance',
    readTime: '9 min read',
  },
  {
    id: 6,
    date: '02 Feb 2026',
    title: 'Seeing from the Inside Out: The Future of Investment',
    excerpt: 'The ability to build profitable businesses despite structural friction is not evidence of a risky market. It is evidence of an exceptional one.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
    category: 'Investment',
    readTime: '10 min read',
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
                  <div className="flex items-center gap-3 text-sm text-dawn-gray mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
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
