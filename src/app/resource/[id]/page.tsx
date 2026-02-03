'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

// Resources data with full content
const resources = [
  {
    id: 1,
    title: 'SGBV Prevention Guide',
    description: 'Comprehensive guide on preventing sexual and gender-based violence in deaf communities',
    category: 'SGBV/VAWG',
    categoryColor: '#EC4899',
    type: 'PDF',
    size: '2.4 MB',
    icon: '📘',
    downloadUrl: '#',
    lastUpdated: 'January 2025',
    content: {
      introduction: 'Sexual and Gender-Based Violence (SGBV) affects deaf women and girls disproportionately due to communication barriers, social isolation, and limited access to information. This guide provides comprehensive information on understanding, preventing, and responding to SGBV in deaf communities.',
      sections: [
        {
          title: 'Understanding SGBV',
          content: `Gender-based violence refers to harmful acts directed at an individual based on their gender. It includes physical, sexual, psychological, and economic harm. Deaf women face unique vulnerabilities including:

• Communication barriers that prevent reporting
• Limited access to information about their rights
• Social isolation that increases risk
• Dependency on others that can be exploited
• Lack of deaf-friendly support services`
        },
        {
          title: 'Types of Violence',
          content: `Physical Violence: Hitting, slapping, kicking, or any physical harm
Sexual Violence: Rape, sexual assault, harassment, forced marriage
Psychological Violence: Threats, intimidation, isolation, controlling behavior
Economic Violence: Controlling finances, preventing employment, stealing wages
Digital Violence: Online harassment, sharing intimate images without consent`
        },
        {
          title: 'Warning Signs',
          content: `Recognizing warning signs can help prevent escalation:

• Partner controls all communication (interpreting, phone access)
• Isolation from family and deaf community
• Unexplained injuries or fearful behavior
• Partner makes all financial decisions
• Constant criticism or belittling
• Threats to reveal personal information`
        },
        {
          title: 'Prevention Strategies',
          content: `For Individuals:
• Learn about your rights in Rwanda Sign Language
• Build connections with other deaf women
• Keep important documents in a safe place
• Know emergency contacts and safe places

For Communities:
• Create deaf-friendly reporting mechanisms
• Train service providers in RSL basics
• Establish peer support networks
• Advocate for accessible services`
        },
        {
          title: 'Getting Help',
          content: `If you or someone you know is experiencing violence:

RNADW Support Line: Available with RSL video call
Police Gender Desk: Request an interpreter
Health Centers: Ask for a private room and interpreter
Safe Houses: Contact RNADW for deaf-friendly referrals

Remember: Violence is never your fault. You deserve to be safe.`
        },
        {
          title: 'Legal Rights',
          content: `Under Rwandan law, you have the right to:
• Report violence to police
• Receive medical care and documentation
• Access legal aid services
• Obtain protection orders
• Receive compensation from perpetrators
• Have an interpreter during legal proceedings`
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Sign Language Dictionary',
    description: 'Rwandan sign language reference guide with illustrations',
    category: 'Education',
    categoryColor: '#FACC15',
    type: 'PDF',
    size: '5.8 MB',
    icon: '📖',
    downloadUrl: '#',
    lastUpdated: 'December 2024',
    content: {
      introduction: 'Rwanda Sign Language (RSL) is a vital part of deaf culture and identity in Rwanda. This dictionary serves as a reference guide for commonly used signs, helping to preserve and promote RSL while supporting communication access for deaf individuals.',
      sections: [
        {
          title: 'About Rwanda Sign Language',
          content: `Rwanda Sign Language (RSL) is the primary language of the deaf community in Rwanda. It has its own grammar, syntax, and cultural expressions distinct from spoken Kinyarwanda. RSL is:

• A complete, natural language
• Visually-based using hand shapes, movements, and facial expressions
• Essential for deaf education and inclusion
• Protected under Rwandan disability rights legislation`
        },
        {
          title: 'Basic Greetings',
          content: `Essential greetings in RSL:

• Hello/Good morning - Wave hand near face with smile
• How are you? - Point to person, then questioning expression
• I am fine - Thumbs up with nodding
• Thank you - Hand moves from chin outward
• Please - Flat hand circles on chest
• Sorry - Fist circles on chest
• Goodbye - Wave moving away from body`
        },
        {
          title: 'Numbers and Time',
          content: `Numbers 1-10 are shown on one hand:
1-5: Fingers extended sequentially
6-10: Combinations using thumb

Time expressions:
• Today - Point down, then flat hand
• Tomorrow - Thumb forward from chin
• Yesterday - Thumb backward over shoulder
• Morning/Afternoon/Evening - Hand positions showing sun movement`
        },
        {
          title: 'Family Signs',
          content: `Family-related vocabulary:

• Mother - Thumb on chin
• Father - Thumb on forehead
• Sister - Index fingers together + female marker
• Brother - Index fingers together + male marker
• Child - Lower hand showing height
• Family - F handshape circles together`
        },
        {
          title: 'Healthcare Vocabulary',
          content: `Important health-related signs:

• Doctor - Fingers check pulse on wrist
• Hospital - H draws cross on upper arm
• Medicine - Middle finger in palm
• Pain/Hurt - Index fingers approach each other
• Pregnant - Hands show growing belly
• Emergency - E hand shakes urgently`
        },
        {
          title: 'Rights and Advocacy',
          content: `Signs for rights-based communication:

• Rights - R hands break chains gesture
• Equal - Flat hands level together
• Discrimination - Push away gesture
• Advocate - A hands move forward together
• Justice - Scale balancing motion
• Access - Hands open door gesture`
        }
      ]
    }
  },
  {
    id: 3,
    title: 'CEDAW Rights Overview',
    description: 'Understanding CEDAW rights for women with disabilities',
    category: 'Legal Rights',
    categoryColor: '#2563EB',
    type: 'PDF',
    size: '1.2 MB',
    icon: '⚖️',
    downloadUrl: '#',
    lastUpdated: 'November 2024',
    content: {
      introduction: 'The Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) is an international treaty protecting women\'s rights. This guide explains how CEDAW applies to deaf women and girls in Rwanda.',
      sections: [
        {
          title: 'What is CEDAW?',
          content: `CEDAW is often called the international bill of rights for women. Adopted by the UN in 1979, it:

• Defines discrimination against women
• Sets an agenda for national action
• Requires countries to report on progress
• Rwanda ratified CEDAW in 1981

CEDAW plus the Convention on the Rights of Persons with Disabilities (CRPD) together protect deaf women's rights.`
        },
        {
          title: 'Key Rights Under CEDAW',
          content: `Article 1: Freedom from discrimination
Article 2: Policy measures to eliminate discrimination
Article 3: Guarantee of basic human rights
Article 5: Modification of social and cultural patterns
Article 10: Equal rights in education
Article 11: Equal rights in employment
Article 12: Equal access to healthcare
Article 14: Rights of rural women
Article 16: Rights in marriage and family`
        },
        {
          title: 'Education Rights',
          content: `Deaf women and girls have the right to:

• Education in sign language
• Qualified sign language interpreters
• Accessible educational materials
• Same curriculum as hearing students
• Vocational training opportunities
• Higher education access

Schools must provide reasonable accommodations including RSL instruction and visual learning aids.`
        },
        {
          title: 'Employment Rights',
          content: `In the workplace, deaf women have rights to:

• Equal pay for equal work
• Non-discrimination in hiring
• Workplace accommodations (interpreters, visual alerts)
• Maternity protection
• Safe working conditions
• Freedom from harassment

Employers must make reasonable adjustments to enable deaf women to work.`
        },
        {
          title: 'Healthcare Rights',
          content: `Deaf women's healthcare rights include:

• Accessible health information in RSL
• Sign language interpreters at appointments
• Confidential services
• Informed consent in accessible format
• Sexual and reproductive health services
• Mental health support

Healthcare providers must ensure effective communication.`
        },
        {
          title: 'How to Claim Your Rights',
          content: `Steps to take if your rights are violated:

1. Document the incident (what, when, where, who)
2. Report to relevant authority (employer, school, hospital)
3. Contact RNADW for support and advocacy
4. File complaint with National Human Rights Commission
5. Seek legal aid if needed

RNADW can help connect you with RSL-accessible legal support.`
        }
      ]
    }
  },
  {
    id: 4,
    title: 'SRHR Education Materials',
    description: 'Sexual and reproductive health rights educational resources',
    category: 'SRHR/CSE',
    categoryColor: '#EC4899',
    type: 'PDF',
    size: '3.1 MB',
    icon: '🏥',
    downloadUrl: '#',
    lastUpdated: 'January 2025',
    content: {
      introduction: 'Sexual and Reproductive Health and Rights (SRHR) education is essential for deaf women and girls to make informed decisions about their bodies and health. This guide provides comprehensive, accessible information on SRHR topics.',
      sections: [
        {
          title: 'Understanding Your Body',
          content: `Knowing your body is the foundation of reproductive health:

• Menstrual cycle: Usually 21-35 days, varies by person
• Fertility awareness: Understanding when pregnancy is possible
• Puberty changes: Physical and emotional development
• Anatomy basics: Understanding reproductive organs

Regular health check-ups help maintain reproductive health.`
        },
        {
          title: 'Family Planning Options',
          content: `Modern contraceptive methods available in Rwanda:

Short-term methods:
• Condoms (male and female)
• Pills (daily oral contraceptives)
• Injectable contraceptives
• Emergency contraception

Long-term methods:
• IUD (Intrauterine Device)
• Implants
• Permanent methods (tubal ligation, vasectomy)

All methods should be chosen freely with full information.`
        },
        {
          title: 'Maternal Health',
          content: `Pregnancy and childbirth care:

Before pregnancy:
• Folic acid supplementation
• Health screening
• Family planning counseling

During pregnancy:
• At least 4 antenatal visits
• Nutrition and rest
• Danger signs awareness
• Birth planning

After delivery:
• Postnatal check-ups
• Breastfeeding support
• Family planning counseling`
        },
        {
          title: 'STI Prevention',
          content: `Sexually Transmitted Infections can be prevented:

Prevention methods:
• Consistent condom use
• Limiting sexual partners
• Regular testing
• Open communication with partners

Common STIs:
• HIV/AIDS
• Gonorrhea
• Chlamydia
• Syphilis
• Hepatitis B

Most STIs are treatable. Early detection is important.`
        },
        {
          title: 'Consent and Healthy Relationships',
          content: `Understanding consent:

• Consent must be freely given
• Consent can be withdrawn at any time
• Silence or not resisting is NOT consent
• Being drunk or asleep means cannot consent
• Consent for one thing is not consent for everything

Healthy relationships include:
• Mutual respect
• Open communication
• Equal decision-making
• Freedom from violence`
        },
        {
          title: 'Accessing SRHR Services',
          content: `Where to get help:

Health centers:
• Family planning services
• Antenatal care
• STI testing and treatment
• Youth-friendly corners

RNADW services:
• RSL health information
• Accompaniment to appointments
• Peer support groups
• Healthcare provider training

You have the right to confidential, judgment-free services.`
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Business Skills Training',
    description: 'Entrepreneurship and business development workbook for deaf women',
    category: 'Economic Empowerment',
    categoryColor: '#10B981',
    type: 'PDF',
    size: '4.5 MB',
    icon: '💼',
    downloadUrl: '#',
    lastUpdated: 'December 2024',
    content: {
      introduction: 'Economic empowerment is key to independence and equality for deaf women. This workbook provides practical guidance on starting and growing a business, tailored for deaf entrepreneurs in Rwanda.',
      sections: [
        {
          title: 'Finding Your Business Idea',
          content: `Start by asking yourself:

• What skills do I have?
• What do I enjoy doing?
• What problems can I solve?
• What do people in my community need?

Good business ideas for deaf women:
• Tailoring and fashion design
• Hair and beauty services
• Food preparation and catering
• Crafts and handmade products
• Mobile money services
• Agriculture and farming`
        },
        {
          title: 'Creating a Business Plan',
          content: `A simple business plan includes:

1. Business Description
   - What will you sell?
   - Who are your customers?

2. Market Research
   - Who are your competitors?
   - What makes you different?

3. Operations Plan
   - Where will you work?
   - What equipment do you need?

4. Financial Plan
   - Startup costs
   - Expected income
   - Pricing strategy

5. Growth Plan
   - Short-term goals (6 months)
   - Long-term goals (2-3 years)`
        },
        {
          title: 'Managing Money',
          content: `Financial management basics:

Keeping records:
• Write down all money coming in
• Write down all money going out
• Check your records weekly

Separating finances:
• Business money separate from personal
• Pay yourself a regular amount
• Save for business expenses

Pricing products:
• Cost of materials
• Your time and labor
• Overhead costs
• Profit margin (at least 30%)`
        },
        {
          title: 'Marketing Your Business',
          content: `Ways to reach customers:

In-person:
• Word of mouth
• Market stalls
• Community events
• Referral networks

Digital:
• WhatsApp Business
• Facebook page
• Instagram
• Customer photos and testimonials

Building your brand:
• Choose a memorable name
• Create a simple logo
• Deliver consistent quality
• Excellent customer service`
        },
        {
          title: 'Accessing Finance',
          content: `Options for business funding:

Personal savings:
• Start small, grow gradually
• Reinvest profits

SACCOs (Savings groups):
• Join a deaf women's SACCO
• Save regularly to qualify for loans
• Lower interest rates

Microfinance:
• Small business loans
• Requires business plan
• Collateral may be needed

Grants:
• Government programs
• NGO support
• Business plan competitions`
        },
        {
          title: 'Growing Your Business',
          content: `Steps to expand:

Build skills:
• Attend training programs
• Learn from successful entrepreneurs
• Stay updated on market trends

Increase capacity:
• Hire helpers or apprentices
• Buy more equipment
• Move to better location

Diversify:
• Add new products or services
• Reach new customer groups
• Partner with other businesses

RNADW's SACCO support can help you access finance and business networks.`
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Legal Aid Handbook',
    description: 'Step-by-step guide to accessing legal services and support',
    category: 'Legal Rights',
    categoryColor: '#2563EB',
    type: 'PDF',
    size: '2.8 MB',
    icon: '📜',
    downloadUrl: '#',
    lastUpdated: 'October 2024',
    content: {
      introduction: 'Accessing justice is a fundamental right. This handbook guides deaf women through the legal system in Rwanda, explaining how to access legal aid and navigate legal processes with appropriate accommodations.',
      sections: [
        {
          title: 'Understanding Legal Aid',
          content: `Legal aid is free or low-cost legal assistance for those who cannot afford a lawyer.

In Rwanda, legal aid is available through:
• Access to Justice Bureaus (MAJ)
• Legal aid organizations
• Bar Association pro bono program
• University law clinics

Deaf individuals have the right to:
• Sign language interpretation
• Written communication
• Extra time for procedures
• Accessible legal documents`
        },
        {
          title: 'Types of Legal Issues',
          content: `Common legal matters where you may need help:

Family law:
• Marriage and divorce
• Child custody
• Inheritance disputes
• Domestic violence

Criminal matters:
• Reporting crimes
• Victim support
• Defense representation

Civil matters:
• Property disputes
• Contract issues
• Employment problems
• Discrimination complaints`
        },
        {
          title: 'Reporting to Police',
          content: `Steps for reporting a crime:

1. Go to the nearest police station
2. Request a sign language interpreter
3. If no interpreter, ask to write your statement
4. Provide details: what happened, when, where, who
5. Get a copy of your complaint
6. Keep the reference number

Gender Desk officers handle:
• Sexual violence cases
• Domestic violence
• Child abuse
• Human trafficking

You can request a female officer if preferred.`
        },
        {
          title: 'Going to Court',
          content: `Preparing for court:

Before court:
• Gather all documents and evidence
• Arrange for an interpreter
• Know your hearing date and location
• Prepare what you want to say

At court:
• Arrive early
• Check in with court staff
• Sit where you can see interpreter
• Wait for your case to be called

Your rights in court:
• Sign language interpretation
• Breaks if needed
• Written materials
• Fair and accessible proceedings`
        },
        {
          title: 'Getting Help from RNADW',
          content: `RNADW legal support services:

• Information about legal rights in RSL
• Referral to legal aid providers
• Accompaniment to police and courts
• Advocacy with legal institutions
• Connection with trained interpreters
• Follow-up on case progress

Contact RNADW if you face:
• Discrimination
• Violence
• Rights violations
• Barriers to justice`
        },
        {
          title: 'Important Contacts',
          content: `Emergency Numbers:
• Police: 112
• RIB (Investigation): 113
• Gender Desk: Available at all stations

Legal Aid:
• MAJ (Access to Justice Bureaus): In every district
• Legal Aid Forum Rwanda
• HAGURUKA Women's Organization

Disability Rights:
• NCPD (National Council of Persons with Disabilities)
• RNADW
• Rwanda Union of the Deaf`
        }
      ]
    }
  },
  {
    id: 7,
    title: 'Community Organizing Toolkit',
    description: 'Tools and strategies for grassroots advocacy and organizing',
    category: 'Advocacy',
    categoryColor: '#EC4899',
    type: 'PDF',
    size: '3.7 MB',
    icon: '📢',
    downloadUrl: '#',
    lastUpdated: 'November 2024',
    content: {
      introduction: 'Deaf women have the power to create change in their communities. This toolkit provides practical strategies for organizing, advocacy, and collective action to advance the rights and inclusion of deaf women and girls.',
      sections: [
        {
          title: 'Why Community Organizing?',
          content: `Community organizing is powerful because:

• Collective voice is stronger than individual
• Shared experiences build solidarity
• Local solutions address local needs
• Builds skills and leadership
• Creates lasting change

"Nothing About Us Without Us" - Deaf women must lead efforts that affect deaf women.`
        },
        {
          title: 'Building Your Group',
          content: `Starting a deaf women's group:

1. Identify interested people
   • Reach out through deaf networks
   • Use WhatsApp and social media
   • Connect at deaf events

2. Hold initial meetings
   • Find accessible venue
   • Set clear agenda
   • Use RSL throughout

3. Establish structure
   • Elect leadership
   • Define membership
   • Create simple rules
   • Plan regular meetings`
        },
        {
          title: 'Identifying Issues',
          content: `Finding your advocacy focus:

Community mapping:
• What challenges do deaf women face?
• What services are missing?
• Who makes decisions that affect us?

Prioritizing issues:
• What affects the most people?
• What can we realistically change?
• What are people passionate about?

Examples of issues:
• Healthcare access
• Education quality
• Employment discrimination
• Violence prevention
• Interpreter availability`
        },
        {
          title: 'Planning Campaigns',
          content: `Steps for effective advocacy:

1. Set clear goal
   • Specific and measurable
   • Achievable timeline
   • Example: "Sign language interpreters at District Hospital by December"

2. Identify target
   • Who has power to make change?
   • Hospital director? District mayor? Ministry?

3. Choose tactics
   • Meetings with officials
   • Petitions
   • Media coverage
   • Public demonstrations
   • Social media campaigns

4. Build alliances
   • Other deaf organizations
   • Women's groups
   • Disability organizations
   • Supportive officials`
        },
        {
          title: 'Effective Messaging',
          content: `Communicating your message:

Key elements:
• Problem: What needs to change?
• Solution: What do you want?
• Action: What should people do?

Storytelling:
• Personal stories are powerful
• Show impact on real lives
• Connect emotionally

Accessible formats:
• Videos in RSL
• Visual infographics
• Simple written materials
• Multiple channels`
        },
        {
          title: 'Sustaining the Movement',
          content: `Keeping momentum:

Celebrate victories:
• Recognize achievements
• Thank supporters
• Document progress

Handle challenges:
• Expect setbacks
• Learn from failures
• Support each other

Build for future:
• Train new leaders
• Document your methods
• Connect with other groups
• Plan long-term goals

RNADW can support your organizing with training, resources, and connections.`
        }
      ]
    }
  },
  {
    id: 8,
    title: 'Financial Literacy Guide',
    description: 'Money management and savings strategies for women entrepreneurs',
    category: 'Economic Empowerment',
    categoryColor: '#10B981',
    type: 'PDF',
    size: '2.1 MB',
    icon: '💰',
    downloadUrl: '#',
    lastUpdated: 'December 2024',
    content: {
      introduction: 'Financial literacy empowers deaf women to take control of their economic lives. This guide covers essential money management skills, from basic budgeting to savings and investment strategies.',
      sections: [
        {
          title: 'Understanding Money',
          content: `Money basics:

Income: Money coming in
• Wages from work
• Business profits
• Support from family
• Government assistance

Expenses: Money going out
• Needs: Food, housing, healthcare, transport
• Wants: Entertainment, extra clothes, treats

The goal: Income should be more than expenses, with some left for savings.`
        },
        {
          title: 'Creating a Budget',
          content: `Steps to budget:

1. List all income for the month
2. List all expenses (needs first, then wants)
3. Subtract expenses from income
4. If negative, reduce wants or find more income
5. If positive, put extra into savings

Simple budget rule:
• 50% for needs
• 30% for wants
• 20% for savings

Track spending for one month to understand your patterns.`
        },
        {
          title: 'Saving Money',
          content: `Why save?
• Emergencies (illness, job loss)
• Big purchases (land, equipment)
• Children's education
• Retirement

Saving strategies:
• Pay yourself first (save before spending)
• Start small, be consistent
• Keep savings separate from spending money
• Join a SACCO for discipline and support

Where to save:
• Home (less secure)
• SACCO (recommended)
• Bank account
• Mobile money`
        },
        {
          title: 'Using SACCOs',
          content: `Savings and Credit Cooperatives (SACCOs):

Benefits:
• Safe place to save
• Access to loans
• Financial training
• Community support
• Better interest rates

How SACCOs work:
• Members contribute regularly
• Savings earn interest
• Members can borrow
• Profits shared among members

RNADW supports deaf women's SACCOs with training and capacity building.`
        },
        {
          title: 'Borrowing Wisely',
          content: `When to borrow:
• Business investment that will earn money
• Education or training
• Emergency needs
• NOT for daily expenses or luxuries

Before borrowing:
• Can you repay?
• What is the interest rate?
• What happens if you can't pay?
• Is there a better option?

Loan sources:
• SACCOs (best for small loans)
• Microfinance institutions
• Banks (larger amounts)
• Avoid loan sharks (very high interest)`
        },
        {
          title: 'Mobile Money Tips',
          content: `Using mobile money safely:

Security:
• Never share your PIN
• Keep phone secure
• Check transactions regularly
• Save receipts/SMS confirmations

Smart use:
• Compare fees before sending
• Withdraw from agents you trust
• Track all transactions
• Use for business payments

Mobile money can help you:
• Receive payments safely
• Save without going to bank
• Pay bills conveniently
• Build transaction history for loans`
        }
      ]
    }
  },
  {
    id: 9,
    title: 'Deaf Culture & Identity',
    description: 'Celebrating deaf culture, history, and identity in Rwanda',
    category: 'Education',
    categoryColor: '#FACC15',
    type: 'PDF',
    size: '1.9 MB',
    icon: '🤟',
    downloadUrl: '#',
    lastUpdated: 'October 2024',
    content: {
      introduction: 'Deaf culture is rich, vibrant, and valuable. This guide celebrates deaf identity, history, and community in Rwanda, affirming that being deaf is not a deficit but a difference with its own language, culture, and pride.',
      sections: [
        {
          title: 'What is Deaf Culture?',
          content: `Deaf culture includes:

• Shared language (Rwanda Sign Language)
• Common experiences and values
• Art, storytelling, and humor
• Strong community bonds
• Visual ways of being

Deaf culture views:
• Deafness as difference, not disability
• Sign language as a complete language
• Deaf community as a source of strength
• Deaf role models as important`
        },
        {
          title: 'History of Deaf Rwandans',
          content: `Key moments in deaf history:

• Early schools for deaf children established
• Rwanda Sign Language developed and grew
• Deaf associations formed
• RNADW founded in 2005
• Constitutional recognition of RSL
• Growing visibility and rights

Challenges overcome:
• Stigma and discrimination
• Limited education access
• Communication barriers
• Exclusion from society

Progress continues through deaf-led advocacy.`
        },
        {
          title: 'Deaf Identity',
          content: `Understanding deaf identity:

Many deaf people identify as:
• Culturally Deaf (capital D)
• Part of a linguistic minority
• Proud of their deafness
• Connected to deaf community

Identity can be complex:
• Born deaf or became deaf
• Deaf family or hearing family
• Oral education or sign language
• All experiences are valid

"Deaf Can" - Deaf people can do anything except hear.`
        },
        {
          title: 'Sign Language Pride',
          content: `Rwanda Sign Language (RSL):

• Natural, complete language
• Has its own grammar
• Expresses complex ideas
• Carries cultural knowledge
• Connects generations

Why RSL matters:
• First language for many deaf
• Essential for education
• Enables full participation
• Preserves deaf culture

"Our hands are our voice, our eyes are our ears."`
        },
        {
          title: 'Deaf Women\'s Experiences',
          content: `Deaf women face unique experiences:

Double identity:
• Being deaf
• Being a woman
• Sometimes: Being rural, poor, or minority

Strengths:
• Resilience and determination
• Strong community bonds
• Creative problem-solving
• Leadership abilities

RNADW celebrates deaf women's contributions and advocates for full equality.`
        },
        {
          title: 'Celebrating Deaf Community',
          content: `Important celebrations:

International Week of the Deaf
• Last week of September
• Global celebration
• Cultural events and advocacy

International Day of Sign Languages
• September 23
• Celebrates sign languages worldwide

Ways to participate:
• Attend deaf community events
• Share deaf stories
• Support deaf organizations
• Mentor deaf youth
• Use and promote RSL

"Loud in Silence" - Our movement for change!`
        }
      ]
    }
  }
];

export default function ResourceViewerPage() {
  const params = useParams();
  const resourceId = parseInt(params.id as string);

  const resource = resources.find(r => r.id === resourceId);

  if (!resource) {
    notFound();
  }

  const heroSection = useScrollAnimation(0.1);
  const contentSection = useScrollAnimation(0.1);

  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section
        ref={heroSection.ref}
        className={`relative py-20 overflow-hidden scroll-animate delay-100 ${heroSection.isVisible ? 'visible' : ''}`}
        style={{ backgroundColor: `${resource.categoryColor}15` }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <Link
            href="/resource"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>

          {/* Icon & Category */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{resource.icon}</span>
            <div
              className="px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider"
              style={{ backgroundColor: resource.categoryColor, color: '#fff' }}
            >
              {resource.category}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
            {resource.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-6">
            {resource.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {resource.type} • {resource.size}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated: {resource.lastUpdated}
            </span>
          </div>

          {/* Download Button */}
          <div className="mt-8">
            <a
              href={resource.downloadUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-white transition-all hover:scale-105"
              style={{ backgroundColor: resource.categoryColor }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section
        ref={contentSection.ref}
        className={`py-16 scroll-animate delay-200 ${contentSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {resource.content.introduction}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12">
            <h2 className="text-lg font-black text-gray-900 mb-4">Contents</h2>
            <ul className="space-y-2">
              {resource.content.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: resource.categoryColor }}
                    >
                      {index + 1}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {resource.content.sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="scroll-mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: resource.categoryColor }}
                  >
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">{section.title}</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Other Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources
              .filter(r => r.id !== resourceId)
              .slice(0, 3)
              .map((r) => (
                <Link
                  key={r.id}
                  href={`/resource/${r.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <span className="text-3xl mb-3 block">{r.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-500">{r.category}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Need More Support?</h2>
          <p className="text-gray-300 mb-8">
            RNADW provides training, resources, and support for deaf women across Rwanda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-black transition-all hover:scale-105"
            style={{ backgroundColor: '#FACC15' }}
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
