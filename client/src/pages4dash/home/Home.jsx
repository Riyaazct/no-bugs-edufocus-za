import Sidebar from "../../components4dash/sidebar/Sidebar";
import Navbar from "../../components4dash/navbar/Navbar";
import "./home.scss";
import Widget from "../../components4dash/widget/Widget";
import Featured from "../../components4dash/featured/Featured";
import Chart from "../../components4dash/chart/Chart";
import Table from "../../components4dash/table/Table";

const Dash = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="enrolled" />
          <Widget type="donate" />
          <Widget type="download" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Registered)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">New Students</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dash;
