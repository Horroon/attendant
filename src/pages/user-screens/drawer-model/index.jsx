import React, { useReducer } from "react";
import { classes } from "../../../utilities/build-css-class";
import styles from "./style.module.scss";
import { DatePicker } from "../../date-range-picker/index";
import moment from "moment";

const Properties = {
  updateStartDate: "sDate",
  updateEndDate: "eDate",
  clearDate: "cDate",
};
const InitialState = {
  dates: {
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case Properties.updateStartDate:
      return { ...state, dates: { ...state.dates, startDate: action.payload } };
    case Properties.updateEndDate:
      return { ...state, dates: { ...state.dates, endDate: action.payload } };
    default:
      return state;
  }
};
export const DrawerModel = () => {
  const [state, setState] = useReducer(reducer, InitialState);

  const DateHandler = (event, picker) => {
    const { startDate, endDate } = picker;
    console.log("startdate ", startDate, " enddate ", endDate);
    debugger;
    startDate &&
      setState({
        type: Properties.updateStartDate,
        payload: startDate.format("L"),
      });
    endDate &&
      setState({
        type: Properties.updateEndDate,
        payload: endDate.format("L"),
      });
  };
  console.log("state ", state);
  return (
    <div
      className={classes("modal fade", styles.userdrawer)}
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className={classes("modal-dialog", styles.dialog)} role="document">
        <div className={classes("modal-content", styles.mcontent)}>
          <div className={classes("modal-header", styles.mheader)}>
            <h5 className={classes("modal-title", styles.mtitle)}>Records</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className={classes("modal-body", styles.mbody)}>
            <div className={styles.searchcontainer}>
              <div className={styles.searchPickerContainer}>
                <DatePicker
                  label="Select Date Range"
                  initialSettings={state.dates}
                  callBack={DateHandler}
                >
                  <button className="btn btn-success btn-sm btn-block">
                    Select Dates
                  </button>
                </DatePicker>
              </div>
              <div className={styles.displaydates}>
                <p>
                  <span>{moment(state.dates.startDate).format('ll') }</span> <i className="fas fa-arrow-right" />{" "}
                  <span> {moment(state.dates.endDate).format('ll')} </span>{" "}
                </p>
              </div>
            </div>
            <table className={classes("table table-bordered")}>
              <thead className={classes("thead-dark")}>
                <tr>
                  <th>Sr</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Total Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>12-04-2021</td>
                  <td>12:20:00</td>
                  <td>15:12:00</td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
