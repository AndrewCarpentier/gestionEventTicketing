import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import style from "./AddTicket.module.scss";
import { useTranslation } from "react-i18next";

function AddTicket({
  section,
  sectionFull,
  setShowAddTicket,
  setSection,
  setDisabledCreateSectionBtn,
}) {
  const { t } = useTranslation();
  const [ticketFree, setTicketFree] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required(),
    capacity: yup.string().required(),
    startSellDate: yup.string().required(),
    endSellDate: yup.string().required(),
    startSellHour: yup.string(),
    endSellHour: yup.string(),
    price: ticketFree ? "" : yup.string().required(),
  });

  const initialValues = {};

  const {
    handleSubmit,
    register,
    formState: { error, isSubmitting },
    setError,
    clearErrors,
  } = useForm({ initialValues, resolver: yupResolver(validationSchema) });

  function handleCancel() {
    if (section.name == ".@-;;{,){" && section.ticket.length == 0) {
      setSection([]);
    }
    setShowAddTicket(false);
  }

  const submit = handleSubmit(async (values) => {
    sectionFull.filter((e) => e.name == section.name)[0].ticket.push(values);
    setSection(sectionFull);
    setShowAddTicket(false);
    if (sectionFull[0].name == ".@-;;{,){") {
      setDisabledCreateSectionBtn(true);
    } else {
      setDisabledCreateSectionBtn(false);
    }
  });

  function handleFree() {
    document.getElementById("price").setAttribute("disabled", true);
    document.getElementById("freeBtn").classList.add("btn-primary");
    document.getElementById("freeBtn").classList.remove("btn-primary-reverse");
    document.getElementById("payedBtn").classList.remove("btn-primary");
    document.getElementById("payedBtn").classList.add("btn-primary-reverse");
    setTicketFree(true);
  }

  function handlePaying() {
    document.getElementById("price").removeAttribute("disabled");
    document.getElementById("payedBtn").classList.add("btn-primary");
    document.getElementById("payedBtn").classList.remove("btn-primary-reverse");
    document.getElementById("freeBtn").classList.remove("btn-primary");
    document.getElementById("freeBtn").classList.add("btn-primary-reverse");
    setTicketFree(false);
  }

  return (
    <div className={style.container}>
      <form onSubmit={submit}>
        <div className="mb10">
          <button
            id="payedBtn"
            className="btn btn-primary"
            type="button"
            onClick={handlePaying}
          >
            {t("paying")}
          </button>
          <button
            id="freeBtn"
            className="btn btn-primary-reverse"
            type="button"
            onClick={handleFree}
          >
            {t("free")}
          </button>
        </div>
        <div className={style.group}>
          <label htmlFor="name"></label>
          <input placeholder={t("name")} id="name" {...register("name")} />
        </div>
        {/* <div>
          {sectionFull.filter((e) => e.name != ".@-;;{,){").length ? (
            <select {...register("section")}>
              {sectionFull
                .filter((e, i) => e.name != ".@-;;{,){")
                .map((e, i) => (
                  <option key={i}>{e.name}</option>
                ))}
            </select>
          ) : (
            ""
          )}
        </div> */}
        <div className={style.group}>
          <input placeholder={t("capacity")} {...register("capacity")} />
        </div>
        <div className={style.group}>
          <input id="price" placeholder={t("price")} {...register("price")} />
        </div>
        <div>{t("startSellDate")}</div>
        <div className={style.group}>
          <input type="date" {...register("startSellDate")} />
          <select {...register("startSellHour")}>
            <option>00:00</option>
            <option>00:30</option>
            <option>01:00</option>
            <option>01:30</option>
            <option>02:00</option>
            <option>02:30</option>
            <option>03:00</option>
            <option>03:30</option>
            <option>04:00</option>
            <option>04:30</option>
            <option>05:00</option>
            <option>05:30</option>
            <option>06:00</option>
            <option>06:30</option>
            <option>07:00</option>
            <option>07:30</option>
            <option>08:00</option>
            <option>08:30</option>
            <option>09:00</option>
            <option>09:30</option>
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
            <option>15:00</option>
            <option>15:30</option>
            <option>16:00</option>
            <option>16:30</option>
            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
            <option>21:30</option>
            <option>22:00</option>
            <option>22:30</option>
            <option>23:00</option>
            <option>23:30</option>
          </select>
        </div>
        <div>{t("endSellDate")}</div>
        <div className={style.group}>
          <input type="date" {...register("endSellDate")} />
          <select {...register("endSellHour")}>
            <option>00:00</option>
            <option>00:30</option>
            <option>01:00</option>
            <option>01:30</option>
            <option>02:00</option>
            <option>02:30</option>
            <option>03:00</option>
            <option>03:30</option>
            <option>04:00</option>
            <option>04:30</option>
            <option>05:00</option>
            <option>05:30</option>
            <option>06:00</option>
            <option>06:30</option>
            <option>07:00</option>
            <option>07:30</option>
            <option>08:00</option>
            <option>08:30</option>
            <option>09:00</option>
            <option>09:30</option>
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
            <option>15:00</option>
            <option>15:30</option>
            <option>16:00</option>
            <option>16:30</option>
            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
            <option>21:30</option>
            <option>22:00</option>
            <option>22:30</option>
            <option>23:00</option>
            <option>23:30</option>
          </select>
        </div>
        <button
          className="btn btn-primary-reverse"
          type="button"
          onClick={handleCancel}
        >
          {t("cancel")}
        </button>
        <button className="btn btn-primary" disabled={isSubmitting}>
          {t("save")}
        </button>
      </form>
    </div>
  );
}

export default AddTicket;
