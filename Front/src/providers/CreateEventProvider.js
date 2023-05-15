import { useState } from "react";
import { CreateEventContext } from "../context/CreateEventContext";
import { CreateEvent } from "../apis/Event";
import * as moment from 'moment-timezone';

function CreateEventProvider({ children }) {
  const [event, setEvent] = useState(null);
  async function step1(values) {
    setEvent({
      eventName: values.value.eventName,
      location: values.value.location,
      onlineLink: values.value.onlineLink,
      category: values.category,
      subCategory: values.subCategory,
      startDate : moment.tz(values.value.startDate + "T" + values.value.startHour, "Europe/Paris").utc().format(),
      endDate : moment.tz(values.value.endDate + "T" + values.value.endHour, "Europe/Paris").utc().format()
    });
    if (
      values.value.eventName != null &&
      (values.value.location != null || values.value.onlineLink != null) &&
      values.category != null &&
      values.category != 0 &&
      values.subCategory != null &&
      values.subCategory != 0 &&
      values.value.startDate != null &&
      values.value.endDate != null
    ) {
      return true;
    }
  }

  async function step2(values) {
    console.log(event)
    setEvent({ ...event, file: values.file, information: values.information });
    if (values.file.length != 0 && values.information != null) {
      return true;
    }
  }

  async function step3(values) {
    setEvent({ ...event, section: values });
  }

  async function step4(values) {
    var e = event;
    e = {
      ...e,
      private: values.values.private,
      public: values.values.public,
      publishDate : moment.tz(values.values.publishDate + "T" + values.values.publishHour , "Europe/Paris").utc().format(),
      userId: values.user.id
    };
    return await CreateEvent(e);
  }

  return (
    <CreateEventContext.Provider value={{ step1, step2, step3, step4 }}>
      {children}
    </CreateEventContext.Provider>
  );
}

export default CreateEventProvider;
