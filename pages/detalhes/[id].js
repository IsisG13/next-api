import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Detalhes() {
  const router = useRouter();
  const { id } = router.query;
  const [dados, setDados] = useState({});

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch(`/api/dados?id=${id}`);
        const data = await response.json();
        setDados(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    if (id) {
      fetchDados();
    }
  }, [id]);

  return (
    <div className="main-detalhes">
      <header className="App-header">
        {/* Aqui quando o nome for clicado, vai voltar para a pagina inicial */}
        <Link href="/">
          <h1>Marvel</h1>
        </Link>
        {dados && (
          <div key={dados.id}>
            <img
              className="imagemDetalhes"
              src={dados.imagemDetalhes}
              alt={dados.nome}
            />
            <div className="conteudoDetalhes">
              <h5>{dados.nomeAtor}</h5>
              <a
                className="trailer"
                href={dados.trailer}
                target="_blank"
              >
                <h3>Assistir o trailer</h3>
              </a>
              <h4>{dados.sobreDetalhes}</h4>
              <p className="sobreTrailer">{dados.sobreTrailer}</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
