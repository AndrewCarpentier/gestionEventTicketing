const connection = require("../../database/index");

class Bookmark {
  constructor() {}

  userHaveBookmark(idUser, idEvent) {
    return new Promise((resolve, reject) => {
      try {
        connection.query(
          "SELECT * FROM bookmark WHERE id_user = ? AND id_event = ?",
          [idUser, idEvent],
          (err, result) => {
            if (err) throw err;
            if (result.length) {
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
  };

  add(idUser, idEvent){
    return new Promise((resolve, reject)=>{
      try{
        connection.query('INSERT INTO bookmark (id_user, id_event) VALUES (?,?)', [idUser, idEvent], (err, result)=>{
          if(err) throw err;
          if(result.affectedRows == 1){
            resolve(true);
          }else{
            resolve(false);
          }
        });
      }catch(error){
        resolve(null);
      }
    });
  };

  delete(idUser, idEvent){
    return new Promise((resolve, reject)=>{
      try {
        connection.query('DELETE FROM bookmark WHERE id_user = ? AND id_event = ?', [idUser,idEvent], (err, result)=>{
          if(err) throw err;
          if(result.affectedRows == 1){
            resolve(true);
          }else{
            resolve(false);
          }
        });
      } catch (error) {
        resolve(null);
      }
    });
  };
};

module.exports = Bookmark;
