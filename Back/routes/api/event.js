const router = require('express').Router();
const Event = require('../../database/model/event.model');

router.get('/getAll', async(req,res)=>{
    const {id} = req.query;
    const event = new Event();
    const events = await event.getEvents(id);
    res.json(events);
});

module.exports = router;