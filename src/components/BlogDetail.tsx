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
      1: `For most of 2023 and 2024, Twasiima Bigirwa, the international development expert turned poet and fiction writer was in a fury of activity involving endless hours of writing-this-and-editing-that. She had previously self-published (read self-funded) a collection of three poetry books, and was stepping into the genre of short story fiction with her 4th book – The Weavings of Life.

As the tireless writer did her work, in the same moment, the team at Dawn Elements were reflecting on how to get done a series of tasks we had carried in our hearts. Particularly how to support artists trying to put their work into the world, especially artists that had something to say.

In the realm of the arts, we had worked with other funders to donate public art to the Centre of Excellence in Notions of Identity in Africa. We love the Center because its work across the continent (particularly Uganda, Kenya, South Africa, Ethiopia and Ghana) focuses on how Africans see themselves and what they should do about it. Aware that some might see the Center's work as "too academic," we donated the visual work of prominent artists to use as public art and visual messages of what the Center sought to say to the world.

On a previous investment project by Dawn Elements Ventures to build a boutique lodge at the shores of Lake Victoria, we had also funded a university project to support artists interested in creating a visual representation of history, African deities and mythology related to the lake. With that project, we had asked art students to help us visualize the personalities and events that had until then, only existed in the imagination of many.

When Twasiima published her 3 books on poetry, people at Dawn Elements lightly supported its promotion and first book event, in a manner that was minimal, peripheral and coming at the end when all the heavy lifting was done. Shortly before the 4th book came out, Twasiima invited us to take a more active role in promoting it and thinking with her on how to thoughtfully unveil the Weavings of Life into the global literary world. We are writing this reflection piece at the time when Twasiima has just launched the 4th book, and here is what we are thinking and feeling about the process.

**Building the boat as you sail it**

In the Western world, book publishing rides on an existing infrastructure. A writer will have an agent, who would approach a publisher on her behalf, perhaps with a few written chapters to pitch the publishers. If the publisher likes the few chapters, they will advance the writer money to get work started. When the book is done, there will be printing companies, a distribution network to get the book into bookstores and marketing experts to have everyone from Oprah to Trevor Noah talking about the book. In Africa, particularly East Africa, this system and infrastructure doesn't exist. As such, many authors are forced to self-publish and as a result, self-promote their work. Very little has been written about author-self-funding-processes, and the infrastructure self-published authors across Africa must create for themselves. Someday self-published authors might write the many hats they have worn as writer, editor, printing supervisor, distributor.

With the Weavings of Life, one of the things we set out to do was to create this infrastructure and to document our journey. To build the boat as we sail it so that those who will come after us might find the makings of boat they could also use. It also our hope that those who came before us will someday write their reflections so that future African book writers might better understand the path they are chatting.

**The road to cultural and pop influence**

Something about reflecting on Africa's biggest authors immediately reveals (whether by design or not), many African authors on the Global Stage have their personal brands bigger than their art. For example, many people will immediately know who Chimamanda, Wole Soyinka and many others are. For most of us, we will know more about these writers than we will know about their work. This is not just the case for African writers. Similarly, we figure there are more people that know about idea of Shakespeare than they are people that have read any of Shakespeare's work. The same is true for Brazil's Paulo Freire, and India's Arundhati Roy. It's an odd thing to reflect on, and we opted to approach it with a radical honesty of what it was – as something that was neither good nor bad, but as something that simply was.

So, we set out to answer a simple yet complex question, how we take a Ugandan writer and to turn her into a globally recognized cultural influence. When we reflect on why this is important, we come back to the startling absence of Ugandan thought, culture and influence within our mainstream workings. What does it continue to say to generations of young Ugandans, young East Africans that they are unable to see their dreams and aspirations are unable to be reflected to them? It is in our ability to see what could be possible that we too are able to dream new things for ourselves. This of course is generational work that cannot be course corrected over the course of a month or even a year. Nonetheless, we must start somewhere. We set out to go a series of book events, from Kampala to Nairobi to Kigali, to Lagos to Johannesburg to London. This started at the author's homebase in in Kampala, Uganda with a partnership with Next Media (Uganda's biggest Media Group). Next Media had previously used their infrastructure of TV, radio and internet platforms to promote local musicians, another indication of the lagging of Uganda's literary investment. The Weavings of Life is the first time a national broadcaster has partnered with a writer with the intention of promoting Ugandan literary works.

In thinking about our promotional strategy and how to invest in it, we also found inspiration in the field of social network analysis and theory. For example, if you see a singing cat go viral on the internet, it's not because the video of a singing act is exceptionally interesting than all the videos on the internet. That video has gone viral because of the channels it travels through before it gets to you. That is why, if a person with 2 followers posts the video of the singing cat, it will barely get any engagement. However, if a person with a million followers posts the same video of the same singing cat, then it goes viral. All this simply means that the medium or the channel or the messenger, matters more than the message. So, we turned our focus on the messenger as the primary channel for the message.

Since then, we have been reflecting on building the cultural capital, or as the kids say these days, "building the influence" of the artist or working on public facing art projects, such as public content, and public murals type things. However, we dream of a different type of influence, not the same kind one gets from social media views. We see building cultural influence of African individuals and institutions, particularly those who share our politics and way of thinking as a long-term strategy to influencing how African see themselves and their place in the world, among other things.

Hindsight is clear sight but at the time we had no idea how it was all going to go. In many ways, we are still crossing the river as we feel the steppingstones. We see ourselves as creating a new system to influence narratives, and perhaps in some ways, creating a new kind of religion. Except that the "moral purpose of religion is to conserve established values and not to create new ones," whereas we seek to create new values and systems on how Africans see themselves and their place in the world.

**What is next**

So, what comes next? The work to promote The Weavings of Life book is just getting started. At the time of writing this reflection, we are planning and resourcing Twasiima's Nairobi leg of the book tour. We plan to move to other parts of Africa and a book tour in Europe and the United Arab Emirates. All this eventually moving to publishing The Weavings of Life in other languages. The natural progression of this work to influence narratives will take us into film and other institutions influence narratives. (Another reflection piece for another day.)

For now, we are keen to do this again with other independent book authors and publishers. We seek to connect with other restless souls who find this remotely interesting or useful in chatting their own path. It's possible there are multiple paths that lead us to the same ideal destination or even multiple ideal destinations – whatever that looks like. We are unconstrained, and that is a good thing.`,
      2: `In 2019, our investment arm, Dawn Elements Ventures, acquired four properties strategically overlooking the shores of Lake Victoria. Africa's largest freshwater lake. On paper, our goal is to build a chain of eco-lodges. This is the language understood by tax systems, auditors, and investors. But our true ambition is more complex than that.

We are building spaces for the intellectual and cultural expression of thinkers and creators. The eco-lodge is merely the vessel, and it will show that lodges (a sustainable business model) can be living repositories of history rather than just commercial ventures.

Our first project, Marifa Village, was designed to bring into focus the obscured historical narratives of this region. History is often a record of the visible, the sanctioned, the officially remembered. No one saved for us a verified image of Jesus's likeness, yet artists have "solved" that mystery for centuries. When designing Marifa Village, we applied the same creative reclamation to the shores of Lake Victoria, with historians and artists as our co-conspirators.

What, for instance, would a progressive visual representation of Nalubale, the mother of spirits and lake goddess, look like? We believe artists can tell this story, bringing Nalubale to life in a way that narrates the deep history of the lake itself. This reimagined art will then find a home at the lodge, where visitors can engage with it.

**Reclaiming Erased Narratives**

Consider the story of the British explorer John Hanning Speke. While he is famed for being the first European to identify the source of the River Nile at Lake Victoria, his journal tells us of a "troubled romance" with a servant girl at the court of Buganda's King. A girl named Meri, she also might have been a spy for the Queen-Mother. Accounts of her were redacted from his official publications. Victorian England could not contend with its great explorer loving an African woman. No picture of her survives. We have commissioned artists, working with historians, to bring her image to life for our spaces. Challenging the silence of existence, and the ways in which sexual relations are erased if they do not fit what society expects.

The mental image of the colonial-era white explorer is often an "Indiana-Jones type" figure, a lone ranger. The truth is more complex and more African. These men traveled with armies of over 150 individuals, soldiers, chefs, translators, and medical attendants. All under the leadership of an African guide-explorer. One such guide was an African explorer named Bombay, who led expeditions from the East African coast to the shores of Lake Victoria. Henry Morton Stanley relied on him during his famous search for Dr. Livingstone, yet while Stanley's account is part of the historical record, Bombay remains faceless. We believe an artist can finally give him a portrait.

**Maritime Histories and Cultural Transformations**

The lake itself is a living archive of movement and identity. Along its shores in Mukono, a predominantly Buganda region, one finds families with Luo names like Okello who have lived there for generations. Pointing to ancient voyages from present day Kisumu, Kenya to Mukono, Uganda. What vessels carried them across these waters? This question of maritime technology led us to the powerful navy of the Buganda Kingdom, which flourished under the reign of Kabaka Mwanga II. A skilled sailor and a figure whose complex legacy includes contested narratives around his sexuality. By collaborating with historians and artists, we seek to visually reconstruct these lost maritime histories from the boats of migrating or trading people to the formidable vessels of Buganda's royal fleet.

The art at Marifa Village will also explore how cultural symbols transform across time. For example, in pre-colonial Buganda, men of high status wore distinctive anklets that clicked as they walked, announcing their presence. A clear marker of masculine prestige. Today, such adornments are often mischaracterized as feminine by proponents of a rigid, modern ideal of "African cultural values." This contrast underscores a dialogue between past and present that art can illuminate. Similarly, the Luzira head, sculpture from 900 AD, but unearthed at Luzira (a lake town) in 1929, was discovered to feature dreadlocks. A powerful, silent testament to the deep and ancient African roots of this hairstyle.

**Building From Stories**

Through these rediscoveries and more, the art at Marifa Village will help bring obscured histories into focus. From the sexual liberties of island communities to folklore that tells of people moving from island to island on the backs of crocodiles.

In this endeavor, the artificial divide between building a viable business and supporting the arts dissolves. Each year, hundreds of visitors will walk through our lodges, immersing themselves in the space and reflecting on a "time before time." This makes the lodge a gallery of reimagined memories, and a platform for stories that have been erased or never sanctioned by "power." We are building on the land, and we are also building from its stories.`,
      3: `The dominant external narrative on African investment is riddled with contradictions. That narrative is simultaneously fixated on the continent's "potential" yet blind to its lived economic reality. While African economies are framed as "burgeoning markets" or the "last frontiers," the actual mechanisms, mindsets, and material conditions for creating value are still deeply misunderstood.

This failure to understand African economies is perpetuated because foreign investment decisions are filtered through layers of abstract risk models, compliance frameworks, and inherited narratives that undermine local complexity. The exaggerated treatment of political risk, even if it's an isolated incident in one country is sometimes portrayed as a continental warning. The effect of this is the distortion of capital allocations through models that ignore on-the-ground data. Crucially, what global finance labels a "Politically Exposed Person" is often, in context, a vital "Political Fixer." Someone who understands how power, regulation, and informal governance actually function. When Global North companies place semi-political actors on boards, they are seen as high status individuals that bring credibility. When Southern companies do the same, these individuals are termed as "politically exposed persons." To outsiders these figures are red flags, to insiders they are how the system works, not how it fails.

This distorted view is further reinforced by a pervasive systemic bias. Even analysts of African descent within global institutions remain constrained by dominant narratives. Their training teaches them to identify deviations from Western norms rather than to decode emergent systems or interpret local logic. All this produces a perverse ecosystem where institutions claim to support African entrepreneurs yet over-coach and underfund them.

**The Disciplining Force of Constraint**

The African investment landscape requires analysts and fund managers willing to creatively structure transactions within existing constraints, rather than endlessly cataloguing how these markets differ from London or New York. What is often labeled a scarcity of easy money is, in fact, a powerful disciplining force for African investors.

This resilience is possible because local investors operate with a different way of seeing the markets. Instead of relying on distant proxies like credit ratings or headline GDP, they deploy contextual intelligence. Including an intimate understanding of informal supply chains, seasonal income cycles, community trust networks, and real purchasing power. What outsiders may dismiss as reckless is often informed de-risking based on lived knowledge. In nascent markets, this intelligence and insight is the ultimate competitive advantage. Big ideas count more than big budgets.

**The Psychology Barrier and Building New Ovens**

As the African economic thinker Andrew Rugasira observes, the most significant barrier for African entrepreneurs and investors is often not capital but psychology. Basically, the ability for African investors to see themselves as people helping to reimagine the capitalist systems we all live in. There must be a way to not simply ask for a larger slice of the pie in global finance but to instead build new ovens and new systems. The kind of systems that center people over markets.

Yet this transformative project unfolds within a profound structural constraint, rooted in what Antonio Gramsci described as hegemony - the dominance of ideas that present themselves as natural or inevitable. Across much of Africa, economic bureaucracies are staffed by technocrats trained in ideas that privilege international capital while constraining local capital formation.

This hegemony values Foreign Direct Investment as the primary engine of growth, despite historical evidence to the contrary. As Thomas Piketty's work (Capital in the Twenty-First Century) illustrates, none of the transformative Asian economies, from Japan to China, relied on large foreign investment inflows to industrialize. They financed their own investments through domestic savings, state coordination, and long-term planning.

**The Dual Pressure and Alternative Systems**

Operating under this dual pressure, African investors must therefore build viable enterprises while simultaneously contesting a dominant ideology that treats local context as a liability. There is no contradiction in critiquing dominant western capitalism while participating in it, in fact the critique emerges precisely because we have been forced to participate in it.

Too often, the African enterprise is still evaluated by its proximity to foreign approval. Yet viable alternatives already exist within the continent itself. Cooperatives, SACCOs, mutual investment funds, and other collective vehicles are not primitive substitutes for "real" finance. They are sophisticated mechanisms for risk-sharing and capital mobilization, rooted in social trust and patient capital. However, the ideological preferences of global finance have systematically marginalized and undermined these alternatives.

Their marginalization is both a technical and imaginative failure. In the words of Fredric Jameson, it is easier to imagine the end of the world than the end of dominant capitalism. This imaginative foreclosure is hegemony's most powerful tool.

**From the Inside Out**

Therefore, for African investors, the task is both economic but imaginative. New systems must emerge from praxis, through collective experimentation, shared risk, and sustained engagement with lived realities. It is in cooperatives and community-based capital structures that this collective intelligence becomes visible, where theory is continuously shaped by practice.

For those that hold capital and yet intuitively feel there is something wrong with the current dominant capitalist system, there is an open invitation to deploy capital not in spite of these emerging systems, but in ways that help build them.

To participate requires outsiders to abandon inherited lenses and recognize a fundamental truth. The ability to build a profitable business despite structural friction is not evidence of a risky market. It is evidence of an exceptional one. The future of investment, both in Africa and in an increasingly fragmented global economy will not be led by those who see from the outside in. It will be led by those who have learned, out of necessity, to see and think from the inside out.`,
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
