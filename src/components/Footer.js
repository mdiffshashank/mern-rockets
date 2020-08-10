import React from "react";
import { author } from "../author";
import footerStyle from "./Footer.module.css";

function Footer() {
  return (
    <div className={footerStyle.footer}>
      <h5>Developed by<i> {`${author.name}`}</i></h5>
    </div>
  );
}

export default Footer;
