import { useState } from 'react';
import {AdminContext} from '../context/AdminContext';

function AdminProvider({children}){
  const [showDelete, setShowDelete] = useState(false);
    const [deleteAlertResponse, setDeleteAlertResponse] = useState(false);
    const [showEditAlertSuccess, setShowEditAlertSuccess] = useState(false);
    return (
        <AdminContext.Provider value={{setShowDelete, showDelete, setDeleteAlertResponse, deleteAlertResponse, showEditAlertSuccess, setShowEditAlertSuccess}}>{children}</AdminContext.Provider>
    )
}

export default AdminProvider;