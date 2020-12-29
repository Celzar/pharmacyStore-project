//@import libraries
const multer = require('multer')


//@desc_multer config multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname[file.originalname]
        if (ext !== '.jpg' || ext !== '.png' || ext !== '.gif') {
            return cb(res.status(400).end('only jpg, png, gif are allowed'), false)
        }

        cb(null, true)
    }
})


const upload = multer({ storage: storage }).single('image')

exports.upload = (req, res) => {


    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {

            return res.status(500).json({ success: false, err })
        } else if (err) {
            return res.status(500).json({ success: false, err })
        } else if (req.file.filename > 100) {
            return res.status(500).json({ success: false, message: 'your filename is too long!! please rename your filename and try to upload again!!' })
        }

        return res.status(200).json({
            success: true,
            link: `http://localhost:8000/${req.file.destination}${req.file.filename}`
        })


    })





}