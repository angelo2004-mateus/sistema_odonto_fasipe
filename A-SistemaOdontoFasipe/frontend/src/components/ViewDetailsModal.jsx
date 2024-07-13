import React from 'react';
import './ViewDetailsModal.scss';

const ViewDetailsModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  // Função para obter o texto correspondente ao status do profissional
  const getStatusLabel = (status) => {
    switch (status) {
      case 1:
        return "Ativo";
      case 2:
        return "Inativo";
      case 3:
        return "Suspenso";
      default:
        return "Desconhecido";
    }
  };

  // Função para obter o texto correspondente ao tipo do profissional
  const getTypeLabel = (type) => {
    switch (type) {
      case 1:
        return "Administrativo";
      case 2:
        return "Técnico Básico";
      case 3:
        return "Técnico Supervisor";
      case 4:
        return "Master";
      default:
        return "Desconhecido";
    }
  };

  // Determina as informações a serem mostradas com base no tipo (Paciente ou Profissional)
  const renderContent = () => {
    if (data.tipo === 'Paciente') {
      return (
        <div className="modal-content">
          <h2>Detalhes do Paciente</h2>
          <p><strong>Código:</strong> {data.cod_pac}</p>
          <p><strong>Nome:</strong> {data.nome_pac}</p>
          <p><strong>Data de Nascimento:</strong> {data.data_nasc_pac}</p>
          <p><strong>CPF:</strong> {data.cpf_pac}</p>
          <p><strong>Telefone:</strong> {data.tel_pac}</p>
          <p><strong>CEP:</strong> {data.cep_pac}</p>
          <p><strong>Logradouro:</strong> {data.logra_pac}</p>
          <p><strong>Número:</strong> {data.num_logra_pac}</p>
          <p><strong>Complemento:</strong> {data.compl_pac}</p>
          <p><strong>Bairro:</strong> {data.bairro_pac}</p>
          <p><strong>Cidade:</strong> {data.cidade_pac}</p>
          <p><strong>UF:</strong> {data.uf_pac}</p>
          <p><strong>RG:</strong> {data.rg_pac}</p>
          <p><strong>Estado RG:</strong> {data.est_rg_pac}</p>
          <p><strong>Nome da Mãe:</strong> {data.nome_mae_pac}</p>
        </div>
      );
    } else if (data.tipo === 'Profissional') {
      return (
        <div className="modal-content">
          <h2>Detalhes do Profissional</h2>
          <p><strong>Código:</strong> {data.cod_prof}</p>
          <p><strong>Nome:</strong> {data.nome_prof}</p>
          <p><strong>Especialidade:</strong> {data.especialidade_prof}</p>
          <p><strong>Status:</strong> {getStatusLabel(data.status_prof)}</p>
          <p><strong>Supervisor:</strong> {data.sup_prof ? data.sup_prof : 'Nenhum'}</p>
          <p><strong>Tipo:</strong> {getTypeLabel(data.tipo_prof)}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>Fechar</button>
        {renderContent()}
      </div>
    </div>
  );
};

export default ViewDetailsModal;
