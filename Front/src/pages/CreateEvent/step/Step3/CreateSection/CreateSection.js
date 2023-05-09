import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./CreateSection.module.scss";
import { useTranslation } from "react-i18next";

function CreateSection({ setShowCreateSection, setSection, section, setDisabledTicket }) {
  const {t} = useTranslation();
  const validationSchema = yup.object({
    name: yup.string().required(),
    capacity: yup.string().required(),
  });

  const initialValues = {
    name: "",
    capacity: "",
  };

  const {
    handleSubmit,
    register,
    formState: { error, isSubmitting },
    setError,
    clearErrors,
  } = useForm(initialValues, { resolver: yupResolver(validationSchema) });

  function handleCancel() {
    setShowCreateSection(false);
  }

  const submit = handleSubmit(async (values) => {
    if (values.name != "" && parseInt(values.capacity).toString() != "NaN") {
      setSection([
        ...section,
        { name: values.name, capacity: values.capacity, ticket: [] },
      ]);
      setDisabledTicket(true);
      setShowCreateSection(false);
    } else {
    }
  });

  return (
    <div className={`${style.container} d-flex`}>
      <form onSubmit={submit}>
        <div className={`${style.group} mb10`}>
          <input placeholder={t("name")} {...register("name")} />
          <input placeholder={t("capacity")} {...register("capacity")} />
        </div>
        <div>
          <button
            className="btn btn-primary-reverse"
            type="button"
            onClick={handleCancel}
          >
            {t("cancel")}
          </button>
          <button className="btn btn-primary" disabled={isSubmitting}>
            {t("create")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSection;
