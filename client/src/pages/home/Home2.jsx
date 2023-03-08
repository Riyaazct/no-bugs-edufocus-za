import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./home.scss";
import Widget from "../../components/widget/Widget.jsx";
import Featured from "../../components/featured/Featured.jsx";
import Chart from "../../components/chart/Chart.jsx";
import Table from "../../components/table/Table.jsx";

const Home2 = () => {
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

export default Home2;
