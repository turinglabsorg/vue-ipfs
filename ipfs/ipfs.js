import fs from 'fs'
import FormData from 'form-data'
import rfs from 'recursive-fs'
import basePathConverter from 'base-path-converter'
import got from 'got'
import dotenv from 'dotenv'
dotenv.config()

const pinDirectoryToPinata = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const src = "../dist";
  var status = 0;
  try {
    const { dirs, files } = await rfs.read(src);
    let data = new FormData();
    for (const file of files) {
      data.append(`file`, fs.createReadStream(file), {
        filepath: basePathConverter(src, file),
      });
    }
    const response = await got(url, {
      method: 'POST',
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        "Authorization": "Bearer " + process.env.PINATA_KEY
      },
      body: data
    })
      .on('uploadProgress', progress => {
        console.log(progress);
      });

    console.log("Uploaded at: " + process.env.PINATA_ENDPOINT + JSON.parse(response.body).IpfsHash);
  } catch (error) {
    console.log(error);
  }
};
// Fix to relative paths
const index = fs.readFileSync('../dist/index.html').toString()
const fixed = index.replaceAll('href="/', 'href="./').replaceAll('src="/', 'src="./');
console.log(fixed)
fs.writeFileSync('../dist/index.html', fixed)

pinDirectoryToPinata()