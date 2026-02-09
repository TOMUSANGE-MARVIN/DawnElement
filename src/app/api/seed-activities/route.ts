import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

const ActivitySchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  content: String,
  image: String,
  category: String,
  icon: String,
  features: [String],
  status: { type: String, default: 'active' },
  published: { type: Boolean, default: true },
  order: Number,
  createdAt: { type: Date, default: Date.now }
});

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}

const activitiesData = [
  {
    title: "Spear N' Shield",
    slug: "spear-n-shield",
    description: "Education, Skilling, Digitalization and Business Development for sustainable livelihoods.",
    content: `<h2>Education & Economic Empowerment</h2>
<p>Spear N' Shield is our flagship program focused on building sustainable livelihoods for deaf women and girls through education, skills training, and economic empowerment.</p>

<h3>Key Components</h3>
<ul>
  <li><strong>Rwanda Sign Language (RSL) Digitalization:</strong> We are digitizing Rwanda Sign Language to make education more accessible for deaf learners across the country.</li>
  <li><strong>Umucyo Sign Language App:</strong> Our innovative mobile application teaches RSL and connects deaf individuals with resources and community.</li>
  <li><strong>Business Development & SACCO Support:</strong> We provide entrepreneurship training, business mentorship, and access to savings and credit cooperative organizations (SACCOs) to help deaf women start and grow their businesses.</li>
  <li><strong>Vocational Skills Training:</strong> Practical skills training in tailoring, hairdressing, crafts, agriculture, and digital skills.</li>
  <li><strong>Financial Literacy:</strong> Education on savings, budgeting, and financial management for long-term economic independence.</li>
</ul>

<h3>Impact</h3>
<p>Through Spear N' Shield, over 200 deaf women have gained vocational skills and started their own income-generating activities, improving their economic independence and quality of life.</p>`,
    image: "/images/image1.png",
    category: "education",
    icon: "📚",
    features: [
      "Rwanda Sign Language (RSL) digitalization",
      "Business development & SACCO support",
      "Umucyo Sign Language App",
      "Vocational skills training",
      "Financial literacy programs"
    ],
    status: "active",
    published: true,
    order: 1
  },
  {
    title: "My Body, My Rights",
    slug: "my-body-my-rights",
    description: "Sexual and Reproductive Health and Rights (SRHR) and GBV prevention for deaf women and girls.",
    content: `<h2>Sexual & Reproductive Health Rights</h2>
<p>My Body, My Rights is dedicated to ensuring deaf women and girls have access to comprehensive sexual and reproductive health information and services, while also working to prevent and respond to gender-based violence.</p>

<h3>Key Components</h3>
<ul>
  <li><strong>Deaf-friendly CSE Modules:</strong> Comprehensive Sexuality Education materials adapted for deaf learners with visual aids and sign language interpretation.</li>
  <li><strong>GBV Prevention & Deaf Theatre:</strong> Using theatrical performances in sign language to raise awareness about gender-based violence, consent, and healthy relationships.</li>
  <li><strong>PSEAH Awareness & Support:</strong> Protection from Sexual Exploitation, Abuse and Harassment training and support services.</li>
  <li><strong>Menstrual Health Management:</strong> Education and access to menstrual hygiene products and facilities.</li>
  <li><strong>HIV/AIDS Prevention:</strong> Accessible information and testing services for deaf women.</li>
</ul>

<h3>Impact</h3>
<p>We have reached over 300 deaf women and girls with SRHR education and supported over 100 survivors of gender-based violence with counseling, legal aid, and community reintegration services.</p>`,
    image: "/images/image2.png",
    category: "health",
    icon: "🏥",
    features: [
      "Deaf-friendly CSE modules",
      "GBV prevention & Deaf Theatre",
      "PSEAH awareness & support",
      "Menstrual health management",
      "HIV/AIDS prevention programs"
    ],
    status: "active",
    published: true,
    order: 2
  },
  {
    title: "Her Voice, Her Power",
    slug: "her-voice-her-power",
    description: "Leadership, Voice and Agency - strengthening deaf women's participation in decision-making.",
    content: `<h2>Leadership & Advocacy</h2>
<p>Her Voice, Her Power focuses on building the leadership capacity of deaf women and amplifying their voices in decision-making spaces at all levels - from community to national and international platforms.</p>

<h3>Key Components</h3>
<ul>
  <li><strong>Feminist Leadership Institutes:</strong> Intensive training programs that equip deaf women with leadership skills, feminist analysis, and advocacy tools.</li>
  <li><strong>Deaf Women Leaders Forum:</strong> A platform for deaf women leaders to network, share experiences, and collectively advocate for their rights.</li>
  <li><strong>Advocacy & Media Campaigns:</strong> Strategic campaigns to raise awareness about deaf women's issues and influence policy change.</li>
  <li><strong>Policy Engagement:</strong> Direct engagement with government and policymakers to ensure deaf women's needs are reflected in laws and policies.</li>
  <li><strong>Mentorship Programs:</strong> Connecting emerging deaf women leaders with experienced mentors for guidance and support.</li>
</ul>

<h3>Impact</h3>
<p>We have trained over 150 deaf women in leadership, with many now serving in community leadership positions, government advisory boards, and civil society organizations.</p>`,
    image: "/images/w1.png",
    category: "leadership",
    icon: "📢",
    features: [
      "Feminist Leadership Institutes",
      "Deaf Women Leaders Forum",
      "Advocacy & media campaigns",
      "Policy engagement initiatives",
      "Mentorship programs"
    ],
    status: "active",
    published: true,
    order: 3
  },
  {
    title: "Her Environment",
    slug: "her-environment",
    description: "Climate Adaptation and Resilience - equipping deaf women for environmental challenges.",
    content: `<h2>Climate Adaptation & Resilience</h2>
<p>Her Environment addresses the intersection of disability, gender, and climate change, ensuring deaf women are not left behind in climate action and have the knowledge and resources to adapt to environmental challenges.</p>

<h3>Key Components</h3>
<ul>
  <li><strong>Climate-Smart Agriculture Training:</strong> Teaching sustainable farming practices adapted to changing climate conditions, with information delivered in Rwanda Sign Language.</li>
  <li><strong>Accessible Climate Information in RSL:</strong> Translating weather forecasts, disaster warnings, and climate information into sign language for deaf communities.</li>
  <li><strong>Climate Justice Advocacy:</strong> Advocating for the inclusion of deaf women in climate policies and disaster response planning.</li>
  <li><strong>Green Livelihoods:</strong> Supporting deaf women in environmentally sustainable income-generating activities.</li>
  <li><strong>Disaster Preparedness:</strong> Training deaf communities on disaster preparedness and ensuring emergency communications are accessible.</li>
</ul>

<h3>Impact</h3>
<p>We have trained over 100 deaf women in climate-smart agriculture and advocated for accessible climate information services, making Rwanda's climate response more inclusive.</p>`,
    image: "/images/image4.png",
    category: "environment",
    icon: "🌍",
    features: [
      "Climate-smart agriculture training",
      "Accessible climate information in RSL",
      "Climate justice advocacy",
      "Green livelihoods support",
      "Disaster preparedness training"
    ],
    status: "active",
    published: true,
    order: 4
  }
];

export async function GET() {
  try {
    await connectDB();
    
    const Activity = mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);
    
    // Clear existing activities
    await Activity.deleteMany({});
    
    // Insert all activities
    const activities = await Activity.insertMany(activitiesData);

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${activities.length} activities`,
      count: activities.length,
      activities: activities.map(a => ({ id: a._id, title: a.title, slug: a.slug }))
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ success: false, error: 'Failed to seed activities' }, { status: 500 });
  }
}
