const connection = require("../../database/index");
const Bookmark = require("./bookmark.model.js");
const moment = require("moment-timezone");
const Section = require("./section.model");
class Event {
  constructor() {
    (this.id = null),
      (this.name = null),
      (this.price = null),
      (this.startDate = null),
      (this.endDate = null),
      (this.localisation = null),
      (this.information = null),
      (this.nbPlace = null),
      (this.placeSell = null),
      (this.urlThumbnail = null),
      (this.urlImg = null),
      (this.userId = null);
    this.bookmark = new Bookmark();
  }

  create(event) {
    return new Promise((resolve, reject) => {
      try {
        const creationDate = moment
          .tz(Date.now(), "Europe/paris")
          .utc()
          .format();
        connection.query(
          "INSERT INTO event (name, localisation, information, urlImg, public, password, creationDate, startDate, endDate, publishDate, id_user, id_category, id_subcategory) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
          [
            event.eventName,
            event.location,
            event.information,
            event.file,
            event.public != null ? 1 : 0,
            event.public != null ? event.password : "",
            creationDate,
            event.startDate.toString(),
            event.endDate.toString(),
            event.publishDate.toString(),
            event.userId,
            event.category,
            event.subCategory,
          ],
          async (err, result) => {
            if (err) throw err;
            console.log(result);
            if (result.affectedRows == 1) {
              const section = new Section(result.insertId, event.section);
              if (await section.add()) {
                resolve(true);
              } else {
                reject(false);
              }
            } else {
              reject(false);
            }
          }
        );
      } catch (error) {
        reject("error api");
      }
    });
  }

  static getEvents() {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT * FROM event ORDER BY id desc",
          async (err, result) => {
            if (err) throw err;
            resolve(result);
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }

  getEventById(idEvent) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT * FROM event WHERE id = ?",
          [idEvent],
          (err, result) => {
            if (err) throw err;
            resolve(result);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "DELETE FROM event WHERE id = ?",
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
        reject("Error api");
      }
    });
  }

  getCategory() {
    return new Promise((resolve, reject) => {
      try {
        connection.query("SELECT * FROM category", async (err, result) => {
          if (err) throw err;
          resolve(result);
        });
      } catch (error) {
        reject(null);
      }
    });
  }

  getCategoryById(id) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT * FROM category WHERE id = ?",
          [id],
          async (err, result) => {
            if (err) throw err;
            resolve(result);
          }
        );
      } catch (error) {
        reject(null);
      }
    });
  }

  getSubCategory() {
    return new Promise((resolve, reject) => {
      try {
        connection.query("SELECT * from subcategory", async (err, result) => {
          if (err) throw err;
          resolve(result);
        });
      } catch (error) {
        reject(null);
      }
    });
  }

  getSubCategoryById(id) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT * FROM subcategory WHERE id = ?",
          [id],
          (err, result) => {
            if (err) throw err;
            resolve(result);
          }
        );
      } catch (error) {
        reject(null);
      }
    });
  }

  getBookmarkEvents(idUser) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT e.* FROM event e LEFT JOIN bookmark b ON b.id_event = e.id WHERE b.id_user = ?",
          [idUser],
          async (err, result) => {
            if (err) throw err;
            await Promise.all(
              result.map(async (e) => {
                if (idUser !== "null") {
                  e.bookmark = await this.bookmark.userHaveBookmark(
                    idUser,
                    e.id
                  );
                } else {
                  e.bookmark = false;
                }
                return e;
              })
            );
            resolve(result);
          }
        );
      } catch (error) {
        resolve(null);
      }
    });
  }
}

module.exports = Event;
