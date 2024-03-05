import SignupCard from '../../components/SignupCard/SignupCard'
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Signup.css";

 function Signup() { 
  
  return (
    <div className="login relative caja">
      {/* <div className="padre_imagen absolute">
        <div className="imagen"></div>
        <div className="filtro_color absolute"></div>
      </div> */}

      <div className="header_login centrado">
        <Link to="/login">
          <div className="logo">
            <img src="logo2.png" alt="" />
          </div>
        </Link>
      </div>

      <Grid className="row_login" container spacing={2}>
        {/* 1º fila */}
        <Grid className="colm colm_galeria" item xs={6} md={6}>
          {/* foto 1/3 */}
         
          <div className="caja_doble">
            <div className="foto">
              <div className="padre_imagen relative">
                <div className="imagen galeria1"></div>
                <div className="filtro_color absolute"></div>
              </div>
            </div>
          </div>

          <hr className="espacio"/>

          <div className="caja_doble">
          {/* foto 2/3 */}
          <div className="foto">
            <div className="padre_imagen relative">
              <div className="imagen galeria2"></div>
              <div className="filtro_color absolute"></div>
            </div>
            </div>
        
          {/* foto 3/3 */}
          <div className="foto">
            <div className="padre_imagen relative">
              <div className="imagen galeria3"></div>
              <div className="filtro_color absolute"></div>
            </div>
            </div>
          </div>
        </Grid>

        {/* imagen 4 */}
        <Grid className="colm" item xs={6} md={6}>
          <div className="padre_imagen relative">
            <div className="imagen galeria4"></div>
            <div className="filtro_color absolute"></div>
          </div>
        </Grid>

        {/* imagen 5 */}
        <Grid className="colm" item xs={6} md={6}>
          <div className="padre_imagen relative">
            <div className="imagen galeria5"></div>
            <div className="filtro_color absolute"></div>
          </div>
        </Grid>

        <Grid className="colm" item xs={6} md={6}>
        <div className="caja_doble alta">
          {/* imagen 6 */}
          <div className="foto finquierda">
            <div className="padre_imagen relative">
              <div className="imagen galeria6"></div>
              <div className="filtro_color absolute"></div>
            </div>
            </div>
        
          {/* imagen 7 */}
          <div className="foto fderecha">
            <div className="padre_imagen relative animacion">
              <div className="imagen galeria7"></div>
              <div className="filtro_color absolute"></div>
            </div>
            </div>
          </div>
        </Grid>
      </Grid>


      <div className="lateral centrado">
      <div>
      <h1>¡Sí, quiero!</h1>
      <p>Disfrutar organizando mi boda</p>
     < SignupCard/>
      </div>
      </div>

     
    </div>
  );
}

export default Signup
