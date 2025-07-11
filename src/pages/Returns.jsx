import React, { useEffect } from "react";
import returnsImg from "../images/returns.png";

const Returns = () => {
  useEffect(() => {
    document.title = "Devoluciones | Tienda de Vinilos DCC";
  }, []);

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Devoluciones</h2>
      <p>¿Existe algún problema con tus productos adquiridos?</p>
      <img
        src={returnsImg}
        alt="Returns"
        style={{ maxWidth: "500px", marginTop: "1rem" }}
      />
      <p>Solicita la devolución de tus pedidos con los siguientes datos:</p>
      <ul>
        <li>Nombre completo</li>
        <li>Correo electrónico</li>
        <li>Número de pedido</li>
        <li>Descripción del problema</li>
      </ul>
      <p>
        Envía un correo a <a href="mailto:DCC@UNIR.com">DCC@UNIR.com</a>
      </p>
    </section>
  );
};

export default Returns;
