import React, { useEffect, useReducer } from "react";
import { FindAverageHours, FindOverallTimeHours } from "../../../utilities";
import { Search } from "../../search";
import styles from "./style.module.scss";

const Properties = {
  records: "RECORDS",
  searchtext: "searchtext",
};
const reducer = (state, action) => {
  switch (action.type) {
    case Properties.records:
      return { ...state, records: action.payload };
    case Properties.searchtext:
      return { ...state, searchtext: action.payload };
    default:
      return state;
  }
};

const InitialState = {
  records: [],
  searchtext: "",
};
const OverallStats = (props) => {
  const { employees } = props;
  const [state, setState] = useReducer(reducer, InitialState);

  const SearchHandler = (e) => {
    const { name, value } = e.target;
    setState({ type: name, payload: value });
  };

  const RecordByTimePeriod = (value) => {
    setState({
      type: Properties.records,
      payload: employees.slice(0, parseInt(value)),
    });
  };

  const SortRecord = (value) => {
    const { records } = state;
    if (value === "name") {
      const recordSortedByName = records.sort((a, b) =>
        (a.firstname + " " + a.lastname).localeCompare(
          b.firstname + " " + b.lastname
        )
      );
      setState({ type: Properties.records, payload: recordSortedByName });
    } else if (value === "hours") {
      const recordSortedByWHours = records.sort((a, b) => a.totalhrs > b.totalhrs ? -1 : a.totalhrs < b.totalhrs ? 1 :0);
      setState({ type: Properties.records, payload: recordSortedByWHours });
    }
  };

  useEffect(() => {
    if (employees.length) {
      employees.map((emp) => {
        emp.avghrs = FindAverageHours(emp.attendances);
        emp.totalhrs = FindOverallTimeHours(emp.attendances);
      });

      setState({ type: Properties.records, payload: employees });
    }
  }, [employees]);

  const recordsToDisplay = state.searchtext
    ? state.records.filter((rcd) =>
        ((rcd.firstname + " " + rcd.lastname).toLowerCase()).includes((state.searchtext).toLowerCase())
      )
    : state.records;
  return (
    <div className={styles.statscontainer}>
      <div className={styles.searchcontainer}>
        <Search
          placeholder="Search employee e.g Adnan"
          name={Properties.searchtext}
          searchHandler={SearchHandler}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.listcontainer}>
          <div className={styles.actionscontainer}>
            <div className={styles.periods}>
              <label>Time Period: </label>
              <select onChange={(e) => RecordByTimePeriod(e.target.value)}>
                <option value={"30"}>1 month</option>
                <option value={"60"}>3 months</option>
                <option value={"90"}>6 months</option>
                <option value={"120"}>12 months</option>
              </select>
            </div>
            <div className={styles.sortedcontainer}>
              <labe>Sorted by: </labe>
              <select
                className={styles.select}
                onChange={(e) => SortRecord(e.target.value)}
              >
                <option value={"name"}>Name</option>
                <option value={"hours"}>Working Hours</option>
              </select>
            </div>
          </div>
          <ul id="sortable" className="list-group">
            {recordsToDisplay.map((emp) => (
              <li className="list-group-item">
                <div className="d-flex justify-content-around">
                  <div>{emp.firstname}</div>
                  <div>{emp.lastname}</div>
                  <div>{emp.avghrs} avg hours</div>
                  <div>{emp.totalhrs} total hours</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverallStats;
