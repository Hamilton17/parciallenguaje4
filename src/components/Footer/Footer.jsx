import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={Style.footer}>
      <h2>carrito de compras</h2>
      <p>
        &copy; <span>{year}</span> - lenguaje de 4 {" "}
     
      </p>
    </footer>
  );
}
