import topproducts from "./topproducts.module.css";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

const TopProducts = ({ data }) => {
  const { meetingsSchedule } = data;
  const classNames = ["content_wrapper_one", "content_wrapper_two"];
  return (
    <div className={topproducts.container}>
      <div className={topproducts.card_one}>
        <div className={topproducts.card_one_header}>
          <h4 className={topproducts.card_one_heading}>Top Products</h4>
          <h4 className={topproducts.card_one_sub_heading}>
            May-June 2021 <BsChevronDown className={topproducts.icon} />
          </h4>
        </div>
        <div className={topproducts.main}>
          <div className={topproducts.pie_chart}> </div>
          <ul className={topproducts.wrapper}>
            <li className={topproducts.tag_one}>
              <span className={topproducts.sub_heading}>Basic Tees</span>
            </li>
            <span className={topproducts.sale_percantage}>55%</span>
            <li className={topproducts.tag_two}>
              <span className={topproducts.sub_heading}>
                Custom Short Pants
              </span>
            </li>
            <span className={topproducts.sale_percantage}>31%</span>
            <li className={topproducts.tag_three}>
              <span className={topproducts.sub_heading}>Super Hoodies</span>
            </li>
            <span className={topproducts.sale_percantage}>14%</span>
          </ul>
        </div>
      </div>

      <div className={topproducts.card_two}>
        <div className={topproducts.card_two_header}>
          <h4 className={topproducts.card_two_heading}>Today's schedule</h4>
          <h4 className={topproducts.card_two_sub_heading}>
            See All <AiOutlineRight />
          </h4>
        </div>
        <div className={topproducts.content}>
          {meetingsSchedule?.map((meetings, i) => (
            <div key={i} className={topproducts[classNames[i]]}>
              <h5 className={topproducts.content_heading}>
                {meetings?.clientName}
              </h5>
              <span className={topproducts.time}>{meetings?.meetingTime}</span>
              <span className={topproducts.location}>{meetings?.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
