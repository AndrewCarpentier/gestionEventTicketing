import { useContext } from "react";
import styles from "./DeleteAlert.module.scss";
import { AdminContext } from "../../../context/AdminContext";

function DeleteAlert() {

    const {setDeleteAlertResponse, setShowDelete} = useContext(AdminContext);

    function onResponse(response){
        if(response === "yes"){
            setDeleteAlertResponse(true);
        }else if(response === "no"){
            setDeleteAlertResponse(false);
        }

        setShowDelete(false);
    }

  return (
    <div className={styles.container}>
      <div>Etes vous sur de vouloir supprimer</div>
      <div className="d-flex justify-content-end mt20">
        <button className="btn btn-primary" onClick={()=>onResponse("yes")}>Oui</button>
        <button className="btn btn-primary-reverse" onClick={()=>onResponse("no")}>Non</button>
      </div>
    </div>
  );
}

export default DeleteAlert;
