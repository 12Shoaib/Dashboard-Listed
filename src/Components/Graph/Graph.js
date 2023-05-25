import { Line } from "react-chartjs-2";
import { data, options } from "./GraphData";
import graph from "./graph.module.css";

const Graph = () => {
  return (
    <div className={graph.container}>
      <Line options={options} data={data} />
    </div>
  );
};

export default Graph;
