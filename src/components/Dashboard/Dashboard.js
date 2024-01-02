import React from "react";
import Mobileplan from "../Mobileplan/Mobileplan";
import Internetplan from "../Internetplan/Internetplan";
import Cards from "../Cards/Cards";
export default function Dashboard() {
  return (
    <div className="dashboardcontainer">
      <Cards />
      <Mobileplan />
      <Internetplan />
    </div>
  );
}
