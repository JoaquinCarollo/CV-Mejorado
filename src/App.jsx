import "./App.css";
import { FotoYTitulo } from "./components/FotoYTitulo";
import { Habilidades } from "./components/Habilidades";
import { InformacionGeneral } from "./components/InformacionGeneral";
import { AcademicoCursos } from "./components/AcademicoCursos";
import { BotonesDeInformacion } from "./components/BotonesDeInformacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExperienciaLaboral } from "./components/ExperienciaLaboral";
function App() {
  return (
    <>
      <BrowserRouter>
        <section id="informacionDelCV">
          <FotoYTitulo />
          <Routes>
            <Route path="/" element={<BotonesDeInformacion />} />
            <Route
              path="/experienciaLaboral"
              element={<ExperienciaLaboral />}
            />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route
              path="/informacionGeneral"
              element={<InformacionGeneral />}
            />
            <Route path="/academicoCursos" element={<AcademicoCursos />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
