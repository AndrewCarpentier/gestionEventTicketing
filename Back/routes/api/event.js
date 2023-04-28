const router = require('express').Router();
const Event = require('../../database/model/event.model');

router.get('/getAll', async(req,res)=>{
    const {id} = req.query;
    const event = new Event();
    res.json(await event.getEvents(id));
});

router.get('/getBookmarkEvents', async(req,res)=>{
    const {id} = req.query;
    const event = new Event();
    res.json(await event.getBookmarkEvents(id));
});

module.exports = router;