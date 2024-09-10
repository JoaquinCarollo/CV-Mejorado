import { Link } from "react-router-dom";
export const BotonesDeInformacion = () => {
  return (
    <div id="botonesDeInformacion">
      <Link to="/informacionGeneral">
        <button id="informacionGeneralBoton">Información General</button>
      </Link>
      <Link to="habilidades">
        <button id="habilidadesBoton">Habilidades</button>
      </Link>
      <Link to="/academicoCursos">
        <button id="academicoYCursosBoton">Académico y Cursos</button>
      </Link>
      <Link to="/experienciaLaboral">
        <button id="experienciaLaboralBoton">Experiencia Laboral</button>
      </Link>
    </div>
  );
};
