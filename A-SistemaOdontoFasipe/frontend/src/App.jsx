import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CadastroPaciente from "./pages/CadastroPaciente";
import Navbar from "./pages/Navbar";
import Paciente from "./pages/Paciente";
import CadastroAnamnese from "./pages/CadastroAnamnese";

function App() {
  return (
    <section className="app">
      <BrowserRouter>
        <Navbar />
        <div className="general_container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/paciente/cadastro" element={<CadastroPaciente />} />
            <Route path="/paciente/deletar" element={<Paciente />} />
            <Route path="/paciente/cadastroAnamnese" element={<CadastroAnamnese />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
