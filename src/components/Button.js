import React from "react";
import btnstyle from "./Button.module.css";
import {
  filterByLaunchYear,
  filterByLaunchSuccess,
  filterByLandingSuccess,
} from "../redux/Action";
import { useDispatch } from "react-redux";

function Button(props) {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target.name);
    e.target.style.backgroundColor = 'rgb(186, 252, 79)';

    if (e.target.name === "launch_year") {
      dispatch(filterByLaunchYear(e.target.value));
    } else if (e.target.name === "launch_type") {
      dispatch(filterByLaunchSuccess(e.target.value));
    } else if (e.target.name === "landing_type") {
      dispatch(filterByLandingSuccess(e.target.value));
    }
  };

  return (
    <React.Fragment>
      <button
        value={props.text}
        name={props.name}
        onClick={(e) => clickHandler(e)}
        className={btnstyle.btn}
      >
        {props.text}
      </button>
    </React.Fragment>
  );
}

export default Button;
