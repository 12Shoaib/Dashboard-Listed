import { useRecoilValue } from "recoil";
import { hamburgerMenu } from "../Recoil/RecoilAtom";
import { FiPieChart, FiSettings } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import dashboardsidebar from './dashboardsidebar.module.css'

const data = [
  {
    icon: <FiPieChart className={dashboardsidebar.icon} />,
    name: <span className={dashboardsidebar.highlighter}>Dashboard</span>,
  },
  {
    icon: <BsTags className={dashboardsidebar.icon} />,
    name: "Transactions",
  },
  {
    icon: <TbCalendarTime className={dashboardsidebar.icon} />,
    name: "Schedules",
  },
  {
    icon: <FaRegUserCircle className={dashboardsidebar.icon} />,
    name: "Users",
  },
  {
    icon: <FiSettings className={dashboardsidebar.icon} />,
    name: "Settings",
  },
];

const DashboardSidebar = () => {
  const isHamburgerMenu = useRecoilValue(hamburgerMenu);
  return (
    <div className={dashboardsidebar.main_component}>
      {isHamburgerMenu && (
        <div className={dashboardsidebar.container}>
          <h2 className={dashboardsidebar.tagLine}>Board.</h2>
          <div className={dashboardsidebar.bottom_wrapper}>
            <div className={dashboardsidebar.menu_wrapper}>
              {data.map((element, i) => (
                <p key={i} className={dashboardsidebar.menu_options}>
                  {element.icon} {element.name}
                </p>
              ))}
            </div>
            <div className={dashboardsidebar.footer}>
              <p className={dashboardsidebar.menu_options_bottom}>Help</p>
              <p className={dashboardsidebar.menu_options_bottom}>
                Contact Us
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DashboardSidebar;
