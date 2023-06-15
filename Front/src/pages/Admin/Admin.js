import DeleteAlert from "../../components/Alert/Delete/DeleteAlert";
import style from "./Admin.module.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import EditSuccess from "../../components/Alert/EditSuccess/EditSuccess";

function Admin() {
  const { showDelete, showEditAlertSuccess, setShowEditAlertSuccess } =
    useContext(AdminContext);

  if (showEditAlertSuccess) {
    setTimeout(() => {
      setShowEditAlertSuccess(false);
    }, 3000);
  }

  return (
    <div className={`${style.container}`}>
      <NavLink to="/admin/users">Users</NavLink>
      <NavLink to="/admin/events">Events</NavLink>
      <Link to="https://analytics.google.com/analytics/web/#/p382900239/reports/reportinghub?params=_u..nav%3Dmaui">
        Google analytics
      </Link>

      {showEditAlertSuccess && <EditSuccess />}
      <Outlet />
      {showDelete && <DeleteAlert />}
    </div>
  );
}

export default Admin;
