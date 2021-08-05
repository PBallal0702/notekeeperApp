import React from "react";

function Footer(){
  let d = new Date();
  let currYear = d.getFullYear();
  return(
    <p className = "footer">copyright {currYear}</p>
  )
}
export default Footer;
