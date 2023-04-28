const router = require('express').Router();
const Bookmark = require('../../database/model/bookmark.model');

router.post('/add', async(req, res)=>{
    const {idUser, idEvent} = req.body;
    const bookmark = new Bookmark();
    res.json(await bookmark.add(idUser, idEvent));
});

router.post('/delete', async(req,res)=>{
    const {idUser, idEvent} = req.body;
    const bookmark = new Bookmark();
    res.json(await bookmark.delete(idUser, idEvent));
});

module.exports = router;