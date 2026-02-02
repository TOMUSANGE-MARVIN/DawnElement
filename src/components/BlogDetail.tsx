import { useEffect } from 'react';

interface BlogDetailProps {
  blog: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
  };
  onClose: () => void;
}

export default function BlogDetail({ blog, onClose }: BlogDetailProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getFullContent = (id: number) => {
    const contents: { [key: number]: string } = {
      1: `The dominant external narrative on African investment is riddled with contradictions. That narrative is simultaneously fixated on the continent's "potential" yet blind to its lived economic reality. While African economies are framed as "burgeoning markets" or the "last frontiers," the actual mechanisms, mindsets, and material conditions for creating value remain deeply misunderstood.

This failure to understand African economies is perpetuated because foreign investment decisions are filtered through layers of abstract risk models, compliance frameworks, and inherited narratives that undermine local complexity. The exaggerated treatment of political risk, even if it's an isolated incident in one country is portrayed as a continental warning, distorting capital allocation through models devoid of on-the-ground data.

Crucially, what global finance labels a "Politically Exposed Person" is often, in context, a vital "Political Fixer." Someone who understands how power, regulation, and informal governance actually function. To outsiders these figures are red flags, to insiders they are how the system works, not how it fails.

This distorted view is further reinforced by a pervasive systemic bias. Even analysts of African descent within global institutions remain constrained by dominant narratives. Their training teaches them to identify deviations from Western norms rather than to decode emergent systems or interpret local logic.

The African investment landscape requires analysts and fund managers willing to creatively structure transactions within existing constraints, rather than endlessly cataloguing how these markets differ from London or New York. What is often labeled a scarcity of easy money is, in fact, a powerful disciplining force for African investors.

This resilience is possible because local investors operate with a different way of seeing the markets. Instead of relying on distant proxies like credit ratings or headline GDP, they deploy contextual intelligence. Including an intimate understanding of informal supply chains, seasonal income cycles, community trust networks, and real purchasing power.

As economic thinker Andrew Rugasira observes, the most significant barrier is often not capital but psychology, and the ability for African investors to see themselves as people helping to reimagine the capitalist systems we all live in. There must be a way to not simply ask for a larger slice of the pie but to instead build new ovens and new systems. The kind of systems that center people over markets.`,
      2: `What global finance labels a "Politically Exposed Person" (PEP) is often, in the African context, a vital "Political Fixer" who understands how power, regulation, and informal governance actually function. This fundamental misunderstanding reflects a broader failure to comprehend how African economies operate.

To outsiders, these figures are red flags - indicators of corruption risk and regulatory concerns. But to insiders, they represent how the system works, not how it fails. They are the connective tissue between formal structures and informal realities, between policy and practice, between what regulations say on paper and how things actually get done.

This disconnect matters because it shapes investment decisions. When Western compliance frameworks encounter these relationships, they trigger alarms. Due diligence processes flag them as unacceptable risks. But this binary thinking misses the nuanced reality of how governance functions in contexts where formal and informal systems overlap.

The challenge isn't to romanticize or excuse problematic practices. Rather, it's to develop more sophisticated analytical frameworks that can distinguish between extractive corruption and the practical navigation of complex institutional landscapes. Understanding this difference is crucial for anyone serious about African investment.`,
      3: `Local investors deploy contextual intelligence - an intimate understanding of informal supply chains, seasonal income cycles, community trust networks, and real purchasing power. What outsiders may dismiss as reckless is often informed de-risking based on lived knowledge. In nascent markets, this intelligence and insight is the ultimate competitive advantage.

Unlike foreign investors who rely on distant proxies like credit ratings or headline GDP figures, local investors read the market through lived experience. They know which informal networks can be trusted, which seasonal patterns affect cash flow, and how purchasing power actually manifests in different communities.

This contextual intelligence operates at multiple levels. It includes understanding how informal credit systems work, knowing which community leaders influence economic decisions, recognizing the real drivers of local demand, and anticipating regulatory changes before they become official.

Big ideas count more than big budgets in these environments. The ability to creatively structure deals, to understand social dynamics, and to build trust networks often matters more than access to large amounts of capital. This is why well-funded foreign entrants often struggle while undercapitalized local entrepreneurs thrive.`,
      4: `As Andrew Rugasira observes, the most significant barrier is often not capital but psychology - the ability for African investors to see themselves as people helping to reimagine the capitalist systems we all live in. There must be a way to not simply ask for a larger slice of the pie but to instead build new ovens and new systems. The kind of systems that center people over markets.

This psychological shift requires African investors to move beyond seeing themselves as junior partners in a global system designed elsewhere. Instead, they must recognize their role as architects of alternative economic models that could reshape capitalism itself.

The challenge is profound. Operating under dual pressure, African investors must build viable enterprises while simultaneously contesting a dominant ideology that treats local context as a liability. There is no contradiction in critiquing capitalism while participating in it - in fact, the critique emerges precisely because we have been forced to participate in it.

Too often, African enterprise is still evaluated by its proximity to foreign approval. Yet viable alternatives already exist within the continent itself. The question is whether investors have the imagination to see beyond inherited frameworks and the courage to build something genuinely new.`,
      5: `Cooperatives, SACCOs, mutual investment funds, and other collective vehicles are not primitive substitutes for "real" finance. They are sophisticated mechanisms for risk-sharing and capital mobilization, rooted in social trust and patient capital. Their marginalization is both a technical and imaginative failure.

These collective structures represent centuries of accumulated wisdom about how communities can pool resources, share risk, and build wealth together. They operate on principles of mutual aid and long-term thinking that differ fundamentally from extractive capitalism, yet they are systematically undervalued by mainstream finance.

SACCOs (Savings and Credit Cooperative Organizations) have mobilized billions in domestic savings across Africa, providing credit to members at reasonable rates while building collective wealth. They operate with default rates that would make many commercial banks envious, yet they struggle to access the formal financial system.

The challenge is to recognize these structures not as alternatives to "proper" finance, but as evolved responses to specific contexts - responses that often prove more resilient and equitable than imported models. For those who hold capital and intuitively feel there is something wrong with the current dominant capitalist system, there is an open invitation to deploy capital not in spite of these emerging systems, but in ways that help build them.`,
      6: `The ability to build a profitable business despite structural friction is not evidence of a risky market. It is evidence of an exceptional one. The future of investment, both in Africa and in an increasingly fragmented global economy, will not be led by those who see from the outside in. It will be led by those who have learned, out of necessity, to see and think from the inside out.

This inside-out perspective represents a fundamental shift in how we understand markets and value creation. Rather than starting with abstract models and trying to fit African realities into them, it begins with African realities and builds frameworks that reflect actual conditions.

Foreign investors often view African markets through a lens of deficiency - what's missing, what doesn't work, what needs to be "fixed" to match Western standards. But local investors see possibility - creative workarounds, emerging innovations, and opportunities invisible to outsiders.

The future will not be built solely by exceptional founders pitching to distant markets, but by ecosystems that recognize collective financial structures as engines of scale. To participate requires outsiders to abandon inherited lenses and recognize a fundamental truth: the resilience demonstrated by African enterprises isn't a warning sign, it's a competitive advantage.

For investors willing to learn, Africa offers not just opportunities but lessons about how capitalism itself might evolve in an era of increasing global fragmentation and instability. The question is whether global capital can develop the humility and imagination to learn from contexts it has historically dismissed.`,
    };
    
    return contents[id] || blog.excerpt;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-dawn-dark text-white rounded-full flex items-center justify-center hover:bg-dawn-orange transition-colors duration-300"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] overflow-hidden rounded-t-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-dawn-orange text-white text-sm font-bold rounded-full shadow-lg">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-dawn-gray mb-6">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-dawn-dark leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-dawn-gray leading-relaxed mb-8 pb-8 border-b border-gray-200">
              {blog.excerpt}
            </p>

            {/* Full Content */}
            <div className="prose prose-lg max-w-none">
              {getFullContent(blog.id).split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-dawn-gray leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share/Actions */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-dawn-gray">Share:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-dawn-cream hover:bg-dawn-orange hover:text-white text-dawn-gray rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-dawn-cream hover:bg-dawn-orange hover:text-white text-dawn-gray rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-dawn-dark text-white font-semibold rounded-full hover:bg-dawn-orange transition-colors duration-300"
              >
                Back to Insights
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
