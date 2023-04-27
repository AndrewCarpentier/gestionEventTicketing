const router = require("express").Router();
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { key, keyPub } = require("../../keys");
const User = require("../../database/model/user.model");
const TokenGenerator = require('../../utils/Token');
const sendMail = require('../../utils/Mail');

router.post("/", async (req, res) => {
  const { mail, password } = req.body;
  const user = new User();
  await user.getByMail(mail);
  console.log(user);
  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = jsonwebtoken.sign({}, key, {
        subject: user.id.toString(),
        expiresIn: 3600 * 24 * 31 * 12,
        algorithm: "RS256",
      });
      res.cookie("token", token, {
        sameSite: "none",
        httpOnly: true,
        secure: true,
      });
      res.json(user.getUserWithoutPassword);
    } else {
      res.status(400).json("Email et/ou mot de passe incorrect");
    }
  } else {
    res.status(400).json("Email et/ou mot de passe incorrect");
  }
});

router.get("/current", async (req, res) => {
  const { token } = req.cookies;
  if(token){
    const decodedToken = jsonwebtoken.verify(token, keyPub);
    const user = new User();
    await user.getById(decodedToken.sub);
    if(user){
        res.json(user.getUserWithoutPassword)
    }else{
        res.json(null);
    }
  }else{
    res.json(null);
  }
});

router.delete("/", (req, res) => {
  res.clearCookie("token");
  res.end();
});

router.post("/sendLinkPasswordLost", async(req,res)=>{
  const {mail} = req.body;
  const user = new User();
  await user.getByMail(mail);
  if(user.id !== null){
    const token = TokenGenerator(32);
    console.log(token)
    if(user.setPasswordLost(token, user.id)){
      if(await sendMail(token, mail)){
        res.json('Un mail vous à était envoyer')
      }else{
        res.json('Oops une erreur est survenue');
      }
    }else{
      res.json('Oops une erreur est survenue');
    }
  }else{
    res.json("Ce mail n'existe pas");
  }
});

router.post('/resetPassword', async(req,res)=>{
  const {token, password, passwordConfirm} = req.body;

  if(password == passwordConfirm){
    const user = new User();
    await user.getByPasswordLostToken(token);
    if(bcrypt.compareSync(password, user.password)){
      res.send('vous devez saisir un mot de passe different du précédent');
    }else{
      const passwordHash = await bcrypt.hash(password, 10);
      if(user.updatePassword(passwordHash, user.id)){
        res.json('password à bien était modifier');
      }else{
        res.json('Oops une erreur est survenue');
      }
    }
  }else{
    res.status(400).json('password pas identique');
  }
});

module.exports = router;
