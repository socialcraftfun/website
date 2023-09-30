import React from "react";
import LogoImg from '../assets/image/logo.png';


export function Logo() {
  return (
    <div className="">
      <a className="block" href="/" aria-label="На главную страницу">
        <img className="max-h-10" src={LogoImg} alt="SC" />
      </a>
    </div>
  );
}
