// const { MongoClient, GridFSBucket } = require('mongodb');
// const fs = require('fs');

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// async function uploadFile() {
//     try {
//         await client.connect();
//         const db = client.db('burhan_portfolio');
//         const bucket = new GridFSBucket(db);

//         fs.createReadStream('./files')
//             .pipe(bucket.openUploadStream('Resume.pdf'))
//             .on('finish', () => {
//                 console.log('File uploaded successfully');
//                 client.close();
//             });
//     } catch (err) {
//         console.error(err);
//     }
// }

// uploadFile();
