// src/controllers/ProfissionalController.js
const conn = require('../db/conn');

function listarProfissionais(req, res) {
  const queryStr = `
    SELECT p1.cod_prof, p1.nome_prof, p2.nome_prof AS supervisor, p1.status_prof
    FROM profissional p1
    LEFT JOIN profissional p2 ON p1.sup_prof = p2.cod_prof
  `;

  conn.query(queryStr, (error, results) => {
    if (error) {
      console.error('Erro ao buscar profissionais:', error);
      return res.status(500).json({ mensagem: 'Erro ao buscar profissionais.' });
    }
    
    return res.status(200).json(results);
  });
}

module.exports = {
  listarProfissionais,
};
