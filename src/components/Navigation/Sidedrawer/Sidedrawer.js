import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./Sidedrawer.module.css";

const Sidedrawer = (props) => {
  return (
    <div className={classes.Sidedrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Sidedrawer;