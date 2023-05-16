import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../apis/Event";
import style from "./EventDetail.module.scss";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { Trans, useTranslation } from "react-i18next";
import * as moment from "moment-timezone";

function EventDetail() {
  const { t } = useTranslation();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
  });

  const center = { lat: 50.3347806, lng: 3.4520547 };
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [map, setMap] = useState(null);
  const [img, setImg] = useState(null);
  var mapShow = false;

  useEffect(() => {
    if (id) {
      getEventById(id)
        .then((e) => {
          console.log(e[0])
          fetch(`http://localhost:8000/api/image/${e[0].urlImg}`).then((res) =>
          setImg(res.url)
        )
          setEvent(e[0]);
        })
    }
  }, []);

  if (!isLoaded) {
    return <div></div>;
  }

  function showMap() {
    mapShow = !mapShow;
    if (mapShow) {
      document.getElementById("showMap").innerHTML = `${t("hideMap")}`;
      document.getElementById("map").classList.remove("d-none");
    } else {
      document.getElementById("showMap").innerHTML = `${t("showMap")}`;
      document.getElementById("map").classList.add("d-none");
    }
  }

  return (
    <div className={`${style.container}`}>
      {event == null ? (
        <div>{t("loading")}</div>
      ) : (
        <div>
          <img className={`${style.img}`} src={img} alt="" />
          <div className={`${style.container2}`}>
            <div>
              <h1>{event.name}</h1>
            </div>
            <div className={`${style.whereWhenContainer}`}>
              <h2>{t("whereAndWhen")}</h2>
              <div
                className={`${style.whereWhen} d-flex justify-content-center align-items-center`}
              >
                <div>
                  <div>
                    <h3>{t("dateAndHour")}</h3>
                  </div>
                  <div>
                    {/* {event.startHour.toString().replace(".", ":")} -{" "}
                    {event.endHour.toString().replace(".", "h")} */}
                    <div>
                      {`${t("start")} : `}
                      {moment
                        .tz(event.startDate, "europe/paris")
                        .format("LLLL")}
                    </div>
                    <div>
                      {`${t("end")} : `}
                      {moment.tz(event.endDate, "europe/paris").format("LLLL")}
                    </div>
                  </div>
                </div>
                <div className="ml50">
                  <div>
                    <h3>{t("location")}</h3>
                  </div>
                  <div>{event.localisation}</div>
                  <div className={style.showmap} onClick={showMap} id="showMap">
                    {t("showMap")}
                  </div>
                </div>
              </div>
              <div id="map" className="d-none">
                <GoogleMap
                  center={center}
                  zoom={15}
                  mapContainerStyle={{ width: "100%", height: "300px" }}
                  options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                  }}
                ></GoogleMap>
              </div>
            </div>
            <div className={style.inRegardTo}>
              <h2>{t("inRegardsTo")}</h2>
              <p>{event.information}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDetail;
