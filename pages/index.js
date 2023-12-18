import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
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
    <div className="main">
      <header className="App-header">
        <a href="#">
          <h1>Marvel</h1>
        </a>
        {dados &&
          dados.map((item) => (
            <div className="card" key={item.id}>
              <img className="imagem" src={item.imagem} alt={item.nome} />
              {/* <Image className="imagem" src={item.imagem} alt={item.nome} /> */}
              <div className="conteudo">
                <div key={item.id}>
                  <p>{item.nome}</p> <br />
                  <p>{item.sobre}</p> <br />
                  <h5> Filme: </h5>
                  <a href={item.urlFilme} target="_blank">
                    {item.filme}
                  </a>{" "}
                  <br />
                  <p>{item.lancamentoF}</p> <br />
                  <h5> Serie: </h5>
                  <a href={item.urlSerie} target="_blank">
                    {item.serie}
                  </a>{" "}
                  <br />
                  <p>
                    {item.temporada} - {item.lancamentoS}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </header>
    </div>
  );
}
