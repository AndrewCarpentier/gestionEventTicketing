const router = require("express").Router();
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { key, keyPub } = require("../../keys");
const User = require("../../database/model/user.model");

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

module.exports = router;
