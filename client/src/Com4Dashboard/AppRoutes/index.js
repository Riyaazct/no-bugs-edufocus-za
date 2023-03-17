import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../pdashboard/Customers";
import Dashboard from "../../pdashboard/Dashbaord/";
import Inventory from "../../pdashboard/Inventory/index";
import Orders from "../../pdashboard/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
