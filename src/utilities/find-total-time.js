const moment = require('moment');

function TimeDiff(starttime, endTime, format='hh:mm'){
    const stime = moment(starttime);
    const etime = moment(endTime);
    let difference = etime.diff(stime);
    let response = moment.utc(difference).format("HH");
    return Math.floor(response) 
}

export default TimeDiff