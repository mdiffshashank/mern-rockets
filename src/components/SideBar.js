import React from "react";
import Button from "./Button";
import Column from "./Column";
import "./SideBar.css";

function SideBar() {
  //launch year is hardcoaded as per requirement
  const launchYear = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  const launchYearList = launchYear.map((v, i, arr) => {
    if (i % 2 === 0) {
      return (
        <Column key={i} value1={v} value2={arr[i + 1]} name={"launch_year"} />
      );
    }
    return null;
  });

  // const tableStyle ={
  //   width:'inherit',
  // }
  return (
    <div className="sidebar">
      <h5>Launch Year</h5>
      <hr />
      <table>
        <tbody>{launchYearList}</tbody>
      </table>

      <h5>Successful Launch</h5>
      <hr />
      <Button text={"True"} name={"launch_type"} />
      <Button text={"False"} name={"launch_type"} />
      <h5>Successful Landing</h5>
      <hr />
      <Button text={"True"} name={"landing_type"} />
      <Button text={"False"} name={"landing_type"} />
    </div>
  );
}

export default SideBar;
