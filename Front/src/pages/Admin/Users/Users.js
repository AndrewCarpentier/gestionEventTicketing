import style from "./Users.module.scss";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../apis/Users";
import User from "./User/User";
import UserEdit from "./UserEdit/UserEdit";

function ShowUsers() {
  const [users, setUsers] = useState([]);
  const [idUserEdit, setIdUserEdit] = useState(0);

  useEffect(() => {
    getAllUser().then((res) => setUsers(res));
  }, []);

  return (
    <div>
      {!users.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="d-flex">
            <div
              className={`${style.px300} d-flex justify-content-center align-items-center`}
            >
              nom
            </div>
            <div
              className={`${style.px300} d-flex justify-content-center align-items-center`}
            >
              prenom
            </div>
            <div
              className={`${style.px300} d-flex justify-content-center align-items-center`}
            >
              mail
            </div>
          </div>
          {users.map((user, i) => (
            <div key={user.id} className={i % 2 !== 0 ? style.gray : ""}>
              {user.id === idUserEdit ? (
                <UserEdit user={user} users={users} setIdUserEdit={setIdUserEdit} setUsers={setUsers} />
              ) : (
                <User user={user} setIdUserEdit={setIdUserEdit} setUsers={setUsers} users={users} />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ShowUsers;
