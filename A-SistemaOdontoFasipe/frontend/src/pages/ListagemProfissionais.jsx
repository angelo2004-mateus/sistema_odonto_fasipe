// src/pages/ListagemProfissionais.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListagemProfissionais.scss'

const ListagemProfissionais = () => {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/profissionais')
      .then(response => {
        setProfissionais(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar profissionais:', error);
      });
  }, []);

  return (
    <div className="listagem-profissionais">
      <h2>Listagem de Profissionais</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Código</th>
            
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {profissionais.map((profissional) => (
            <tr key={profissional.cod_prof}>
              <td>{profissional.nome_prof}</td>
              <td>{profissional.cod_prof}</td>
              
              <td>{profissional.status_prof === 1 ? 'Ativo' : profissional.status_prof === 0 ? 'Inativo' : 'Suspenso'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListagemProfissionais;
