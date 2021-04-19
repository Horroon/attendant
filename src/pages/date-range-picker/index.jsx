import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

export const DatePicker = (props) => {
  const {
    callBack,
    label,
    initialSettings = {
      startDate: "1/1/2014",
      endDate: "3/1/2014",
    },
  } = props;
  return (
    <DateRangePicker
      initialSettings={initialSettings}
      onApply={callBack}
      onEvent={callBack}
      onCallback={callBack}
    >
      {props.children}
    </DateRangePicker>
  );
};
