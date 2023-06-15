const router = require('express').Router();
const Event = require('../../database/model/event.model');
const uploadImage = require('../../utils/UploadImage');

router.get('/all', async(req,res)=>{
    res.json(await Event.getEvents());
});

router.get('/:idEvent', async(req,res)=>{
    const {idEvent} = req.params;
    const event = new Event();
    res.json(await event.getEventById(idEvent));
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

router.get('/getCategory/:id', async(req,res)=>{
    const {id} = req.params;
    const event = new Event();;
    res.json(await event.getCategoryById(id))
})

router.get('/getSubCategory/:id', async(req,res)=>{
    const {id} = req.params;
    const event = new Event();;
    res.json(await event.getSubCategoryById(id))
})

router.post('/create', uploadImage.single('image') ,async(req,res)=>{
    const event = new Event();
    res.json(await event.create({...JSON.parse(req.body.event), file : req.file.filename}));
});

router.put('/update', async(req,res)=>{
    const {eventName, location, information, public, password, startDate, endDate, publishDate, userId, category, subCategory, id} = req.body;
    console.log(eventName, location, information, public, password, startDate, endDate, publishDate, userId, category, subCategory, id)
    const event = new Event();
    
    if(id === undefined){
        res.status(400).json("Il manque l'id de l'evenement");
    }else{
        res.json(await event.update({eventName, location, information, public, password, startDate, endDate, publishDate, userId, category, subCategory, id}));
    }
})

router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    res.json(await Event.delete(id));
})

module.exports = router;