const router = require("express").Router();
const bcrypt = require('bcrypt');
const connection = require('../../database/index');

router.post('/', async(req, res)=>{
    const {mail, firstname, lastname, password, passwordConfirm} = req.body;
    const newUser = {
        mail, firstname, lastname,
        password : await bcrypt.hash(password, 10)
    };
    sqlVerifMail = "SELECT * FROM user WHERE mail = ?";
    valueSqlVerifMail = [newUser.mail];
    sqlAddUser = "INSERT INTO user(mail, firstname, lastname, password) VALUES (?,?,?,?)";
    valueSqlAddUser = [newUser.mail, newUser.firstname, newUser.lastname, newUser.password];

    if(password == passwordConfirm){
        try {
            //verification if user already exist
            connection.query(sqlVerifMail, valueSqlVerifMail, (err, result)=>{
                if(result.length === 0){
                    connection.query(sqlAddUser, valueSqlAddUser, (err, result)=>{
                        if(result){
                            res.json('Utilisateur bien ajouter');
                        }else{
                            res.status(400).json('Oops une erreur est survenue');
                        }
                    })
                }else{
                    res.status(400).json('mail déjà utiliser');
                }
            });
        } catch (error) {
            res.status(400).json('Oops une erreur est survenue');
        }
    }else{
        res.status(400).json('password pas identique');
    }

});

module.exports = router;