import TotalTime from './find-total-time';

export const FindOverallTimeHours = (dates) => {
  let sum = 0;

  for (var k of dates) {
      if(k?.punchin && k?.punchout){
        const onedayTimeHours = TotalTime(k.punchin, k.punchout);
        sum += onedayTimeHours;
      }
  }
  return sum
};
