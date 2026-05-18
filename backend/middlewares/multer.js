import multer from 'multer'

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,   // 5 MB image
    fieldSize: 10 * 1024 * 1024  // allow long text fields (IMPORTANT)
  }
})

export default upload
