import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
function Intro() {
  return (
    <div className="intro relative caja">
      <div className="padre_imagen absolute">
        <div className="imagen"></div>
        <div className="filtro_color absolute"></div>
      </div>

      <section className="section_intro relative centrado">
        <Container>
          <div className="logotipo">
            <img src="logo.png" alt="" />
          </div>

<div className="texto_intro">
          <p>
            ¡Enhorabuena por dar el primer paso hacía el día más especial de sus
            vidas!
          </p>

          <p>
            El <span>"Sí, quiero"</span> es el inicio de una nueva aventura juntos, un
            momento para celebrar el amor, la complicidad y los sueños
            compartidos. Sabemos que después de ese mágico momento, puede ser
            abrumador el pensar en planificar la boda de sus sueños.
          </p>

          <p>
            ¡Pero no se preocupen! Entendemos que cada boda es única y especial,
            al igual que cada pareja. Nuestra misión es asegurar que este proceso sea
            tan enocionante como el gran día.
          </p>

          <p>
            ¿Quíeres empezar a planificar tu boda?
          </p>


          <Link to="/login">
            <button className="hvr_horizontal">sí quiero</button>
          </Link>

          </div>
        </Container>
      </section>
    </div>
  );
}

export default Intro;
