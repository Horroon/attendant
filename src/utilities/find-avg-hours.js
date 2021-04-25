import TotalTime from './find-total-time';

export const FindAverageHours = (dates) => {
  let sum = 0;
  let totaldates = 0;

  for (var k of dates) {
      if(k?.punchin && k?.punchout){
        const onedayTimeHours = TotalTime(k.punchin, k.punchout);
        sum += onedayTimeHours;
        totaldates +=1;
      }
  }

  const avg = sum / totaldates;
  debugger
  return avg || 0
};
