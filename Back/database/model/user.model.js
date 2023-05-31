const connection = require("../../database/index");
class User {
  constructor() {
    this.id = null;
    this.mail = null;
    this.firstname = null;
    this.lastname = null;
    this.password = null;
    this.urlThumbnail = null;
    this.gender = null;
    this.role = null;
  }

  reset() {
    this.id = null;
    this.mail = null;
    this.firstname = null;
    this.lastname = null;
    this.password = null;
    this.urlThumbnail = null;
    this.gender = null;
    this.role = null;
  }

  get getUserWithoutPassword() {
    return {
      id: this.id,
      mail: this.mail,
      firstname: this.firstname,
      lastname: this.lastname,
      urlThumbnail: this.urlThumbnail,
      gender: this.gender,
      role: this.role,
    };
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT u.id, u.mail, u.firstname, u.lastname, u.password, u.urlThumbnail, u.gender, u.creationDate, r.name as role FROM user u INNER JOIN role r ON r.id = u.idRole",
          (err, result) => {
            if (err) throw err;
            resolve(result);
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  getByMail(mail) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT u.id, u.mail, u.firstname, u.lastname, u.password, u.urlThumbnail, u.gender, u.creationDate, r.name as role FROM user u INNER JOIN role r ON r.id = u.idRole WHERE u.mail = ?",
          [mail],
          (err, result) => {
            if (err) throw err;
            if (result.length) {
              this.id = result[0].id;
              this.mail = result[0].mail;
              this.firstname = result[0].firstname;
              this.lastname = result[0].lastname;
              this.password = result[0].password;
              this.urlThumbnail = result[0].urlThumbnail;
              this.gender = result[0].gender;
              this.role = result[0].role;
            } else {
              this.reset();
            }
            resolve(this);
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT u.id, u.mail, u.firstname, u.lastname, u.password, u.urlThumbnail, u.gender, u.creationDate, r.name as role FROM user u INNER JOIN role r ON r.id = u.idRole WHERE u.id = ?",
          [id],
          (err, result) => {
            if (err) throw err;
            if (result.length) {
              this.id = result[0].id;
              this.mail = result[0].mail;
              this.firstname = result[0].firstname;
              this.lastname = result[0].lastname;
              this.password = result[0].password;
              this.urlThumbnail = result[0].urlThumbnail;
              this.gender = result[0].gender;
              this.role = result[0].role;
            } else {
              this.reset();
            }
            resolve(this);
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }

  getByPasswordLostToken(token) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT u.* FROM user u LEFT JOIN password_lost p ON p.id_user = u.id WHERE p.token = ?",
          [token],
          (err, result) => {
            if (err) throw err;
            if (result.length) {
              this.id = result[0].id;
              this.mail = result[0].mail;
              this.firstname = result[0].firstname;
              this.lastname = result[0].lastname;
              this.password = result[0].password;
              this.urlThumbnail = result[0].urlThumbnail;
              this.gender = result[0].gender;
              this.role = result[0].role;
            } else {
              this.reset();
            }
            resolve(this);
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }

  add(mail, firstname, lastname, password) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "INSERT INTO user(mail, firstname, lastname, password, creationDate, idRole) VALUES (?,?,?,?,NOW(),1)",
          [mail, firstname, lastname, password],
          (err, result) => {
            if (err) throw err;
            if (result) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "DELETE FROM user WHERE id = ?",
          [id],
          (err, result) => {
            if (err) throw err;
            if (result.affectedRows === 1) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        reject("API error");
      }
    });
  }

  update(id, mail, lastname, firstname) {
    mail = mail === undefined ? this.mail : mail;
    lastname = lastname === undefined ? this.lastname : lastname;
    firstname = firstname === undefined ? this.firstname : firstname;

    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "UPDATE user SET mail = ? , lastname = ?, firstname = ? WHERE id = ?",
          [mail, lastname, firstname, id],
          (err, result) => {
            if (err) throw err;
            if (result) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }

  updatePassword(password, id) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "UPDATE user SET password = ? WHERE id = ?",
          [password, id],
          (err, result) => {
            if (err) throw err;
            if (result) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }

  setPasswordLost(token, id) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "INSERT INTO password_lost (token, id_user) VALUES (?,?)",
          [token, id],
          (err, result) => {
            if (err) throw err;
            console.log(this.password);
            if (result.affectedRows == 1) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (error) {
        resolve("error");
      }
    });
  }
}

module.exports = User;
