import React, { useEffect, useReducer } from "react";
import styles from "./style.module.scss";
import { Avatar } from "../../avatar/index";
import { classes, MakeInitials, ShowError } from "../../../utilities/index";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { MainPaths } from "../../../paths";
import {
  EmployeePunchIn,
  EmployeePunchOut,
  EmployeeTakeLeave,
} from "../../../operations/index";
import moment from "moment";
import { useToasts } from "react-toast-notifications";

const Properties = {
  punchinbtb: "punchinbtn",
  punchoutbtn: "punchoutbtn",
  leavebtn: "leavebtn",
  isviewbtnDisabled: "viewbtndisabled",
};

const InitialState = {
  punchoutbtn: false,
  punchinbtb: false,
  leavebtn: false,
  isviewbtnDisabled: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case Properties.punchinbtb:
      return { ...state, punchinbtb: action.payload, punchoutbtn: false };
    case Properties.punchoutbtn:
      return { ...state, punchoutbtn: action.payload, punchinbtb: false };
    case Properties.leavebtn:
      return { ...state, leavebtn: action.payload };
    case Properties.isviewbtnDisabled:
      return { ...state, isviewbtnDisabled: action.payload };
    default:
      return state;
  }
};
const UserCard = (props) => {
  const { info, isLoggedIn } = props;
  const History = useHistory();
  const { addToast } = useToasts();

  const [state, setState] = useReducer(reducer, InitialState);
  const name = info.firstname + " " + info.lastname;

  const LeavebtnEnabler = () => {
    const { time } = info;
    //checking for leave btn
    const currentTime = moment(new Date().toTimeString(), time.formate);
    const startTiming = moment(time.from, time.formate);
    const leaveduration = moment(time.leaveduration, time.formate);
    const shouldIshowleavebtn = currentTime.isBetween(
      startTiming,
      leaveduration
    );
    if (shouldIshowleavebtn) {
      setState({ type: Properties.leavebtn, payload: true });
    }
  };

  const PunchOut = async (ispreviousday = false) => {
    try {
      const { empId, empCode } = info;
      const currentdatetime = new Date().toISOString();
      const user = await EmployeePunchOut(
        empId,
        empCode,
        currentdatetime,
        ispreviousday
      );
      if (user.data) {
        setState({ type: Properties.punchinbtb, payload: true });
        addToast("successfully punched out", { appearance: "success" });
      }
    } catch (e) {
      ShowError(e, addToast);
    }
  };

  const PunchIn = async () => {
    try {
      const { empId, empCode } = info;
      const currentdatetime = new Date().toISOString();
      const user = await EmployeePunchIn(empId, empCode, currentdatetime);
      if (user.data) {
        setState({ type: Properties.punchoutbtn, payload: true });
        addToast("successfully punched in", { appearance: "success" });
      }
    } catch (e) {
      ShowError(e, addToast);
    }
  };

  const EmployeeTakeLeaveMethod = async () => {
    try {
      const { empId, empCode } = info;
      const currentdatetime = new Date().toISOString();
      const user = await EmployeeTakeLeave(empId, empCode, currentdatetime);
      if (user.data) {
        setState({ type: Properties.punchoutbtn, payload: true });
        addToast("You have successfully taken leave", {
          appearance: "success",
        });
      }
    } catch (e) {
      ShowError(e, addToast);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      const { attendances, time } = info;
      if (attendances.length) {
        const lastattendance = attendances[attendances.length - 1];
        if (!lastattendance?.punchout) {
          const todaydate = moment(new Date()).format("L");
          const punchindate = moment(lastattendance.punchin).format("L");
          const isSameDay = moment(todaydate).isSame(moment(punchindate));
          if (isSameDay) {
            setState({ type: Properties.punchoutbtn, payload: true });
            LeavebtnEnabler()
          } else {
            if (!lastattendance?.leave) {
              PunchOut(true);
            } else {
              const leavedate = moment(lastattendance.leave).format("L");
              const todaydate = moment(new Date()).format("L");
              const isLeaveOnToday = moment(leavedate).isSame(
                moment(todaydate)
              );
              if (isLeaveOnToday) {
                setState({ type: Properties.isviewbtnDisabled, payload: true });
              }
              setState({ type: Properties.punchinbtb, payload: true });
              LeavebtnEnabler();
            }
          }
        } else {
          setState({ type: Properties.punchinbtb, payload: true });
          LeavebtnEnabler();
        }
      } else {
        setState({ type: Properties.punchinbtb, payload: true });
      }
    } else {
      History.push(MainPaths.login);
    }
  }, [info]);

  return isLoggedIn ? (
    <div className={styles.cardcontainer}>
      <div className={classes("card w-50 m-auto", styles.card)}>
        <div className={classes("card-header", styles.cardheader)}>
          <Avatar Initials={MakeInitials(name)} />
        </div>
        <div className="card-body">
          <div className={styles.pinfo}>
            <table className={classes("table", styles.cardtable)}>
              <tr>
                <th>Emp Name: </th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Emp Id: </th>
                <td>{info.empId}</td>
              </tr>
              <tr>
                <th>Dept: </th>
                <td>{info.dept}</td>
              </tr>
              <tr>
                <th>Role: </th>
                <td>{info.role}</td>
              </tr>
            </table>
          </div>
          <div className={styles.pinout}>
            <div className={styles.pincontainer}>
              {state.punchinbtb && (
                <div>
                  {" "}
                  <button
                    className="btn btn-success btn-md"
                    onClick={() => !state.isviewbtnDisabled && PunchIn()}
                    disabled={state.isviewbtnDisabled}
                  >
                    Punch In
                  </button>
                </div>
              )}

              {state.punchoutbtn && (
                <div>
                  <button
                    className="btn btn-success btn-md"
                    onClick={() => PunchOut()}
                  >
                    Punch Out
                  </button>
                </div>
              )}
              <div>
                <button
                  className="btn btn-info btn-md"
                  data-target="#exampleModalLong"
                  data-toggle="modal"
                >
                  View Previous Records
                </button>
              </div>
            </div>
          </div>
          <div className={styles.leavecontainer}>
            {state.leavebtn && (
              <div>
                <button
                  className="btn btn-warning btn-block btn-md"
                  onClick={() =>
                    !state.isviewbtnDisabled && EmployeeTakeLeaveMethod()
                  }
                  disabled={state.isviewbtnDisabled}
                >
                  Take Leave
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={MainPaths.login} />
  );
};
const mapStateToProps = (store) => store.LoginInfo;
export default connect(mapStateToProps)(UserCard);
