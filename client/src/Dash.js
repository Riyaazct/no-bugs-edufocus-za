import { Space } from "antd";
import "./App.css";
import AppFooter from "./Com4Dashboard/AppFooter";
import AppHeader from "./Com4Dashboard/AppHeader";
import PageContent from "./Com4Dashboard/PageContent";
import SideMenu from "./Com4Dashboard/SideMenu";

function Dash() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default Dash;
