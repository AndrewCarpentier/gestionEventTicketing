import { CreateEventContext } from "../../../../context/CreateEventContext";
import AddTicket from "./AddTicket/AddTicket";
import CreateSection from "./CreateSection/CreateSection";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import style from "./Step3.module.scss";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

function Step3() {
  const {t} = useTranslation();
  const { step3 } = useContext(CreateEventContext);
  const [showCreateSection, setShowCreateSection] = useState(false);
  const [section, setSection] = useState([]);
  const [showAddTicket, setShowAddTicket] = useState(false);
  const [idSection, setIdSection] = useState(null);
  const [disabledCreateSectionBtn, setDisabledCreateSectionBtn] =
    useState(false);
  const [disabledTicket, setDisabledTicket] = useState(false);
  const [step3Success, setStep3Success] = useState(false);

  useEffect(() => {
    ReactGA.send({hitType : "pageview", page : "create event step 3"})
  }, []);

  useEffect(() => {
    if (section.length) {
      if (section[0].name == ".@-;;{,){" && section[0].ticket.length > 0) {
        setDisabledCreateSectionBtn(true);
      } else {
        setDisabledCreateSectionBtn(false);
      }
    }
  }, []);

  function handleCreateSection() {
    setShowCreateSection(true);
  }

  function handleAddTicket(value) {
    if (section.length == 0) {
      setSection([{ capacity: 0, name: ".@-;;{,){", ticket: [] }]);
    }
    setShowAddTicket(true);
    setIdSection(value);
  }

  async function handleNextStep() {
    if (section.length) {
      if (section[0].ticket.length > 0) {
        await step3(section);
        setStep3Success(true);
      }
    }
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleNextStep}>
        {t("nextStep")}
      </button>
      {step3Success ? <Navigate to="/createEvent/step4" /> : ""}
      <div>
        <div className="d-flex justify-content-center mb20">
          {disabledCreateSectionBtn ? (
            ""
          ) : (
            <button onClick={handleCreateSection} className="btn btn-primary">
              {t("createSection")}
            </button>
          )}
          {disabledTicket ? (
            ""
          ) : (
            <button
              onClick={() => handleAddTicket(0)}
              className="btn btn-primary"
            >
              {t("addTicket")}
            </button>
          )}
        </div>
        <div>
          {showCreateSection ? (
            <CreateSection
              setShowCreateSection={setShowCreateSection}
              setSection={setSection}
              section={section}
              setDisabledTicket={setDisabledTicket}
            />
          ) : (
            ""
          )}
        </div>

        <div className="d-flex justify-content-center">
          {section.length ? (
            <div className={`${style.ticket}`}>
              {section.map((e, i) => (
                <div key={i}>
                  {e.name == ".@-;;{,){" ? (
                    ""
                  ) : (
                    <div>
                      <h2>{e.name}</h2>
                    </div>
                  )}
                  <div>
                    <div className={`${style.tabTitle}`}>
                      <div className={style.one}>{t("name")}</div>
                      <div className={style.two}>{t("capacity")}</div>
                      <div className={style.three}>{t("price")}</div>
                    </div>
                    {e.ticket.map((e, i) => (
                      <div
                        className={i % 2 == 0 ? style.tab : style.tab2}
                        key={i}
                      >
                        <div className={style.one}>{e.name}</div>
                        <div className={style.two}>{e.capacity}</div>
                        <div className={style.three}>
                          {e.price != "" ? e.price + "€" : "Free"}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button
                      className={`${style.btn} btn btn-primary`}
                      onClick={() => handleAddTicket(i)}
                    >
                      {t("addTicket")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        {showAddTicket ? (
          <AddTicket
            setSection={setSection}
            setShowAddTicket={setShowAddTicket}
            sectionFull={section}
            section={section[idSection]}
            setDisabledCreateSectionBtn={setDisabledCreateSectionBtn}
            setDisabledTicket={setDisabledTicket}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Step3;
