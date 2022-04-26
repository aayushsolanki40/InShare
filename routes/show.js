const router = require('express').Router();
const File = require('../modals/file');

router.get('/:uuid', async (req, res)=>{
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if(!file){
            res.render('download', {error: 'Link has been expired.'});
        }

        return res.render('download', {
            uuid: file.uuid,
            filename: file.filename,
            filesize: file.size,
            download: `${process.env.APP_BASE_URL}/files/download/${file.uuid}` 
        })
    } catch (error) {
        res.render('download', {error: error.message});
    }
    
});

module.exports = router