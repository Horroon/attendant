import React, { useEffect, useReducer } from "react";
import { classes, TotalTime, IsDateInRange } from "../../../utilities/index";
import styles from "./style.module.scss";
import { DatePicker } from "../../date-range-picker/index";
import moment from "moment";
import { connect } from "react-redux";

const Properties = {
  updateStartDate: "sDate",
  updateEndDate: "eDate",
  clearDate: "cDate",
  attendance: "attendance",
};
const InitialState = {
  dates: {
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
  },
  attendance: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case Properties.updateStartDate:
      return { ...state, dates: { ...state.dates, startDate: action.payload } };
    case Properties.updateEndDate:
      return { ...state, dates: { ...state.dates, endDate: action.payload } };
    case Properties.attendance:
      return { ...state, attendance: action.payload };
    default:
      return state;
  }
};
const DrawerModel = (user) => {
  const [state, setState] = useReducer(reducer, InitialState);

  const DateHandler = (event, picker) => {
    const { startDate, endDate } = picker;
    const {
      info: { attendances },
    } = user;
    const ENDDATE = endDate ? endDate : startDate
    if(startDate){
        const newattendance = attendances.filter((date) => {
            if (date?.punchin) {
              return IsDateInRange(startDate,ENDDATE, date.punchin);
            }
            if (date?.leave) {
              return IsDateInRange(startDate,ENDDATE, date.leave);;
            } else {
              debugger;
              return false;
            }
          });
            setState({
              type: Properties.updateStartDate,
              payload: startDate.format("L"),
            });
            setState({
              type: Properties.updateEndDate,
              payload: ENDDATE.format("L"),
            });
          setState({ type: Properties.attendance, payload: newattendance });
    }
  };

  useEffect(() => {
    const {
      isLoggedIn,
      info: { attendances },
    } = user;
    if (isLoggedIn) {
      setState({ type: Properties.attendance, payload: attendances });
      if (attendances.length) {
        const startdate = attendances[0].punchin
          ? new Date(attendances[0].punchin).toLocaleDateString()
          : new Date().toLocaleDateString();
        const enddate = new Date().toLocaleDateString();
        setState({ type: Properties.updateStartDate, payload: startdate });
        setState({ type: Properties.updateEndDate, payload: enddate });
      }
    }
  }, [user]);
  console.log("state ", user);
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
                  <span>{moment(state.dates.startDate).format("ll")}</span>{" "}
                  <i className="fas fa-arrow-right" />{" "}
                  <span> {moment(state.dates.endDate).format("ll")} </span>{" "}
                </p>
              </div>
            </div>
            <table className={classes("table table-bordered", styles.table)}>
              <thead className={classes("thead", styles.tablehead)}>
                <tr>
                  <th>Sr</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Total Time</th>
                </tr>
              </thead>
              <tbody>
                {state.attendance.length
                  ? state.attendance.map((day, index) => {
                      return (
                        <tr key={"rec-" + index}>
                          <td>{index + 1}</td>
                          <td>
                            {day.punchin
                              ? moment(day.punchin).format("LLLL")
                              : day.leave
                              ? moment(day.leave).format("LLLL")
                              : ""}
                          </td>
                          <td>
                            {day.punchin
                              ? moment(day.punchin).format("LT")
                              : ""}
                          </td>
                          <td>
                            {day.punchout
                              ? moment(day.punchout).format("LT")
                              : ""}
                          </td>
                          <td>
                            {day.punchin
                              ? TotalTime(day.punchin, day.punchout)
                              : day.leave
                              ? "leave"
                              : ""}
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
            <div>{!state.attendance.length && "You have no record to display"}</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
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

const mapStateToProps = (store) => store.LoginInfo;

export default connect(mapStateToProps)(DrawerModel);
