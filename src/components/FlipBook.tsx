import { useEffect, useRef, useState } from 'react';
import ScrollAnimate from './ScrollAnimate';

interface TitlePage {
  type: 'title';
  title: string;
  subtitle: string;
  bgColor: string;
}

interface TextPage {
  type: 'text';
  content: string[];
  bgColor: string;
  pageNumber: string;
  title?: string;
  subtitle?: string;
}

interface EndPage {
  type: 'end';
  image: string;
  title: string;
  content: string;
  link: { text: string; href: string };
  bgColor: string;
}

interface Page {
  id: number;
  front: TitlePage | TextPage;
  back: TextPage | EndPage;
}

const pages: Page[] = [
  {
    id: 1,
    front: {
      type: 'title' as const,
      title: 'Building a New Oven',
      subtitle: 'Hegemony, Capital and the African Investor\'s Dilemma',
      bgColor: '#e76f51'
    },
    back: {
      type: 'text' as const,
      content: [
        'The dominant external narrative on African investment is riddled with contradictions. That narrative is simultaneously fixated on the continent\'s "potential" yet blind to its lived economic reality.'
      ],
      bgColor: '#2a9d8f',
      pageNumber: '1'
    }
  },
  {
    id: 2,
    front: {
      type: 'text' as const,
      content: [
        'While African economies are framed as "burgeoning markets" or the "last frontiers," the actual mechanisms, mindsets, and material conditions for creating value remain deeply misunderstood.',
        'This failure is perpetuated because foreign investment decisions are filtered through layers of abstract risk models and inherited narratives that undermine local complexity.'
      ],
      bgColor: '#2a9d8f',
      pageNumber: '2'
    },
    back: {
      type: 'text' as const,
      content: [
        'The exaggerated treatment of political risk, even if it\'s an isolated incident in one country, is portrayed as a continental warning, distorting capital allocation through models devoid of on-the-ground data.',
        'What global finance labels a "Politically Exposed Person" is often, in context, a vital "Political Fixer" - someone who understands how power and informal governance actually function.'
      ],
      bgColor: '#e9c46a',
      pageNumber: '3'
    }
  },
  {
    id: 3,
    front: {
      type: 'text' as const,
      content: [
        'This distorted view is further reinforced by a pervasive systemic bias. Even analysts of African descent within global institutions remain constrained by dominant narratives.',
        'Their training teaches them to identify deviations from Western norms rather than to decode emergent systems or interpret local logic.'
      ],
      bgColor: '#e9c46a',
      pageNumber: '4'
    },
    back: {
      type: 'text' as const,
      content: [
        'All this produces a perverse ecosystem where institutions claim to support African entrepreneurs yet over-coach and underfund them.',
        'The African investment landscape requires analysts willing to creatively structure transactions within existing constraints, rather than cataloguing how these markets differ from London or New York.'
      ],
      bgColor: '#f4a261',
      pageNumber: '5'
    }
  },
  {
    id: 4,
    front: {
      type: 'text' as const,
      content: [
        'What is often labeled a scarcity of easy money is, in fact, a powerful disciplining force for African investors.',
        'This resilience is possible because local investors operate with a different way of seeing the markets, deploying contextual intelligence rather than distant proxies like credit ratings or headline GDP.'
      ],
      bgColor: '#f4a261',
      pageNumber: '6'
    },
    back: {
      type: 'text' as const,
      content: [
        'They understand informal supply chains, seasonal income cycles, community trust networks, and real purchasing power.',
        'What outsiders may dismiss as reckless is often informed de-risking based on lived knowledge. In nascent markets, this intelligence is the ultimate competitive advantage.'
      ],
      bgColor: '#2a9d8f',
      pageNumber: '7'
    }
  },
  {
    id: 5,
    front: {
      type: 'text' as const,
      content: [
        'As economic thinker Andrew Rugasira observes, the most significant barrier is often not capital but psychology.',
        'African investors must see themselves as people helping to reimagine the capitalist systems we all live in. Not simply asking for a larger slice of the pie, but building new ovens and new systems that center people over markets.'
      ],
      bgColor: '#2a9d8f',
      pageNumber: '8'
    },
    back: {
      type: 'text' as const,
      content: [
        'Yet this transformative project unfolds within profound structural constraints. As Gramsci described, hegemony is the dominance of ideas that present themselves as natural or inevitable.',
        'Economic bureaucracies are staffed by technocrats trained in ideas that privilege international capital while constraining local capital formation.'
      ],
      bgColor: '#e9c46a',
      pageNumber: '9'
    }
  },
  {
    id: 6,
    front: {
      type: 'text' as const,
      content: [
        'This hegemony values Foreign Direct Investment as the primary engine of growth, despite historical evidence to the contrary.',
        'As Thomas Piketty\'s work illustrates, none of the transformative Asian economies relied on large foreign investment inflows to industrialize. They financed their own investments through domestic savings, state coordination, and long-term planning.'
      ],
      bgColor: '#e9c46a',
      pageNumber: '10'
    },
    back: {
      type: 'text' as const,
      content: [
        'African investors must therefore build viable enterprises while simultaneously contesting a dominant ideology that treats local context as a liability.',
        'There is no contradiction in critiquing capitalism while participating in it. The critique emerges precisely because we have been forced to participate in it.'
      ],
      bgColor: '#f4a261',
      pageNumber: '11'
    }
  },
  {
    id: 7,
    front: {
      type: 'text' as const,
      content: [
        'Too often, African enterprise is evaluated by its proximity to foreign approval. Yet viable alternatives already exist within the continent itself.',
        'Cooperatives, SACCOs, mutual investment funds are sophisticated mechanisms for risk-sharing and capital mobilization, rooted in social trust and patient capital.'
      ],
      bgColor: '#f4a261',
      pageNumber: '12'
    },
    back: {
      type: 'text' as const,
      content: [
        'Their marginalization is both a technical and imaginative failure. As has often been noted, it is easier to imagine the end of the world than the end of dominant capitalism.',
        'For African investors, the task is not only economic but imaginative. New systems must emerge from praxis, through collective experimentation and sustained engagement with lived realities.'
      ],
      bgColor: '#e76f51',
      pageNumber: '13'
    }
  },
  {
    id: 8,
    front: {
      type: 'text' as const,
      content: [
        'For those that hold capital and yet intuitively feel there is something wrong with the current dominant capitalist system, there is an open invitation.',
        'Deploy capital not in spite of these emerging systems, but in ways that help build them. The future will be built by ecosystems that recognize collective financial structures as engines of scale.'
      ],
      bgColor: '#e76f51',
      pageNumber: '14'
    },
    back: {
      type: 'text' as const,
      content: [
        'To participate requires outsiders to abandon inherited lenses and recognize a fundamental truth: The ability to build a profitable business despite structural friction is not evidence of a risky market. It is evidence of an exceptional one.',
        'The future will be led by those who have learned, out of necessity, to see and think from the inside out.'
      ],
      bgColor: '#2a9d8f',
      pageNumber: '15'
    }
  },
  {
    id: 9,
    front: {
      type: 'text' as const,
      content: [
        'Investment, both in Africa and in an increasingly fragmented global economy, will not be led by those who see from the outside in.',
        'It will be led by those who understand context, who value lived knowledge, and who recognize that big ideas count more than big budgets.',
        'The oven is being built. Join us.'
      ],
      bgColor: '#2a9d8f',
      pageNumber: '16'
    },
    back: {
      type: 'end' as const,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=260&fit=crop',
      title: 'Thank You!',
      content: 'Thank you for reading.',
      link: { text: 'Learn more about our impact', href: '#impact' },
      bgColor: '#e76f51'
    }
  }
];

export default function FlipBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<HTMLDivElement>(null);

  const turnPage = (delta: number) => {
    const newPage = currentPage + delta;
    if (newPage >= 0 && newPage <= pages.length) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const leaves = bookRef.current?.querySelectorAll('.leaf');
    leaves?.forEach((leaf, index) => {
      const transform = getLeafTransform(index);
      (leaf as HTMLElement).style.transform = transform;
    });
  }, [currentPage]);

  const getLeafTransform = (index: number) => {
    const position = index - currentPage;
    // For flipped pages (left side, position < 0): most recently flipped should be on top (z = position, so -1 > -2 > -3)
    // For unflipped pages (right side, position >= 0): next page should be on top (z = -position, so 0 > -1 > -2)
    const zIndex = position < 0 ? position : -position;
    let transform = `translate3d(0,0,${zIndex}px)`;
    
    if (position < 0) {
      transform += ' rotate3d(0,1,0,-180deg)';
    }
    
    return transform;
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-dawn-cream overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-dawn-yellow/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimate animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dawn-dark mb-6">
              Flip Through Our Story
            </h2>
            <p className="text-lg text-dawn-gray">
              Explore the impact we're making together
            </p>
          </div>
        </ScrollAnimate>

        {/* FlipBook */}
        <ScrollAnimate animation="fade-up" delay={200}>
          <div className="flex flex-col items-center gap-8">
            <div 
              ref={bookRef}
              className="relative w-full max-w-[400px] h-[300px] md:max-w-[500px] md:h-[375px] mx-auto"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="leaf absolute h-full w-1/2 left-1/2 transition-transform duration-1000"
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'left center'
                  }}
                >
                  {/* Front page */}
                  <div
                    className="page front absolute w-full h-full top-0 rounded-r-2xl overflow-hidden shadow-inner"
                    style={{
                      backgroundColor: page.front.bgColor,
                      transform: 'rotate3d(0,1,0,0deg) translate3d(0,0,0.1px)',
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      boxShadow: 'inset 5px 0px 5px -5px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="p-6 md:p-8 h-full flex flex-col">
                      {page.front.type === 'title' && (
                        <div className="text-center text-white flex flex-col items-center justify-center h-full">
                          <h1 className="text-3xl md:text-4xl font-bold mb-4">{page.front.title}</h1>
                          <em className="text-lg md:text-xl">{page.front.subtitle}</em>
                        </div>
                      )}
                      {page.front.type === 'text' && (
                        <>
                          {page.front.pageNumber && (
                            <div className="page-number absolute bottom-4 right-4 text-sm text-gray-600">{page.front.pageNumber}</div>
                          )}
                          {page.front.title && (
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{page.front.title}</h2>
                          )}
                          {page.front.subtitle && (
                            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 italic">{page.front.subtitle}</h3>
                          )}
                          <div className="space-y-3 text-sm md:text-base text-gray-700">
                            {page.front.content.map((paragraph, i) => (
                              <p key={i}>{paragraph}</p>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Back page */}
                  <div
                    className="page back absolute w-full h-full top-0 rounded-l-2xl overflow-hidden shadow-inner"
                    style={{
                      backgroundColor: page.back.bgColor,
                      transform: 'rotate3d(0,1,0,180deg) translate3d(0,0,0.1px)',
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      boxShadow: 'inset -5px 0px 5px -5px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div className="p-6 md:p-8 h-full flex flex-col">
                      {page.back.type === 'text' && (
                        <>
                          {page.back.pageNumber && (
                            <div className="page-number absolute bottom-4 left-4 text-sm text-gray-600">{page.back.pageNumber}</div>
                          )}
                          {page.back.title && (
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{page.back.title}</h2>
                          )}
                          {page.back.subtitle && (
                            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 italic">{page.back.subtitle}</h3>
                          )}
                          <div className="space-y-3 text-sm md:text-base text-gray-700">
                            {page.back.content.map((paragraph, i) => (
                              <p key={i}>{paragraph}</p>
                            ))}
                          </div>
                        </>
                      )}
                      {page.back.type === 'end' && (
                        <div className="text-center text-white flex flex-col items-center justify-center h-full gap-4">
                          <img src={page.back.image} alt="" className="w-full rounded-lg mb-4" />
                          <h3 className="text-2xl md:text-3xl font-bold">{page.back.title}</h3>
                          <p>{page.back.content}</p>
                          <a
                            href={page.back.link.href}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dawn-dark rounded-full hover:bg-dawn-yellow transition-all duration-300 font-medium"
                          >
                            {page.back.link.text}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              <button
                onClick={() => turnPage(-1)}
                disabled={currentPage === 0}
                className="w-fit inline-flex items-center gap-2 pl-0.5 pr-4 py-0.5 sm:pl-1.5 sm:pr-6 sm:py-1.5 bg-[#2D3B2D] text-white text-xs sm:text-base font-medium rounded-full hover:bg-[#3D4B3D] transition-colors duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="w-7 h-7 sm:w-10 sm:h-10 bg-dawn-orange rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-0.5 rotate-180"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span>Previous</span>
              </button>
              <button
                onClick={() => turnPage(1)}
                disabled={currentPage === pages.length}
                className="w-fit inline-flex items-center gap-2 pl-4 pr-0.5 py-0.5 sm:pl-6 sm:pr-1.5 sm:py-1.5 bg-[#2D3B2D] text-white text-xs sm:text-base font-medium rounded-full hover:bg-[#3D4B3D] transition-colors duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <span className="w-7 h-7 sm:w-10 sm:h-10 bg-dawn-orange rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
