const multer = require("multer");
const path = require("path");

const imageStorage = multer.diskStorage({
  destination: path.resolve("./uploads/images/"),
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "_" +
        (Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000) +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const uploadImage = multer({
  storage: imageStorage,
  limits: {
    fileSize: 100000000, // 100000000 Bytes = 100 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|webp|svg|jpeg|avif)$/)) {
      return cb(
        new Error("please upload a image (png|jpg|webp|svg|jpeg|avif)")
      );
    }
    cb(undefined, true);
  },
});

module.exports = uploadImage;
