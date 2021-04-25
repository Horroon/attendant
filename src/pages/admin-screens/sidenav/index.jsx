import React from "react";
import { connect } from "react-redux";
import { MakeInitials } from "../../../utilities/build-initials";
import { Avatar } from "../../avatar";
import styles from "./style.module.scss";
import {Adminpages} from "../../../constants/properties";
import { classes } from "../../../utilities/build-css-class";

const AdminSideNav = (props) => {
    const {LoginInfo, Admin, dispatch} = props;
    const {info} = LoginInfo 
    const {currentpageId} = Admin

    const selectedclass = 'selected'

    const ChangepageId = (id)=>dispatch.Admin.updatepageId(id);
  return (
    <div className={styles.sidenav}>
      <div className={styles.info}>
        <div className={styles.imgcontainer}>
          <Avatar Initials={MakeInitials(info.author)} />
        </div>
        <div className={styles.namecontainer}>
          <h4>{info.author}</h4>
        </div>
      </div>
      <div className={styles.adminroles}>
        <div className={styles.roleone}>
          <div className={classes(styles.today, currentpageId.includes(Adminpages.availability.id) && selectedclass)}>
            <i className={Adminpages.availability.icon}></i> <span>{Adminpages.availability.name}</span>
          </div>
          <div className={styles.nestedrole}>
            <ul>
              <li className={classes( currentpageId.includes(Adminpages.availability.subpages.availables.id) && selectedclass)} onClick={()=>ChangepageId(Adminpages.availability.subpages.availables.id)}>
                {" "}
                <i className={Adminpages.availability.subpages.availables.icon} /> {Adminpages.availability.subpages.availables.name}
              </li>
              <li className={classes( currentpageId.includes(Adminpages.availability.subpages.unavailables.id) && selectedclass)} onClick={()=>ChangepageId(Adminpages.availability.subpages.unavailables.id)}>
                {" "}
                <i className={Adminpages.availability.subpages.unavailables.icon} /> {Adminpages.availability.subpages.unavailables.name}
              </li>
              <li className={classes( currentpageId.includes(Adminpages.availability.subpages.onleaves.id) && selectedclass)} onClick={()=>ChangepageId(Adminpages.availability.subpages.onleaves.id)}>
                {" "}
                <i className={Adminpages.availability.subpages.onleaves.icon} /> {Adminpages.availability.subpages.onleaves.name}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.roletwo}>
            <div className={classes(styles.ostate,currentpageId.includes(Adminpages.overallstats.id) && selectedclass)} onClick={()=>ChangepageId(Adminpages.overallstats.id)}>
              <i class={Adminpages.overallstats.icon}></i> {Adminpages.overallstats.name}
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#" className="float" onClick={()=>ChangepageId(Adminpages.setting.id)}>
          <i className={Adminpages.setting.icon}></i>
        </a>
      </div>
    </div>
  );
};
const mapStateToProps = (store=>store);
export default connect(mapStateToProps)(AdminSideNav)
