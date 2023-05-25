import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import dashboard from "./dashboard.module.css";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../../Components/DashboardHeader/DashboardHeader";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import Chart from "../../Components/Chart/Chart";
import TopProducts from "../../Components/TopProducts/TopProducts";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Data.json");
        if (!response.ok) {
          throw new Error("Failed to load the data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <div className={dashboard.container}>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard " />
      </Helmet>
      <div className={dashboard.section_one}>
        <DashboardSidebar />
      </div>
      <div className={dashboard.section_two}>
        <DashboardHeader />
        <DashboardCard data={data} />
        <Chart />
        <TopProducts data={data} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
