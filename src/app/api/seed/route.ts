import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://rnadw_user:rnadw.223@rnadw.pcbz0ym.mongodb.net/?appName=rnadw';

// Define schemas
const BlogPostSchema = new mongoose.Schema({
  title: String, slug: String, excerpt: String, content: String,
  author: String, authorRole: String, date: String, readTime: String,
  category: String, categoryColor: String, image: String,
  featured: Boolean, published: Boolean, sortOrder: Number,
}, { timestamps: true });

const GalleryImageSchema = new mongoose.Schema({
  src: String, title: String, category: String, categoryColor: String,
  description: String, published: Boolean,
}, { timestamps: true });

const VideoSchema = new mongoose.Schema({
  videoId: String, title: String, description: String, category: String,
  thumbnailUrl: String, published: Boolean,
}, { timestamps: true });

const ResourceSchema = new mongoose.Schema({
  title: String, slug: String, description: String, introduction: String,
  category: String, categoryColor: String, fileType: String, fileSize: String,
  icon: String, downloadUrl: String, externalUrl: String, date: String,
  hasVideo: Boolean, videoUrl: String, isPolicyBrief: Boolean,
  content: { type: mongoose.Schema.Types.Mixed },
  published: Boolean,
}, { timestamps: true });

const PartnerSchema = new mongoose.Schema({
  name: String, category: String, logo: String, website: String, published: Boolean,
}, { timestamps: true });

const TestimonialSchema = new mongoose.Schema({
  quote: String, author: String, role: String, image: String, published: Boolean,
}, { timestamps: true });

const TeamMemberSchema = new mongoose.Schema({
  name: String, role: String, description: String, image: String, published: Boolean,
}, { timestamps: true });

const ActivitySchema = new mongoose.Schema({
  title: String, slug: String, subtitle: String, description: String,
  content: String, icon: String, image: String, published: Boolean,
}, { timestamps: true });

// Full blog posts with complete content and embedded images
const blogPosts = [
  {
    title: 'Empowering Voices Long Silenced: Deaf Girls and Women Trained to Prevent and Report SGBV',
    slug: 'empowering-voices-long-silenced',
    excerpt: 'In Musanze District, deaf girls, single mothers, and girls with disabilities gathered to reclaim their right to safety and dignity through groundbreaking SGBV prevention training organized by RNADW, Afro Ark, and HSMD under the campaign "Your protection doesn\'t protect me."',
    content: `<p>In the quiet hills of Musanze District, a group of young deaf girls, single mothers, and girls living with various disabilities gathered—not just to learn, but to reclaim their right to safety, dignity, and a future free from fear.</p>

<p>For too long, these young women have faced heightened vulnerability: communication barriers that silence their cries for help, deep-seated stigma that dismisses their experiences, and a stark reality where sexual and gender-based violence (SGBV) strikes disproportionately hard. <strong>Research shows that women and girls with disabilities in Rwanda can be up to ten times more likely to experience violence</strong>, often suffering in isolation with limited access to justice or healing.</p>

<h2>A Powerful Training Session</h2>
<p>On January 18, 2023, a powerful training session changed that narrative for many. Organized by the <strong>Rwanda National Association of Deaf Women (RNADW "UMUCYO")</strong>, <strong>Afro Ark</strong>, and <strong>Hope for Single Mothers with Disabilities (HSMD)</strong>, this initiative equipped participants with essential knowledge on SGBV prevention, sexual and reproductive health, and pathways to seek medical care, legal support, and justice when violence occurs.</p>

<h2>"Your Protection Doesn't Protect Me"</h2>
<p>Held under the poignant campaign theme <strong>"Your protection doesn't protect me,"</strong> the training sought to shatter the illusion that general protections automatically shield the most marginalized. It focused on building knowledge, strengthening decision-making power, and fostering the confidence these young women need to protect themselves—especially in and out of school—against sexual violence that threatens their health, education, and dreams.</p>

<blockquote>"Deaf young girls, single mothers, and other girls with disabilities live under constant threat of sexual violence. This training is about more than information—it's about empowering them to make choices that safeguard their bodies, their futures, and their voices. When they learn to recognize danger, report abuse, and demand support, we begin to break cycles of silence and suffering that have lasted far too long."</blockquote>
<p><em>— Dativa Mukashema, Executive Director of RNADW "UMUCYO"</em></p>

<h2>Support from Women Gaining Ground</h2>
<p>This vital work was made possible through the support of <strong>Women Gaining Ground (WGG)</strong>, a Global South-led consortium led by CREA, with deep expertise in feminist leadership, movement-building, and advocacy for marginalized groups. WGG's five-year program (2021–2025) operates in Bangladesh, India, Kenya, Rwanda, and Uganda, amplifying the voices of those often left behind.</p>

<h2>Sobering Statistics from Local Authorities</h2>
<p>The urgency of this training was underscored by local authorities. <strong>Joseph Murenzi</strong>, District Chief Investigator at the Rwanda Investigation Bureau (RIB) in Musanze, shared sobering statistics from 2021–2022: among deaf victims, authorities recorded one case of child defilement, two rapes, and one assault with battery.</p>

<blockquote>"SGBV is not distant—it is here, and it devastates lives. For these young girls and women, the consequences ripple far: physical injuries, emotional trauma, unwanted pregnancies, disrupted education, and shattered futures. Child defilement remains one of the most heartbreaking cases we fight daily. We urge every girl to know that help exists and that reporting early can save lives."</blockquote>
<p><em>— Joseph Murenzi, District Chief Investigator, RIB Musanze</em></p>

<h2>Comprehensive Support Services</h2>
<p><strong>Kagiraneza Mujyambere</strong>, an investigator at the Isange One Stop Centre (IOSC) in Musanze, detailed the comprehensive services available: immediate medical care, psychological support, legal aid, trauma counseling, and pathways to justice. He warned against the dangers of illegal abortions, which pose life-threatening risks, and stressed the <strong>critical 72-hour window to preserve evidence after an assault</strong>—empowering survivors to act swiftly and decisively.</p>

<h2>From Victims to Advocates</h2>
<p>Through this training, participants left not as victims waiting for rescue, but as <strong>informed, resilient advocates for their own protection</strong>. They gained tools to recognize warning signs, assert boundaries, seek timely help, and support one another.</p>

<h2>A Beacon of Hope</h2>
<p>This initiative is more than an event—it is a beacon of hope. By centering the experiences of deaf girls and women with disabilities, RNADW "UMUCYO", Afro Ark, HSMD, and their partners are lighting the path toward a Rwanda where every girl can live without fear, where her voice is heard, and where protection truly reaches those who need it most.</p>

<p><strong>Together, we can ensure that "Your protection doesn't protect me" becomes a rallying cry for change—and a promise kept.</strong></p>`,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Jan 18, 2023',
    readTime: '10 min read',
    category: 'SGBV/VAWG',
    categoryColor: '#EC4899',
    image: '/images/b1.png',
    featured: true,
    published: true,
    sortOrder: 1,
  },
  {
    title: '"CSE Training Transformed My Perspective" – A Parent-Teacher\'s Heartfelt Testimony',
    slug: 'cse-training-transformed-my-perspective',
    excerpt: 'Jean Paul Nshimiyimana, a dedicated teacher and adoptive father to a Deaf girl, shares how RNADW\'s Comprehensive Sexuality Education training transformed his ability to guide and protect Deaf adolescents.',
    content: `<img src="/images/blogs/image.png" alt="Jean Paul Nshimiyimana" class="w-full rounded-xl my-8" />

<p><strong>Jean Paul Nshimiyimana</strong> has always poured his heart into supporting Deaf children—both as a dedicated teacher and, most profoundly, as a loving adoptive father. Years ago, he opened his home and his life to a Deaf girl who could neither hear nor speak, rescuing her from vulnerability on the streets. Raising her became his sacred dual responsibility: nurturing her as a parent while equipping her, and others like her, with the tools to thrive.</p>

<p>As his daughter entered adolescence, Jean Paul witnessed the subtle yet unmistakable changes that come with puberty. He longed to guide her safely through this delicate phase, to shield her from the risks of exploitation, unwanted pregnancy, or heartbreak.</p>

<h2>A Transformative Training Experience</h2>
<p>Everything changed in mid-2022 when Jean Paul participated in a transformative <strong>Comprehensive Sexuality Education (CSE) training</strong> organized by the <strong>Rwanda National Association of Deaf Women (RNADW)</strong>. This experience did not merely add information; it ignited a deeper empathy and equipped him with accessible, inclusive tools tailored to Deaf adolescents.</p>

<h2>A Father's Renewed Bond</h2>
<blockquote>"Before the training, my support as a parent felt incomplete and ineffective. I could only say, 'Avoid boys' groups' or 'Don't spend time alone with boys,' without explaining the beautiful yet challenging journey from childhood to womanhood. I lacked the full picture to help her navigate with confidence and dignity."</blockquote>

<p>Now armed with comprehensive knowledge, he sat with his daughter—now 26—and used visual teaching aids from a reliable website. Step by step, he walked her through the stages of a girl's development: the onset of menstruation, hormonal shifts, emotional changes, and the importance of self-respect and boundaries.</p>

<h2>Rippling Impact in the Community</h2>
<p>His guidance extended beyond his home. Recently, while chatting with neighborhood girls, Jean Paul discovered to his shock that none knew what a sanitary pad was. He pulled one from his wallet, demonstrated its use with care and clarity, and later received grateful feedback from relieved parents.</p>

<h2>A Teacher's Renewed Mission</h2>
<p>At <strong>Centre des Jeunes Sourds-Muets (CJSM)</strong> in Huye district, where Jean Paul teaches, Deaf girls face alarming realities. Research in Rwanda highlights that adolescents with hearing disabilities often encounter limited access to SRH information.</p>

<blockquote>"The training gave us the right language and methods to reach our students deeply. We explore not just risks, but prevention, mutual respect, and protection. Deaf girls now understand how to recognize dangers, assert boundaries, and support one another. I see their confidence grow—the fear in their eyes replaced by knowledge and strength."</blockquote>

<h2>Lasting Impact and Hope</h2>
<p>Jean Paul's story is one of quiet triumph. The CSE training did not just inform him; it deepened his love, sharpened his advocacy, and multiplied his protective reach.</p>

<blockquote>"I will never stop striving for her well-being—and for every Deaf girl who deserves to grow up informed, safe, and full of possibility."</blockquote>

<p>Through initiatives like RNADW's training, stories like Jean Paul's remind us that <strong>knowledge, delivered with empathy and accessibility, can break cycles of vulnerability and build futures filled with dignity and hope</strong>.</p>`,
    author: 'Jean Paul Nshimiyimana',
    authorRole: 'Teacher & Adoptive Father',
    date: 'Jul 21, 2025',
    readTime: '8 min read',
    category: 'SRHR',
    categoryColor: '#F97316',
    image: '/images/b2.png',
    featured: false,
    published: true,
    sortOrder: 2,
  },
  {
    title: 'CSE Training: Empowering Nurses to Protect and Uplift Deaf Girls',
    slug: 'cse-training-empowering-nurses',
    excerpt: 'Powerful testimonies from nurses reveal how RNADW\'s Comprehensive Sexuality Education training is transforming healthcare for deaf girls in Rwanda, plus how SRHR efforts are bearing fruit in Nyamasheke District.',
    content: `<p>Deaf girls in Rwanda remain among the most vulnerable members of our society. Too often, they fall victim to forced sex, rape, and exploitation, leading to devastating consequences: unwanted pregnancies, sexually transmitted infections (STIs), and lifelong trauma.</p>

<p>A recent training on <strong>Comprehensive Sexuality Education (CSE)</strong>, organized by the <strong>Rwanda National Association of Deaf Women (RNADW)</strong>, is beginning to change this heartbreaking reality.</p>

<h2>Testimony: Donatille Mukarutamu, Huye District</h2>
<p><strong>Donatille Mukarutamu</strong>, a dedicated nurse from Huye District in Southern Province, shares a deeply personal reflection on her transformation:</p>

<blockquote>"Before this training, deaf girls would come to our health center seeking sexual and reproductive health services, yet we felt helpless. We lacked the tools and understanding to communicate effectively or provide the care they desperately needed."</blockquote>

<p>Through the RNADW initiative, Mukarutamu gained comprehensive knowledge across vital SRH topics: the importance of age-appropriate, truthful conversations with children; distinguishing between sex and gender; understanding gender-based behaviors; youth-friendly services; family planning methods; HIV/AIDS counseling, testing, prevention, and treatment; STI management; violence prevention; safe abortion alternatives; menstrual health education; and more.</p>

<h2>Testimony: Anathalie Musanzimfura, Kigali</h2>
<p><strong>Anathalie Musanzimfura</strong>, a nurse at Nyarurenzi Health Center in Kigali, echoes this sentiment:</p>

<blockquote>"We learned how SRH journeys begin in childhood and evolve into adulthood, and how crucial it is to speak openly and honestly with children. We were taught that giving deaf girls the full truth about their bodies empowers them to recognize and resist those who might exploit or harm them."</blockquote>

<hr />

<h2>SRHR Efforts Bear Fruit in Nyamasheke District</h2>
<p>In Nyamasheke, adolescents and women with disabilities faced numerous challenges accessing sexual and reproductive health services and information.</p>

<h3>RNADW's Intervention</h3>
<p><strong>Rwanda National Association of Deaf Women (RNADW "UMUCYO")</strong> recognizes that persons with disabilities have similar SRHR needs as other people but often face barriers to information and services. Today, the situation has changed after RNADW spearheaded education through comprehensive SRHR knowledge and economic empowerment in Nyamasheke District.</p>

<h3>Partnership with KOICA, UNFPA, and Good Neighbors</h3>
<p>With generous support from <strong>KOICA</strong> (the aid agency of the Republic of Korea), <strong>UNFPA Rwanda</strong> has partnered with <strong>Good Neighbors International</strong> and <strong>RNADW</strong>. Through this partnership, comprehensive activities and resources have been made available to <strong>80 Deaf Girls and young women</strong>.</p>

<h3>The Resource Training Centre</h3>
<p>RNADW has established a resource training Centre (a modern goat farm) with capacity to accommodate 100 goats. The project provides 80 YPWD with necessary knowledge to access comprehensive SRHR services, including psychosocial support, economic empowerment training, and income generation support.</p>

<p><strong>This is not just education—it is empowerment, healing, and hope for a more inclusive Rwanda.</strong></p>`,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Jul 21, 2025',
    readTime: '12 min read',
    category: 'SRHR',
    categoryColor: '#F97316',
    image: '/images/b3.png',
    featured: false,
    published: true,
    sortOrder: 3,
  },
  {
    title: 'RNADW "UMUCYO" Champions Disability-Inclusive Youth Centers in Rwanda',
    slug: 'rnadw-champions-disability-inclusive-youth-centers',
    excerpt: 'Since 2022, RNADW "UMUCYO" has been promoting comprehensive sexuality education among school-going Deaf adolescent girls. This blog highlights our efforts in promoting disability inclusion.',
    content: `<p>Since 2022, RNADW "UMUCYO" has been promoting comprehensive sexuality education (CSE) among school-going Deaf adolescent girls with the aim to improve access to SRHR information among Deaf adolescents girls and young women in the community.</p>

<p>While the Government of Rwanda adopted the school-based CSE curriculum in 2016, marginalized girls and young women face numerous challenges due to a predominantly patriarchal and conservative society where sex education is a taboo topic. <strong>Deaf adolescent girls and young women who find themselves at the intersection of disability and gender face double discrimination.</strong></p>

<h2>Meet Thadeo Talemwa</h2>
<p><strong>Thadeo Talemwa</strong> (male, 35 years) is a coordinator of Kimisagara Youth Centre, situated at the heart of Kigali City in Nyarugenge District.</p>

<img src="/images/blogs/disability-inclusive/image2.png" alt="Mr. Tadeo TALEMWA receiving sign language certificate" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Mr. Tadeo TALEMWA (second from the right, in Yellow T-shirt) receiving sign language certificate of completion.</p>

<p>Thadeo shed light on challenges faced by young people with disabilities. He explains that Deaf girls and young women are to an extent demotivated to reach out to them because of communication barriers. <em>"Those who come to the center are often accompanied by someone else, usually a member of their family or anyone else who assists with interpretation, so my clients are forced to disclose their needs in the presence of other people. Privacy is an issue!"</em></p>

<h2>Strategic Partnerships</h2>
<img src="/images/blogs/disability-inclusive/image4.jpg" alt="Alphonsine Uwimana, RNADW Field Officer" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Alphonsine Uwimana, RNADW "UMUCYO" Field Officer</p>

<p>According to <strong>Alphonsine Uwimana</strong>, RNADW "UMUCYO" Field Officer, working strategically with district authorities including those in charge of youth and disability was of utmost importance.</p>

<blockquote>"Even though Sign Language services are lacking, many Deaf girls feel more comfortable approaching youth centre workers, compared to learning about CSE in schools because unlike formal schools, youth centres do not restrict information or services."</blockquote>

<h2>Leadership Commitment</h2>
<img src="/images/blogs/disability-inclusive/image.png" alt="Dative Mukashema, Executive Director" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Dative Mukashema, RNADW "UMUCYO" Executive Director</p>

<p><strong>Dative Mukashema</strong>, RNADW "UMUCYO" Executive Director acknowledges that resources are limited, however forging partnerships with various stakeholders and putting Deaf women and girls needs at the centre is key.</p>

<blockquote>"Our advocacy efforts in the districts where we work encourage greater accountability of district officials to plan and budget for Sign Language interpretation and training on deaf culture in annual performance contracts, also known as Imihigo."</blockquote>

<p>We extend our heartfelt gratitude to our valued donor, <strong>Kvinna till Kvinna</strong>, and our esteemed partners.</p>`,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Feb 2025',
    readTime: '8 min read',
    category: 'Inclusion',
    categoryColor: '#2563EB',
    image: '/images/blogs/disability-inclusive/image1.jpg',
    featured: false,
    published: true,
    sortOrder: 4,
  },
  {
    title: 'RNADW "UMUCYO" Forges Dynamic Alliances for Disability Inclusion',
    slug: 'rnadw-forges-dynamic-alliances',
    excerpt: 'RNADW "UMUCYO" forges dynamic alliances to champion disability inclusion and intersectional feminism, creating empowering spaces for women and marginalized communities through Sign Language training partnerships.',
    content: `<p>Partnerships and alliances are very important to our mission. We believe that in order to achieve lasting impact in the lives of women and girls with disabilities, we need to engage with like-minded institutions including disability-rights networks, feminist and women's rights organizations and intergovernmental organizations.</p>

<h2>Partnership with UNHCR Rwanda</h2>
<p>Since our partnership with the UNHCR in Rwanda kicked off in 2023, we mapped out the needs of refugee women with disabilities and assessed current programs that promote education on gender equality and access to sexual and reproductive health services.</p>

<p>We then organised a three-months training course from March to May 2024, with 3 weekly sessions, each lasting 3 hours. In total, <strong>16 people were trained.</strong></p>

<h2>Rochee Dusabe's Story</h2>
<p><strong>Rochee Dusabe</strong> (female, 35 years) is a Field Coordinator at Empower Rwanda, a women-led non-governmental organisation that supports women and youth through skills and knowledge enhancing.</p>

<blockquote>"Sign Language is like any other languages spoken in Rwanda, and I always welcome an opportunity to learn something new. I also knew I wanted to be a better communicator with our constituencies with disabilities."</blockquote>

<h2>Ceasar Manzi's Perspective</h2>
<p><strong>Ceasar Manzi</strong> (male, 33 years) is a Human Resources Associate at UNHCR in Kigali.</p>

<blockquote>"This training enabled me to create an inclusive and diverse environment for Deaf persons I communicate with, to bridge communication gaps, promote accessibility, and create a space for those with a hearing disability so they can be heard."</blockquote>

<img src="/images/blogs/dynamic-alliances/image2.jpg" alt="Rochee Dusabe during sign language class at UNHCR office" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Rochee Dusabe (in Red) during sign language class at UNHCR office in Kigali</p>

<h2>Advocacy for Sign Language Recognition</h2>
<img src="/images/blogs/dynamic-alliances/image3.jpg" alt="RNADW advocacy efforts" class="w-full rounded-xl my-8" />

<p><strong>Dative Mukashema</strong>, RNADW "UMUCYO" Executive Director said: <em>"We are working to make our organisation a partner of choice when it comes to disability inclusion, in particular in the advocacy for Deaf women and girls."</em></p>

<p>RNADW "UMUCYO" and allies advocate for the enactment of an organic law which recognises Sign Language as the 4th official language used in Rwanda. In September 2023, the government began the distribution of the Rwandan Sign Language Dictionary.</p>

<p>We sincerely appreciate the invaluable support and collaboration of our partners, <strong>UNHCR Rwanda</strong> and <strong>Kvinna till Kvinna</strong>.</p>`,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Feb 2025',
    readTime: '7 min read',
    category: 'Partnerships',
    categoryColor: '#10B981',
    image: '/images/blogs/dynamic-alliances/image1.png',
    featured: false,
    published: true,
    sortOrder: 5,
  },
  {
    title: "Empowering Rwanda's Parents to Connect with Their Deaf Children",
    slug: 'empowering-rwandas-parents',
    excerpt: 'This blog underscores our commitment to advancing intersectional disability inclusion, with a focus on elevating sign language and Deaf culture in Rwanda through parent education programs.',
    content: `<p>Sign language is a language that is expressed through manual articulations in combination with non-manual elements; it is a full-fledged natural language with its own grammar and lexicon. The Deaf community in Rwanda comprises of Deaf and Hard-of-Hearing individuals who share a common language, common experiences, values, and a common way of interacting. This is what is commonly referred to as <strong>Deaf culture</strong>.</p>

<h2>Our Mission</h2>
<p>As a Deaf women-led organization, we have made it our mission to defend and advance the rights of Deaf women and girls in Rwanda. We promote inclusion and equality in education, justice, health and other aspects of life where Deaf women and girls face discrimination.</p>

<h2>Parent Training Program</h2>
<p>To select participants, RNADW "UMUCYO" worked with local authorities in Huye and Nyarugenge Districts. <strong>20 parents</strong> were then invited to attend the training, which was organized as 3 sessions per week for 3 months, each session lasting 3 hours.</p>

<img src="/images/blogs/empowering-parents/image2.jpg" alt="Appoline receiving certificate" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Appoline (second from right) receives a certificate for the completion of a sign language training.</p>

<h2>Appoline's Story</h2>
<p><strong>Appoline Nzambazimana</strong> (female, 42 years) is a mother to a Deaf daughter and a parent participant in the training. She lives in Mbazi Sector, Huye District, in the Southern Province.</p>

<p>Prior to the training, she explains that she always had challenges communicating with her Deaf daughter, especially during her teenage years. Her daughter is currently enrolled in a technical college and has had the chance to learn and use Rwanda Sign Language.</p>

<blockquote>"This was an opportunity for me to learn how to sign. I also learned so much about adolescent sexual health. My daughter now has two children of her own. She trusts me more, and she opens up to me more about family planning and other issues. So in a way, this training did two things at once."</blockquote>

<h2>Project Coordination</h2>
<p><strong>Diane Niyonkuru</strong> is a RNADW "UMUCYO" Project coordinator and staff overseeing the project activities.</p>

<blockquote>"Sign Language propels parents to think of how to better communicate with their children. Beyond that, it also gives them the urge to expand their learning so they can keep the communication with their children going."</blockquote>

<h2>Recommendations</h2>
<p>Appoline recommends keeping this fire burning. She would like to see Deaf young people empowered enough to make better decisions about their sexuality and wellbeing, and parents accompanied in their journey of learning.</p>`,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Feb 2025',
    readTime: '6 min read',
    category: 'Education',
    categoryColor: '#8B5CF6',
    image: '/images/blogs/empowering-parents/image1.jpg',
    featured: false,
    published: true,
    sortOrder: 6,
  },
  {
    title: 'RNADW Survey Calls for Action on SRH Communication for Young Deaf Girls',
    slug: 'rnadw-survey-calls-for-action',
    excerpt: 'A new baseline survey found that young deaf girls do not have a formal channel to access information on Sexual Reproductive Health. The survey calls for urgent action to address this gap.',
    content: `<p>A new baseline survey and needs assessment report on access to sexual reproductive health and rights (SRHR) services among deaf women and girls in Huye and Nyarugenge districts found out that <strong>young deaf girls do not have a formal channel to access information on the issues surrounding Sexual Reproductive Health (SRH).</strong></p>

<h2>Key Findings</h2>
<p>The survey report shows that the majority of Deaf girls/women get SRH information through:</p>
<ul>
<li>Peer groups: 26%</li>
<li>School: 24%</li>
<li>Parents: 15%</li>
<li>Social media: 14%</li>
</ul>

<blockquote>"There is a lot to be done so as to come out with formal channels to communicate issues of SRH to young deaf girls."</blockquote>

<h2>The Reality for Young Deaf Persons</h2>
<p>The survey learnt that young deaf girls become sexually active and experience their sexuality as early and as often as young people without disabilities, however, for them, access to SRHR services is particularly challenging.</p>

<h2>Increased Risk of Violence</h2>
<p>The increased risk of violence, negligence, sexual abuse, discrimination and denial of rights faced by deaf women and girls means that provision of SRHR services and education is essential for young deaf girls and women.</p>

<h2>Survey Methodology</h2>
<p>A sample size of <strong>112 participants</strong> was chosen to participate in this study:</p>
<ul>
<li>79 participated in school Youth Focus group discussions</li>
<li>33 including heads of health centers, parents of Deaf Girls and deaf girls out of school participated in key Informants Interviews</li>
</ul>

<h2>Survey Recommendations</h2>
<p>The baseline survey and needs assessment report recommends:</p>
<ul>
<li>Training of teachers on sign language communication on the topics covered in school comprehensive Sexual Education (CSE) curriculum</li>
<li>Creating an inclusive safe space for teenage deaf girls in schools</li>
<li>Providing training modules and activities focused on topics such as puberty, HIV, delaying sexual debut</li>
<li>Facilitating visits to community health centers</li>
</ul>

<p><strong>This survey underscores the urgent need for accessible, formal channels of SRH information for young deaf girls in Rwanda.</strong></p>`,
    author: 'Elias Hakizimana',
    authorRole: 'Researcher',
    date: 'Feb 2025',
    readTime: '5 min read',
    category: 'Research',
    categoryColor: '#EF4444',
    image: '/images/b1.png',
    featured: false,
    published: true,
    sortOrder: 7,
  },
];

const galleryImages = [
  { src: "/images/gallery/Building-confidence-and-skills.jpg", title: "Building Confidence and Skills", category: "Training", categoryColor: "#FACC15", description: "Deaf women participating in skill-building workshops", published: true },
  { src: "/images/gallery/Building-connections-across-regions.jpg", title: "Building Connections Across Regions", category: "Community", categoryColor: "#2563EB", description: "Connecting deaf women from different regions of Rwanda", published: true },
  { src: "/images/gallery/Celebrating-deaf-identity-together.jpg", title: "Celebrating Deaf Identity Together", category: "Culture", categoryColor: "#EC4899", description: "Celebrating deaf culture and identity", published: true },
  { src: "/images/gallery/Closing-festivities-and-achievements.jpg", title: "Closing Festivities", category: "Events", categoryColor: "#10B981", description: "Celebrating achievements at closing ceremony", published: true },
  { src: "/images/gallery/Coming-together-as-one-community.jpg", title: "Coming Together as One", category: "Community", categoryColor: "#2563EB", description: "Unity and solidarity in the deaf women community", published: true },
  { src: "/images/gallery/Conference-bringing-families-together.jpg", title: "Conference Bringing Families Together", category: "Events", categoryColor: "#10B981", description: "Family conference bringing parents and children together", published: true },
  { src: "/images/gallery/Health-awareness-session-for-families.jpg", title: "Health Awareness Session", category: "Health", categoryColor: "#F97316", description: "Health education for deaf women and families", published: true },
  { src: "/images/gallery/Parents-connecting-with-deaf-community.jpg", title: "Parents Connecting with Community", category: "Family", categoryColor: "#8B5CF6", description: "Parents learning to connect with deaf community", published: true },
  { src: "/images/gallery/Teaching-sign-language-to-community-members.jpg", title: "Teaching Sign Language", category: "Education", categoryColor: "#FACC15", description: "Sign language education for community members", published: true },
  { src: "/images/gallery/Vocational-training-demonstration-for-families.jpg", title: "Vocational Training Demo", category: "Training", categoryColor: "#FACC15", description: "Demonstrating vocational skills to families", published: true },
  { src: "/images/gallery/Recognizing-outstanding-contributions.jpg", title: "Recognizing Outstanding Contributions", category: "Awards", categoryColor: "#10B981", description: "Honoring those who made significant contributions", published: true },
  { src: "/images/gallery/Showcasing-deaf-culture-and-traditions.jpg", title: "Showcasing Deaf Culture", category: "Culture", categoryColor: "#EC4899", description: "Displaying rich deaf cultural traditions", published: true },
];

const videos = [
  { videoId: "dQw4w9WgXcQ", title: "Introduction to RNADW", description: "Learn about our mission and work", category: "stories", published: true },
  { videoId: "9bZkp7q19f0", title: "Sign Language Basics", description: "Basic Rwandan Sign Language tutorial", category: "sgbv", published: true },
  { videoId: "kJQP7kiw5Fk", title: "Deaf Women's Rights", description: "Understanding rights of deaf women", category: "cedaw", published: true },
  { videoId: "JGwWNGJdvx8", title: "Health Awareness", description: "Health information for deaf women", category: "srhr", published: true },
];

const resources = [
  {
    title: "Baseline Survey on Access to SRHR and GBV Services",
    slug: "baseline-survey-srhr-gbv",
    description: "Comprehensive baseline survey on access to Sexual Reproductive Health Rights and Gender-Based Violence services among deaf women and girls in Huye and Kigali districts.",
    introduction: "This baseline survey and needs assessment report examines access to sexual reproductive health and rights (SRHR) services among deaf women and girls in Huye and Nyarugenge districts. The findings reveal that young deaf girls do not have a formal channel to access information on Sexual Reproductive Health (SRH).",
    category: "Research",
    categoryColor: "#EF4444",
    fileType: "PDF",
    fileSize: "2.4 MB",
    icon: "📊",
    downloadUrl: "/documents/Baseline survey on Access to SRHR and GBV services in Huye and Kigali.pdf",
    date: "2024",
    hasVideo: false,
    isPolicyBrief: false,
    content: {
      sections: [
        { title: "Key Findings", content: "The survey report shows that the majority of Deaf girls/women get SRH information through:\n• Peer groups: 26%\n• School: 24%\n• Parents: 15%\n• Social media: 14%\n\nThere is a lot to be done to establish formal channels to communicate issues of SRH to young deaf girls." },
        { title: "The Reality for Young Deaf Persons", content: "Young deaf girls become sexually active and experience their sexuality as early and as often as young people without disabilities, however, for them, access to SRHR services is particularly challenging. Therefore, young deaf persons require access to SRHR services and education in the same manner that young people without disabilities do." },
        { title: "Survey Methodology", content: "A sample size of 112 participants was chosen to participate in this study:\n• 79 participated in school Youth Focus group discussions\n• 33 including heads of health centers, parents of Deaf Girls and deaf girls out of school participated in key Informants Interviews" },
        { title: "Recommendations", content: "• Training of teachers on sign language communication on topics covered in school CSE curriculum\n• Creating an inclusive safe space for teenage deaf girls in schools\n• Providing training modules focused on puberty, HIV, delaying sexual debut\n• Facilitating visits to community health centers" }
      ]
    },
    published: true
  },
  {
    title: "Guidelines: Access to Justice for Deaf Women & Girls",
    slug: "guidelines-access-justice",
    description: "Step-by-step guidelines on accessing legal services and justice system support for deaf women and girls in Rwanda.",
    introduction: "Accessing justice is a fundamental right. This handbook guides deaf women through the legal system in Rwanda, explaining how to access legal aid and navigate legal processes with appropriate accommodations.",
    category: "Legal Rights",
    categoryColor: "#2563EB",
    fileType: "PDF",
    fileSize: "1.8 MB",
    icon: "⚖️",
    downloadUrl: "/documents/Guidelines_Access_Justice_for_Deaf_Women & Girls  .pdf",
    date: "2024",
    hasVideo: false,
    isPolicyBrief: false,
    content: {
      sections: [
        { title: "Understanding Legal Aid", content: "Legal aid is free or low-cost legal assistance for those who cannot afford a lawyer. In Rwanda, legal aid is available through:\n• Access to Justice Bureaus (MAJ)\n• Legal aid organizations\n• Bar Association pro bono program\n• University law clinics\n\nDeaf individuals have the right to sign language interpretation, written communication, extra time for procedures, and accessible legal documents." },
        { title: "Types of Legal Issues", content: "Common legal matters where you may need help:\n\nFamily law: Marriage and divorce, Child custody, Inheritance disputes, Domestic violence\n\nCriminal matters: Reporting crimes, Victim support, Defense representation\n\nCivil matters: Property disputes, Contract issues, Employment problems, Discrimination complaints" },
        { title: "Reporting to Police", content: "Steps for reporting a crime:\n1. Go to the nearest police station\n2. Request a sign language interpreter\n3. If no interpreter, ask to write your statement\n4. Provide details: what happened, when, where, who\n5. Get a copy of your complaint\n6. Keep the reference number\n\nGender Desk officers handle sexual violence, domestic violence, child abuse, and human trafficking cases." },
        { title: "Your Rights in Court", content: "Before court: Gather all documents and evidence, arrange for an interpreter, know your hearing date and location.\n\nAt court: Arrive early, check in with court staff, sit where you can see interpreter.\n\nYour rights: Sign language interpretation, breaks if needed, written materials, fair and accessible proceedings." },
        { title: "Important Contacts", content: "Emergency Numbers:\n• Police: 112\n• RIB (Investigation): 113\n• Gender Desk: Available at all stations\n\nLegal Aid:\n• MAJ (Access to Justice Bureaus): In every district\n• Legal Aid Forum Rwanda\n• HAGURUKA Women's Organization" }
      ]
    },
    published: true
  },
  {
    title: "RNADW CEDAW Shadow Report",
    slug: "rnadw-cedaw-shadow-report",
    description: "Shadow report on the implementation of CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women) for deaf women in Rwanda.",
    introduction: "The Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) is an international treaty protecting women's rights. This shadow report examines how CEDAW applies to deaf women and girls in Rwanda and highlights gaps in implementation.",
    category: "Advocacy",
    categoryColor: "#EC4899",
    fileType: "DOCX",
    fileSize: "0.5 MB",
    icon: "📜",
    downloadUrl: "/documents/RNADW-CEDAW -Shadow Report .docx",
    date: "2024",
    hasVideo: false,
    isPolicyBrief: false,
    content: {
      sections: [
        { title: "What is CEDAW?", content: "CEDAW is often called the international bill of rights for women. Adopted by the UN in 1979, it:\n• Defines discrimination against women\n• Sets an agenda for national action\n• Requires countries to report on progress\n• Rwanda ratified CEDAW in 1981\n\nCEDAW plus the Convention on the Rights of Persons with Disabilities (CRPD) together protect deaf women's rights." },
        { title: "Key Rights Under CEDAW", content: "Article 1: Freedom from discrimination\nArticle 2: Policy measures to eliminate discrimination\nArticle 3: Guarantee of basic human rights\nArticle 10: Equal rights in education\nArticle 11: Equal rights in employment\nArticle 12: Equal access to healthcare\nArticle 16: Rights in marriage and family" },
        { title: "Education Rights", content: "Deaf women and girls have the right to:\n• Education in sign language\n• Qualified sign language interpreters\n• Accessible educational materials\n• Same curriculum as hearing students\n• Vocational training opportunities\n• Higher education access" },
        { title: "Healthcare Rights", content: "Deaf women's healthcare rights include:\n• Accessible health information in RSL\n• Sign language interpreters at appointments\n• Confidential services\n• Informed consent in accessible format\n• Sexual and reproductive health services\n• Mental health support" }
      ]
    },
    published: true
  },
  {
    title: "SRHR Policy Brief",
    slug: "srhr-policy-brief",
    description: "Policy brief on Sexual and Reproductive Health Rights for Deaf Women and Girls in Rwanda with actionable recommendations.",
    introduction: "This policy brief presents key findings and recommendations on Sexual and Reproductive Health Rights (SRHR) for Deaf Women and Girls in Rwanda. It highlights the unique challenges faced by this population and provides actionable recommendations for policymakers, healthcare providers, and civil society organizations.",
    category: "Policy Brief",
    categoryColor: "#8B5CF6",
    fileType: "PDF",
    fileSize: "3.7 MB",
    icon: "📋",
    downloadUrl: "/documents/policy-briefs/srhr-policy-brief.pdf",
    date: "October 2025",
    hasVideo: true,
    videoUrl: "",
    isPolicyBrief: true,
    content: {
      sections: [
        { title: "Background", content: "Deaf women and girls in Rwanda face significant barriers in accessing Sexual and Reproductive Health (SRH) services and information. These barriers include:\n• Lack of sign language interpreters in healthcare facilities\n• Limited SRHR information in accessible formats\n• Stigma and discrimination from healthcare providers\n• Communication barriers during consultations\n• Lack of awareness about their rights" },
        { title: "Key Findings", content: "Research conducted by RNADW reveals:\n• Over 70% of deaf women have never received SRHR information in sign language\n• Many deaf girls reach puberty without understanding menstruation\n• Deaf women are more vulnerable to sexual violence due to communication barriers\n• Few healthcare providers have basic sign language skills\n• Deaf women often miss critical information during antenatal care" },
        { title: "Recommendations for Ministry of Health", content: "1. Train healthcare workers in basic Rwanda Sign Language\n2. Ensure sign language interpreters are available at health facilities\n3. Develop SRHR materials in video format with RSL\n4. Include deaf women in the design of health programs\n5. Establish protocols for serving deaf patients" },
        { title: "Call to Action", content: "RNADW calls on all stakeholders to work together to ensure that deaf women and girls in Rwanda can fully exercise their sexual and reproductive health rights. This requires commitment, resources, and meaningful inclusion of deaf women in all health initiatives.\n\n\"Nothing About Us Without Us\" - Deaf women must be at the center of programs designed to serve them." }
      ]
    },
    published: true
  },
  {
    title: "Ministry of Health Brief",
    slug: "ministry-of-health-brief",
    description: "Policy brief addressing health sector recommendations for inclusive services for Deaf Women in Rwanda.",
    introduction: "This policy brief is specifically directed to the Ministry of Health and health sector stakeholders. It outlines concrete steps to make health services accessible and inclusive for Deaf Women and Girls in Rwanda.",
    category: "Policy Brief",
    categoryColor: "#8B5CF6",
    fileType: "PDF",
    fileSize: "3.6 MB",
    icon: "📋",
    downloadUrl: "/documents/policy-briefs/ministry-of-health-brief.pdf",
    date: "October 2025",
    hasVideo: true,
    videoUrl: "",
    isPolicyBrief: true,
    content: {
      sections: [
        { title: "Current Situation", content: "The health sector in Rwanda has made significant progress in improving healthcare access. However, deaf women continue to face barriers:\n• No standardized protocol for serving deaf patients\n• Limited availability of sign language interpreters\n• Healthcare information predominantly in audio/text formats\n• Deaf women often rely on family members to interpret sensitive health information\n• Lack of privacy during medical consultations" },
        { title: "Impact on Health Outcomes", content: "These barriers lead to:\n• Delayed healthcare seeking behavior\n• Missed diagnoses and incorrect treatments\n• Lower rates of preventive care utilization\n• Poor maternal health outcomes\n• Mental health challenges from healthcare exclusion" },
        { title: "Policy Recommendations", content: "1. Establish a Sign Language Interpretation Service - Train and deploy medical sign language interpreters\n2. Healthcare Worker Training - Include basic RSL in health professional curricula\n3. Accessible Health Information - Develop health education videos in RSL\n4. Infrastructure Improvements - Install visual alert systems in waiting areas" },
        { title: "Implementation Framework", content: "Short-term (1 year): Develop guidelines for serving deaf patients, begin training interpreters\nMedium-term (2-3 years): Deploy interpreters to district hospitals, integrate RSL into training\nLong-term (5 years): Full accessibility in all health facilities" }
      ]
    },
    published: true
  },
  {
    title: "Education Stakeholders Brief",
    slug: "education-stakeholders-brief",
    description: "Policy brief for education stakeholders on inclusive education for Deaf Girls and Women in Rwanda.",
    introduction: "This policy brief addresses the education sector, highlighting the need for inclusive education for Deaf Girls and Women in Rwanda. Quality education is fundamental to empowerment, yet deaf learners continue to face significant barriers.",
    category: "Policy Brief",
    categoryColor: "#8B5CF6",
    fileType: "PDF",
    fileSize: "4.4 MB",
    icon: "📋",
    downloadUrl: "/documents/policy-briefs/education-stakeholders-brief.pdf",
    date: "October 2025",
    hasVideo: true,
    videoUrl: "",
    isPolicyBrief: true,
    content: {
      sections: [
        { title: "Education Challenges", content: "Deaf girls in Rwanda face multiple barriers to quality education:\n• Limited schools with sign language instruction\n• Shortage of qualified deaf teachers\n• Lack of learning materials in visual formats\n• Limited access to Comprehensive Sexuality Education\n• Higher dropout rates compared to hearing peers\n• Social isolation and bullying in mainstream schools" },
        { title: "The Cost of Exclusion", content: "When deaf girls are excluded from quality education:\n• Lower literacy and numeracy skills\n• Limited employment opportunities\n• Greater vulnerability to exploitation\n• Reduced civic participation\n• Intergenerational poverty\n• Loss of potential contributions to society" },
        { title: "Recommendations for MINEDUC", content: "1. Strengthen Schools for the Deaf - Increase funding, recruit deaf teachers, develop RSL curriculum\n2. Support Inclusive Education - Train mainstream teachers in basic RSL, provide interpreters\n3. Comprehensive Sexuality Education - Ensure CSE reaches deaf students, develop accessible materials" },
        { title: "Way Forward", content: "RNADW calls for:\n• Increased budget allocation for deaf education\n• Recognition of RSL as a language of instruction\n• Inclusion of deaf women in education policy development\n• Partnerships between MINEDUC and deaf organizations\n• Regular monitoring of deaf learners' outcomes" }
      ]
    },
    published: true
  },
  {
    title: "Development Partners Brief",
    slug: "development-partners-brief",
    description: "Policy brief for development partners on supporting Deaf Women and Girls programs in Rwanda.",
    introduction: "This policy brief is directed to development partners, donors, and international organizations working in Rwanda. It makes the case for targeted investment in programs for Deaf Women and Girls and provides guidance on inclusive programming.",
    category: "Policy Brief",
    categoryColor: "#8B5CF6",
    fileType: "PDF",
    fileSize: "4.5 MB",
    icon: "📋",
    downloadUrl: "/documents/policy-briefs/development-partners-brief.pdf",
    date: "October 2025",
    hasVideo: false,
    isPolicyBrief: true,
    content: {
      sections: [
        { title: "Why Focus on Deaf Women?", content: "Deaf women and girls face intersecting discrimination:\n• Gender-based discrimination\n• Disability-based discrimination\n• Often also rural, poor, or from marginalized groups\n\nThis intersection means they are frequently left behind even in programs targeting women or persons with disabilities. Targeted investment is essential." },
        { title: "Investment Gaps", content: "Current development funding often excludes deaf women:\n• Disability inclusion is often an afterthought\n• Programs for women rarely consider deaf women's needs\n• Few programs specifically target deaf women\n• Limited funding for deaf-led organizations\n• Lack of disaggregated data on deaf women" },
        { title: "Recommendations for Donors", content: "1. Fund Deaf-Led Organizations - Support organizations like RNADW directly, build capacity, provide flexible funding\n2. Mainstream Disability Inclusion - Require accessibility in all funded programs, include disability indicators\n3. Target Deaf Women Specifically - Fund programs addressing deaf women's unique needs" },
        { title: "Call to Action", content: "Development partners have a crucial role in advancing the rights of deaf women and girls. We call on you to:\n• Include deaf women in your strategies\n• Fund deaf-led organizations\n• Hold implementing partners accountable for inclusion\n• Advocate for deaf women's rights\n• Learn about and respect deaf culture\n\nContact RNADW: info@rnadw.org" }
      ]
    },
    published: true
  },
];

const partners = [
  { name: "USAID", category: "International", logo: "/images/b1.png", website: "https://usaid.gov", published: true },
  { name: "UN Women", category: "International", logo: "/images/b2.png", website: "https://unwomen.org", published: true },
  { name: "World Federation of the Deaf", category: "International", logo: "/images/b3.png", website: "https://wfdeaf.org", published: true },
];

const testimonials = [
  { quote: "RNADW changed my life. I found my voice and learned that being deaf doesn't limit my potential.", author: "Marie Claire", role: "Community Leader, Kigali", image: "/images/0U9A5398.JPG", published: true },
  { quote: "Before joining RNADW, I felt isolated. Now I have a community of strong deaf women who support each other.", author: "Jeanne d'Arc", role: "Entrepreneur, Musanze", image: "/images/0U9A5432.JPG", published: true },
  { quote: "The training programs gave me skills to start my own business. RNADW believes in deaf women's abilities.", author: "Esperance", role: "Business Owner, Huye", image: "/images/0U9A5465.JPG", published: true },
];

const teamMembers = [
  { name: "Uwimana Jacqueline", role: "Executive Director", description: "Leading RNADW's mission to empower deaf women across Rwanda", image: "/images/0U9A5473.JPG", published: true },
  { name: "Mukamana Grace", role: "Program Manager", description: "Coordinating training and empowerment programs", image: "/images/0U9A5516.JPG", published: true },
  { name: "Ingabire Diane", role: "Advocacy Officer", description: "Leading policy advocacy and rights campaigns", image: "/images/0U9A5550.JPG", published: true },
];

const activities = [
  { title: "Sign Language Training", slug: "sign-language-training", subtitle: "Building Communication Skills", description: "Comprehensive sign language courses for deaf women, families, and communities", icon: "🤟", image: "/images/image1.png", published: true },
  { title: "Vocational Skills Development", slug: "vocational-skills", subtitle: "Economic Empowerment", description: "Training in tailoring, crafts, agriculture, and business skills", icon: "💼", image: "/images/image2.png", published: true },
  { title: "Health Awareness Programs", slug: "health-awareness", subtitle: "Accessible Healthcare Information", description: "Sexual and reproductive health education in sign language", icon: "🏥", image: "/images/image3.png", published: true },
  { title: "Rights Advocacy", slug: "rights-advocacy", subtitle: "Fighting for Equality", description: "Advocating for deaf women's rights and inclusive policies", icon: "⚖️", image: "/images/image4.png", published: true },
];

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}

export async function POST() {
  try {
    await connectDB();

    // Get or create models
    const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
    const GalleryImage = mongoose.models.GalleryImage || mongoose.model('GalleryImage', GalleryImageSchema);
    const Video = mongoose.models.Video || mongoose.model('Video', VideoSchema);
    const Resource = mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
    const Partner = mongoose.models.Partner || mongoose.model('Partner', PartnerSchema);
    const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
    const TeamMember = mongoose.models.TeamMember || mongoose.model('TeamMember', TeamMemberSchema);
    const Activity = mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);

    // Clear existing data
    await Promise.all([
      BlogPost.deleteMany({}),
      GalleryImage.deleteMany({}),
      Video.deleteMany({}),
      Resource.deleteMany({}),
      Partner.deleteMany({}),
      Testimonial.deleteMany({}),
      TeamMember.deleteMany({}),
      Activity.deleteMany({}),
    ]);

    // Insert new data
    await Promise.all([
      BlogPost.insertMany(blogPosts),
      GalleryImage.insertMany(galleryImages),
      Video.insertMany(videos),
      Resource.insertMany(resources),
      Partner.insertMany(partners),
      Testimonial.insertMany(testimonials),
      TeamMember.insertMany(teamMembers),
      Activity.insertMany(activities),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!',
      counts: {
        blogs: blogPosts.length,
        gallery: galleryImages.length,
        videos: videos.length,
        resources: resources.length,
        partners: partners.length,
        testimonials: testimonials.length,
        team: teamMembers.length,
        activities: activities.length,
      }
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
