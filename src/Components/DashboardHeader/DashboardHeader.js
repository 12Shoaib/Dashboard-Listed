import { BiBell, BiSearch } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { useRecoilState } from "recoil";
import { hamburgerMenu } from "../Recoil/RecoilAtom";
import { IoClose } from "react-icons/io5";
import dashboardheader from "./dashboardheader.module.css";
import { useRecoilValue } from "recoil";
import { imageUrl } from '../Recoil/RecoilAtom'

const DashboardHeader = () => {
  const [isMenuVisible, setIsMenuVisible] = useRecoilState(hamburgerMenu);
  const urlImage = useRecoilValue(imageUrl)
  console.log(urlImage[0]?.user.photoURL)    
  const handleHamburgerMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div className={dashboardheader.container}>
      <div className={dashboardheader.header}>
        {!isMenuVisible ? (
          <GoThreeBars
            onClick={handleHamburgerMenuClick}
            className={dashboardheader.bar_icon}
          />
        ) : (
          <IoClose
            onClick={handleHamburgerMenuClick}
            className={dashboardheader.bar_icon}
          />
        )}
        <h3 className={dashboardheader.heading}>Dashboard</h3>
      </div>
      <div className={dashboardheader.wrapper}>
        <div className={dashboardheader.input_box_wrapper}>
          <input
            type="text"
            placeholder="Search..."
            className={dashboardheader.input_box}
          />
          <BiSearch className={dashboardheader.logo} />
        </div>
        <BiBell />
        <img
          src={urlImage[0]?.user?.photoURL}
          alt="user"
          className={dashboardheader.image}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
