import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

const VideoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  description: String,
  category: String,
  thumbnailUrl: String,
  published: { type: Boolean, default: true }
});

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}

const videosData = [
  // SGBV/VAWG Videos
  { videoId: 'CpKlW3lK6XI', title: '#Genderbasedviolence-Dufatanye kurwanya ihohoterwa rikorerwa Abana', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'rQ5UpQzFvxE', title: '#genderbasedviolence -Gukumira no kurwanya ihohoterwa rishingiye ku gitsina mu rubyiruko', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'Xirgo33Vf1U', title: "#genderbasedviolence -Ubundi bwoko bw'ihohoterwa", description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'i_SPaBuKwYc', title: '#genderbasedviolence -Ibitera ihohoterwa rishingiye ku gitsina mu Rwanda', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'ffZeDfQZs3o', title: '#genderbasedviolence -Uburyo bwo Gukumira ihohoterwa rishingiye ku gitsina', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'YUTe3E5UqQM', title: '#genderbasedviolence -Uburyo bwo Gufasha uwahohotewe', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'EeQkGC09ehI', title: '#genderbasedviolence -Wabigenza ute igihe ukorewe ihohoterwa rishingiye ku gitsina', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'rELYSfwYIhE', title: '#genderbasedviolence -Ihohoterwa rikorerwa abafite ubumuga bwo kutumva no kutavuga', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'N1mdwqWn-io', title: "#genderbasedviolence -Ihohoterwa rishingiye ku gitsina rikorwa mu buryo butandukanye bitewe n'umuco", description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: '_A6aKfiHz3w', title: '#genderbasedviolence - Twese tube maso duhagurukire kurwanya abasambanya abana', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'Py7R5vYo_aM', title: 'SHORT VIDEO 05- GUKUMIRA NO KURWANYA IHOHOTERWA', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'jjw0KXSPmFA', title: 'SHORT VIDEO 04- GUKUMIRA NO KURWANYA IHOHOTERWA', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'XvDK4EYda0g', title: 'SHORT VIDEO 03- GUKUMIRA NO KURWANYA IHOHOTERWA', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'MNyfuwvPFKQ', title: 'SHORT VIDEO 02- GUKUMIRA NO KURWANYA IHOHOTERWA', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'WoJHDPRR73o', title: 'SHORT VIDEO 01- GUKUMIRA NO KURWANYA IHOHOTERWA', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'TJRk1RzjKDA', title: 'FULL VIDEO - GUKUMIRA NO KURWANYA IHOHOTERWA', description: 'RNADW educational content and advocacy', category: 'sgbv' },
  { videoId: 'f-DcGIL8Je0', title: 'Forms of Gender Based Violence #GBV', description: 'RNADW educational content and advocacy', category: 'sgbv' },

  // HIV/AIDS Videos
  { videoId: 'vP7hskEAD1I', title: 'SHORT VIDEO 02 - KURWANYA NO GUKUMIRA VIRUSI ITERA SIDA', description: 'RNADW educational content and advocacy', category: 'hiv' },
  { videoId: 'CDZghwHvHcY', title: 'SHORT VIDEO 01 - KURWANYA NO GUKUMIRA VIRUSI ITERA SIDA', description: 'RNADW educational content and advocacy', category: 'hiv' },
  { videoId: 'sEKnJ8ZDKIc', title: 'FULL VIDEO - KURWANYA NO GUKUMIRA VIRUSI ITERA SIDA', description: 'RNADW educational content and advocacy', category: 'hiv' },

  // CEDAW Videos
  { videoId: '0l_TZZqnbE8', title: 'CEDAW Quick and Concise Explaining the Principle of Non Discrimination', description: 'RNADW educational content and advocacy', category: 'cedaw' },
  { videoId: 'OUV738An43g', title: 'CEDAW Quick and Concise Explaining the Principle of Non Discrimination (Rwanda Sign language)', description: 'RNADW educational content and advocacy', category: 'cedaw' },
  { videoId: 'Jr8TDRCxv28', title: 'CEDAW Demystified Substantive Equality (Rwanda Sign Language)', description: 'RNADW educational content and advocacy', category: 'cedaw' },
  { videoId: '2cE41m7yW_k', title: 'CEDAW Principle of State Obligation (Rwandan Sign language)', description: 'RNADW educational content and advocacy', category: 'cedaw' },

  // SRHR/CSE Videos
  { videoId: '8ENkmxqhghM', title: "UBUZIMA BW'IMYOROROKERE /Comprehensive Sexual Education #CSE.", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'MZdDIMXmL7Y', title: "SHORT VIDOE- UBUZIMA BW'IMYOROROKERE", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'HMev4vycg1o', title: "SHORT-VIDEO UBUZIMA BW'IMYOROROKERE", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'Uhi2uNfwXVw', title: "Long -video Serivice z'Ubuzima bw'Imyororokere", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'Z3gqJLFE5hY', title: "Short-video 3 Serivice z'Ubuzima bw'Imyororokere", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: '9hzwq6KYzik', title: "Short -video 2 Serivice z'Ubuzima bw'Imyororokere", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'tpc-etyBkFQ', title: "Serivice z'Ubuzima bw'Imyororokere", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'g57i1-Lw-Pg', title: "#IKIGANIRO CYA 2 IGICE CYA 2: SERIVICE Z'UBUZIMA BW'IMYOROROKERE", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'KyyhxMSJvjA', title: "#IKIGANIRO CYA 2 IGICE CYA 1: SERIVICE Z'UBUZIMA BW'IMYOROROKERE", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'bviu4ZbH9B8', title: "#IKIGANIRO CYA 3: GUSAMA, GUTWITA , N'UBUGUMBA", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'vb4lDo5BKFY', title: "#ikiganiro CYA 1: UBUZIMA BW'IMYOROROKERE #srhr", description: 'RNADW educational content and advocacy', category: 'srhr' },
  { videoId: 'JveH_UWyn6M', title: "INDA Z'ABANGAVU UBURYO BWO GUKUMIRA INDA Z'ABANGAVU", description: 'RNADW educational content and advocacy', category: 'srhr' },

  // Menstrual Health Videos
  { videoId: 'sEFtdcLz_t8', title: "Ukwezi k'Umugore (Imihango)", description: 'RNADW educational content and advocacy', category: 'menstruation' },
  { videoId: 'baWmY9iFU4M', title: "Ukwezi k'Umugore (Imihango)", description: 'RNADW educational content and advocacy', category: 'menstruation' },
  { videoId: 'zq9xjkE47Rw', title: "Short-video 2 Ukwezi k'Umugore (Imihango)", description: 'RNADW educational content and advocacy', category: 'menstruation' },
  { videoId: 'N5X5GNBHZm0', title: "Short -video 1 Ukwezi k'Umugore (Imihango)", description: 'RNADW educational content and advocacy', category: 'menstruation' },
  { videoId: 'z_Bws3K-nbU', title: "Long-video Ukwezi k'Umugore (Imihango)", description: 'RNADW educational content and advocacy', category: 'menstruation' },

  // Education/Awareness Videos (previously stories, now categorized as education)
  { videoId: 'pLWXHSn9yMU', title: "SHORT VIDEO 03 - UBURINGANIRE N'UBWUZUZANYE", description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: 'lZHeiQ5kM2I', title: "SHORT VIDEO 02 - UBURINGANIRE N'UBWUZUZANYE", description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: 'epC-d0fImN8', title: "SHORT VIDEO 01 - UBURINGANIRE N'UBWUZUZANYE", description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: 'V0DjfsCrxr4', title: "FULL VIDEO - UBURINGANIRE N'UBWUZUZANYE", description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: 'enlmQx3695Q', title: "SHORT-VIDEO 2 UBUMENYI KU MIBEREHO N'IMIBANIRE Y'URUBYIRUKO", description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: 'RuvQCiX5Qbs', title: "SHORT- VIDEO 1 UBUMENYI KU MIBEREHO N'IMIBANIRE Y'URUBYIRUKO", description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: 'GePEk4Vz3Go', title: "LONG-VIDEO UBUMENYI KU MIBEREHO N'IMIBANIRE Y'URUBYIRUKO", description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: 'kufgb6Ry7eU', title: 'SHORT-VIDEO IBIYOBYABWENGE', description: 'RNADW educational content and advocacy', category: 'education' },
  { videoId: '9imWYTcn82w', title: 'LONG-VIDEO IBIYOBYABWENGE', description: 'RNADW educational content and advocacy', category: 'education' },

  // About RNADW Videos
  { videoId: 'SFhndjv-PfY', title: 'About Rwanda National Association of Deaf women _RNADW', description: 'RNADW educational content and advocacy', category: 'about' },
  { videoId: 'AAj6khtk8mA', title: '#MyNameMyIdentity: Meet IBISHAKA Lucie', description: 'RNADW educational content and advocacy', category: 'about' },
  { videoId: '7au490_-ZRE', title: '#MyNameMyIdentity: Meet Mushimiyimana Jeannette.', description: 'RNADW educational content and advocacy', category: 'about' },
  { videoId: 'kFNbkZAnKX8', title: '#MyNameMyIdentity :I feel pain calling my child "IKIRAGI"', description: 'RNADW educational content and advocacy', category: 'about' },
  { videoId: 'JuhNND3NPgM', title: '#MyNameMyIdentity; Mrs.Nsanga Sylvie : The Gender, social justice, and inclusion activist.', description: 'RNADW educational content and advocacy', category: 'about' },
  { videoId: '-LulMcMM1LE', title: 'Deaf women and girls deserve right names - #MyNameMyIdentity', description: 'RNADW educational content and advocacy', category: 'about' },
];

export async function GET() {
  try {
    await connectDB();
    
    const Video = mongoose.models.Video || mongoose.model('Video', VideoSchema);
    
    // Clear existing videos
    await Video.deleteMany({});
    
    // Insert all videos
    const videos = await Video.insertMany(
      videosData.map(video => ({
        ...video,
        thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
        published: true
      }))
    );

    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${videos.length} videos`,
      count: videos.length,
      categories: {
        sgbv: videosData.filter(v => v.category === 'sgbv').length,
        hiv: videosData.filter(v => v.category === 'hiv').length,
        cedaw: videosData.filter(v => v.category === 'cedaw').length,
        srhr: videosData.filter(v => v.category === 'srhr').length,
        menstruation: videosData.filter(v => v.category === 'menstruation').length,
        education: videosData.filter(v => v.category === 'education').length,
        about: videosData.filter(v => v.category === 'about').length,
      }
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ success: false, error: 'Failed to seed videos' }, { status: 500 });
  }
}
