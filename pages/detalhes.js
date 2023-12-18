import react, { useEffect, useState } from "react";

function About() {
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
    <div className="main-detalhes">
      <header className="detalhes">
        <a href="#">
          <h1>Marvel Detalhes</h1>
        </a>
        {dados.map((item) => (
          <div key={item.id}>
            <img
              className="imagemDetalhes"
              src={item.imagemDetalhes}
              alt={item.nome}
            />

            <div className="conteudoDetalhes">
              <h5>{item.nomeAtor}</h5>
              <a className="trailer" href={item.trailer} target="_blank">
                <h3>Assistir o trailer</h3>
              </a>
              <h4>{item.sobreDetalhes}</h4>
              <p className="sobreTrailer">{item.sobreTrailer}</p>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default About;
