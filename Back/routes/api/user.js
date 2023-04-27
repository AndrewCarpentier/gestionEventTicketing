const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../database/model/user.model");

router.post("/", async (req, res) => {
  const { mail, firstname, lastname, password, passwordConfirm } = req.body;
  const newUser = {
    mail,
    firstname,
    lastname,
    password: await bcrypt.hash(password, 10),
  };
  const user = new User();

  if (password === passwordConfirm) {
    await user.getByMail(mail);
    if (user.id === null) {
      if (
        await user.add(
          newUser.mail,
          newUser.firstname,
          newUser.lastname,
          newUser.password
        )
      ) {
        res.json("Utilisateur bien ajouter");
      } else {
        res.status(400).json("Oops une erreur est survenue");
      }
    } else if (user === null) {
      res.status(400).json("Oops une erreur est survenue");
    } else {
      res.status(400).json("mail déjà utiliser");
    }
  } else {
    res.status(400).json("password pas identique");
  }
});

router.post("/edit", async (req, res) => {
  const { id, mail, lastname, firstname } = req.body;
  const user = new User();
  await user.getByMail(mail);
  console.log(user);
  if (user.id === null) {
    if (await user.update(id, mail, lastname, firstname)) {
      res.json(true);
    } else {
      res.json(false);
    }
  } else if (user) {
    if (user.id == id) {
      if (await user.update(id, mail, lastname, firstname)) {
        res.json(true);
      } else {
        res.json(false);
      }
    } else {
      res.status(400).json("mail déjà existant");
    }
  } else {
    res.status(400).json("Oops une erreur est survenue");
  }
});

module.exports = router;
