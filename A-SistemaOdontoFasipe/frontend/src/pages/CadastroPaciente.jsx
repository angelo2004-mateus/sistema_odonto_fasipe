import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiUser } from "react-icons/fi";
import './CadastroPaciente.scss';

const CadastroPaciente = () => {
  const [formData, setFormData] = useState({
    cpf_pac: '',
    nome_pac: '',
    cod_pac: '',
    tel_pac: '',
    cep_pac: '',
    logra_pac: '',
    num_logra_pac: '',
    compl_pac: '',
    bairro_pac: '',
    cidade_pac: '',
    uf_pac: '',
    rg_pac: '',
    est_rg_pac: '',
    nome_mae_pac: '',
    data_nasc_pac: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/paciente/cadastrar', formData);
      toast("Paciente Cadastrado");
      console.log(response);
    } catch (err) {
      console.error("Erro ao cadastrar paciente:", err);
      toast.error("Erro ao cadastrar paciente");
    }
  };

  const validateCPF = (value) => {
    const cpfRegex = /^\d{11}$/;
    return cpfRegex.test(value);
  };

  const validateRG = (value) => {
    const rgRegex = /^\d{8,9}$/;
    return rgRegex.test(value);
  };

  const validateTelefone = (value) => {
    const telRegex = /^\d{10,11}$/;
    return telRegex.test(value);
  };

  const validateCEP = (value) => {
    const cepRegex = /^\d{8}$/;
    return cepRegex.test(value);
  };

  const handleValidation = (event) => {
    const { name, value } = event.target;
    let isValid = true;
    switch (name) {
      case 'cpf_pac':
        isValid = validateCPF(value);
        break;
      case 'rg_pac':
        isValid = validateRG(value);
        break;
      case 'tel_pac':
        isValid = validateTelefone(value);
        break;
      case 'cep_pac':
        isValid = validateCEP(value);
        break;
      // Adicionar mais validações conforme necessário para outros campos
      default:
        break;
    }
    if (!isValid) {
      event.target.setCustomValidity(`Campo ${name} inválido.`);
    } else {
      event.target.setCustomValidity('');
    }
  };

  return (
    <section className='container_cadastro_paciente'>
      <ToastContainer />
      <div className='container_button_form'>
        <div className='title'>
          <span className='icon'><FiUser color='rgba(6, 96, 58, 1)'/></span>
          <h2>Cadastrar Paciente</h2>
        </div>
        
        <form className='form' method='POST' onSubmit={handleSubmit}>
          <input type="text" id="cpf_pac" name="cpf_pac" maxLength="11" required placeholder='CPF (somente números)' value={formData.cpf_pac} onChange={handleInputChange} onBlur={handleValidation} />
          <input type="text" id="nome_pac" name="nome_pac" maxLength="100" required placeholder='Nome' value={formData.nome_pac} onChange={handleInputChange} />
          <input type="text" id="cod_pac" name="cod_pac" maxLength="10" required placeholder='Código' value={formData.cod_pac} onChange={handleInputChange} />
          <input type="text" id="tel_pac" name="tel_pac" maxLength="11" required placeholder='Telefone (somente números)' value={formData.tel_pac} onChange={handleInputChange} onBlur={handleValidation} />
          <input type="text" id="cep_pac" name="cep_pac" maxLength="8" required placeholder='CEP' value={formData.cep_pac} onChange={handleInputChange} onBlur={handleValidation} />
          <input type="text" id="logra_pac" name="logra_pac" maxLength="100" placeholder='Logradouro' value={formData.logra_pac} onChange={handleInputChange} />
          <input type="text" id="num_logra_pac" name="num_logra_pac" maxLength="5" placeholder='Número' value={formData.num_logra_pac} onChange={handleInputChange} />
          <input type="text" id="compl_pac" name="compl_pac" maxLength="20" placeholder='Complemento' value={formData.compl_pac} onChange={handleInputChange} />
          <input type="text" id="bairro_pac" name="bairro_pac" maxLength="50" placeholder='Bairro' value={formData.bairro_pac} onChange={handleInputChange} />
          <input type="text" id="cidade_pac" name="cidade_pac" maxLength="50" placeholder='Cidade' value={formData.cidade_pac} onChange={handleInputChange} />
          <input type="text" id="uf_pac" name="uf_pac" maxLength="2" placeholder='Estado' value={formData.uf_pac} onChange={handleInputChange} />
          <input type="text" id="rg_pac" name="rg_pac" maxLength="9" required placeholder='RG' value={formData.rg_pac} onChange={handleInputChange} onBlur={handleValidation} />
          <input type="text" id="est_rg_pac" name="est_rg_pac" maxLength="2" placeholder='Estado de Emissão' value={formData.est_rg_pac} onChange={handleInputChange} />
          <input type="text" id="nome_mae_pac" name="nome_mae_pac" maxLength="100" placeholder='Nome da Mãe' value={formData.nome_mae_pac} onChange={handleInputChange} />
          <input type="date" id="data_nasc_pac" name="data_nasc_pac" required max={new Date().toISOString().split("T")[0]} value={formData.data_nasc_pac} onChange={handleInputChange} />
        
          <button type='submit' className='btn_cadastrar_paciente'>Cadastrar</button>
        </form>
      </div>
    </section>
  );
};

export default CadastroPaciente;
