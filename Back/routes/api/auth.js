const router = require("express").Router();
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const {key, keyPub} = require('../../keys');
const connection = require('../../database/index');

router.post('/', async(req, res)=>{
    const {mail, password} = req.query;
    sql = "SELECT * FROM user WHERE mail = ?";
    value = [mail];

    try{
        connection.query(sql, value, (err, result)=>{
            const user = {
                id: result[0].id,
                mail : result[0].mail,
                firstname: result[0].firstname,
                lastname: result[0].lastname,
                password: result[0].password
            };
            if(result){
                if(bcrypt.compareSync(password, user.password)){
                    const token = jsonwebtoken.sign({}, key, {
                        subject: user.id.toString(),
                        expiresIn: 3600 * 24 * 31 * 12,
                        algorithm: "RS256"
                    });
                    res.cookie('token', token);
                    res.json(user);
                }else{
                    res.status(400).json('Email et/ou mot de passe incorrect');
                }                 
            }else{
                res.status(400).json('Email et/ou mot de passe incorrect');
            }
        });
    }catch (error){
        res.status(400).json('Email et/ou mot de passe incorrect');
    }
    
});

module.exports = router;