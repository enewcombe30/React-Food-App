import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpeg";
import Classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={Classes["main-image"]}>
        <img src={mealsImage} alt="A table full of tasty food!" />
      </div>
    </Fragment>
  );
};

export default Header;
