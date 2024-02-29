import LoginCard from "../../components/LoginCard/LoginCard";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login relative caja">
      {/* <div className="padre_imagen absolute">
        <div className="imagen"></div>
        <div className="filtro_color absolute"></div>
      </div> */}

      <div className="header_login centrado">
        <Link to="/">
          <div className="logo">
            <img src="logo2.png" alt="" />
          </div>
        </Link>
      </div>

      <Grid className="row_login" container spacing={2}>
        {/* 1º fila */}
        <Grid className="colm colm_galeria" item xs={6} md={6}>
          {/* foto 1/4 */}
         
          <div className="caja_doble">
            <div className="foto">
              <div className="padre_imagen relative">
                <div className="imagen"></div>
                <div className="filtro_color absolute"></div>
              </div>
            </div>

            {/* foto 2/4 */}
            <div className="foto">
              <div className="padre_imagen relative">
                <div className="imagen"></div>
                <div className="filtro_color absolute"></div>
              </div>
              </div>
          </div>

          <hr className="espacio"/>

          <div className="caja_doble">
          {/* foto 3/4 */}
          <div className="foto">
            <div className="padre_imagen relative">
              <div className="imagen"></div>
              <div className="filtro_color absolute"></div>
            </div>
            </div>
        
          {/* foto 4/4 */}
          <div className="foto">
            <div className="padre_imagen relative">
              <div className="imagen"></div>
              <div className="filtro_color absolute"></div>
            </div>
            </div>
          </div>
        </Grid>

        {/* 1º columna */}
        <Grid className="colm" item xs={6} md={6}>
          <div className="padre_imagen relative">
            <div className="imagen"></div>
            <div className="filtro_color absolute"></div>
          </div>
        </Grid>

        {/* 2º fila */}
        <Grid className="colm" item xs={6} md={6}>
          <div className="padre_imagen relative">
            <div className="imagen"></div>
            <div className="filtro_color absolute"></div>
          </div>
        </Grid>

        <Grid className="colm" item xs={6} md={6}>
          <p>hola</p>
        </Grid>
      </Grid>

      <h1>¡Maravilloso!</h1>
      <p>Ahora sí, empieza la aventura</p>
      <LoginCard />
    </div>
  );
}

export default Login;
