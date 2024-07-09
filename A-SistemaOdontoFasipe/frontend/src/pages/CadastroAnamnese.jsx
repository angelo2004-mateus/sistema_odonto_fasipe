import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiUser } from "react-icons/fi";

import './CadastroAnamnese.scss';

const CadastroAnamnese = () => {
  const location = useLocation();
  const paciente = location.state?.paciente;

  const [formData, setFormData] = useState({
    cpf_pac: '',
    anm_nome: '',
    anm_idade: '',
    anm_sexo: '',
    anm_rg: '',
    anm_estado_saude: '',
    anm_trata_med: '',
    cod_prof: '',
    anm_med_uso: '',
    anm_ult_visita_med: '',
    anm_trata_antes: '',
    anm_proced_cir: '',
    anm_doenca_familiar: '',
    anm_possui_alergia: '',
    anm_outras_nfo: '',
    anm_motivo_consulta: '',
    anm_motv_visita_dent: '',
    anm_term_tratamento: '',
    anm_sangramento_gengival: '',
    anm_boca: '',
    anm_hab_bucais: '',
    anm_dores_face: '',
    anm_respiracao: '',
    anm_degluticao: '',
    anm_assimetria: '',
    anm_atm: '',
    anm_linfonodos: '',
    anm_musculos: '',
    anm_fonacao: '',
    anm_ult_visita_dent: ''
  });

  useEffect(() => {
    if (paciente) {
      setFormData({
        ...formData,
        cpf_pac: paciente.cpf_pac,
        anm_nome: paciente.nome_pac
      });
    }
  }, [paciente]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    localStorage.setItem("formData", formData)

    console(localStorage.getItem("formData"))
    // try {
    //   const response = await axios.post('http://localhost:3000/anamnese/cadastrar', formData);
    //   toast.success("Anamnese cadastrada com sucesso!");
    //   console.log(response);
    // } catch (err) {
    //   toast.error("Erro ao cadastrar anamnese. Por favor, tente novamente.");
    //   console.log(err);
    // }
  };

  return (
    <section className='container_cadastro_paciente'>
    <div className='container_button_form'>
      <div className='title'>
        <span className='icon'><FiUser /></span>
        <h2>Cadastrar Anamnese</h2>
      </div>
      
      <form className='form' method='POST' onSubmit={handleSubmit}>
        {/* CPF do paciente */}
        <input type="number" id="cpf_pac" name="cpf_pac" maxLength="11" required placeholder='CPF' value={formData.cpf_pac} onChange={handleInputChange} />
        
        {/* Nome do paciente */}
        <input type="text" id="anm_nome" name="anm_nome" maxLength="100" required placeholder='Nome' value={formData.anm_nome} onChange={handleInputChange} />
        
        {/* Idade do paciente */}
        <input type="number" id="anm_idade" name="anm_idade" maxLength="2" required placeholder='Idade' value={formData.anm_idade} onChange={handleInputChange} />
        
        {/* Sexo do paciente */}
        <div className="select-form"> 
          <select id="anm_sexo" name="anm_sexo" value={formData.anm_sexo} onChange={handleInputChange} required>
            <option value="">Sexo do paciente</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select> 
        </div>
        
        {/* RG do paciente */}
        <input type="number" id="anm_rg" name="anm_rg" maxLength="9" placeholder='RG' value={formData.anm_rg} onChange={handleInputChange} />

        {/* Estado de saude do paciente */}
        <input type="text" id="anm_estado_saude" name="anm_estado_saude" maxLength="100" placeholder='Estado de saude' value={formData.anm_estado_saude} onChange={handleInputChange} />
        
        {/* Fazendo tratamento médico */}
        <input type="text" id="anm_trata_med" name="anm_trata_med" maxLength="100" placeholder='Tratamento médico' value={formData.anm_trata_med} onChange={handleInputChange} />
        
        {/* Código de identificação do profissional */}
        <input type="number" id="cod_prof" name="cod_prof" maxLength="5" placeholder='Código do profissional' value={formData.cod_prof} onChange={handleInputChange} />
        
        {/* Medicamento em uso do Paciente */}
        <input type="text" id="anm_med_uso" name="anm_med_uso" maxLength="5" placeholder='Medicamento em uso' value={formData.anm_med_uso} onChange={handleInputChange} />
        
        {/* Tratamentos anterioes do Paciente */}
        <input type="text" id="anm_trata_antes" name="anm_trata_antes" maxLength="50" placeholder='Tratamentos anteriores' value={formData.anm_trata_antes} onChange={handleInputChange} />
        
        {/* Procedimentos cirurgicos anteriores */}
        <input type="text" id="anm_proced_cir" name="anm_proced_cir" maxLength="150" placeholder='Procedimentos anteriores' value={formData.anm_proced_cir} onChange={handleInputChange} />
        
        {/* Doenças próprias ou familiares */}
        <input type="text" id="anm_doenca_familiar" name="anm_doenca_familiar" maxLength="100" placeholder='Doenças próprias ou familiares' value={formData.anm_doenca_familiar} onChange={handleInputChange} />
        
        {/* Paciente possui alergia */}
        <input type="text" id="anm_possui_alergia" name="anm_possui_alergia" maxLength="100" placeholder='Paciente possui alergia' value={formData.anm_possui_alergia} onChange={handleInputChange} />
        
        {/* Outras informações */}
        <input type="text" id="anm_outras_nfo" name="anm_outras_nfo" maxLength="150" placeholder='Outras informações' value={formData.anm_outras_nfo} onChange={handleInputChange} />
        
        {/* Motivo da consulta */}
        <input type="text" id="anm_motivo_consulta" name="anm_motivo_consulta" maxLength="150" placeholder='Motivo da consulta' required value={formData.anm_motivo_consulta} onChange={handleInputChange} />
        
        {/* Motivo da visita ao dentista */}
        <input type="text" id="anm_motv_visita_dent" name="anm_motv_visita_dent" maxLength="150" placeholder='Motivo da visita ao dentista' value={formData.anm_motv_visita_dent} onChange={handleInputChange} />
        
        {/* Tratamento terminado */}
        <input type="text" id="anm_term_tratamento" name="anm_term_tratamento" maxLength="100" placeholder='Tratamento terminado' value={formData.anm_term_tratamento} onChange={handleInputChange} />
        
        {/* Sangramento gengival do paciente */}
        <input type="text" id="anm_sangramento_gengival" name="anm_sangramento_gengival" maxLength="100" placeholder='Sangramento gengival do paciente' value={formData.anm_sangramento_gengival} onChange={handleInputChange} />
        
        {/* Condição da boca */}
        <input type="text" id="anm_boca" name="anm_boca" maxLength="100" placeholder='Condição da boca' value={formData.anm_boca} onChange={handleInputChange} />
  
        {/* Hábitos bucais do paciente */}
        <input type="text" id="anm_hab_bucais" name="anm_hab_bucais" maxLength="100" placeholder='Hábitos bucais do paciente' value={formData.anm_hab_bucais} onChange={handleInputChange} />
        
        {/* Dores da face do paciente */}
        <input type="text" id="anm_dores_face" name="anm_dores_face" maxLength="100" placeholder='Dores da face do paciente' value={formData.anm_dores_face} onChange={handleInputChange} />
        
        {/* Respiração do paciente */}
        <input type="text" id="anm_respiracao" name="anm_respiracao" maxLength="100" placeholder='Respiração do paciente' value={formData.anm_respiracao} onChange={handleInputChange} />
      
        {/* Deglutição */}
        <input type="text" id="anm_degluticao" name="anm_degluticao" maxLength="100" placeholder='Deglutição' value={formData.anm_degluticao} onChange={handleInputChange} />
        
        {/* Assimetria */}
        <input type="text" id="anm_assimetria" name="anm_assimetria" maxLength="100" placeholder='Assimetria' value={formData.anm_assimetria} onChange={handleInputChange} />
        
        {/* ATM */}
        <input type="text" id="anm_atm" name="anm_atm" maxLength="100" placeholder='ATM' value={formData.anm_atm} onChange={handleInputChange} />
        
        {/* Linfonodos */}
        <input type="text" id="anm_linfonodos" name="anm_linfonodos" maxLength="100" placeholder='Linfonodos' value={formData.anm_linfonodos} onChange={handleInputChange} />
        
        {/* Músculos */}
        <input type="text" id="anm_musculos" name="anm_musculos" maxLength="100" placeholder='Músculos' value={formData.anm_musculos} onChange={handleInputChange} />
        
        {/* Fonação */}
        <input type="text" id="anm_fonacao" name="anm_fonacao" maxLength="100" placeholder='Fonação' value={formData.anm_fonacao} onChange={handleInputChange} />

         {/* Ultima visita do paciente ao médico */}
         <div className="input-container">
          <input type="date" id="anm_ult_visita_med" name="anm_ult_visita_med" value={formData.anm_ult_visita_med} onChange={handleInputChange} />
          <span className={`placeholder ${formData.anm_ult_visita_med ? 'hidden' : ''}`}>
           Última visita Médica
          </span>
        </div>

        {/* Ultima visita do paciente ao dentista */}
        <div className="input-container">
          <input type="date" id="anm_ult_visita_dent" name="anm_ult_visita_dent" value={formData.anm_ult_visita_dent} onChange={handleInputChange} />
          <span className={`placeholder ${formData.anm_ult_visita_med ? 'hidden' : ''}`}>
            Última Visita ao dentista
          </span>
          
        </div>
        
        {/* Botão para enviar o formulário */}
        <button className='btn' type='submit'>CADASTRAR</button>
      </form>
    </div>
    <ToastContainer />
     
    </section>

  );
}

export default CadastroAnamnese;
