import chart from "./chart.module.css";
import Graph from "../Graph/Graph";

const Chart = () => {
  return (
    <div className={chart.activity_container}>
      <h4 className={chart.activity_heading}>Activity</h4>
      <Graph />
    </div>
  );
};

export default Chart;
