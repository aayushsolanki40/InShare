const res = require('express/lib/response');
const multer = require('multer');
const router = require('express').Router();
const path = require('path');
const File = require('../modals/file');
const {v4: uuid4} = require('uuid');
const { findOne } = require('../modals/file');

let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqname  = 'id' + (new Date()).getTime() + (path.extname(file.originalname));
        cb(null, uniqname);
    }
})

let upload = multer({
    storage,
    limits: {fileSize: 1000000 * 100}  //100 MB
}).single('myfile')

router.post('/', (req, res)=>{
    //store file
        upload(req, res, async err => {
              //Validate requests
                if(!req.file){
                    return res.json({error: 'Required all fields.'})
                }

            if(err)
                return res.status(500).send({err: err.message});
            //store into database
            const file = new File({
                filename: req.file.filename,
                uuid: uuid4(),
                path: req.file.path,
                size: req.file.size
            })

            const response = await file.save();
            return res.json({file: `${process.env.APP_BASE_URL}/files/${response.uuid}`});
        })
    //response : download link
});

router.post('/send', async (req, res)=>{

    console.log(req.body);
    const {uuid, emailTo, emailFrom} = req.body;
    console.log(uuid);
    if(!uuid||!emailTo||!emailFrom){
        return res.status(422).send({error: 'All fields are required.'});
    }

    //Get data from datatbase
    const file = await File.findOne({ uuid: uuid });
    // if(file.sender){
    //     return res.status(422).send({error: 'Email aready sent.'});
    // }

    file.sender = emailFrom;
    file.receiver = emailTo;

    const response = await file.save();

    //Send Email
    const sendMail = require('../Services/emailService');
    sendMail({
        from: `AAYSOL<${emailFrom}>`,
        to: emailTo,
        subject: 'Thanks for visiting AAYSOL Pvt. Ltd.',
        text: `${emailFrom} shared file with you.`,
        html: require('../Services/emailTemplates')({
            emailFrom: emailFrom,
            downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
            size: parseInt(file.size/1000)+' KB',
            expires: '24 hours'
        })
    });
    res.status(200).send({'status':true, 'message':'Mail sent successfully.'})
})

module.exports = router;