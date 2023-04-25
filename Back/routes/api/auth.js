const router = require("express").Router();
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const {key, keyPub} = require('../../keys');
const connection = require('../../database/index');

router.post('/', async(req, res)=>{
    const {mail, password} = req.body;
    console.log(mail)
    sql = "SELECT * FROM user WHERE mail = ?";
    value = [mail];
    try{
        connection.query(sql, value, (err, result)=>{
            if(err) throw err;
            const user = {
                id: result[0].id,
                mail : result[0].mail,
                firstname: result[0].firstname,
                lastname: result[0].lastname,
                password: result[0].password
            };
            if(result){
                if(bcrypt.compareSync(password, user.password)){
                    console.log({result})
                    const token = jsonwebtoken.sign({}, key, {
                        subject: user.id.toString(),
                        expiresIn: 3600 * 24 * 31 * 12,
                        algorithm: "RS256",
                    });
                    console.log(result)
                    res.cookie('token', token, {
                        sameSite: 'none',
                        httpOnly: true,
                        secure: true
                    });
                    res.json({
                        id: user.id,
                        mail: user.mail,
                        firstname: user.firstname,
                        lastname: user.lastname
                    });
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

router.get('/current', async(req, res)=>{
    const {token} = req.cookies;
    const sql = "SELECT * FROM user WHERE id = ?";
    if(token){
        try{
            const decodedToken = jsonwebtoken.verify(token, keyPub);
            connection.query(sql, [decodedToken.sub], (err, result)=>{
                if(result){
                    res.json(result[0]);
                }else{
                    res.json(null)
                }
            });
        }catch (error){
            res.json(null);
        }
    }else{
        res.json(null);
    }
});

router.delete('/', (req, res)=>{
    res.clearCookie('token');
    res.end();
})

module.exports = router;