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

router.post('/edit', (req, res)=>{
    const {id, mail, lastname, firstname} = req.body;
    console.log(`${id} ${lastname}`)
    const sql = "SELECT * FROM user WHERE mail = ?";
    const valueSql = [mail, id];
    const sql2 = "UPDATE user SET mail = ? , lastname = ?, firstname = ? WHERE id = ?";
    const valueSql2 = [mail, lastname, firstname, id];
    connection.query(sql, valueSql, (err, result)=>{
        if(err) throw err;
        if(result.length){
            if((result[0].id === parseInt(id))){
                connection.query(sql2, valueSql2, (err, result)=>{
                    if(result.affectedRows == 1){
                        res.json(true);
                    }else{
                        res.json(false);
                    }
                });
            }else{
                res.status(400).json('mail déjà existant');
            }
        }else{
            connection.query(sql2, valueSql2, (err, result)=>{
                if(result.affectedRows == 1){
                    res.json(true);
                }else{
                    res.json(false);
                }
            });
        }
    });
});

module.exports = router;