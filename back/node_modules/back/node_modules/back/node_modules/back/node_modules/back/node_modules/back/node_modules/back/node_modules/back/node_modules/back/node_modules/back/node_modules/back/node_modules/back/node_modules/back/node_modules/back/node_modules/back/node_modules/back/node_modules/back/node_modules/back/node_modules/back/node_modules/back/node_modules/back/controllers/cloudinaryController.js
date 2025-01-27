import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_SECRET_KEY;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

const deleteImage = async (req, res) => {
  const { publicId } = req.body;

  try {
    const timestamp = Math.floor(Date.now() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        public_id: publicId,
        timestamp,
      },
      apiSecret
    );

    const result = await cloudinary.UploadStream.destroy(publicId, {
      timestamp,
      signature,
      apiKey,
    });

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export { deleteImage };
