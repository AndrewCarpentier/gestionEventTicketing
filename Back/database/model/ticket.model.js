const connection = require("../../database/index");

class Ticket {
  constructor(idSection, ticket) {
    (this.idSection = idSection), (this.ticket = ticket);
  }

  add() {
    return new Promise((resolve, reject) => {
      try {
        this.ticket.map(async(ticket) => {
            console.log(ticket)
          connection.query(
            "INSERT INTO ticket (name, capacity, price, startSellDate, endSellDate, numberSell, id_section) VALUES (?,?,?,?,?,0,?)",
            [
              ticket.name,
              ticket.capacity,
              ticket.price,
              ticket.startSellDate.toString(),
              ticket.endSellDate.toString(),
              this.idSection
            ],
            (err, result) => {
              if (err) throw err;
              if (!(result.affectedRows === 1)) {
                reject(false);
              }
            }
          );
        });
        resolve(true);
      } catch (error) {
        reject("Api error");
      }
    });
  }
}

module.exports = Ticket;
