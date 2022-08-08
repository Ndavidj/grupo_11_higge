const path = require('path');
const multer = require('multer');

/* const storage = multer.diskStorage({
	destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../../../public/images/users"))
  },
  filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });
 */
// Config's Multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
        const newAvatar = file.fieldname + Date.now() + path.extname(file.originalname)
        cb(null, newAvatar);
    }
});
const uploadFile = multer({ storage: storage });

module.exports = uploadFile;