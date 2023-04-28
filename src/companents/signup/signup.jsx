import React, { useEffect, useRef } from "react";
import * as S from "./signup_s";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const SignUp = () => {
  const [switcher, setSwitcher] = useState(false);

  const logimp = useRef(null);
  const passimp = useRef(null);
  const passimpret = useRef(null);
  const mail = useRef(null);

  useEffect(() => {});

  function clicer() {
    if (
      logimp.current.value &&
      passimp.current.value &&
      mail.current.value &&
      passimpret.current.value &&
      passimp.current.value === passimpret.current.value
    ) {
      let user = {
        username: logimp.current.value,
        first_name: "NAME",
        last_name: "LAST_NAME",
        email:mail.current.value,
        password: passimp.current.value,
      };
      

      fetch(`https://painassasin.online/user/signup/`, {
        method: "POST",
        headers:{
          'Content-Type':'application/json;charset=UTF-8'
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((posts) => {
          
          if(posts.id){
            console.log(posts.id);
            setSwitcher(true);
            window.regInfo = posts
          }
          
        });
    }
  }
  if (switcher) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return (
    <S.blackBox>
      <S.SignBox>
        <S.logo src="/img/logo_black.svg" alt="Logo"></S.logo>
        <S.loginInput ref={logimp} type="text" placeholder="Логин" />
        <S.loginInput ref={mail} type="email" placeholder="Почта" />
        <S.passwordInput ref={passimp} type="password" placeholder="Пароль" />
        <S.passwordInputrepeat
          ref={passimpret}
          type="password"
          placeholder="Повторите пароль"
        ></S.passwordInputrepeat>

        <S.buttonReg onClick={clicer}>Зарегистрироваться</S.buttonReg>
      </S.SignBox>
    </S.blackBox>
  );
};
