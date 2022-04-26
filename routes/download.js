const router = require('express').Router();
const File = require('../modals/file');

router.get('/:uuid', async (req, res)=>{
    const file = await File.findOne({uuid: req.params.uuid});

    if(!file){
        return res.render('download', {error: 'File not found.'})
    }

    const filepath = `${__dirname}/../${file.path}`;

    res.download(filepath);
});


module.exports = router;