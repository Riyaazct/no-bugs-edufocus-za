import "./list.css"
import Sidebar from "../../components4dash/sidebar/Sidebar"
import Navbar from "../../components4dash/navbar/Navbar"
import Datatable from "../../components4dash/datatable/Datatable"
import React from 'react';


const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List

