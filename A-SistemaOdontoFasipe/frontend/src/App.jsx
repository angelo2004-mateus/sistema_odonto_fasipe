import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CadastroPaciente from "./pages/CadastroPaciente";
import Navbar from "./pages/Navbar";
import Paciente from "./pages/Paciente";
import ListarPacientes from "./pages/ListarPacientes";
import CadastroAnamnese from "./pages/CadastroAnamnese";
import AnamneseDente from "./pages/AnamneseDente";
import PlanoTratamento from "./pages/PlanoTratamento";



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
            <Route path="/paciente/listarPacientes" element={<ListarPacientes />} />
            <Route path="/paciente/cadastroAnamnese" element={<CadastroAnamnese />} />
            <Route path="/paciente/cadastroDente" element={<AnamneseDente />} />
            <Route path="/paciente/planoTratamento" element={<PlanoTratamento />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
