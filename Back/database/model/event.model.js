const connection = require("../../database/index");
const Bookmark = require("./bookmark.model.js");

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

  getEvents(idUser) {
    return new Promise((resolve, reject) => {
      try {
        connection.query("SELECT * FROM event", async (err, result) => {
          if (err) throw err;
          await Promise.all(
            result.map(async (e) => {
              if (idUser !== "null") {
                e.bookmark = await this.bookmark.userHaveBookmark(idUser, e.id);
              } else {
                e.bookmark = false;
              }
              return e;
            })
          );
          resolve(result);
        });
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
            result[0].startDate = result[0].startDate.toDateString();
            result[0].creationDate = result[0].creationDate.toDateString();
            result[0].endDate = result[0].endDate.toDateString();
            result[0].datePublish = result[0].datePublish.toDateString();
            resolve(result);
          }
        );
      } catch (error) {
        reject(error);
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
