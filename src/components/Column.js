import React from "react";
import Button from "./Button";

function Column(props) {
  if (props.value1 && props.value2) {
    return (
      <React.Fragment>
        <tr>
          <td>
            <Button text={props.value1} name={props.name}></Button>
          </td>
          <td>
            <Button text={props.value2} name={props.name}></Button>
          </td>
        </tr>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <tr>
          <td>
            <Button text={props.value1} name={props.name}></Button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Column;
