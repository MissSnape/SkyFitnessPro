import React from "react";
import * as S from "./headerStyled";
import sticker from "../../img/sticker.svg";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { PersonalData } from "../Profile/Profile";


export function Header({logOut}) {
  const { isAuth, email } = useAuth();

  return (
    <S.Head>
      <S.Header>
        <S.HeagerTop>
          <NavLink to="/">
            <S.HeaderLogo>
              <img src={logo} alt="logo" />
            </S.HeaderLogo>
          </NavLink>
        </S.HeagerTop>
        {/* <S.Sticker >
        <img src={sticker} alt="sticker"></img>
      </S.Sticker> */}
        <S.TopButton>
          {isAuth ? (
            // <>
            //   <S.MainLoginButton onClick={() => logOut()}>
            //     Выйти из {email}
            //   </S.MainLoginButton>
            //   <NavLink to="/profile">
            //     <S.MainLoginButton>Перейти в профиль {email}</S.MainLoginButton>
            //   </NavLink>
            // </>
            <PersonalData email={email} logOut={logOut} />
          ) : (
            <NavLink to="/auth">
              <S.MainLoginButton>Войти</S.MainLoginButton>
            </NavLink>
          )}
        </S.TopButton>
      </S.Header>
      <S.TextOneTitle>Онлайн-тренировки для занятий дома</S.TextOneTitle>
      <S.TextTwoTitle>
        Начните заниматься спортом и улучшите качество жизни
      </S.TextTwoTitle>
      <S.Sticker>
        <img src={sticker} alt="sticker"></img>
      </S.Sticker>
    </S.Head>
  );
}