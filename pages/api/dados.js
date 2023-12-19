import { getDocs, collection } from 'firebase/firestore';
import db from '../../firebase';

export default async function handler(req, res) {
  try {
    const dadosCollection = collection(db, 'dados');
    const dadosSnapshot = await getDocs(dadosCollection);
    const dados = dadosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (req.query.id) {
      // Aqui ele retorna os dados deacordo com sua ID
      const selectedItem = dados.find((item) => item.id === req.query.id);
      res.status(200).json(selectedItem || {});
    } else {
      // Aqui ele vai retornar todos os dados
      res.status(200).json(dados);
    }
  } catch (error) {
    // Se der erro ele vem aqui, e mostra a mensagem de erro
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
}
