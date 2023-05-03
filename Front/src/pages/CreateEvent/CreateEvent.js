import { Outlet } from "react-router-dom";
import style from "./CreateEvent.module.scss";
import CreateEventProvider from "../../providers/CreateEventProvider";
function CreateEvent() {
  return (
    <div className={`${style.container}`}>
      <CreateEventProvider>
        <Outlet />
      </CreateEventProvider>
    </div>
  );
}

export default CreateEvent;
