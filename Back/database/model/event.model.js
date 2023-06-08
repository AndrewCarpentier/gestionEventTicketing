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
      (this.userId = null),
      (this.linkOnlineEvent = null),
      (this.creationDate = null),
      (this.idUser = null),
      (this.idCategory = null),
      (this.idSubCategory = null),
      (this.bookmark = new Bookmark());
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

  async update(event) {
    const eventUpdate = await this.getEventById(event.id);
    eventUpdate.id = event.id;
    eventUpdate.name =
      event.eventName == undefined ? eventUpdate.name : event.eventName;
    eventUpdate.localisation =
      event.location == undefined ? eventUpdate.localisation : event.location;
    eventUpdate.linkOnlineEvent =
      event.linkOnlineEvent == undefined
        ? eventUpdate.linkOnlineEvent
        : event.linkOnlineEvent;
    eventUpdate.information =
      event.information == undefined
        ? eventUpdate.information
        : event.information;
    eventUpdate.urlImg =
      event.urlImg == undefined ? eventUpdate.urlImg : event.urlImg;
    eventUpdate.public =
      event.public == undefined ? eventUpdate.public : event.public;
    eventUpdate.password =
      event.password == undefined ? eventUpdate.password : event.password;
    eventUpdate.creationDate =
      event.creationDate == undefined
        ? eventUpdate.creationDate
        : event.creationDate;
    eventUpdate.startDate =
      event.startDate == undefined ? eventUpdate.startDate : event.startDate;
    eventUpdate.endDate =
      event.endDate == undefined ? eventUpdate.endDate : event.endDate;
    eventUpdate.publishDate =
      event.publishDate == undefined
        ? eventUpdate.publishDate
        : event.publishDate;
    eventUpdate.id_user =
      event.userId == undefined ? eventUpdate.id_user : event.userId;
    eventUpdate.id_category =
      event.category == undefined ? eventUpdate.id_category : event.category;
    eventUpdate.id_subCategory =
      event.subCategory == undefined
        ? eventUpdate.id_subCategory
        : event.subCategory;
    console.log(eventUpdate);
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "UPDATE event SET name = ?, localisation = ?, information = ?, public = ?, password = ?, startDate = ?, endDate = ?, publishDate = ?, id_user = ?, id_category = ?, id_subcategory = ? WHERE id = ?",
          [
            eventUpdate.name,
            eventUpdate.localisation,
            eventUpdate.information,
            eventUpdate.public,
            eventUpdate.password,
            eventUpdate.startDate,
            eventUpdate.endDate,
            eventUpdate.publishDate,
            eventUpdate.id_user,
            eventUpdate.id_category,
            eventUpdate.id_subCategory,
            eventUpdate.id,
          ],
          (err, result) => {
            if (err) throw err;
            resolve(result.affectedRows === 1);
          }
        );
      } catch (error) {
        reject("API error");
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
            this.id = result.id;
            this.name = result.name;
            this.localisation = result.localisation;
            this.linkOnlineEvent = result.linkOnlineEvent;
            this.information = result.information;
            this.urlImg = result.urlImg;
            this.public = Boolean(result.public);
            this.password = result.password;
            this.creationDate = result.creationDate;
            this.startDate = result.startDate;
            this.endDate = result.endDate;
            this.publishDate = result.publishDate;
            this.idUser = result.id_user;
            this.idCategory = result.id_category;
            this.idSubCategory = result.id_subCategory;
            resolve(result[0]);
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
