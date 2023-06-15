import { useTranslation } from "react-i18next";
import { deleteUser } from "../../../../apis/Users";
import style from "./User.module.scss";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminContext";

function User({ user, setIdUserEdit, users, setUsers }) {
  const { t } = useTranslation();
  const {setShowDelete, deleteAlertResponse, setDeleteAlertResponse} = useContext(AdminContext);

  function onEdit() {
    setIdUserEdit(user.id);
  }

  function onShowDeleteMessage(){
    setShowDelete(true);
  }

  if(deleteAlertResponse){
    if (deleteUser(user.id)) {
      setUsers(users.filter((u) => u.id !== user.id));
    }
    setDeleteAlertResponse(false)
  }

  return (
    <div className="d-flex">
      <div
        className={`${style.px300} d-flex justify-content-center align-items-center`}
      >
        {user.lastname}
      </div>
      <div
        className={`${style.px300} d-flex justify-content-center align-items-center`}
      >
        {user.firstname}
      </div>
      <div
        className={`${style.px300} d-flex justify-content-center align-items-center`}
      >
        {user.mail}
      </div>
      <div className="d-flex justify-content-center align-items-center">
      <div className={`${style.edit} mr10`} onClick={onEdit}>
        {t("edit")}
      </div>
      <div className={`${style.delete}`} onClick={onShowDeleteMessage}>
        {t("delete")}
      </div>
      </div>
      
    </div>
  );
}

export default User;
