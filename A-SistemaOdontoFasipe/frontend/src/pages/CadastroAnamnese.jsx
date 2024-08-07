import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser } from "react-icons/fi";
import "./CadastroAnamnese.scss";

const CadastroAnamnese = () => {
  const location = useLocation();
  const paciente = location.state?.paciente;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cpf_pac: "",
    anm_nome: "",
    anm_idade: "",
    anm_sexo: "",
    anm_rg: "",
    anm_estado_saude: "",
    anm_trata_med: "",
    cod_prof: "",
    anm_med_uso: "",
    anm_ult_visita_med: "",
    anm_trata_antes: "",
    anm_proced_cir: "",
    anm_doenca_familiar: "",
    anm_possui_alergia: "",
    anm_outras_nfo: "",
    anm_motivo_consulta: "",
    anm_motv_visita_dent: "",
    anm_term_tratamento: "",
    anm_sangramento_gengival: "",
    anm_boca: "",
    anm_hab_bucais: "",
    anm_dores_face: "",
    anm_respiracao: "",
    anm_degluticao: "",
    anm_assimetria: "",
    anm_atm: "",
    anm_linfonodos: "",
    anm_musculos: "",
    anm_fonacao: "",
    anm_ult_visita_dent: "",
  });

  useEffect(() => {
    if (paciente) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        cpf_pac: paciente.cpf_pac,
        anm_nome: paciente.nome_pac,
      }));
    }
  }, [paciente]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNumericChange = (event, field, maxLength) => {
    const value = event.target.value;
    const regex = /^[0-9\b]+$/;

    if (value === "" || (regex.test(value) && value.length <= maxLength)) {
      setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(formData.cpf_pac, JSON.stringify(formData));
    toast.success("Dados salvos com sucesso!");
    navigate(`/cadastro-dentes/${formData.cpf_pac}`);
  };

  const getCurrentDate = () => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().split('T')[0];
  };

  const today = getCurrentDate();

  return (
    <section className="general_container_anm">
      <section className="container_cadastro_anm">
        <div className="container_anamnese">
          <div className="title">
            <span className="icon">
              <FiUser />
            </span>
            <h2>Cadastrar Anamnese</h2>
          </div>

          <form className="form" method="POST" onSubmit={handleSubmit}>
            {/* CPF do paciente */}
            <input
              type="text"
              id="cpf_pac"
              name="cpf_pac"
              maxLength="11"
              required
              placeholder="CPF"
              value={formData.cpf_pac}
              onChange={(e) => handleNumericChange(e, "cpf_pac", 11)}
            />

            {/* Nome do paciente */}
            <input
              type="text"
              id="anm_nome"
              name="anm_nome"
              maxLength="100"
              required
              placeholder="Nome"
              value={formData.anm_nome}
              onChange={handleInputChange}
            />

            {/* Idade do paciente */}
            <input
              type="text"
              id="anm_idade"
              name="anm_idade"
              maxLength="2"
              required
              placeholder="Idade"
              value={formData.anm_idade}
              onChange={(e) => handleNumericChange(e, "anm_idade", 2)}
            />

            {/* Sexo do paciente */}
            <div className="select-form">
              <select
                id="anm_sexo"
                name="anm_sexo"
                value={formData.anm_sexo}
                onChange={handleInputChange}
                required
              >
                <option value="">Sexo do paciente</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            {/* RG do paciente */}
            <input
              type="text"
              id="anm_rg"
              name="anm_rg"
              maxLength="9"
              placeholder="RG"
              value={formData.anm_rg}
              onChange={(e) => handleNumericChange(e, "anm_rg", 9)}
            />

            {/* Estado de saúde do paciente */}
            <input
              type="text"
              id="anm_estado_saude"
              name="anm_estado_saude"
              maxLength="100"
              placeholder="Estado de saúde"
              value={formData.anm_estado_saude}
              onChange={handleInputChange}
            />

            {/* Fazendo tratamento médico */}
            <input
              type="text"
              id="anm_trata_med"
              name="anm_trata_med"
              maxLength="100"
              placeholder="Tratamento médico"
              value={formData.anm_trata_med}
              onChange={handleInputChange}
            />

            {/* Código de identificação do profissional */}
            <input
              type="text"
              id="cod_prof"
              name="cod_prof"
              maxLength="5"
              placeholder="Código do profissional"
              value={formData.cod_prof}
              onChange={(e) => handleNumericChange(e, "cod_prof", 5)}
            />

            {/* Medicamento em uso do Paciente */}
            <input
              type="text"
              id="anm_med_uso"
              name="anm_med_uso"
              maxLength="2000"
              placeholder="Medicamento em uso"
              value={formData.anm_med_uso}
              onChange={handleInputChange}
            />

            {/* Tratamentos anteriores do Paciente */}
            <input
              type="text"
              id="anm_trata_antes"
              name="anm_trata_antes"
              maxLength="50"
              placeholder="Tratamentos anteriores"
              value={formData.anm_trata_antes}
              onChange={handleInputChange}
            />

            {/* Procedimentos cirúrgicos anteriores */}
            <input
              type="text"
              id="anm_proced_cir"
              name="anm_proced_cir"
              maxLength="150"
              placeholder="Procedimentos anteriores"
              value={formData.anm_proced_cir}
              onChange={handleInputChange}
            />

            {/* Doenças próprias ou familiares */}
            <input
              type="text"
              id="anm_doenca_familiar"
              name="anm_doenca_familiar"
              maxLength="100"
              placeholder="Doenças próprias ou familiares"
              value={formData.anm_doenca_familiar}
              onChange={handleInputChange}
            />

            {/* Paciente possui alergia */}
            <input
              type="text"
              id="anm_possui_alergia"
              name="anm_possui_alergia"
              maxLength="100"
              placeholder="Paciente possui alergia"
              value={formData.anm_possui_alergia}
              onChange={handleInputChange}
            />

            {/* Outras informações */}
            <input
              type="text"
              id="anm_outras_nfo"
              name="anm_outras_nfo"
              maxLength="150"
              placeholder="Outras informações"
              value={formData.anm_outras_nfo}
              onChange={handleInputChange}
            />

            {/* Motivo da consulta */}
            <input
              type="text"
              id="anm_motivo_consulta"
              name="anm_motivo_consulta"
              maxLength="150"
              placeholder="Motivo da consulta"
              required
              value={formData.anm_motivo_consulta}
              onChange={handleInputChange}
            />

            {/* Motivo da visita ao dentista */}
            <input
              type="text"
              id="anm_motv_visita_dent"
              name="anm_motv_visita_dent"
              maxLength="150"
              placeholder="Motivo da visita ao dentista"
              value={formData.anm_motv_visita_dent}
              onChange={handleInputChange}
            />

            {/* Termo de tratamento */}
            <input
              type="text"
              id="anm_term_tratamento"
              name="anm_term_tratamento"
              maxLength="50"
              placeholder="Termo de tratamento"
              value={formData.anm_term_tratamento}
              onChange={handleInputChange}
            />

            {/* Sangramento gengival */}
            <input
              type="text"
              id="anm_sangramento_gengival"
              name="anm_sangramento_gengival"
              maxLength="2"
              placeholder="Sangramento gengival"
              value={formData.anm_sangramento_gengival}
              onChange={(e) => handleNumericChange(e, "anm_sangramento_gengival", 2)}
            />

            {/* Boca */}
            <input
              type="text"
              id="anm_boca"
              name="anm_boca"
              maxLength="2"
              placeholder="Boca"
              value={formData.anm_boca}
              onChange={(e) => handleNumericChange(e, "anm_boca", 2)}
            />

            {/* Hábitos bucais */}
            <input
              type="text"
              id="anm_hab_bucais"
              name="anm_hab_bucais"
              maxLength="100"
              placeholder="Hábitos bucais"
              value={formData.anm_hab_bucais}
              onChange={handleInputChange}
            />

            {/* Dores na face */}
            <input
              type="text"
              id="anm_dores_face"
              name="anm_dores_face"
              maxLength="100"
              placeholder="Dores na face"
              value={formData.anm_dores_face}
              onChange={handleInputChange}
            />

            {/* Respiração */}
            <input
              type="text"
              id="anm_respiracao"
              name="anm_respiracao"
              maxLength="2"
              placeholder="Respiração"
              value={formData.anm_respiracao}
              onChange={(e) => handleNumericChange(e, "anm_respiracao", 2)}
            />

            {/* Deglutição */}
            <input
              type="text"
              id="anm_degluticao"
              name="anm_degluticao"
              maxLength="2"
              placeholder="Deglutição"
              value={formData.anm_degluticao}
              onChange={(e) => handleNumericChange(e, "anm_degluticao", 2)}
            />

            {/* Assimetria */}
            <input
              type="text"
              id="anm_assimetria"
              name="anm_assimetria"
              maxLength="2"
              placeholder="Assimetria"
              value={formData.anm_assimetria}
              onChange={(e) => handleNumericChange(e, "anm_assimetria", 2)}
            />

            {/* ATM */}
            <input
              type="text"
              id="anm_atm"
              name="anm_atm"
              maxLength="2"
              placeholder="ATM"
              value={formData.anm_atm}
              onChange={(e) => handleNumericChange(e, "anm_atm", 2)}
            />

            {/* Linfonodos */}
            <input
              type="text"
              id="anm_linfonodos"
              name="anm_linfonodos"
              maxLength="2"
              placeholder="Linfonodos"
              value={formData.anm_linfonodos}
              onChange={(e) => handleNumericChange(e, "anm_linfonodos", 2)}
            />

            {/* Músculos */}
            <input
              type="text"
              id="anm_musculos"
              name="anm_musculos"
              maxLength="2"
              placeholder="Músculos"
              value={formData.anm_musculos}
              onChange={(e) => handleNumericChange(e, "anm_musculos", 2)}
            />

            {/* Fonologia */}
            <input
              type="text"
              id="anm_fonacao"
              name="anm_fonacao"
              maxLength="2"
              placeholder="Fonologia"
              value={formData.anm_fonacao}
              onChange={(e) => handleNumericChange(e, "anm_fonacao", 2)}
            />

            {/* Última visita ao médico */}
            <input
              type="date"
              id="anm_ult_visita_med"
              name="anm_ult_visita_med"
              max={today}
              placeholder="Última visita ao médico"
              value={formData.anm_ult_visita_med}
              onChange={handleInputChange}
            />

            {/* Última visita ao dentista */}
            <input
              type="date"
              id="anm_ult_visita_dent"
              name="anm_ult_visita_dent"
              max={today}
              placeholder="Última visita ao dentista"
              value={formData.anm_ult_visita_dent}
              onChange={handleInputChange}
            />

            <button type="submit">Salvar</button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

export default CadastroAnamnese;
