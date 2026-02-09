// Script to seed the database with existing content
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://rnadw_user:rnadw.223@rnadw.pcbz0ym.mongodb.net/?appName=rnadw';

// Define schemas
const BlogPostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  author: String,
  authorRole: String,
  date: String,
  readTime: String,
  category: String,
  categoryColor: String,
  image: String,
  featured: Boolean,
  published: Boolean,
}, { timestamps: true });

const GalleryImageSchema = new mongoose.Schema({
  src: String,
  title: String,
  category: String,
  categoryColor: String,
  description: String,
  published: Boolean,
}, { timestamps: true });

const VideoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  description: String,
  category: String,
  thumbnailUrl: String,
  published: Boolean,
}, { timestamps: true });

const ResourceSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  introduction: String,
  category: String,
  categoryColor: String,
  fileType: String,
  fileSize: String,
  icon: String,
  downloadUrl: String,
  externalUrl: String,
  date: String,
  published: Boolean,
}, { timestamps: true });

const PartnerSchema = new mongoose.Schema({
  name: String,
  category: String,
  color: String,
  logo: String,
  website: String,
  sortOrder: { type: Number, default: 0 },
  published: Boolean,
}, { timestamps: true });

const TestimonialSchema = new mongoose.Schema({
  quote: String,
  author: String,
  role: String,
  image: String,
  published: Boolean,
}, { timestamps: true });

const TeamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  description: String,
  image: String,
  published: Boolean,
}, { timestamps: true });

const ActivitySchema = new mongoose.Schema({
  title: String,
  slug: String,
  subtitle: String,
  description: String,
  content: String,
  icon: String,
  image: String,
  published: Boolean,
}, { timestamps: true });

const SiteSettingSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: String,
  label: String,
  description: String,
  type: { type: String, default: 'text' },
}, { timestamps: true });

// Create models
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
const GalleryImage = mongoose.model('GalleryImage', GalleryImageSchema);
const Video = mongoose.model('Video', VideoSchema);
const Resource = mongoose.model('Resource', ResourceSchema);
const Partner = mongoose.model('Partner', PartnerSchema);
const Testimonial = mongoose.model('Testimonial', TestimonialSchema);
const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);
const Activity = mongoose.model('Activity', ActivitySchema);
const SiteSetting = mongoose.model('SiteSetting', SiteSettingSchema);

// Seed data
const blogPosts = [
  {
    title: "Empowering Voices Long Silenced: Deaf Girls and Women Trained to Prevent and Report SGBV",
    slug: "sgbv-training",
    excerpt: "In Musanze District, deaf girls, single mothers, and girls with disabilities gathered to reclaim their right to safety and dignity through groundbreaking SGBV prevention training organized by RNADW, Afro Ark, and HSMD under the campaign \"Your protection doesn't protect me.\"",
    content: `<p>In the mist-covered hills of Musanze District, a quiet but powerful revolution took place. Deaf girls, single mothers, and girls with disabilities gathered not merely to listen—but to learn, to speak, and to reclaim their right to safety and dignity. The occasion: a groundbreaking training on <strong>Sexual and Gender-Based Violence (SGBV) Prevention</strong>, organized by <strong>Rwanda National Association of Deaf Women (RNADW)</strong>, <strong>Afro Ark</strong>, and <strong>Health and Social Welfare Ministry of Deaf (HSMD)</strong>, and held at HSMD premises under the resolute theme: <strong>"Your protection doesn't protect me."</strong></p>

<h2>Confronting Harsh Realities</h2>
<p>For too long, deaf and hard-of-hearing girls in Rwanda have been among the most vulnerable to sexual exploitation, forced pregnancy, domestic violence, and emotional manipulation. Without accessible information and tailored support, they too often suffer in silence—unseen and unheard even in a society striving for equality. This training was designed to change that narrative.</p>

<h2>From Silence to Empowerment</h2>
<p><strong>Mr. Frank Bugabo Sebakara</strong>, Director of Afro Ark, opened the session by reminding participants of the harsh truths: that perpetrators frequently target those who cannot easily report abuse, and that language and communication barriers shield predators from accountability. His message was clear—girls with disabilities must be armed with the knowledge and confidence to identify warning signs, set boundaries, and report abuse without fear.</p>

<p>Through role-play, sign-language-interpreted discussions, and real-life case studies, participants explored the <strong>full spectrum of SGBV</strong>: physical violence, sexual assault, emotional abuse, economic coercion, and neglect. They learned to recognize subtle manipulation tactics—false promises of love, isolation from family and friends, gradual normalization of harmful behaviors—and were given concrete steps to protect themselves and others.</p>

<h2>SRHR: Knowledge as a Shield</h2>
<p>A key component of the training focused on <strong>Sexual and Reproductive Health and Rights (SRHR)</strong>. Knowledge of one's body, consent, and reproductive autonomy is a powerful shield against exploitation. Participants discussed menstrual health, contraception, sexually transmitted infections, and the right to say no. For many, it was the first time they had accessed such information in an accessible, empathetic, and judgment-free environment.</p>

<h2>Legal Pathways to Justice</h2>
<p><strong>Nyange Athanase</strong>, representing the Isange One Stop Centre (IOSC) in Musanze, detailed the comprehensive services available: immediate medical care, psychological support, legal aid, trauma counseling, and pathways to justice. He warned against the dangers of illegal abortions, which pose life-threatening risks, and stressed the <strong>critical 72-hour window to preserve evidence after an assault</strong>—empowering survivors to act swiftly and decisively.</p>

<h2>From Victims to Advocates</h2>
<p>Through this training, participants left not as victims waiting for rescue, but as <strong>informed, resilient advocates for their own protection</strong>. They gained tools to recognize warning signs, assert boundaries, seek timely help, and support one another. In a country where many girls with disabilities face barriers to reporting and disbelief from services, such knowledge can mean the difference between continued suffering and healing, between silence and justice.</p>

<h2>A Beacon of Hope</h2>
<p>This initiative is more than an event—it is a beacon of hope. By centering the experiences of deaf girls and women with disabilities, RNADW "UMUCYO", Afro Ark, HSMD, and their partners are lighting the path toward a Rwanda where every girl can live without fear, where her voice is heard, and where protection truly reaches those who need it most.</p>

<p><strong>Together, we can ensure that "Your protection doesn't protect me" becomes a rallying cry for change—and a promise kept.</strong></p>`,
    author: "RNADW Team",
    authorRole: "Communications",
    date: "Jan 18, 2023",
    readTime: "10 min read",
    category: "SGBV/VAWG",
    categoryColor: "#EC4899",
    image: "/images/b1.png",
    featured: true,
    published: true,
  },
  {
    title: "\"CSE Training Transformed My Perspective\" – A Parent-Teacher's Heartfelt Testimony",
    slug: "cse-training-testimony",
    excerpt: "Jean Paul Nshimiyimana, a dedicated teacher and adoptive father to a Deaf girl, shares how RNADW's Comprehensive Sexuality Education training transformed his ability to guide and protect Deaf adolescents.",
    content: `<p><strong>Jean Paul Nshimiyimana</strong> has always poured his heart into supporting Deaf children—both as a dedicated teacher and, most profoundly, as a loving adoptive father. Years ago, he opened his home and his life to a Deaf girl who could neither hear nor speak, rescuing her from vulnerability on the streets. Raising her became his sacred dual responsibility: nurturing her as a parent while equipping her, and others like her, with the tools to thrive.</p>

<p>As his daughter entered adolescence, Jean Paul witnessed the subtle yet unmistakable changes that come with puberty. He longed to guide her safely through this delicate phase, to shield her from the risks of exploitation, unwanted pregnancy, or heartbreak. With his background as a science-educated teacher, he offered what wisdom he had—simple warnings about avoiding certain peers or situations—but he felt the limits of his knowledge keenly. Words alone could not convey the full complexity of the female life cycle, bodily changes, or the emotional depth of healthy decision-making. His heart ached knowing she deserved more complete, compassionate understanding.</p>

<h2>A Transformative Training Experience</h2>
<p>Everything changed in mid-2022 when Jean Paul participated in a transformative <strong>Comprehensive Sexuality Education (CSE) training</strong> organized by the <strong>Rwanda National Association of Deaf Women (RNADW)</strong>. This experience did not merely add information; it ignited a deeper empathy and equipped him with accessible, inclusive tools tailored to Deaf adolescents. Suddenly, the boundaries that once constrained him dissolved.</p>

<h2>A Father's Renewed Bond</h2>
<blockquote>"Before the training, my support as a parent felt incomplete and ineffective. I could only say, 'Avoid boys' groups' or 'Don't spend time alone with boys,' without explaining the beautiful yet challenging journey from childhood to womanhood. I lacked the full picture to help her navigate with confidence and dignity."</blockquote>

<p>Now armed with comprehensive knowledge, he sat with his daughter—now 26—and used visual teaching aids from a reliable website. Step by step, he walked her through the stages of a girl's development: the onset of menstruation, hormonal shifts, emotional changes, and the importance of self-respect and boundaries. For each milestone, he gently asked if she had experienced it, listening intently to her signs, then explaining what it meant and how to respond healthily.</p>

<p>He spoke openly yet tenderly about peer pressures, the dangers of premature sexual activity, and the beauty of waiting for a committed, respectful partnership—perhaps one day leading to marriage and planned family.</p>

<h2>Rippling Impact in the Community</h2>
<p>His guidance extended beyond his home. Recently, while chatting with neighborhood girls, Jean Paul discovered to his shock that none knew what a sanitary pad was. He pulled one from his wallet, demonstrated its use with care and clarity, and later received grateful feedback from relieved parents. These small acts ripple outward, building safety and awareness in his community.</p>

<p>Jean Paul's devotion shines brightest in his long-term vision: after rescuing his daughter, he introduced her to bakery work to build skills and independence. He dreams of establishing a small home bakery where she can find purpose, employment, and joy—ensuring she remains secure, valued, and empowered.</p>

<h2>A Teacher's Renewed Mission</h2>
<p>At <strong>Centre des Jeunes Sourds-Muets (CJSM)</strong> in Huye district, where Jean Paul teaches, Deaf girls face alarming realities. Research in Rwanda highlights that adolescents with hearing disabilities often encounter limited access to SRH information, heightening their vulnerability to sexual violence, including defilement and rape—risks amplified by communication barriers and societal stigma.</p>

<p>Before the training, Jean Paul relied on basic science knowledge to address these issues. Now, he creates engaging, sign-language-based materials drawing from real-life examples of past struggles caused by ignorance. In lively classroom debates, students discuss concrete scenarios, menstrual cycles, contraceptive options, SRHR rights for both genders, and the full spectrum of sexuality from childhood to adulthood.</p>

<blockquote>"The training gave us the right language and methods to reach our students deeply. We explore not just risks, but prevention, mutual respect, and protection. Deaf girls now understand how to recognize dangers, assert boundaries, and support one another. I see their confidence grow—the fear in their eyes replaced by knowledge and strength."</blockquote>

<h2>Lasting Impact and Hope</h2>
<p>Jean Paul's story is one of quiet triumph. The CSE training did not just inform him; it deepened his love, sharpened his advocacy, and multiplied his protective reach. One father-teacher's empowered voice now safeguards his daughter's future and echoes in the lives of countless Deaf girls at school and in the neighborhood.</p>

<blockquote>"I will never stop striving for her well-being—and for every Deaf girl who deserves to grow up informed, safe, and full of possibility."</blockquote>

<p>Through initiatives like RNADW's training, stories like Jean Paul's remind us that <strong>knowledge, delivered with empathy and accessibility, can break cycles of vulnerability and build futures filled with dignity and hope</strong>.</p>`,
    author: "Jean Paul Nshimiyimana",
    authorRole: "Teacher & Adoptive Father",
    date: "Jul 21, 2025",
    readTime: "8 min read",
    category: "SRHR",
    categoryColor: "#F97316",
    image: "/images/b2.png",
    featured: false,
    published: true,
  },
  {
    title: "CSE Training: Empowering Nurses to Protect and Uplift Deaf Girls",
    slug: "cse-training-nurses",
    excerpt: "Powerful testimonies from nurses reveal how RNADW's Comprehensive Sexuality Education training is transforming healthcare for deaf girls in Rwanda, plus how SRHR efforts are bearing fruit in Nyamasheke District.",
    content: `<p>Deaf girls in Rwanda remain among the most vulnerable members of our society. Too often, they fall victim to forced sex, rape, and exploitation, leading to devastating consequences: unwanted pregnancies, sexually transmitted infections (STIs), and lifelong trauma. The root of this injustice lies in a painful silence—deaf girls are frequently denied accessible, accurate information about sexual and reproductive health (SRH), while many healthcare providers lack the specialized knowledge and confidence to serve them with dignity and effectiveness.</p>

<p>A recent training on <strong>Comprehensive Sexuality Education (CSE)</strong>, organized by the <strong>Rwanda National Association of Deaf Women (RNADW)</strong>, is beginning to change this heartbreaking reality. By equipping nurses with essential skills and insights, the program is not only bridging critical knowledge gaps but also fostering compassion, breaking down barriers, and restoring hope for deaf adolescent girls who deserve protection, respect, and the right to make informed choices about their bodies.</p>

<h2>Testimony: Donatille Mukarutamu, Huye District</h2>
<p><strong>Donatille Mukarutamu</strong>, a dedicated nurse from Huye District in Southern Province, shares a deeply personal reflection on her transformation:</p>

<blockquote>"Before this training, deaf girls would come to our health center seeking sexual and reproductive health services, yet we felt helpless. We lacked the tools and understanding to communicate effectively or provide the care they desperately needed. It broke my heart to see their confusion and fear, knowing we were failing them."</blockquote>

<p>Through the RNADW initiative, Mukarutamu gained comprehensive knowledge across vital SRH topics: the importance of age-appropriate, truthful conversations with children; distinguishing between sex and gender; understanding gender-based behaviors; youth-friendly services; family planning methods; HIV/AIDS counseling, testing, prevention, and treatment; STI management; violence prevention; safe abortion alternatives; menstrual health education; and more.</p>

<blockquote>"Since the training, the few deaf girls who have sought our services have received the accurate information and compassionate support they deserve. I now confidently share these skills with my colleagues, ensuring our entire team is better prepared. This training didn't just teach us facts—it gave us the power to truly help and protect these young women."</blockquote>

<h2>Testimony: Anathalie Musanzimfura, Kigali</h2>
<p><strong>Anathalie Musanzimfura</strong>, a nurse at Nyarurenzi Health Center in Kigali, echoes this sentiment:</p>

<blockquote>"We learned how SRH journeys begin in childhood and evolve into adulthood, and how crucial it is to speak openly and honestly with children. We were taught that giving deaf girls the full truth about their bodies empowers them to recognize and resist those who might exploit or harm them."</blockquote>

<p>Before the training, Musanzimfura admits, many providers—including herself—unintentionally isolated deaf adolescents, underestimating their right to knowledge or assuming they were less at risk of manipulation and abuse.</p>

<blockquote>"We didn't fully grasp that withholding information left them even more exposed to danger. Now, we understand: every girl has the fundamental right to learn about her reproductive health, to understand consent, and to protect herself from sexual violence. We are prepared to welcome and support them fully, and I have already shared what I learned with my fellow nurses. This knowledge is spreading, and it will save lives."</blockquote>

<h2>The Transformative Power of CSE Training</h2>
<p>These testimonies reveal the transformative power of targeted CSE training. By addressing communication barriers, dispelling myths, and instilling empathy, the program is enabling nurses to deliver inclusive, rights-based care. Deaf girls are no longer turned away or misunderstood—they are seen, heard (through sign language and adapted approaches), and protected.</p>

<hr />

<h2>SRHR Efforts Bear Fruit in Nyamasheke District</h2>
<p>In Nyamasheke, adolescents and women with disabilities faced numerous challenges accessing sexual and reproductive health services and information. Throughout much of history, societies have often misconstrued and misrepresented deaf individuals, emphasizing their limitations rather than their capabilities. This was worse in Nyamasheke district, where some cultural beliefs still regarded the deaf as sexually inactive.</p>

<p>A lack of disability-inclusive policies further compounds the vulnerabilities of Young People with Disabilities (YPWD). Reports from UNFPA Rwanda show that YPWD often cannot obtain even the basic information about SRHR; they remain ignorant of the basic facts about their bodies and rights, limiting their choices in living healthy, empowered lives.</p>

<h3>RNADW's Intervention</h3>
<p><strong>Rwanda National Association of Deaf Women (RNADW "UMUCYO")</strong> recognizes that persons with disabilities have similar SRHR needs as other people but often face barriers to information and services. Today, the situation has changed after RNADW spearheaded education through comprehensive SRHR knowledge and economic empowerment in Nyamasheke District.</p>

<p>Through RNADW, existing services have been adapted to accommodate persons with disabilities. There is now universal realization that gender and disability-sensitive debates on autonomy, equality, and access to health care benefit all people.</p>

<h3>Partnership with KOICA, UNFPA, and Good Neighbors</h3>
<p>With generous support from <strong>KOICA</strong> (the aid agency of the Republic of Korea), <strong>UNFPA Rwanda</strong> has partnered with <strong>Good Neighbors International</strong> and <strong>RNADW</strong>. Through this partnership, comprehensive activities and resources have been made available to <strong>80 Deaf Girls and young women</strong>, providing valuable information on SRHR, life skills, financial literacy, and business development skills.</p>

<h3>The Resource Training Centre</h3>
<p>RNADW has established a resource training Centre (a modern goat farm) with capacity to accommodate 100 goats, equipped with running water, electricity, and green fodder for making goat feeds, through support of Nyamasheke District leadership. The project provides 80 YPWD with necessary knowledge to access comprehensive SRHR services, including psychosocial support, economic empowerment training, and income generation support.</p>

<p>A devoted team of five full-time employees—consisting of four highly skilled deaf young women and a male security guard—oversees the project. YPWD are offered ongoing training in Village Savings and Loan Associations (VSLAs), management, and financial support including bookkeeping for the cooperative.</p>

<h3>Community Support</h3>
<p><strong>Ms. MUKANKUSI Athanasie</strong>, Vice Mayor of Nyamasheke District, recommended that to properly support RNADW in sustaining the resource Centre, there is need to buy more land to cultivate various types of fodder grass, construct a maternity paddock for breastfeeding mothers and a sick bay for sick goats. She added that the community of Nyamasheke is committed to the success of the resource Centre.</p>

<p><strong>Joseph UWABAKURIKIZA</strong>, NCPD Focal Person, asserts: "RNADW is making great strides in promoting SRHR among Vulnerable Youth. RNADW's efforts are truly commendable, and we must acknowledge their dedication to creating a safe and inclusive environment for all."</p>

<h2>A Step Toward Equity and Justice</h2>
<p>Initiatives like RNADW's CSE training represent a vital step toward equity and justice. When nurses are empowered, deaf girls gain the knowledge to safeguard their health, dignity, and futures. The ripple effect is clear: fewer vulnerabilities, reduced instances of exploitation and unintended pregnancies, lower STI rates, and a healthcare system that truly serves everyone. <strong>This is not just education—it is empowerment, healing, and hope for a more inclusive Rwanda.</strong></p>`,
    author: "RNADW Team",
    authorRole: "Communications",
    date: "Jul 21, 2025",
    readTime: "12 min read",
    category: "SRHR",
    categoryColor: "#F97316",
    image: "/images/b3.png",
    featured: false,
    published: true,
  },
  {
    title: "RNADW \"UMUCYO\" Champions Disability-Inclusive Youth Centers in Rwanda",
    slug: "disability-inclusive-youth-centers",
    excerpt: "Since 2022, RNADW \"UMUCYO\" has been promoting comprehensive sexuality education among school-going Deaf adolescent girls. This blog highlights our efforts in promoting disability inclusion, particularly sign language and deaf culture in Rwanda.",
    content: `<p>Since 2022, RNADW "UMUCYO" has been promoting comprehensive sexuality education (CSE) among school-going Deaf adolescent girls with the aim to improve access to SRHR information among Deaf adolescents girls and young women in the community, a project implemented in Nyarugenge and Huye Districts.</p>

<p>While the Government of Rwanda adopted the school-based CSE curriculum in 2016, marginalized girls and young women face numerous challenges due to a predominantly patriarchal and conservative society where sex education is a taboo topic, thereby making the delivery of the program inadequate, if not lacking in quality. As a result, girls continue to face unwanted pregnancy, sexual violence and unsafe abortion. This situation is precarious enough for all young people, however <strong>Deaf adolescent girls and young women who find themselves at the intersection of disability and gender face double discrimination.</strong></p>

<h2>Challenges in CSE Delivery</h2>
<p>During the course of the project implementation, we faced challenges with school authorities who opposed and closely scrutinized the delivery of the CSE where we intervened. For instance, many school headmasters opposed the demonstration of male condom use. Also, teachers lack Sign Language skills and knowledge of technical jargon to deliver CSE to girls with disabilities.</p>

<p>Having experienced this, we devised new approaches to engage young people via out-of-school programs in youth centres. In the long run, the project will reach at least <strong>200 Deaf adolescent girls and young women aged 14-35</strong> in the two districts. To achieve that, it is paramount to work with youth centre service providers.</p>

<h2>Meet Thadeo Talemwa</h2>
<p><strong>Thadeo Talemwa</strong> (male, 35 years) is a coordinator of Kimisagara Youth Centre, situated at the heart of Kigali City in Nyarugenge District. Thadeo is responsible for providing health-related information and services to adolescents and young women clients. These include voluntary HIV testing and counseling, sexuality education, linkage to government livelihood programs, and many others.</p>

<img src="/images/blogs/disability-inclusive/image2.png" alt="Mr. Tadeo TALEMWA receiving sign language certificate" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Mr. Tadeo TALEMWA (second from the right, in Yellow T-shirt) receiving sign language certificate of completion.</p>

<p>Thadeo shed light on challenges faced by young people with disabilities. He explains that Deaf girls and young women are to an extent demotivated to reach out to them because of communication barriers. <em>"Those who come to the center are often accompanied by someone else, usually a member of their family or anyone else who assists with interpretation, so my clients are forced to disclose their needs in the presence of other people. Privacy is an issue!"</em></p>

<p>So when RNADW "UMUCYO" approached him with the invitation to attend a sign language training, he jumped at the opportunity! Together with other youth center service providers (10 in total), Thadeo attended a three-month training course from March to May 2024 on Rwandan Sign Language. Classes took place three times a week for 3 hours each, facilitated by qualified deaf sign language instructors.</p>

<h2>Strategic Partnerships</h2>
<img src="/images/blogs/disability-inclusive/image3.jpg" alt="Alphonsine Uwimana, RNADW Field Officer" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Alphonsine Uwimana, RNADW "UMUCYO" Field Officer</p>

<p>According to <strong>Alphonsine Uwimana</strong>, RNADW "UMUCYO" Field Officer, working strategically with district authorities including those in charge of youth and disability was of utmost importance to identify disability-friendly and safe spaces for convening, and the needs in the community. This is why training sessions took place within youth centres.</p>

<blockquote>"Even though Sign Language services are lacking, many Deaf girls feel more comfortable approaching youth centre workers, compared to learning about CSE in schools because unlike formal schools, youth centres do not restrict information or services. So RNADW "UMUCYO" sees this as an opportunity, and not a challenge."</blockquote>

<p>It is worth mentioning as well that most often, Deaf girls with no formal education lack Sign Language skills, so youth centres can potentially be a safe space for them.</p>

<h2>Thadeo's Takeaway</h2>
<blockquote>"Before I attended this training, I had no prior exposure to Sign Language. Now I have acquired basic knowledge which gives me confidence to interact with my Deaf clients. I also learned not to assume every Deaf client uses Sign Language, so respecting every client's preferred mode of communication is important, for example using written communication like notes. Of course, my skills are not at a standard level, so I will continue to practice, hoping to receive an advanced course in the future or coaching from RNADW 'UMUCYO'."</blockquote>

<p>He also hopes such training can be extended to 32 other youth centres across the country as this will mobilise and encourage Deaf young people to use these services.</p>

<h2>Leadership Commitment</h2>
<img src="/images/blogs/disability-inclusive/image4.jpg" alt="Dative Mukashema, Executive Director" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Dative Mukashema, RNADW "UMUCYO" Executive Director</p>

<p><strong>Dative Mukashema</strong>, RNADW "UMUCYO" Executive Director acknowledges that resources are limited, however forging partnerships with various stakeholders and putting Deaf women and girls needs at the centre is key to ensure delivery of an inclusive and sustainable agenda for Deaf adolescent girls and young women.</p>

<blockquote>"Our advocacy efforts in the districts where we work encourage greater accountability of district officials to plan and budget for Sign Language interpretation and training on deaf culture in annual performance contracts, also known as Imihigo. If these efforts are institutionalised, then we will see more inclusion of Deaf people."</blockquote>

<p>We extend our heartfelt gratitude to our valued donor, <strong>Kvinna till Kvinna</strong>, and our esteemed partners, the <strong>Ministry of Youth and Arts</strong>, <strong>Kimisagara YEGO Center</strong>, and <strong>Nyarugenge District</strong>, for their invaluable support in making these initiatives successful.</p>`,
    author: "RNADW Team",
    authorRole: "Communications",
    date: "Feb 2025",
    readTime: "8 min read",
    category: "Inclusion",
    categoryColor: "#2563EB",
    image: "/images/blogs/disability-inclusive/image1.jpg",
    featured: false,
    published: true,
  },
  {
    title: "RNADW \"UMUCYO\" Forges Dynamic Alliances for Disability Inclusion",
    slug: "dynamic-alliances",
    excerpt: "RNADW \"UMUCYO\" forges dynamic alliances to champion disability inclusion and intersectional feminism, creating empowering spaces for women and marginalized communities through Sign Language training partnerships.",
    content: `<p>Partnerships and alliances are very important to our mission. We believe that in order to achieve lasting impact in the lives of women and girls with disabilities, we need to engage with like-minded institutions including disability-rights networks, feminist and women's rights organizations and intergovernmental organizations.</p>

<p>This is why in our efforts to promote disability inclusion, in particular deaf culture, we organised Sign Language training for women's rights organisations that promote young women's access to sexual and reproductive justice and the prevention of gender-based violence among adolescents and young people.</p>

<h2>Partnership with UNHCR Rwanda</h2>
<p>Since our partnership with the UNHCR in Rwanda kicked off in 2023, we mapped out the needs of refugee women with disabilities and assessed current programs that promote education on gender equality and access to sexual and reproductive health services. Our assessment showed that these programs and the staff responsible for delivering these services including those based at the headquarters, humanitarian workers and community mobilizers lack basic Sign Language skills.</p>

<p>We then organised a three-months training course from March to May 2024, with 3 weekly sessions, each lasting 3 hours. In total, <strong>16 people were trained.</strong></p>

<h2>Rochee Dusabe's Story</h2>
<p><strong>Rochee Dusabe</strong> (female, 35 years) is a Field Coordinator at Empower Rwanda, a women-led non-governmental organisation that supports women and youth through skills and knowledge enhancing to create sustainable change for them, their families, and their communities. Rochee is responsible for linking the organisation's constituency of young women and adolescent girls from vulnerable backgrounds to existing community health services.</p>

<blockquote>"Sign Language is like any other languages spoken in Rwanda, and I always welcome an opportunity to learn something new. I also knew I wanted to be a better communicator with our constituencies with disabilities."</blockquote>

<h2>Ceasar Manzi's Perspective</h2>
<p><strong>Ceasar Manzi</strong> (male, 33 years) is a Human Resources Associate at UNHCR in Kigali. The institution is mandated to protect and assist refugees and other displaced persons.</p>

<blockquote>"This training enabled me to create an inclusive and diverse environment for Deaf persons I communicate with, to bridge communication gaps, promote accessibility, and create a space for those with a hearing disability so they can be heard. It was a step towards breaking down barriers and fostering a more connected and equitable culture as a lack we had in our Human Resources unit."</blockquote>

<img src="/images/blogs/dynamic-alliances/image2.jpg" alt="Rochee Dusabe during sign language class at UNHCR office" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Rochee Dusabe (in Red) during sign language class at UNHCR office in Kigali</p>

<h2>Changing Attitudes</h2>
<p>Rochee Dusabe believes she changed her attitude towards the language: <em>"I used to think Sign Language was so complicated that I could never master it. However, these past three months I have proven myself otherwise, Sign Language is like any other language. You just need to put your efforts into it. I now enjoy it. To think that so many of us hearing individuals cannot bridge that gap and engage with Deaf people, especially those to whom we provide services, is unacceptable."</em></p>

<h2>What Needs to Be Done</h2>
<p>Ceasar Manzi thinks having a three months' basic Sign Language is only a teaser; more is needed like additional advanced courses, including mentorship from qualified instructors. As a Human Resources person, he believes organisations and leadership need to put in place mechanisms for integration and adoption of Sign Language in the workplace.</p>

<p>Rochee Dusabe also agreed: <em>"We need to mobilise as many people as possible, especially at the community level so they can learn Sign Language. I believe this can be done using community youth centres where many young people congregate. We can also take advantage of existing and free of charge visual resources available on social media like on YouTube to self-teach."</em></p>

<h2>Advocacy for Sign Language Recognition</h2>
<img src="/images/blogs/dynamic-alliances/image3.jpg" alt="RNADW advocacy efforts" class="w-full rounded-xl my-8" />

<p><strong>Dative Mukashema</strong>, RNADW "UMUCYO" Executive Director said: <em>"We are working to make our organisation a partner of choice when it comes to disability inclusion, in particular in the advocacy for Deaf women and girls. We recognise that the women's movement in Rwanda has a long way to go when it comes to promoting an intersectional agenda that leaves nobody behind. The will is there, and so our role is to lead and support others to learn about deaf culture so they can be advocates for Deaf women and girls where we are not present."</em></p>

<p>RNADW "UMUCYO" and allies advocate for the enactment of an organic law which recognises Sign Language as the 4th official language used in Rwanda. In September 2023, the government began the distribution of the Rwandan Sign Language Dictionary. RNADW "UMUCYO" advocates for expedition in the dissemination of the dictionary across the country.</p>

<p>We sincerely appreciate the invaluable support and collaboration of our partners, <strong>UNHCR Rwanda</strong> and <strong>Kvinna till Kvinna</strong>, whose contributions have been instrumental in the success of these initiatives.</p>`,
    author: "RNADW Team",
    authorRole: "Communications",
    date: "Feb 2025",
    readTime: "7 min read",
    category: "Partnerships",
    categoryColor: "#10B981",
    image: "/images/blogs/dynamic-alliances/image1.png",
    featured: false,
    published: true,
  },
  {
    title: "Empowering Rwanda's Parents to Connect with Their Deaf Children",
    slug: "empowering-parents",
    excerpt: "This blog underscores our commitment to advancing intersectional disability inclusion, with a focus on elevating sign language and Deaf culture in Rwanda through parent education programs.",
    content: `<p>Sign language is a language that is expressed through manual articulations in combination with non-manual elements; it is a full-fledged natural language with its own grammar and lexicon. The Deaf community in Rwanda comprises of Deaf and Hard-of-Hearing individuals with varying levels of hearing loss, who share a common language, common experiences, values, and a common way of interacting with each other and with hearing people. This is what is commonly referred to as <strong>Deaf culture</strong>.</p>

<p>International and Rwandan laws recognize Deaf people's right to cultural and linguistic identity as stipulated in the United Nations Convention on the Rights of Persons with Disabilities (UNCRPD) which was ratified by the Government of Rwanda in 2008. Article 30 section 4 says: <em>"Persons with disabilities shall be entitled, on an equal basis with others, to recognition and support of their specific cultural and linguistic identity, including sign languages and deaf culture."</em></p>

<h2>Our Mission</h2>
<p>As a Deaf women-led organization, we have made it our mission to defend and advance the rights of Deaf women and girls in Rwanda. We promote inclusion and equality in education, justice, health and other aspects of life where Deaf women and girls face discrimination.</p>

<p>Since the beginning of 2024, we embarked on the journey to promote Rwanda Sign Language skills and educate the public on deaf culture. Our purpose was twofold:</p>

<ul>
<li><strong>To promote inclusion:</strong> we recognize that communication barriers prevent Deaf women and girls from accessing and using services they are entitled to live a life free from violence and discrimination.</li>
<li><strong>To promote healthy interpersonal relationships:</strong> Sign Language education challenges hearing individuals to think visually and adapt their communication style, thereby fostering meaningful interactions and interpersonal skills with Deaf and Hard-of-Hearing people in their surroundings.</li>
</ul>

<h2>Parent Training Program</h2>
<p>To select participants, RNADW "UMUCYO" worked with local authorities in Huye and Nyarugenge Districts to select possible participants with no prior exposure to Sign Language. <strong>20 parents</strong> were then invited to attend the training, which was organized as 3 sessions per week for 3 months, each session lasting 3 hours. These trainings took place at community youth centers, and were facilitated by qualified Sign Language instructors.</p>

<img src="/images/blogs/empowering-parents/image1.jpg" alt="Appoline receiving certificate" class="w-full rounded-xl my-8" />
<p class="text-sm text-gray-500 italic text-center -mt-4 mb-8">Appoline (second from right) receives a certificate for the completion of a sign language training.</p>

<h2>Appoline's Story</h2>
<p><strong>Appoline Nzambazimana</strong> (female, 42 years) is a mother to a Deaf daughter and a parent participant in the training. She lives in Mbazi Sector, Huye District, in the Southern Province. Prior to the training, she explains that she always had challenges communicating with her Deaf daughter, especially during her teenage years.</p>

<p>Her daughter is currently enrolled in a technical college and has had the chance to learn and use Rwanda Sign Language. This created a vacuum in their communication and relationship. Her daughter had always felt uncomfortable opening up to her mother due to this communication barrier.</p>

<blockquote>"This was an opportunity for me to learn how to sign. I also learned so much about adolescent sexual health. My daughter now has two children of her own. She trusts me more, and she opens up to me more about family planning and other issues. So in a way, this training did two things at once."</blockquote>

<h2>Project Coordination</h2>
<img src="/images/blogs/empowering-parents/image2.jpg" alt="Training session" class="w-full rounded-xl my-8" />

<p><strong>Diane Niyonkuru</strong> is a RNADW "UMUCYO" Project coordinator and staff overseeing the project activities. She said she saw firsthand the desire that many parents have had to learn to communicate with their children better beyond the training period.</p>

<blockquote>"Sign Language propels parents to think of how to better communicate with their children. Beyond that, it also gives them the urge to expand their learning so they can keep the communication with their children going."</blockquote>

<h2>Challenges and Future Plans</h2>
<p>While this training was without a doubt impactful to those who were in dire need, it came with challenges:</p>

<ul>
<li>Some parents found it hard to consistently attend 3 sessions a week, especially female parents who often have to juggle domestic duties and public life.</li>
<li>There is a shortage of professional sign language instructors across the country.</li>
</ul>

<p>In the future, RNADW "UMUCYO" hopes to solve this by increasing accessibility of Sign Language learning using technology. Together with partners, we are exploring the development of a mobile application with more practical, visual and accessible learning aids.</p>

<h2>Recommendations</h2>
<p>Appoline recommends keeping this fire burning: <em>"As a parent whose child now has good knowledge of Sign Language, she would like to see Deaf young people empowered enough to make better decisions about their sexuality and wellbeing, and parents accompanied in their journey of learning. She believes the next level of advanced learning will significantly enhance skills she acquired. She also believes it's important to teach other members of the family and hospital workers in order to improve overall community acceptance of Deaf people and Deaf culture."</em></p>`,
    author: "RNADW Team",
    authorRole: "Communications",
    date: "Feb 2025",
    readTime: "6 min read",
    category: "Education",
    categoryColor: "#8B5CF6",
    image: "/images/blogs/empowering-parents/image1.jpg",
    featured: false,
    published: true,
  },
  {
    title: "RNADW Survey Calls for Action on SRH Communication for Young Deaf Girls",
    slug: "rnadw-survey",
    excerpt: "A new baseline survey found that young deaf girls do not have a formal channel to access information on Sexual Reproductive Health. The survey calls for urgent action to address this gap.",
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

<p><em>"Therefore, young deaf persons require access to SRHR services and education in the same manner that young people without disabilities do. Enabling young deaf girls to realize their SRHR, such as the delay of pregnancy and prevention of infection, in turn helps to ensure other rights are realized, such as the right to education, economic opportunities, financial independence, and social empowerment."</em></p>

<h2>Increased Risk of Violence</h2>
<p>The increased risk of violence, negligence, sexual abuse, discrimination and denial of rights faced by deaf women and girls means that provision of SRHR services and education is essential for young deaf girls and women.</p>

<h2>Survey Methodology</h2>
<p>A sample size of <strong>112 participants</strong> was chosen to participate in this study:</p>

<ul>
<li>79 participated in school Youth Focus group discussions</li>
<li>33 including heads of health centers, parents of Deaf Girls and deaf girls out of school participated in key Informants Interviews</li>
</ul>

<h2>Knowledge on SRH by Deaf Girls Students</h2>
<p>Participants from Nyarugenge District showed an improved level on SRH knowledge with a 50% scale compared to those in Huye district, and even those with medium level were the youngest ones in the group who haven't had their first period.</p>

<blockquote>"Most of the knowledge are acquired from different school curriculums including CSE (Comprehensive Sex Education module), which is delivered in formal education system, thus those undergoing Vocational trainings in TVET schools don't benefit from CSE."<br/><em>— Girls currently in TVET program at Huye during focus groups discussions</em></blockquote>

<h2>Menstrual Hygiene Management</h2>
<p>The kind of menstrual hygiene management being used by 79 Deaf girls who participated in focus group discussions remains archaic, whereby, the highest figure shows that they are still using traditional means such as the usage of a cloth.</p>

<h2>Survey Recommendations</h2>
<p>The baseline survey and needs assessment report recommends:</p>

<ul>
<li>Training of teachers on sign language communication on the topics covered in school comprehensive Sexual Education (CSE) curriculum</li>
<li>Creating an inclusive safe space for teenage deaf girls in schools</li>
<li>Providing training modules and activities focused on topics such as puberty, HIV, delaying sexual debut</li>
<li>Facilitating visits to community health centers</li>
</ul>

<p><strong>This survey underscores the urgent need for accessible, formal channels of SRH information for young deaf girls in Rwanda.</strong></p>`,
    author: "Elias Hakizimana",
    authorRole: "Researcher",
    date: "Feb 2025",
    readTime: "5 min read",
    category: "Research",
    categoryColor: "#EF4444",
    image: "/images/b1.png",
    featured: false,
    published: true,
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
  { src: "/images/gallery/Highlighting-women's-rights-initiatives.jpg", title: "Women's Rights Initiatives", category: "Advocacy", categoryColor: "#EC4899", description: "Advocating for deaf women's rights", published: true },
  { src: "/images/gallery/Parents-connecting-with-deaf-community.jpg", title: "Parents Connecting with Community", category: "Family", categoryColor: "#8B5CF6", description: "Parents learning to connect with deaf community", published: true },
  { src: "/images/gallery/Teaching-sign-language-to-community-members.jpg", title: "Teaching Sign Language", category: "Education", categoryColor: "#FACC15", description: "Sign language education for community members", published: true },
  { src: "/images/gallery/Vocational-training-demonstration-for-families.jpg", title: "Vocational Training Demo", category: "Training", categoryColor: "#FACC15", description: "Demonstrating vocational skills to families", published: true },
  { src: "/images/gallery/Recognizing-outstanding-contributions.jpg", title: "Recognizing Outstanding Contributions", category: "Awards", categoryColor: "#10B981", description: "Honoring those who made significant contributions", published: true },
  { src: "/images/gallery/Showcasing-deaf-culture-and-traditions.jpg", title: "Showcasing Deaf Culture", category: "Culture", categoryColor: "#EC4899", description: "Displaying rich deaf cultural traditions", published: true },
  { src: "/images/gallery/Open-dialogue-with-parents-and-advocates.jpg", title: "Open Dialogue Session", category: "Community", categoryColor: "#2563EB", description: "Discussion between parents and advocates", published: true },
  { src: "/images/gallery/Memorable-moments-from-community-day.jpg", title: "Memorable Community Day", category: "Events", categoryColor: "#10B981", description: "Special moments from community gathering", published: true },
];

const videos = [
  { videoId: "CpKlW3lK6XI", title: "#Genderbasedviolence-Dufatanye kurwanya ihohoterwa rikorerwa Abana", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "rQ5UpQzFvxE", title: "#genderbasedviolence -Gukumira no kurwanya ihohoterwa rishingiye ku gitsina mu rubyiruko", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "Xirgo33Vf1U", title: "#genderbasedviolence -Ubundi bwoko bw'ihohoterwa", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "i_SPaBuKwYc", title: "#genderbasedviolence -Ibitera ihohoterwa rishingiye ku gitsina mu Rwanda", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "ffZeDfQZs3o", title: "#genderbasedviolence -Uburyo bwo Gukumira ihohoterwa rishingiye ku gitsina", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "YUTe3E5UqQM", title: "#genderbasedviolence -Uburyo bwo Gufasha uwahohotewe", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "EeQkGC09ehI", title: "#genderbasedviolence -Wabigenza ute igihe ukorewe ihohoterwa rishingiye ku gitsina", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "rELYSfwYIhE", title: "#genderbasedviolence -Ihohoterwa rikorerwa abafite ubumuga bwo kutumva no kutavuga", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "N1mdwqWn-io", title: "#genderbasedviolence -Ihohoterwa rishingiye ku gitsina rikorwa mu buryo butandukanye bitewe n'umuco", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "_A6aKfiHz3w", title: "#genderbasedviolence - Twese tube maso duhagurukire kurwanya abasambanya abana", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "JveH_UWyn6M", title: "INDA Z'ABANGAVU UBURYO BWO GUKUMIRA INDA Z'ABANGAVU", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "pLWXHSn9yMU", title: "SHORT VIDEO 03 - UBURINGANIRE N'UBWUZUZANYE", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "lZHeiQ5kM2I", title: "SHORT VIDEO 02 - UBURINGANIRE N'UBWUZUZANYE", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "epC-d0fImN8", title: "SHORT VIDEO 01 - UBURINGANIRE N'UBWUZUZANYE", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "V0DjfsCrxr4", title: "FULL VIDEO - UBURINGANIRE N'UBWUZUZANYE", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "vP7hskEAD1I", title: "SHORT VIDEO 02 - KURWANYA NO GUKUMIRA VIRUSI ITERA SIDA", description: "RNADW educational content and advocacy", category: "hiv", published: true },
  { videoId: "CDZghwHvHcY", title: "SHORT VIDEO 01 - KURWANYA NO GUKUMIRA VIRUSI ITERA SIDA", description: "RNADW educational content and advocacy", category: "hiv", published: true },
  { videoId: "sEKnJ8ZDKIc", title: "FULL VIDEO - KURWANYA NO GUKUMIRA VIRUSI ITERA SIDA", description: "RNADW educational content and advocacy", category: "hiv", published: true },
  { videoId: "Py7R5vYo_aM", title: "SHORT VIDEO 05- GUKUMIRA NO KURWANYA IHOHOTERWA", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "jjw0KXSPmFA", title: "SHORT VIDEO 04- GUKUMIRA NO KURWANYA IHOHOTERWA", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "XvDK4EYda0g", title: "SHORT VIDEO 03- GUKUMIRA NO KURWANYA IHOHOTERWA", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "MNyfuwvPFKQ", title: "SHORT VIDEO 02- GUKUMIRA NO KURWANYA IHOHOTERWA", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "WoJHDPRR73o", title: "SHORT VIDEO 01- GUKUMIRA NO KURWANYA IHOHOTERWA", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "TJRk1RzjKDA", title: "FULL VIDEO - GUKUMIRA NO KURWANYA IHOHOTERWA", description: "RNADW educational content and advocacy", category: "sgbv", published: true },
  { videoId: "0l_TZZqnbE8", title: "CEDAW Quick and Concise Explaining the Principle of Non Discrimination", description: "RNADW educational content and advocacy", category: "cedaw", published: true },
  { videoId: "OUV738An43g", title: "CEDAW Quick and Concise Explaining the Principle of Non Discrimination (Rwanda Sign language)", description: "RNADW educational content and advocacy", category: "cedaw", published: true },
  { videoId: "Jr8TDRCxv28", title: "CEDAW Demystified Substantive Equality (Rwanda Sign Language)", description: "RNADW educational content and advocacy", category: "cedaw", published: true },
  { videoId: "2cE41m7yW_k", title: "CEDAW Principle of State Obligation (Rwandan Sign language)", description: "RNADW educational content and advocacy", category: "cedaw", published: true },
  { videoId: "8ENkmxqhghM", title: "UBUZIMA BW'IMYOROROKERE /Comprehensive Sexual Education #CSE", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "MZdDIMXmL7Y", title: "SHORT VIDEO- UBUZIMA BW'IMYOROROKERE", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "HMev4vycg1o", title: "SHORT-VIDEO UBUZIMA BW'IMYOROROKERE", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "enlmQx3695Q", title: "SHORT-VIDEO 2 UBUMENYI KU MIBEREHO N'IMIBANIRE Y'URUBYIRUKO", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "RuvQCiX5Qbs", title: "SHORT- VIDEO 1 UBUMENYI KU MIBEREHO N'IMIBANIRE Y'URUBYIRUKO", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "GePEk4Vz3Go", title: "LONG-VIDEO UBUMENYI KU MIBEREHO N'IMIBANIRE Y'URUBYIRUKO", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "kufgb6Ry7eU", title: "SHORT-VIDEO IBIYOBYABWENGE", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "9imWYTcn82w", title: "LONG-VIDEO IBIYOBYABWENGE", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "sEFtdcLz_t8", title: "Ukwezi k'Umugore (Imihango)", description: "RNADW educational content and advocacy", category: "menstruation", published: true },
  { videoId: "baWmY9iFU4M", title: "Ukwezi k'Umugore (Imihango)", description: "RNADW educational content and advocacy", category: "menstruation", published: true },
  { videoId: "zq9xjkE47Rw", title: "Short-video 2 Ukwezi k'Umugore (Imihango)", description: "RNADW educational content and advocacy", category: "menstruation", published: true },
  { videoId: "N5X5GNBHZm0", title: "Short -video 1 Ukwezi k'Umugore (Imihango)", description: "RNADW educational content and advocacy", category: "menstruation", published: true },
  { videoId: "z_Bws3K-nbU", title: "Long-video Ukwezi k'Umugore (Imihango)", description: "RNADW educational content and advocacy", category: "menstruation", published: true },
  { videoId: "Uhi2uNfwXVw", title: "Long -video Serivice z'Ubuzima bw'Imyororokere", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "Z3gqJLFE5hY", title: "Short-video 3 Serivice z'Ubuzima bw'Imyororokere", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "9hzwq6KYzik", title: "Short -video 2 Serivice z'Ubuzima bw'Imyororokere", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "tpc-etyBkFQ", title: "Serivice z'Ubuzima bw'Imyororokere", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "g57i1-Lw-Pg", title: "#IKIGANIRO CYA 2 IGICE CYA 2: SERIVICE Z'UBUZIMA BW'IMYOROROKERE", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "KyyhxMSJvjA", title: "#IKIGANIRO CYA 2 IGICE CYA 1: SERIVICE Z'UBUZIMA BW'IMYOROROKERE", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "bviu4ZbH9B8", title: "#IKIGANIRO CYA 3: GUSAMA, GUTWITA, N'UBUGUMBA", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "vb4lDo5BKFY", title: "#ikiganiro CYA 1: UBUZIMA BW'IMYOROROKERE #srhr", description: "RNADW educational content and advocacy", category: "srhr", published: true },
  { videoId: "SFhndjv-PfY", title: "About Rwanda National Association of Deaf women _RNADW", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "AAj6khtk8mA", title: "#MyNameMyIdentity: Meet IBISHAKA Lucie", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "7au490_-ZRE", title: "#MyNameMyIdentity: Meet Mushimiyimana Jeannette.", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "kFNbkZAnKX8", title: "#MyNameMyIdentity :I feel pain calling my child 'IKIRAGI'", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "JuhNND3NPgM", title: "#MyNameMyIdentity; Mrs.Nsanga Sylvie : The Gender, social justice, and inclusion activist.", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "-LulMcMM1LE", title: "Deaf women and girls deserve right names - #MyNameMyIdentity", description: "RNADW educational content and advocacy", category: "stories", published: true },
  { videoId: "f-DcGIL8Je0", title: "Forms of Gender Based Violence #GBV", description: "RNADW educational content and advocacy", category: "stories", published: true },
];

const resources = [
  {
    title: "Baseline Survey on Access to SRHR and GBV Services",
    slug: "baseline-survey-srhr-gbv",
    description: "Comprehensive baseline survey on access to Sexual and Reproductive Health Rights (SRHR) and Gender-Based Violence (GBV) services in Huye and Kigali districts.",
    category: "Research",
    categoryColor: "#2563EB",
    fileType: "PDF",
    fileSize: "2.5 MB",
    icon: "📊",
    downloadUrl: "/documents/Baseline survey on Access to SRHR and GBV services in Huye and Kigali.pdf",
    published: true,
  },
  {
    title: "Guidelines: Access to Justice for Deaf Women & Girls",
    slug: "access-justice-guidelines",
    description: "Comprehensive guidelines for ensuring deaf women and girls have proper access to justice systems and legal support.",
    category: "Advocacy",
    categoryColor: "#EC4899",
    fileType: "PDF",
    fileSize: "1.8 MB",
    icon: "⚖️",
    downloadUrl: "/documents/Guidelines_Access_Justice_for_Deaf_Women & Girls  .pdf",
    published: true,
  },
  {
    title: "RNADW CEDAW Shadow Report",
    slug: "cedaw-shadow-report",
    description: "Shadow report submitted to the Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) committee highlighting issues affecting deaf women in Rwanda.",
    category: "Advocacy",
    categoryColor: "#EC4899",
    fileType: "DOCX",
    fileSize: "1.2 MB",
    icon: "📄",
    downloadUrl: "/documents/RNADW-CEDAW -Shadow Report .docx",
    published: true,
  },
  {
    title: "SRHR Policy Brief",
    slug: "srhr-policy-brief",
    description: "Policy brief on Sexual and Reproductive Health Rights for deaf women in Rwanda.",
    category: "Policy",
    categoryColor: "#10B981",
    fileType: "PDF",
    fileSize: "500 KB",
    icon: "📋",
    downloadUrl: "/documents/policy-briefs/srhr-policy-brief.pdf",
    published: true,
  },
  {
    title: "Ministry of Health Policy Brief",
    slug: "ministry-health-brief",
    description: "Policy recommendations for the Ministry of Health on inclusive healthcare services for deaf women.",
    category: "Policy",
    categoryColor: "#10B981",
    fileType: "PDF",
    fileSize: "450 KB",
    icon: "🏥",
    downloadUrl: "/documents/policy-briefs/ministry-of-health-brief.pdf",
    published: true,
  },
  {
    title: "Education Stakeholders Policy Brief",
    slug: "education-stakeholders-brief",
    description: "Policy brief targeting education stakeholders on inclusive education for deaf students.",
    category: "Education",
    categoryColor: "#FACC15",
    fileType: "PDF",
    fileSize: "480 KB",
    icon: "📖",
    downloadUrl: "/documents/policy-briefs/education-stakeholders-brief.pdf",
    published: true,
  },
  {
    title: "Development Partners Policy Brief",
    slug: "development-partners-brief",
    description: "Policy brief for development partners on supporting deaf women's empowerment programs.",
    category: "Partnership",
    categoryColor: "#8B5CF6",
    fileType: "PDF",
    fileSize: "520 KB",
    icon: "🤝",
    downloadUrl: "/documents/policy-briefs/development-partners-brief.pdf",
    published: true,
  },
];

const partners = [
  { name: 'RIB', category: 'Law Enforcement', color: '#2563EB', logo: '', website: '', sortOrder: 1, published: true },
  { name: 'UNHCR', category: 'Humanitarian Aid', color: '#FACC15', logo: '', website: 'https://unhcr.org', sortOrder: 2, published: true },
  { name: 'Ministry of Youth', category: 'Youth Programs', color: '#FACC15', logo: '', website: '', sortOrder: 3, published: true },
  { name: 'German Embassy', category: 'Development', color: '#2563EB', logo: '', website: '', sortOrder: 4, published: true },
  { name: 'KVINNA', category: 'Equality', color: '#2563EB', logo: '', website: '', sortOrder: 5, published: true },
  { name: 'NUDOR', category: 'Disability Rights', color: '#FACC15', logo: '', website: '', sortOrder: 6, published: true },
  { name: 'Sweden Embassy', category: 'International Aid', color: '#2563EB', logo: '', website: '', sortOrder: 7, published: true },
];

const testimonials = [
  {
    quote: "RNADW changed my life. I found my voice and learned that being deaf doesn't limit my potential. Now I help other deaf women in my community.",
    author: "Marie Claire",
    role: "Community Leader, Kigali",
    image: "/images/0U9A5398.JPG",
    published: true,
  },
  {
    quote: "Before joining RNADW, I felt isolated. Now I have a community of strong deaf women who support each other. Together, we are unstoppable.",
    author: "Jeanne d'Arc",
    role: "Entrepreneur, Musanze",
    image: "/images/0U9A5432.JPG",
    published: true,
  },
  {
    quote: "The training programs gave me skills to start my own business. RNADW believes in deaf women's abilities and helps us achieve our dreams.",
    author: "Esperance",
    role: "Business Owner, Huye",
    image: "/images/0U9A5465.JPG",
    published: true,
  },
];

const teamMembers = [
  {
    name: "Uwimana Jacqueline",
    role: "Executive Director",
    description: "Leading RNADW's mission to empower deaf women across Rwanda",
    image: "/images/0U9A5473.JPG",
    published: true,
  },
  {
    name: "Mukamana Grace",
    role: "Program Manager",
    description: "Coordinating training and empowerment programs",
    image: "/images/0U9A5516.JPG",
    published: true,
  },
  {
    name: "Ingabire Diane",
    role: "Advocacy Officer",
    description: "Leading policy advocacy and rights campaigns",
    image: "/images/0U9A5550.JPG",
    published: true,
  },
];

const activities = [
  {
    title: "Sign Language Training",
    slug: "sign-language-training",
    subtitle: "Building Communication Skills",
    description: "Comprehensive sign language courses for deaf women, families, and communities",
    icon: "🤟",
    image: "/images/image1.png",
    published: true,
  },
  {
    title: "Vocational Skills Development",
    slug: "vocational-skills",
    subtitle: "Economic Empowerment",
    description: "Training in tailoring, crafts, agriculture, and business skills",
    icon: "💼",
    image: "/images/image2.png",
    published: true,
  },
  {
    title: "Health Awareness Programs",
    slug: "health-awareness",
    subtitle: "Accessible Healthcare Information",
    description: "Sexual and reproductive health education in sign language",
    icon: "🏥",
    image: "/images/image3.png",
    published: true,
  },
  {
    title: "Rights Advocacy",
    slug: "rights-advocacy",
    subtitle: "Fighting for Equality",
    description: "Advocating for deaf women's rights and inclusive policies",
    icon: "⚖️",
    image: "/images/image4.png",
    published: true,
  },
];

const siteSettings = [
  {
    key: "hero_video_url",
    value: "https://www.youtube.com/watch?v=SFhndjv-PfY",
    label: "Hero Section Video URL",
    description: "YouTube video URL for the hero section background",
    type: "url",
  },
];

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected successfully!');

    // Clear existing data
    console.log('Clearing existing data...');
    await BlogPost.deleteMany({});
    await GalleryImage.deleteMany({});
    await Video.deleteMany({});
    await Resource.deleteMany({});
    await Partner.deleteMany({});
    await Testimonial.deleteMany({});
    await TeamMember.deleteMany({});
    await Activity.deleteMany({});
    await SiteSetting.deleteMany({});

    // Insert new data
    console.log('Seeding blog posts...');
    await BlogPost.insertMany(blogPosts);
    
    console.log('Seeding gallery images...');
    await GalleryImage.insertMany(galleryImages);
    
    console.log('Seeding videos...');
    await Video.insertMany(videos);
    
    console.log('Seeding resources...');
    await Resource.insertMany(resources);
    
    console.log('Seeding partners...');
    await Partner.insertMany(partners);
    
    console.log('Seeding testimonials...');
    await Testimonial.insertMany(testimonials);
    
    console.log('Seeding team members...');
    await TeamMember.insertMany(teamMembers);
    
    console.log('Seeding activities...');
    await Activity.insertMany(activities);
    
    console.log('Seeding site settings...');
    await SiteSetting.insertMany(siteSettings);

    console.log('\n✅ Database seeded successfully!');
    console.log(`- ${blogPosts.length} blog posts`);
    console.log(`- ${galleryImages.length} gallery images`);
    console.log(`- ${videos.length} videos`);
    console.log(`- ${resources.length} resources`);
    console.log(`- ${partners.length} partners`);
    console.log(`- ${testimonials.length} testimonials`);
    console.log(`- ${teamMembers.length} team members`);
    console.log(`- ${activities.length} activities`);
    console.log(`- ${siteSettings.length} site settings`);

    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
