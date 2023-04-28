import React from "react";
import * as S from "./login_s";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState,useRef} from "react";


  export const Login = () => {
    const [switcher, setSwitcher] = useState(false);
  
    const mail = useRef(null);
    const passinp = useRef(null);
    
    function clicer() {
      if (
        mail.current.value &&
        passinp.current.value 
      ) {
        
        let user = {
          email:mail.current.value,
          password: passinp.current.value,
        };
        
  
        fetch(`https://painassasin.online/user/login/`, {
          method: "POST",
          headers:{
            'Content-Type':'application/json;charset=UTF-8'
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((posts) => {
            
            console.log(posts);
            if(!posts.detail){
              setSwitcher(true);
              window.logInfo = posts
            }
           
          });
      }
    }
    if (switcher) {
      document.cookie = 'token'
    
      return  <Navigate to={"/"}></Navigate>;
    }

  return (
    <S.blackBox>
      <S.loginBox>
        <S.logo src="/img/logo_black.svg" alt="Logo"></S.logo>
        <S.loginInput ref={mail} type="email" placeholder="Почта" />
        <S.passwordInput ref={passinp} type="password" placeholder="Пароль" />
        <S.buttonIn onClick={clicer}>Войти</S.buttonIn>
        <Link to="/signup">
          <S.buttonReg >Зарегистрироваться</S.buttonReg>
        </Link>
      </S.loginBox>
    </S.blackBox>
  );
  };