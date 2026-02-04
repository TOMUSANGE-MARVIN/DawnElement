'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Blog posts data - same as main blogs page
const blogPosts = [
  {
    id: 1,
    title: 'Empowering Voices Long Silenced: Deaf Girls and Women Trained to Prevent and Report SGBV',
    excerpt: 'In Musanze District, deaf girls, single mothers, and girls with disabilities gathered to reclaim their right to safety and dignity through groundbreaking SGBV prevention training organized by RNADW, Afro Ark, and HSMD under the campaign "Your protection doesn\'t protect me."',
    content: `
      <p>In the quiet hills of Musanze District, a group of young deaf girls, single mothers, and girls living with various disabilities gathered—not just to learn, but to reclaim their right to safety, dignity, and a future free from fear.</p>

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
      <p>Through this training, participants left not as victims waiting for rescue, but as <strong>informed, resilient advocates for their own protection</strong>. They gained tools to recognize warning signs, assert boundaries, seek timely help, and support one another. In a country where many girls with disabilities face barriers to reporting and disbelief from services, such knowledge can mean the difference between continued suffering and healing, between silence and justice.</p>

      <h2>A Beacon of Hope</h2>
      <p>This initiative is more than an event—it is a beacon of hope. By centering the experiences of deaf girls and women with disabilities, RNADW "UMUCYO", Afro Ark, HSMD, and their partners are lighting the path toward a Rwanda where every girl can live without fear, where her voice is heard, and where protection truly reaches those who need it most.</p>

      <p><strong>Together, we can ensure that "Your protection doesn't protect me" becomes a rallying cry for change—and a promise kept.</strong></p>
    `,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Jan 18, 2023',
    readTime: '10 min read',
    category: 'SGBV/VAWG',
    categoryColor: '#EC4899',
    image: '/images/b1.png',
    featured: true
  },
  {
    id: 2,
    title: '"CSE Training Transformed My Perspective" – A Parent-Teacher\'s Heartfelt Testimony',
    excerpt: 'Jean Paul Nshimiyimana, a dedicated teacher and adoptive father to a Deaf girl, shares how RNADW\'s Comprehensive Sexuality Education training transformed his ability to guide and protect Deaf adolescents.',
    content: `
      <p><strong>Jean Paul Nshimiyimana</strong> has always poured his heart into supporting Deaf children—both as a dedicated teacher and, most profoundly, as a loving adoptive father. Years ago, he opened his home and his life to a Deaf girl who could neither hear nor speak, rescuing her from vulnerability on the streets. Raising her became his sacred dual responsibility: nurturing her as a parent while equipping her, and others like her, with the tools to thrive.</p>

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

      <p>Through initiatives like RNADW's training, stories like Jean Paul's remind us that <strong>knowledge, delivered with empathy and accessibility, can break cycles of vulnerability and build futures filled with dignity and hope</strong>.</p>
    `,
    author: 'Jean Paul Nshimiyimana',
    authorRole: 'Teacher & Adoptive Father',
    date: 'Jul 21, 2025',
    readTime: '8 min read',
    category: 'SRHR',
    categoryColor: '#F97316',
    image: '/images/b2.png',
    featured: false
  },
  {
    id: 3,
    title: 'CSE Training: Empowering Nurses to Protect and Uplift Deaf Girls',
    excerpt: 'Powerful testimonies from nurses reveal how RNADW\'s Comprehensive Sexuality Education training is transforming healthcare for deaf girls in Rwanda, plus how SRHR efforts are bearing fruit in Nyamasheke District.',
    content: `
      <p>Deaf girls in Rwanda remain among the most vulnerable members of our society. Too often, they fall victim to forced sex, rape, and exploitation, leading to devastating consequences: unwanted pregnancies, sexually transmitted infections (STIs), and lifelong trauma. The root of this injustice lies in a painful silence—deaf girls are frequently denied accessible, accurate information about sexual and reproductive health (SRH), while many healthcare providers lack the specialized knowledge and confidence to serve them with dignity and effectiveness.</p>

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
      <p>Initiatives like RNADW's CSE training represent a vital step toward equity and justice. When nurses are empowered, deaf girls gain the knowledge to safeguard their health, dignity, and futures. The ripple effect is clear: fewer vulnerabilities, reduced instances of exploitation and unintended pregnancies, lower STI rates, and a healthcare system that truly serves everyone. <strong>This is not just education—it is empowerment, healing, and hope for a more inclusive Rwanda.</strong></p>
    `,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Jul 21, 2025',
    readTime: '12 min read',
    category: 'SRHR',
    categoryColor: '#F97316',
    image: '/images/b3.png',
    featured: false
  },
  {
    id: 4,
    title: 'RNADW "UMUCYO" Champions Disability-Inclusive Youth Centers in Rwanda',
    excerpt: 'Since 2022, RNADW "UMUCYO" has been promoting comprehensive sexuality education among school-going Deaf adolescent girls. This blog highlights our efforts in promoting disability inclusion, particularly sign language and deaf culture in Rwanda.',
    content: `
      <p>Since 2022, RNADW "UMUCYO" has been promoting comprehensive sexuality education (CSE) among school-going Deaf adolescent girls with the aim to improve access to SRHR information among Deaf adolescents girls and young women in the community, a project implemented in Nyarugenge and Huye Districts.</p>

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

      <p>We extend our heartfelt gratitude to our valued donor, <strong>Kvinna till Kvinna</strong>, and our esteemed partners, the <strong>Ministry of Youth and Arts</strong>, <strong>Kimisagara YEGO Center</strong>, and <strong>Nyarugenge District</strong>, for their invaluable support in making these initiatives successful.</p>
    `,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Feb 2025',
    readTime: '8 min read',
    category: 'Inclusion',
    categoryColor: '#2563EB',
    image: '/images/blogs/disability-inclusive/image1.jpg',
    featured: false
  },
  {
    id: 5,
    title: 'RNADW "UMUCYO" Forges Dynamic Alliances for Disability Inclusion',
    excerpt: 'RNADW "UMUCYO" forges dynamic alliances to champion disability inclusion and intersectional feminism, creating empowering spaces for women and marginalized communities through Sign Language training partnerships.',
    content: `
      <p>Partnerships and alliances are very important to our mission. We believe that in order to achieve lasting impact in the lives of women and girls with disabilities, we need to engage with like-minded institutions including disability-rights networks, feminist and women's rights organizations and intergovernmental organizations.</p>

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

      <p>We sincerely appreciate the invaluable support and collaboration of our partners, <strong>UNHCR Rwanda</strong> and <strong>Kvinna till Kvinna</strong>, whose contributions have been instrumental in the success of these initiatives.</p>
    `,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Feb 2025',
    readTime: '7 min read',
    category: 'Partnerships',
    categoryColor: '#10B981',
    image: '/images/blogs/dynamic-alliances/image1.png',
    featured: false
  },
  {
    id: 6,
    title: "Empowering Rwanda's Parents to Connect with Their Deaf Children",
    excerpt: 'This blog underscores our commitment to advancing intersectional disability inclusion, with a focus on elevating sign language and Deaf culture in Rwanda through parent education programs.',
    content: `
      <p>Sign language is a language that is expressed through manual articulations in combination with non-manual elements; it is a full-fledged natural language with its own grammar and lexicon. The Deaf community in Rwanda comprises of Deaf and Hard-of-Hearing individuals with varying levels of hearing loss, who share a common language, common experiences, values, and a common way of interacting with each other and with hearing people. This is what is commonly referred to as <strong>Deaf culture</strong>.</p>

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
      <p>Appoline recommends keeping this fire burning: <em>"As a parent whose child now has good knowledge of Sign Language, she would like to see Deaf young people empowered enough to make better decisions about their sexuality and wellbeing, and parents accompanied in their journey of learning. She believes the next level of advanced learning will significantly enhance skills she acquired. She also believes it's important to teach other members of the family and hospital workers in order to improve overall community acceptance of Deaf people and Deaf culture."</em></p>
    `,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Feb 2025',
    readTime: '6 min read',
    category: 'Education',
    categoryColor: '#8B5CF6',
    image: '/images/blogs/empowering-parents/image1.jpg',
    featured: false
  },
  {
    id: 7,
    title: 'RNADW Survey Calls for Action on SRH Communication for Young Deaf Girls',
    excerpt: 'A new baseline survey found that young deaf girls do not have a formal channel to access information on Sexual Reproductive Health. The survey calls for urgent action to address this gap.',
    content: `
      <p>A new baseline survey and needs assessment report on access to sexual reproductive health and rights (SRHR) services among deaf women and girls in Huye and Nyarugenge districts found out that <strong>young deaf girls do not have a formal channel to access information on the issues surrounding Sexual Reproductive Health (SRH).</strong></p>

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

      <p><strong>This survey underscores the urgent need for accessible, formal channels of SRH information for young deaf girls in Rwanda.</strong></p>
    `,
    author: 'Elias Hakizimana',
    authorRole: 'Researcher',
    date: 'Feb 2025',
    readTime: '5 min read',
    category: 'Research',
    categoryColor: '#EF4444',
    image: '/images/b1.png',
    featured: false
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post = blogPosts.find(p => p.id === postId);

  // Animations
  const heroSection = useScrollAnimation(0.1);
  const contentSection = useScrollAnimation(0.2);
  const sidebarSection = useScrollAnimation(0.2);

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post?.category && p.id !== postId)
    .slice(0, 3);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blogs"
            className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}>
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section
        ref={heroSection.ref}
        className={`relative min-h-[70vh] flex items-end overflow-hidden scroll-animate ${heroSection.isVisible ? 'visible' : ''}`}>

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Category */}
          <div
            className="inline-block px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-6"
            style={{
              backgroundColor: post.categoryColor,
              color: '#000'
            }}>
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: post.categoryColor, color: '#000' }}>
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-white">{post.author}</div>
                <div className="text-sm text-white/60">{post.authorRole}</div>
              </div>
            </div>
            <span className="hidden sm:block">•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div
              ref={contentSection.ref}
              className={`lg:col-span-2 scroll-animate delay-200 ${contentSection.isVisible ? 'visible' : ''}`}>

              {/* Excerpt */}
              <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-12 pb-12 border-b-2 border-gray-100">
                {post.excerpt}
              </p>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-black prose-headings:text-gray-900
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:my-6 prose-li:text-gray-700 prose-li:my-2
                  prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t-2 border-gray-100">
                <h3 className="text-lg font-black text-gray-900 mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div
              ref={sidebarSection.ref}
              className={`lg:col-span-1 scroll-animate-right delay-400 ${sidebarSection.isVisible ? 'visible' : ''}`}>

              {/* Author Card */}
              <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                <h3 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-6">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                    style={{ backgroundColor: post.categoryColor, color: '#000' }}>
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-gray-900">{post.author}</div>
                    <div className="text-sm text-gray-600">{post.authorRole}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Part of the RNADW team working to empower deaf women and girls across Rwanda through advocacy, education, and community support.
                </p>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-sm font-black uppercase tracking-wider text-gray-400 mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blogs/${relatedPost.id}`}
                        className="group block">
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              <div className="mt-8 rounded-3xl p-8 text-white"
                style={{ backgroundColor: '#2563EB' }}>
                <h3 className="text-xl font-black mb-4">Stay Updated</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Subscribe to receive the latest stories and updates from RNADW.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-blue-600 bg-white hover:scale-105 transition-transform">
                  Subscribe
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MORE ARTICLES CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Want to read more?</h2>
          <p className="text-gray-600 mb-8">Explore all our stories and insights from RNADW&apos;s work.</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black text-white transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}>
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
