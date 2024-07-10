import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PlanoTratamento.scss';

const PlanoTratamento = () => {
  const { cpf } = useParams(); // Pegando o CPF da URL
  const [formData, setFormData] = useState({
    sessao: '',
    planejamento: ''
  });

  useEffect(() => {
    if (cpf) {
      setFormData({ ...formData, cpf_pac: cpf });
    }
  }, [cpf]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Recuperando dados do localStorage usando CPF
    const cadastroAnamnese = JSON.parse(localStorage.getItem(cpf));
    const anamneseDente = JSON.parse(localStorage.getItem(`Dente_${cpf}`)); // Supondo que os dados dos dentes estão armazenados com a chave `Dente_{cpf}`

    if (!cadastroAnamnese || !anamneseDente) {
      toast.error("Dados de anamnese ou dentes não encontrados para o CPF fornecido.");
      return;
    }

    const dataToSubmit = {
      ...cadastroAnamnese,
      ...anamneseDente,
      sessao: formData.sessao,
      planejamento: formData.planejamento
    };

    console.log('Data to Submit:', dataToSubmit);

    try {
      const response = await axios.post('http://localhost:3000/paciente/cadastrarPlanoTratamento', dataToSubmit);
      toast.success("Plano de tratamento cadastrado com sucesso!");
      console.log(response);
    } catch (err) {
      toast.error("Erro ao cadastrar plano de tratamento. Por favor, tente novamente.");
      console.log(err);
    }
  };

  return (
    <section className='container_plano_tratamento'>
      <div className='container_form'>
        <div className='title'>
          <h2>Plano de Tratamento</h2>
        </div>
        
        <form className='form' onSubmit={handleSubmit}>
          {/* CPF do paciente */}
          <input type="text" id="cpf" name="cpf" required placeholder='CPF do Paciente' value={cpf} readOnly />
          
          {/* Sessão do tratamento */}
          <input type="text" id="sessao" name="sessao" required placeholder='Sessão' value={formData.sessao} onChange={handleInputChange} />
          
          {/* Planejamento de procedimentos */}
          <input type="text" id="planejamento" name="planejamento" required placeholder='Planejamento de Procedimentos' value={formData.planejamento} onChange={handleInputChange} />
          
          {/* Botão para enviar o formulário */}
          <button className='btn' type='submit'>Enviar</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default PlanoTratamento;
