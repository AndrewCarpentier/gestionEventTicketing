import style from "./Users.module.scss";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../apis/Users";
import { useTranslation } from "react-i18next";
import User from "./User/User";
import UserEdit from "./UserEdit/UserEdit";
import Search from "./Search/Search";

function Users() {
  const { t } = useTranslation();
  const [usersBackUp, setUsersBackUp] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(false);
  const [idUserEdit, setIdUserEdit] = useState(0);

  useEffect(() => {
    getAllUser().then((res) => {
      setUsersBackUp(res);
      setUsers(res);
    });
  }, []);
  
  return (
    <div>
      <Search tabBackUp={usersBackUp} setTab={setUsers} onSearch={setSearch}/>
      {!users.length ? (
        <div>{search ? <div>{t("searchNone")}</div> : <div>{t("loading")}</div>}</div>
      ) : (
        <>
          <div className="d-flex">
            <div
              className={`${style.px300} d-flex justify-content-center align-items-center`}
            >
              {t("lastname")}
            </div>
            <div
              className={`${style.px300} d-flex justify-content-center align-items-center`}
            >
              {t("firstname")}
            </div>
            <div
              className={`${style.px300} d-flex justify-content-center align-items-center`}
            >
              Email
            </div>
          </div>
          {users.map((user, i) => (
            <div key={user.id} className={`${i % 2 !== 0 ? style.gray : ""} ${style.item}`}>
              {user.id === idUserEdit ? (
                <UserEdit
                  user={user}
                  users={users}
                  setIdUserEdit={setIdUserEdit}
                  setUsers={setUsers}
                />
              ) : (
                <User
                  user={user}
                  setIdUserEdit={setIdUserEdit}
                  setUsers={setUsers}
                  users={users}
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Users;
