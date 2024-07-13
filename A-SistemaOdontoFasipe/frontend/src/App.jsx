import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import CadastroPaciente from "./pages/CadastroPaciente";
import Navbar from "./pages/Navbar";
import Paciente from "./pages/Paciente";
import CadastroAnamnese from "./pages/CadastroAnamnese";
import AnamneseDente from "./pages/AnamneseDente";
import PlanoTratamento from "./pages/PlanoTratamento";
import ListarAnamnese from "./pages/ListarAnamnese";

function App() {
  return (
    <section className="app">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </section>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const generalContainer = document.querySelector('.general_container');
    if (generalContainer && (location.pathname === "/paciente/cadastro" || location.pathname === "/paciente/cadastroAnamnese")) {
      generalContainer.classList.add('active_scroll');
    } else {
      generalContainer.classList.remove('active_scroll');
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="general_container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/paciente/cadastro" element={<CadastroPaciente />} />
          <Route path="/paciente/deletar" element={<Paciente />} />
          <Route path="/paciente/cadastroAnamnese" element={<CadastroAnamnese />} />
          <Route path="/cadastro-dentes/:cpf_pac" element={<AnamneseDente />} />
          <Route path="/plano-tratamento/:cpf_pac" element={<PlanoTratamento />} />
          <Route path="/anamnese/listar" element={<ListarAnamnese />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
