import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { TbCashBanknote } from "react-icons/tb";
import dashboardcard from "./dashboardcard.module.css";

const icons = [
  { iconName: <TbCashBanknote className={dashboardcard.logo} /> },
  { iconName: <BsTags className={dashboardcard.logo} /> },
  { iconName: <AiOutlineLike className={dashboardcard.logo} /> },
  { iconName: <RiGroupLine className={dashboardcard.logo} /> },
];

const DashboardCard = ({ data }) => {
  const { salesData } = data;
  const cardClassName = ["card1", "card2", "card3", "card4"];
  return (
    <div className={dashboardcard.container}>
      {salesData?.map((element, i) => (
        <div key={i} className={dashboardcard[cardClassName[i]]}>
          <span>{icons[i].iconName}</span>
          <div className={dashboardcard.content_wrapper}>
            <p className={dashboardcard.content}>{element?.title}</p>
            <p className={dashboardcard.number}>{element?.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
