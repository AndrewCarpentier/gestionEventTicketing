import style from "./Admin.module.scss";
import ShowUsers from "./Users/Users";

function Admin() {
  return (
    <div className={`${style.container}`}>
        <ShowUsers/>
    </div>
  );
}

export default Admin;
