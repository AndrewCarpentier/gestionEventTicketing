const connection = require("../../database/index");
const Ticket = require("./ticket.model");

class Section {
  constructor(idEvent, section) {
    (this.idEvent = idEvent), (this.section = section);
  }

  add() {
    return new Promise((resolve, reject) => {
      try {
        this.section.map((section) => {
          connection.query(
            "INSERT INTO section (capacity, name, id_event) VALUES (?,?,?)",
            [section.capacity, section.name, this.idEvent],
            async (err, result) => {
              if (err) throw err;
              if (result.affectedRows === 1) {
                const ticket = new Ticket(result.insertId, section.ticket);
                if (!(await ticket.add())) {
                  reject(false);
                }
              }
            }
          );
          resolve(true);
        });
      } catch (error) {
        reject("Api error");
      }
    });
  }
}

module.exports = Section;
