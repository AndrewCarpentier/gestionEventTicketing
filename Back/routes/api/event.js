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

router.get('/getCategory', async(req,res)=>{
    const event = new Event();
    res.json({category : await event.getCategory(), subCategory : await event.getSubCategory()});
});

router.get('/getEvent/:idEvent', async(req,res)=>{
    const {idEvent} = req.params;
    const event = new Event();
    res.json(await event.getEventById(idEvent));
});

module.exports = router;