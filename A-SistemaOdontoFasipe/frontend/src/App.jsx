import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CadastroPaciente from "./pages/CadastroPaciente";
import ListarPacientes from "./pages/ListarPacientes";
import Navbar from "./pages/Navbar";
import Paciente from "./pages/Paciente";

function App() {
  return (
    <section className="app">
      <BrowserRouter>
        <Navbar />
        <div className="general_container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/paciente/cadastro" element={<CadastroPaciente />} />
            <Route path="/paciente/listar" element={<ListarPacientes />} />
            <Route path="/paciente/deletar" element={<Paciente />} />
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
