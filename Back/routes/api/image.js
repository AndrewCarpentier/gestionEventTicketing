const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/:filename', (req,res)=>{
    const {filename} = req.params;
    const readStream = fs.createReadStream(path.resolve('./uploads/images/' + filename));
    readStream.pipe(res);
});

module.exports = router;