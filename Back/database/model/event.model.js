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
