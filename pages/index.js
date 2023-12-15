import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchDados = async () => {
      try {
        const response = await fetch("/api/dados");
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDados();
  }, []);

  return (
    <main className="main">
      <h1>MARVEL</h1>
      <div className="dados">
        {dados.map((item) => (
          <div key={item.id}>
            <div className="card">
              <h2>{item.nome}</h2>
              <p>{item.sobre}</p> <br />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
