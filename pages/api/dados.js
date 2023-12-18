// pages/api/dados.js
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

    res.status(200).json(dados);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
}
