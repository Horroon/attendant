import moment from "moment";
export const IsDateInRange = (startDate, endDate, date) => {
  const isSameAsStartDate =
    moment(new Date(date).toLocaleDateString()).isSame(
      moment(new Date(startDate).toLocaleDateString())
    ) ||
    moment(new Date(date).toLocaleDateString()).isSame(
      moment(new Date(endDate).toLocaleDateString())
    );
  const isAfterTodayAndBeforeEndate =
    moment(new Date(date).toLocaleDateString()).isAfter(
      moment(new Date(startDate).toLocaleDateString())
    ) &&
    moment(new Date(date).toLocaleDateString()).isBefore(
      moment(new Date(endDate).toLocaleDateString())
    );
  return isSameAsStartDate || isAfterTodayAndBeforeEndate;
};
