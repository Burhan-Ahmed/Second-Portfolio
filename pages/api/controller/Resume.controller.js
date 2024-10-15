// import dbConnect from '../../lib/dbConnect';
// import ResumeModel from '../models/Resume.model';

// export default async function handler(req, res) {
//     await dbConnect();

//     try {
//         const resume = await ResumeModel.findOne();
//         if (!resume) {
//             return res.status(404).json({ error: 'Resume not found' });
//         }
//         res.status(200).json({ url: resume.fileUrl });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Server error' });
//     }
// }
