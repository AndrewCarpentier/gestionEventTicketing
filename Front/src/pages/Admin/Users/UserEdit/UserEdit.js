import style from "./UserEdit.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editUser } from "../../../../apis/Users";
import { useTranslation } from "react-i18next";

function UserEdit({ user, users, setUsers, setIdUserEdit }) {
  const { t } = useTranslation();

  const validationSchema = yup.object({
    lastname: yup.string().required(),
    firstname: yup.string().required(),
    mail: yup.string().required(),
  });

  const initialValues = {
    lastname: user.lastname,
    firstname: user.firstname,
    mail: user.mail,
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ initialValues, resolver: yupResolver(validationSchema) });

  function onCancel() {
    setIdUserEdit(0);
  }

  const onSubmit = handleSubmit(async (values) => {
    if (await editUser({ ...values, id: user.id })) {
      const usersIndex = users.findIndex((u) => u.id === user.id);
      users[usersIndex] = { id: user.id, ...values };
      setUsers(users);
      setIdUserEdit(0);
    }
  });

  return (
    <div className="d-flex">
      <div className={`${style.px300}`}>
        <input defaultValue={user.lastname} {...register("lastname")} />
      </div>
      <div className={`${style.px300}`}>
        <input defaultValue={user.firstname} {...register("firstname")} />
      </div>
      <div className={`${style.px300}`}>
        <input defaultValue={user.mail} {...register("mail")} />
      </div>
      <button onClick={onCancel} className="btn btn-primary-reverse">
        {t("cancel")}
      </button>
      <button onClick={onSubmit} className="ml10 btn btn-primary">
        {t("save")}
      </button>
    </div>
  );
}

export default UserEdit;
