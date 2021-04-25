import {MakeInitials} from './build-initials';
export function GenerateId(dept) {
    const Initials = MakeInitials(dept);
    const deptId = Initials.length > 1 ? Initials.toUpperCase() : (Initials+dept[1]).toUpperCase()
    const randomNo = Math.floor(Math.random() * 999);
    const splitted = randomNo.toString().split("");
    const res = [];
  
    splitted.filter(v => {
      res.push(v);
      if (res.filter(x => x == v).length > 2) return false;
      return true;
    });
  
    while (splitted.length < 3) {
      var ran = Math.floor(Math.random() * 9);
      if (splitted.indexOf(ran) < 0) splitted.push(ran);
    }
      return deptId + '-' + splitted.join("");
  }