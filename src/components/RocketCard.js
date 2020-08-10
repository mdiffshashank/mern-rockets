import React from "react";
import rocketcardStyle from "./RocketCard.module.css";

function RocketCard(props) {
  return (
    <div>
      <div className={rocketcardStyle.rocketCard}>
        <div className={rocketcardStyle.rocketImgBody}>
          <img
            className={rocketcardStyle.rocketImg}
            src={props.value.links.mission_patch}
            alt=""
          />
        </div>
        <div className={rocketcardStyle.rocketData}>
          <b
            className={rocketcardStyle.blue}
          >{`${props.value.mission_name} # ${props.value.flight_number}`}</b>
          <h3 className={rocketcardStyle.h3}>{`Mission Id : ${props.value.mission_id}`}</h3>
          <h3 className={rocketcardStyle.h3}>{`Launch Year : ${props.value.launch_year}`}</h3>
          <h3 className={rocketcardStyle.h3}>{`Success Launch : ${props.value.launch_success || "false"}`}</h3>
          <h3 className={rocketcardStyle.h3}> 
            {`Success Landing : ${
              props.value.rocket.first_stage.cores[0].land_success || "false"
            }`}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RocketCard;
