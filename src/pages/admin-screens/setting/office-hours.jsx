import moment from "moment";
import React, { useEffect, useReducer, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { User } from "../../../constants/properties";
import { store } from "../../../models";
import { UpdateTime } from "../../../operations";
import { ShowError } from "../../../utilities";

const Properties = {
  maxhours: "maxHours",
  minhours: "minHours",
  leaveduration: "leaveduration",
  from: "from",
  to: "to",
  updatebnt: "updatebtn",
  whole: "whole",
};

const InitialState = {
  maxhours: "",
  minhours: "",
  leaveduration: "",
  from: "",
  to: "",
  updatebnt: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case Properties.from:
      return { ...state, from: action.payload };
    case Properties.to:
      return { ...state, to: action.payload };
    case Properties.leaveduration:
      return { ...state, leaveduration: action.payload };
    case Properties.maxhours:
      return { ...state, maxhours: action.payload };
    case Properties.minhours:
      return { ...state, minhours: action.payload };
    case Properties.updatebnt:
      return { ...state, updatebnt: action.payload };
    case Properties.whole:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const OfficeHours = (props) => {
  const { info } = props;
  const { time } = info;
  const [state, setState] = useReducer(reducer, InitialState);
  const { addToast } = useToasts();

  const UpdateTimeMethod = async () => {
    try {
      setState({ type: Properties.updatebnt, payload: false });
      const data = await UpdateTime(info.empId, info.empCode, {
        ...info.time,
        from: state.from.split(':').length < 3 ? state.from + ':00' : state.from,
        to: state.to.split(':').length < 3 ? state.to + ':00' : state.to,
        maxhours: state.maxhours,
        minhours: state.minhours,
        leaveduration: state.leaveduration.split(':').length < 3 ? state.leaveduration + ':00' : state.leaveduration,
      });
      if (data?.data) {
        store.dispatch.LoginInfo.updateinfo({
          role: User.roles.admin,
          isLoggedIn: true,
          info: data.data,
        });
        addToast("Time updated successfully", {
          appearance: "success",
          autoDismiss: true,
        });
      }
    } catch (e) {
      ShowError(e, addToast);
    }
  };

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
    setState({ type: Properties.updatebnt, payload: true });
  };

  useEffect(() => {
    setState({ type: Properties.whole, payload: time });
  }, [time]);

  return (
    <div className="row d-flex w-100">
      <div className="col-lg-6 col-md-6 d-flex">
        <div class="form-group">
          <label>from: </label>
          <input
            type="time"
            id="appt"
            name={Properties.from}
            className="form-control"
            value={state.from}
            onChange={ChangeHandler}
          />
        </div>
        <div class="form-group mx-2">
          <label>To: </label>
          <input
            type="time"
            id="appt"
            name={Properties.to}
            className="form-control"
            value={state.to}
            onChange={ChangeHandler}
            required
          />
        </div>
      </div>

      <div className="col-lg-6 col-md-6 d-flex justify-content-between">
        <div class="form-group">
          <label>max hours: </label>
          <input
            type="input"
            id="appt"
            name={Properties.maxhours}
            className="form-control"
            value={state.maxhours}
            onChange={ChangeHandler}
            required
          />
        </div>
        <div class="form-group mx-2">
          <label>Min hours: </label>
          <input
            type="text"
            id="appt"
            name={Properties.minhours}
            className="form-control"
            value={state.minhours}
            onChange={ChangeHandler}
            required
          />
        </div>
        <div class="form-group mx-2">
          <label>Leave till: </label>
          <input
            type="time"
            id="appt"
            name={Properties.leaveduration}
            className="form-control"
            value={state.leaveduration}
            onChange={ChangeHandler}
            required
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div class="form-group">
          <button
            className="btn btn-success btn-sm"
            disabled={!state.updatebnt}
            onClick={() => state.updatebnt && UpdateTimeMethod()}
          >
            Update hours
          </button>
        </div>
      </div>
    </div>
  );
};
