// index.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [dados, setDados] = useState([]);
  const router = useRouter();

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
        <Link href="/">
        <a>
          <h1>Marvel</h1>
        </a>
        </Link>
        {dados &&
          dados.map((item) => (
            <div key={item.id} className="card">
              <Link key={item.id} href={`/detalhes/${item.id}`}>
                <a>
                  <img className="imagem" src={item.imagem} alt={item.nome} />
                </a>
              </Link>
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
