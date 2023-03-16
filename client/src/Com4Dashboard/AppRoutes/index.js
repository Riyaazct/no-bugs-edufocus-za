import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../pdashboard/Students";
import Dashboard from "../../pdashboard/Dashbaord";
import Inventory from "../../pdashboard/Material";
import Orders from "../../pdashboard/Download";

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
