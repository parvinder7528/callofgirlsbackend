const { S3Client, PutObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

    async function getUploadURL(fileName, contentType) {
        const command = new PutObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: `uploads/${fileName}`,
            ContentType: contentType,
        });

        // CRITICAL FIX: signableHeaders specify karne se extra 
        // checksum headers ka jhanjhat khatam ho jata hai.
        return await getSignedUrl(s3Client, command, {
            expiresIn: 900,
        });
    }

const deleteFromS3 = async (fileUrl) => {
    console.log("Deleting from S3, fileUrl:", fileUrl);
    try {
        if (!fileUrl) throw new Error("fileUrl is required");

        let key;
        if (fileUrl.startsWith("http")) {
            const url = new URL(fileUrl);
            key = decodeURIComponent(url.pathname.substring(1));
        } else {
            key = fileUrl;
        }


        const command = new DeleteObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            Key: key,
        });

        await s3Client.send(command);

        return true;
    } catch (err) {
        console.error("S3 delete error:", err);
        throw err;
    }
};

module.exports = { getUploadURL, deleteFromS3 }