// pages/api/dados.js
export default function handler(req, res) {
    const dados = [
      { id: 1, nome: 'Exemplo 1', sobre: "Esse é o exemplo um" },
      { id: 2, nome: 'Exemplo 2', sobre: "Esse é o exemplo dois" },
      { id: 3, nome: 'Exemplo 3', sobre: "Esse é o exemplo tres" },
    ];
  
    res.status(200).json(dados);
  }
  