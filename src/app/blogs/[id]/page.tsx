'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Blog posts data - same as main blogs page
const blogPosts = [
  {
    id: 1,
    title: 'Loud in Silence: Launching Our Strategic Plan 2025-2030',
    excerpt: 'RNADW proudly unveils our new Strategic Plan themed "Loud in Silence: Deaf Women and Girls Driving Change" - a bold vision for the next five years focusing on Participation, Power, and Partnership.',
    content: `
      <p>The Rwanda National Association of Deaf Women (RNADW) is proud to announce the launch of our Strategic Plan 2025-2030, themed <strong>"Loud in Silence: Deaf Women and Girls Driving Change"</strong>. This comprehensive five-year roadmap represents our commitment to fostering inclusive social-economic development that is deaf-women-centred, transformative, and accountable.</p>

      <h2>Our Strategic Vision</h2>
      <p>We envision an inclusive and just society where Deaf Women and Girls fully enjoy their rights, participate in decision-making processes, and benefit from all aspects of life. Our mission remains steadfast: to defend the rights of Deaf Women and Girls and promote their health rights, human rights, education, and socio-economic justice.</p>

      <h2>Four Strategic Pillars</h2>
      <p>Our strategy is built on four transformative pillars:</p>

      <h3>1. My Body, My Rights (Sexual and Reproductive Health and Rights)</h3>
      <p>Enabling a legal, policy, social, economic, and cultural environment that promotes, respects, and guarantees sexual and reproductive health and rights for deaf women and girls. This includes GBV prevention, Deaf Theatre for awareness, and Deaf-friendly CSE modules.</p>

      <h3>2. Spear N' Shield (Education, Skilling, Digitalization and Business Development)</h3>
      <p>Building and sustaining the education, skills, knowledge, and digitalization competencies of deaf women and girls. Key initiatives include the Umucyo Sign Language App, SACCO support, and Rwanda Sign Language digitalization.</p>

      <h3>3. Her Voice, Her Power (Leadership, Voice and Agency)</h3>
      <p>Strengthening deaf women and girls' voice, leadership, and participation in all spheres of life. Through our Feminist Leadership Institutes and Deaf Women Leaders Forum, we're cultivating the next generation of leaders.</p>

      <h3>4. Her Environment (Climate Adaptation and Resilience)</h3>
      <p>Mobilizing Deaf Women and Girls to effectively influence and participate in national, regional, and global climate justice agenda. This includes climate-smart agriculture training and accessible climate information in RSL.</p>

      <h2>Participation ~ Power ~ Partnership</h2>
      <p>Our approach is guided by three core principles: meaningful participation of deaf women and girls in all decisions that affect them, building their power and agency, and forging strategic partnerships across government, civil society, and development partners.</p>

      <h2>Looking Ahead</h2>
      <p>With programming across 22 districts in all 5 provinces of Rwanda, RNADW is positioned to make significant impact over the next five years. We invite partners, donors, and community members to join us in this journey of transformation.</p>
    `,
    author: 'Executive Director',
    authorRole: 'Mukashema Dative',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    category: 'Announcements',
    categoryColor: '#FACC15',
    image: '/images/image12.png',
    featured: true
  },
  {
    id: 2,
    title: 'Umucyo Sign Language App: Digital Innovation for Accessibility',
    excerpt: 'Introducing the Umucyo Sign Language App - our groundbreaking digital platform providing remote sign language interpretation, accessible information, and community building for deaf women across Rwanda.',
    content: `
      <p>In our commitment to breaking communication barriers, RNADW is proud to introduce the <strong>Umucyo Sign Language App</strong> - a revolutionary digital platform designed to transform how deaf women and girls access information, services, and community support across Rwanda.</p>

      <h2>What is Umucyo?</h2>
      <p>"Umucyo" means "light" in Kinyarwanda, and this app aims to be exactly that - a beacon of accessibility in a world where communication barriers often leave deaf individuals in the dark. The app serves as a central hub for remote sign language interpretation, accessible information dissemination, and community building.</p>

      <h2>Key Features</h2>

      <h3>Remote Sign Language Interpretation</h3>
      <p>Connect with certified RSL interpreters for healthcare appointments, legal services, business transactions, and more - all from your smartphone.</p>

      <h3>Accessible Information Hub</h3>
      <p>Access vital information about SRHR, climate adaptation, economic opportunities, and rights - all presented in Rwanda Sign Language with visual aids.</p>

      <h3>Community Connection</h3>
      <p>Connect with other deaf women across the 22 districts where RNADW operates, share experiences, and build supportive networks.</p>

      <h3>Business Services</h3>
      <p>Deaf women entrepreneurs can access business development support, financial literacy resources, and connect with markets and financial institutions.</p>

      <h2>Digital Innovation for Inclusion</h2>
      <p>The Umucyo App represents our cross-cutting commitment to digital innovation. By leveraging technology, we're ensuring that deaf women and girls can directly access services, knowledge, and peer support regardless of their location.</p>

      <h2>Download and Join</h2>
      <p>The Umucyo Sign Language App is available for download and represents a significant step toward our vision of an inclusive society. Join thousands of deaf women already using the platform to access services and connect with their community.</p>
    `,
    author: 'ICT Team',
    authorRole: 'RNADW Technology',
    date: 'Jan 10, 2025',
    readTime: '6 min read',
    category: 'Digital Innovation',
    categoryColor: '#2563EB',
    image: '/images/image8.png',
    featured: false
  },
  {
    id: 3,
    title: 'Her Environment: Climate Adaptation for Deaf Women',
    excerpt: 'Our new Climate Adaptation and Resilience program equips deaf women with climate-smart agriculture skills and ensures climate information is accessible in Rwanda Sign Language.',
    content: `
      <p>Climate change poses significant risks to vulnerable communities, and deaf women and girls face unique challenges as emergency response mechanisms and resilience programs often fail to consider their specific needs. RNADW's <strong>"Her Environment"</strong> program addresses this critical gap.</p>

      <h2>The Challenge</h2>
      <p>Climate change compounds existing challenges for deaf women and girls, leaving them more vulnerable to displacement, food insecurity, and health crises. Early warning systems, adaptation strategies, and disaster risk reduction information are rarely accessible in sign language.</p>

      <h2>Our Approach</h2>

      <h3>Mainstream Disability Inclusion in Climate Action</h3>
      <p>We advocate for climate policies and programs that are inclusive, ensuring the integration of deaf women's needs and promoting their participation in environmental decision-making at all levels.</p>

      <h3>Build Climate Resilience Capacities</h3>
      <p>Through targeted training programs, we equip deaf women and girls with knowledge and skills for climate adaptation, including climate-smart agriculture and sustainable livelihoods.</p>

      <h3>Ensure Accessible Climate Information</h3>
      <p>We translate climate-related early warnings, adaptation strategies, and disaster risk reduction information into accessible formats, including Rwanda Sign Language (RSL).</p>

      <h2>Climate-Smart Agriculture</h2>
      <p>Our training programs teach deaf women modern farming techniques that are resilient to climate variability, including water conservation, drought-resistant crops, and sustainable land management practices.</p>

      <h2>Climate Justice Advocacy</h2>
      <p>RNADW actively participates in national and regional climate justice discussions, ensuring that the voices of deaf women are heard in environmental policy-making. Our advocacy aligns with Rwanda's commitments under the Paris Agreement and SDG 13 (Climate Action).</p>

      <h2>Join the Movement</h2>
      <p>A critical mass of environmentally engaged, resilient, and empowered deaf women and girls is essential for sustainable development. Join us in building climate resilience for all.</p>
    `,
    author: 'Programs Team',
    authorRole: 'Climate Action Unit',
    date: 'Jan 5, 2025',
    readTime: '7 min read',
    category: 'Climate Action',
    categoryColor: '#10B981',
    image: '/images/image11.png',
    featured: false
  },
  {
    id: 4,
    title: 'Deaf Women Leaders Forum: Building Collective Power',
    excerpt: 'The Deaf Women Leaders Forum brings together emerging leaders from across 22 districts for peer support, collective strategy, and sustained advocacy for disability rights.',
    content: `
      <p>Leadership and collective action are at the heart of social change. The <strong>Deaf Women Leaders Forum</strong> is RNADW's flagship initiative for building collective power and nurturing the leadership of deaf women across Rwanda.</p>

      <h2>What is the Deaf Women Leaders Forum?</h2>
      <p>The Forum is a network that brings together emerging and established deaf women leaders from all 22 districts where RNADW operates. It provides a platform for peer support, collective strategy development, and sustained advocacy for disability and gender rights.</p>

      <h2>Building Collective Power</h2>
      <p>Under our "Her Voice, Her Power" strategic pillar, the Forum enables deaf women to:</p>
      <ul>
        <li>Share experiences and learn from each other</li>
        <li>Develop collective advocacy strategies</li>
        <li>Amplify their voices in public discourse and policy debates</li>
        <li>Build solidarity across districts and provinces</li>
      </ul>

      <h2>Forum Activities</h2>

      <h3>Quarterly Convenings</h3>
      <p>Regular meetings bring together forum members for skill-building, strategy sessions, and networking.</p>

      <h3>Advocacy Campaigns</h3>
      <p>Coordinated campaigns on issues affecting deaf women, from SRHR to economic rights to climate justice.</p>

      <h3>Media Engagement</h3>
      <p>Training and support for forum members to engage with media and amplify deaf women's voices in public discourse.</p>

      <h2>Impact</h2>
      <p>Forum members have gone on to take leadership positions in their communities, advocate successfully for policy changes, and mentor the next generation of deaf women leaders.</p>

      <h2>Join the Forum</h2>
      <p>If you are a deaf woman in Rwanda interested in leadership and advocacy, we invite you to join the Deaf Women Leaders Forum. Together, we are stronger.</p>
    `,
    author: 'Leadership Team',
    authorRole: 'Forum Coordinator',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    category: 'Leadership',
    categoryColor: '#EC4899',
    image: '/images/image13.png',
    featured: false
  },
  {
    id: 5,
    title: 'Feminist Leadership Institute: Cultivating the Next Generation',
    excerpt: 'Our Feminist Leadership Institute and boot camps are nurturing emerging deaf women leaders through targeted training, mentorship programs, and confidence-building workshops.',
    content: `
      <p>True social transformation requires a pipeline of confident, skilled, and visionary leaders. RNADW's <strong>Feminist Leadership Institute</strong> is designed to cultivate this pipeline among deaf women and girls.</p>

      <h2>Our Approach to Leadership Development</h2>
      <p>We believe in feminist leadership that is collaborative, inclusive, and transformative. Our programs identify and nurture emerging leaders through targeted institutes, boot camps, and mentorship programs that build confidence and skills.</p>

      <h2>Program Components</h2>

      <h3>Feminist Leadership Institutes</h3>
      <p>Intensive residential programs that cover leadership theory, advocacy skills, public speaking, and strategic planning - all delivered in an accessible format with RSL interpretation.</p>

      <h3>Leadership Boot Camps</h3>
      <p>Short, intensive workshops focused on specific skills like media engagement, policy advocacy, or organizational management.</p>

      <h3>Mentorship Program</h3>
      <p>Pairing emerging leaders with experienced deaf women executives and advocates for ongoing guidance and support.</p>

      <h2>Curriculum Highlights</h2>
      <ul>
        <li>Human rights and feminist frameworks</li>
        <li>Advocacy and campaign strategies</li>
        <li>Public speaking and communication</li>
        <li>Organizational leadership and management</li>
        <li>Self-care and resilience</li>
      </ul>

      <h2>Alumni Impact</h2>
      <p>Graduates of our leadership programs have gone on to lead community initiatives, serve on boards, advocate before policymakers, and mentor others. They are the embodiment of "Her Voice, Her Power."</p>

      <h2>Apply Now</h2>
      <p>We accept applications for our Feminist Leadership Institute on a rolling basis. If you're a deaf woman ready to step into leadership, we want to hear from you.</p>
    `,
    author: 'Advocacy Team',
    authorRole: 'Leadership Programs',
    date: 'Dec 15, 2024',
    readTime: '6 min read',
    category: 'Leadership',
    categoryColor: '#EC4899',
    image: '/images/image14.png',
    featured: false
  },
  {
    id: 6,
    title: 'Deaf Theatre: Using Art to Advocate for SRHR',
    excerpt: 'Deaf Theatre has become a powerful platform for building agency and raising awareness about sexual and reproductive health rights among deaf women and girls.',
    content: `
      <p>Art has always been a powerful tool for social change. At RNADW, <strong>Deaf Theatre</strong> has emerged as one of our most impactful approaches to building agency and raising awareness about sexual and reproductive health and rights (SRHR).</p>

      <h2>What is Deaf Theatre?</h2>
      <p>Deaf Theatre is a performance art form that uses visual storytelling, sign language, movement, and expression to convey powerful narratives. It's accessible to deaf audiences while also engaging hearing viewers in understanding deaf experiences.</p>

      <h2>SRHR Through Storytelling</h2>
      <p>Under our "My Body, My Rights" pillar, Deaf Theatre productions address critical SRHR topics including:</p>
      <ul>
        <li>Bodily autonomy and consent</li>
        <li>Access to healthcare services</li>
        <li>Prevention of gender-based violence</li>
        <li>Family planning and reproductive choices</li>
        <li>HIV/AIDS awareness and prevention</li>
      </ul>

      <h2>Empowering Right-Holders</h2>
      <p>Deaf Theatre does more than raise awareness - it empowers deaf women and girls to understand, claim, and defend their SRHR. Participants build confidence, develop communication skills, and become advocates in their communities.</p>

      <h2>Community Performances</h2>
      <p>Our Deaf Theatre troupe performs across Rwanda's districts, reaching communities that might not otherwise access SRHR information. Performances are followed by facilitated discussions where audience members can ask questions and share experiences.</p>

      <h2>Training Programs</h2>
      <p>We offer Deaf Theatre training programs for deaf women and girls interested in using art for advocacy. Participants learn performance skills while deepening their understanding of SRHR issues.</p>

      <h2>Join Our Troupe</h2>
      <p>If you're passionate about art and advocacy, consider joining our Deaf Theatre troupe or attending our next community performance.</p>
    `,
    author: 'SRHR Team',
    authorRole: 'Arts & Advocacy',
    date: 'Dec 10, 2024',
    readTime: '5 min read',
    category: 'SRHR',
    categoryColor: '#F97316',
    image: '/images/image15.png',
    featured: false
  },
  {
    id: 7,
    title: 'SACCO Success: Financial Independence for Deaf Women',
    excerpt: 'Our Saving and Credit Cooperative (SACCO) initiative is helping deaf women access capital, build savings, and achieve economic independence through community-based financial services.',
    content: `
      <p>Economic independence is fundamental to empowerment. RNADW's <strong>SACCO (Saving and Credit Cooperative)</strong> initiative is transforming the financial lives of deaf women across Rwanda.</p>

      <h2>The Challenge</h2>
      <p>Deaf women often face significant barriers in accessing formal financial services. Communication barriers, discrimination, and lack of understanding from financial institutions leave many excluded from the economic mainstream.</p>

      <h2>Our SACCO Model</h2>
      <p>Under our "Spear N' Shield" pillar, we've established a SACCO specifically designed for and led by deaf women. Key features include:</p>

      <h3>Accessible Services</h3>
      <p>All services are provided with RSL interpretation and by staff trained in deaf culture and communication.</p>

      <h3>Savings Programs</h3>
      <p>Members can build savings through regular contributions, with competitive interest rates and flexible terms.</p>

      <h3>Credit Access</h3>
      <p>Loans are available for business development, education, healthcare, and other needs, with terms that recognize the realities of deaf women's economic situations.</p>

      <h3>Financial Literacy</h3>
      <p>Comprehensive training in budgeting, saving, investing, and business management - all in accessible formats.</p>

      <h2>Success Stories</h2>
      <p>SACCO members have used their savings and loans to start businesses, improve their homes, educate their children, and build financial security. Many have gone from financial exclusion to becoming employers in their communities.</p>

      <h2>Linkages to Financial Institutions</h2>
      <p>Beyond our own SACCO, we work to link deaf women entrepreneurs with mainstream financial institutions and markets, advocating for accessible services across the financial sector.</p>

      <h2>Join Our SACCO</h2>
      <p>Membership is open to deaf women across Rwanda. Contact us to learn how to join and start your journey to financial independence.</p>
    `,
    author: 'Economic Empowerment',
    authorRole: 'SACCO Coordinator',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    category: 'Economic Empowerment',
    categoryColor: '#10B981',
    image: '/images/image9.png',
    featured: false
  },
  {
    id: 8,
    title: 'Expanding to 22 Districts: RNADW Across All Provinces',
    excerpt: 'RNADW now has robust programming and members across 22 districts in all 5 provinces of Rwanda - from Nyagatare to Rusizi, Musanze to Huye.',
    content: `
      <p>From humble beginnings in Kigali to a truly national presence, RNADW now operates across <strong>22 districts in all 5 provinces of Rwanda</strong>. This expansion represents our commitment to reaching deaf women and girls wherever they are.</p>

      <h2>Our Geographic Reach</h2>

      <h3>Eastern Province (7 Districts)</h3>
      <p>Bugesera, Gatsibo, Kayonza, Kirehe, Ngoma, Nyagatare, and Rwamagana</p>

      <h3>Northern Province (2 Districts)</h3>
      <p>Musanze and Rulindo</p>

      <h3>Southern Province (6 Districts)</h3>
      <p>Gisagara, Huye, Kamonyi, Muhanga, Nyamagabe, and Ruhango</p>

      <h3>Western Province (4 Districts)</h3>
      <p>Nyabihu, Nyamasheke, Rubavu, and Rusizi</p>

      <h3>Kigali Province (3 Districts)</h3>
      <p>Gasabo, Kicukiro, and Nyarugenge</p>

      <h2>District Representatives</h2>
      <p>Each of our 22 districts has a representative who serves as a link between local deaf women and the national organization. These representatives are nominated in accordance with RNADW internal rules and serve as effective members of the organization.</p>

      <h2>Localized Programming</h2>
      <p>While our strategic direction is national, our programming is localized to meet the specific needs of deaf women in each district. Local context shapes how we deliver our four strategic pillars.</p>

      <h2>Building National Networks</h2>
      <p>Our geographic expansion enables deaf women from different regions to connect, share experiences, and build solidarity. The Deaf Women Leaders Forum brings together representatives from across the country for collective action.</p>

      <h2>Headquarters</h2>
      <p>Our Head Office remains in Nyarugunga Sector, Kicukiro District, City of Kigali - KG 125 ST, 304, Ikaro Plaza. From here, we coordinate our nationwide programming and advocacy efforts.</p>
    `,
    author: 'Operations Team',
    authorRole: 'National Coordinator',
    date: 'Nov 28, 2024',
    readTime: '4 min read',
    category: 'Growth',
    categoryColor: '#2563EB',
    image: '/images/image16.png',
    featured: false
  },
  {
    id: 9,
    title: 'My Body, My Rights: Comprehensive Sexuality Education for Deaf Girls',
    excerpt: 'Our Deaf-friendly CSE Module is transforming how healthcare providers deliver inclusive and accessible sexuality education to deaf women and girls.',
    content: `
      <p>Comprehensive Sexuality Education (CSE) is a right, yet deaf girls and young women are often excluded from these vital programs due to communication barriers. RNADW's <strong>Deaf-friendly CSE Module</strong> is changing this reality.</p>

      <h2>The Gap in CSE Access</h2>
      <p>Traditional CSE programs rely heavily on spoken language, leaving deaf participants unable to fully access the information. This gap leaves deaf girls vulnerable to misinformation, unintended pregnancies, STIs, and exploitation.</p>

      <h2>Our Deaf-Friendly Approach</h2>
      <p>Under our "My Body, My Rights" pillar, we've developed a comprehensive CSE module specifically designed for deaf learners:</p>

      <h3>Visual Learning</h3>
      <p>Content is delivered through visual aids, demonstrations, and RSL, ensuring full comprehension.</p>

      <h3>Age-Appropriate Content</h3>
      <p>Materials are tailored for different age groups - from young girls to adolescents to adult women.</p>

      <h3>Interactive Methods</h3>
      <p>Participatory activities, role-plays, and discussions in RSL create engaging learning experiences.</p>

      <h2>Training Service Providers</h2>
      <p>Beyond direct education, we train healthcare workers, teachers, and counselors on how to deliver CSE to deaf learners. This builds sustainable capacity in the health and education systems.</p>

      <h2>Topics Covered</h2>
      <ul>
        <li>Anatomy and puberty</li>
        <li>Menstrual health</li>
        <li>Consent and healthy relationships</li>
        <li>Contraception and family planning</li>
        <li>STI and HIV prevention</li>
        <li>Gender-based violence prevention</li>
      </ul>

      <h2>Impact</h2>
      <p>Deaf girls and women who participate in our CSE programs report increased confidence in claiming their rights and making informed decisions about their sexual and reproductive health.</p>
    `,
    author: 'Health Team',
    authorRole: 'SRHR Educator',
    date: 'Nov 20, 2024',
    readTime: '7 min read',
    category: 'SRHR',
    categoryColor: '#F97316',
    image: '/images/image17.png',
    featured: false
  },
  {
    id: 10,
    title: 'Rwanda Sign Language Digitalization: Breaking Communication Barriers',
    excerpt: 'Our initiative to promote and digitalize Rwanda Sign Language (RSL) is enhancing access to information, education, and services for deaf women and girls nationwide.',
    content: `
      <p>Communication is fundamental to participation in society. RNADW's initiative to <strong>promote and digitalize Rwanda Sign Language (RSL)</strong> is breaking down the barriers that have long excluded deaf women and girls.</p>

      <h2>Why RSL Digitalization?</h2>
      <p>Rwanda Sign Language is the primary language of the deaf community in Rwanda, yet digital content in RSL remains scarce. This digital divide limits deaf people's access to information, education, and services in the modern world.</p>

      <h2>Our Digitalization Efforts</h2>

      <h3>Video Content Library</h3>
      <p>We're building a comprehensive library of RSL video content covering health, rights, education, and practical skills.</p>

      <h3>Umucyo Sign Language App</h3>
      <p>Our flagship digital platform delivers RSL content directly to smartphones, making information accessible anywhere, anytime.</p>

      <h3>Online Learning</h3>
      <p>Digital courses in RSL enable deaf women to continue their education and skill development remotely.</p>

      <h3>Remote Interpretation</h3>
      <p>Technology enables deaf women to access sign language interpretation for services even when in-person interpreters aren't available.</p>

      <h2>Promoting RSL</h2>
      <p>Beyond digitalization, we advocate for the broader recognition and use of RSL across Rwandan society. This includes training service providers, advocating for RSL in education, and raising awareness about deaf culture.</p>

      <h2>Partnership with RNUD</h2>
      <p>We work closely with the Rwanda National Union of the Deaf (RNUD) and other partners to advance RSL promotion and ensure our digital content meets the highest standards.</p>

      <h2>Join the Movement</h2>
      <p>Whether you're deaf, a hearing ally, or an organization seeking to become more accessible, we invite you to join our efforts to promote and digitalize RSL.</p>
    `,
    author: 'Education Team',
    authorRole: 'RSL Coordinator',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
    category: 'Education',
    categoryColor: '#FACC15',
    image: '/images/image18.png',
    featured: false
  },
  {
    id: 11,
    title: 'PSEAH: Preventing Sexual Exploitation and Abuse',
    excerpt: 'RNADW is committed to Prevention of Sexual Exploitation, Abuse and Harassment (PSEAH) - creating safe spaces and support systems for deaf women survivors.',
    content: `
      <p>Sexual exploitation, abuse, and harassment (SEAH) disproportionately affects deaf women and girls due to communication barriers that hinder their ability to seek help, report abuse, and access justice. RNADW is committed to <strong>Prevention of Sexual Exploitation, Abuse and Harassment (PSEAH)</strong>.</p>

      <h2>The Reality for Deaf Women</h2>
      <p>Gender-based violence (GBV) disproportionately affects deaf women and girls. Communication barriers make it difficult to report abuse, access services, or navigate the justice system. Many survivors suffer in silence.</p>

      <h2>Our PSEAH Commitment</h2>
      <p>Under our "My Body, My Rights" pillar, RNADW implements comprehensive PSEAH measures:</p>

      <h3>Prevention</h3>
      <p>Awareness campaigns, education programs, and community mobilization to prevent SEAH before it occurs.</p>

      <h3>Safe Reporting</h3>
      <p>Accessible reporting mechanisms in RSL, ensuring deaf survivors can report abuse safely and confidentially.</p>

      <h3>Survivor Support</h3>
      <p>Psychological support, legal aid, and accompaniment services for survivors, all provided with RSL interpretation.</p>

      <h3>Community Protection</h3>
      <p>Building community-based protection networks that include deaf women as active participants and leaders.</p>

      <h2>Training Service Providers</h2>
      <p>We train healthcare workers, legal professionals, counselors, and humanitarian aid workers on providing accessible, deaf-friendly services to GBV survivors.</p>

      <h2>Policy Advocacy</h2>
      <p>We advocate for policy reforms that recognize and address the specific vulnerabilities of deaf women and girls to SEAH, and ensure accessible services in response mechanisms.</p>

      <h2>If You Need Help</h2>
      <p>If you or someone you know has experienced sexual exploitation, abuse, or harassment, please reach out to RNADW. We provide confidential, accessible support services.</p>
    `,
    author: 'Protection Team',
    authorRole: 'GBV Response',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    category: 'SGBV/VAWG',
    categoryColor: '#EC4899',
    image: '/images/image7.png',
    featured: false
  },
  {
    id: 12,
    title: 'Partnering with NUDOR: Strengthening the Disability Movement',
    excerpt: 'Our strategic partnership with the National Union of Disability Organizations of Rwanda (NUDOR) amplifies advocacy for deaf women within the broader disability rights movement.',
    content: `
      <p>Collective action amplifies impact. RNADW's partnership with the <strong>National Union of Disability Organizations of Rwanda (NUDOR)</strong> strengthens our advocacy within the broader disability rights movement.</p>

      <h2>NUDOR and the Disability Movement</h2>
      <p>NUDOR is the umbrella organization for disability organizations in Rwanda, coordinating advocacy and representing the interests of persons with disabilities at the national level. As a member organization, RNADW contributes to and benefits from this collective voice.</p>

      <h2>Strategic Alignment</h2>
      <p>Our partnership with NUDOR aligns with our commitment to:</p>
      <ul>
        <li>Nothing About Us Without Us - ensuring deaf women are included in all decisions that affect them</li>
        <li>Coalition Building - working with other OPDs to amplify our collective voice</li>
        <li>Policy Influence - advocating for disability-inclusive laws and policies</li>
      </ul>

      <h2>Joint Advocacy</h2>
      <p>Together with NUDOR and fellow OPDs, RNADW advocates for:</p>
      <ul>
        <li>Implementation of the UN Convention on the Rights of Persons with Disabilities (CRPD)</li>
        <li>Disability-inclusive social protection</li>
        <li>Accessible healthcare, education, and public services</li>
        <li>Recognition of Rwanda Sign Language</li>
      </ul>

      <h2>Capacity Building</h2>
      <p>Through NUDOR networks, RNADW staff and members access training, resources, and peer learning opportunities that strengthen our organizational capacity.</p>

      <h2>Other Key Partners</h2>
      <p>Beyond NUDOR, RNADW partners with organizations including RNUD, Kvinna till Kvinna, CREA, NCPD, and various government ministries to advance our mission.</p>

      <h2>Join the Movement</h2>
      <p>The disability rights movement is stronger when we work together. Join RNADW and our partners in advocating for an inclusive Rwanda.</p>
    `,
    author: 'Partnerships',
    authorRole: 'External Relations',
    date: 'Nov 5, 2024',
    readTime: '5 min read',
    category: 'Partnerships',
    categoryColor: '#2563EB',
    image: '/images/image10.png',
    featured: false
  },
  {
    id: 13,
    title: 'Children of Deaf Women (CODA): Supporting the Whole Family',
    excerpt: 'Our ecological model extends support to Children of Deaf Women (CODA), recognizing the importance of the entire family ecosystem in empowering deaf women.',
    content: `
      <p>Empowering deaf women means supporting their entire ecosystem. RNADW's programming recognizes the important role of <strong>Children of Deaf Adults (CODA)</strong> and extends support to the whole family.</p>

      <h2>Understanding CODA</h2>
      <p>CODA refers to hearing children who have one or more deaf parents. These children often serve as bridges between the deaf and hearing worlds, sometimes taking on interpreting responsibilities from a young age.</p>

      <h2>Our Ecological Model</h2>
      <p>RNADW uses an ecological model that prioritizes reaching out to the entire ecosystem around our primary communities of deaf women and girls. This includes:</p>
      <ul>
        <li>Parents and caregivers of deaf children</li>
        <li>Service providers (interpreters, teachers, healthcare workers)</li>
        <li>Children of Deaf Women (CODA)</li>
      </ul>

      <h2>Supporting CODA</h2>
      <p>Our support for CODA includes:</p>

      <h3>Family Communication</h3>
      <p>Programs that strengthen communication within deaf-parented families, ensuring CODA children don't bear inappropriate interpreting burdens.</p>

      <h3>Understanding Deaf Culture</h3>
      <p>Helping CODA children understand and appreciate their deaf parents' culture and community.</p>

      <h3>Peer Support</h3>
      <p>Connecting CODA children with peers who share similar experiences.</p>

      <h2>Why This Matters</h2>
      <p>When deaf women are supported within their family context, outcomes improve for everyone. CODA children thrive when they're not overburdened, and deaf mothers can focus on parenting rather than navigating communication barriers.</p>

      <h2>Family-Centered Approach</h2>
      <p>All of RNADW's programs consider the family context. Whether we're providing economic empowerment training or SRHR education, we recognize that deaf women's lives are embedded in family relationships.</p>
    `,
    author: 'Community Team',
    authorRole: 'Family Programs',
    date: 'Oct 28, 2024',
    readTime: '5 min read',
    category: 'Community',
    categoryColor: '#10B981',
    image: '/images/image19.png',
    featured: false
  },
  {
    id: 14,
    title: 'Climate Justice: Deaf Women in Environmental Decision-Making',
    excerpt: 'Advocating for disability-inclusive climate policies and ensuring deaf women participate in climate adaptation planning and environmental conservation efforts.',
    content: `
      <p>Climate justice cannot be achieved without disability justice. RNADW advocates for <strong>disability-inclusive climate policies</strong> and ensures deaf women participate in climate adaptation planning and environmental decision-making.</p>

      <h2>The Intersection of Disability and Climate</h2>
      <p>Climate change disproportionately affects persons with disabilities. Emergency warnings may not be accessible, evacuation plans may not accommodate different needs, and recovery programs may exclude disabled people.</p>

      <h2>Our Climate Justice Advocacy</h2>
      <p>Under our "Her Environment" pillar, RNADW:</p>

      <h3>Policy Advocacy</h3>
      <p>We advocate for the integration of disability perspectives into national climate policies, disaster risk reduction strategies, and environmental programs.</p>

      <h3>Representation</h3>
      <p>We ensure deaf women are represented in climate discussions at local, national, and regional levels.</p>

      <h3>Accessible Information</h3>
      <p>We push for climate early warnings and adaptation information to be available in accessible formats, including RSL.</p>

      <h2>Alignment with National and International Frameworks</h2>
      <p>Our advocacy aligns with:</p>
      <ul>
        <li>Rwanda's Vision 2050 and National Strategy for Transformation</li>
        <li>The Paris Agreement on climate change</li>
        <li>Sustainable Development Goals (SDG 10 - Reduced Inequalities, SDG 13 - Climate Action)</li>
        <li>UN Convention on the Rights of Persons with Disabilities</li>
      </ul>

      <h2>Building a Movement</h2>
      <p>Climate justice requires collective action. RNADW works with environmental organizations, disability rights groups, and government agencies to build a movement for disability-inclusive climate action.</p>

      <h2>Take Action</h2>
      <p>Join us in advocating for climate policies that include deaf women and all persons with disabilities. Together, we can build a sustainable and inclusive future.</p>
    `,
    author: 'Advocacy Team',
    authorRole: 'Climate Justice',
    date: 'Oct 20, 2024',
    readTime: '6 min read',
    category: 'Climate Action',
    categoryColor: '#10B981',
    image: '/images/image20.png',
    featured: false
  },
  {
    id: 15,
    title: 'From 2005 to 2025: 20 Years of Empowering Deaf Women',
    excerpt: 'Celebrating two decades of advocacy, from our founding by deaf women human rights activists to becoming a leading OPD with presence across all provinces of Rwanda.',
    content: `
      <p>In 2025, RNADW celebrates <strong>20 years</strong> of advocacy, empowerment, and transformation. From humble beginnings to a leading Organization of Persons with Disabilities, our journey reflects the resilience and power of deaf women.</p>

      <h2>The Beginning (2005-2007)</h2>
      <p>RNADW was founded in 2005 by a group of Deaf Women Human Rights Activists who recognized critical gaps in service provision and insufficient advocacy efforts for deaf women and girls. With no staff, no board, and limited resources, these pioneers laid the foundation for change.</p>

      <h2>Building Foundations (2008-2012)</h2>
      <p>We secured our first office, recruited staff, and began building partnerships with organizations like Handicap International and PEPFAR. In 2013, RNADW achieved formal registration with the Rwanda Governance Board (Registration N° 055/2014).</p>

      <h2>Growing Impact (2013-2020)</h2>
      <p>We expanded to districts across Rwanda, developed our first Strategic Plan, and secured funding from partners like the Disability Rights Fund, MALMO Deaf Association of Sweden, and Kvinna till Kvinna. Despite challenges including COVID-19, we persevered.</p>

      <h2>Strategic Transformation (2021-Present)</h2>
      <p>Our 2021-2026 Strategic Plan focused on accelerating rights promotion, building organizational capacity, and improving health and livelihoods. Now, our 2025-2030 Strategic Plan - "Loud in Silence" - takes us to the next level.</p>

      <h2>Where We Are Today</h2>
      <p>Today, RNADW:</p>
      <ul>
        <li>Operates in 22 districts across all 5 provinces</li>
        <li>Has empowered over 500 lives</li>
        <li>Runs four strategic programs plus institutional development initiatives</li>
        <li>Partners with government, civil society, and international organizations</li>
        <li>Is led by a dedicated Board and professional staff</li>
      </ul>

      <h2>Looking to the Future</h2>
      <p>As we celebrate 20 years, we look forward to the next chapter. With our Strategic Plan 2025-2030, we're positioned to achieve even greater impact. Thank you to everyone who has been part of this journey.</p>

      <h2>Join the Celebration</h2>
      <p>Stay tuned for anniversary events and celebrations throughout 2025. Here's to 20 more years of empowering deaf women and girls!</p>
    `,
    author: 'RNADW Team',
    authorRole: 'Communications',
    date: 'Oct 15, 2024',
    readTime: '8 min read',
    category: 'Impact Stories',
    categoryColor: '#FACC15',
    image: '/images/image21.png',
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
