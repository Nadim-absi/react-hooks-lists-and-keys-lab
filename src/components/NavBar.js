import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const singleLink= links.map((link)=>{
    const hrefL = `#${link}`
    return <a href={hrefL} key={link}>{link}</a>
  })

  return <nav>{singleLink}</nav>;
}

export default NavBar;
