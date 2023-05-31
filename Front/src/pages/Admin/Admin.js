import style from "./Admin.module.scss";
import {NavLink, Outlet} from 'react-router-dom';

function Admin() {
  return (
    <div className={`${style.container}`}>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/events">Events</NavLink>
        <Outlet/>
    </div>
  );
}

export default Admin;
