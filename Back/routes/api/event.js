const router = require('express').Router();
const connection = require('../../database/index');

router.get('/', (req,res)=>{
    connection.query('SELECT * FROM event', (err, result)=>{
        console.log(result)
        res.json(result);
    })
});

module.exports = router;