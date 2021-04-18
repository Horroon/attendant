export const MakeInitials = (name)=>{
    const splitedname = name.split(' ');
    const firstInitial = name[0];
    const secondInitial = splitedname.length > 1 ? splitedname[splitedname.length - 1][0] : '';
    return firstInitial + secondInitial
}