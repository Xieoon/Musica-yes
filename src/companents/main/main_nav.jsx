import React from "react";
import * as S from "./main_nav-s";
import "../companents_styles.css";
import { Link } from "react-router-dom";
import { useThemeContext } from "../theme";
const { useState } = React;


const MainNav = () => {
  const [visible, setVisible] = useState(false);
  const {toggleTheme} = useThemeContext();
  const {theme} = useThemeContext();

  const toggleVisibility = () => setVisible(!visible);

  return (
    <S.mainNav style={{
      backgroundColor:theme.sideBarBackground,
      color:theme.color,
    }}>
      <S.navLogo className="nav__logo logo">
        <S.logoImage
          className="logo__image"
          src="img/logo.png"
          alt="logo"
        ></S.logoImage>
      </S.navLogo>
      <S.navBurger className="nav__burger burger" onClick={toggleVisibility}>
        <S.burgerLine className="burger__line"></S.burgerLine>
        <S.burgerLine className="burger__line"></S.burgerLine>
        <S.burgerLine className="burger__line"></S.burgerLine>
      </S.navBurger>

      {visible && (
        <S.navMenu className="nav__menu menu">
          <S.menuList className="menu__list">
            <S.menuItem className="menu__item">
              <Link to="/">
                <S.menuLink href="http://" className="menu__link">
                  Главное
                </S.menuLink>
              </Link>
            </S.menuItem>
            <S.menuItem className="menu__item">
              <Link to="/my_track">
                <S.menuLink href="#" className="menu__link">
                  Мой плейлист
                </S.menuLink>
              </Link>
            </S.menuItem>
            <S.menuItem className="menu__item">
              <Link className="App-link" to="/login">
                <S.menuLink href="http://" className="menu__link">
                  Войти
                </S.menuLink>
              </Link>
            </S.menuItem>
            <div onClick={toggleTheme}>tema</div>
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
};
export default MainNav;
