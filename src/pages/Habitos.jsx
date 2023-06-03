import Header from "../components/Header";
import lixeira from "../assets/dump.svg";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function Habitos() {
  const [dspCriarHabito, setDspCriar] = useState("none");
  const [habitos, setHabitos] = useState([]);
  const [dias, setDias] = useState(["D", "S", "T", "Q", "Q", "S", "S"]);
  const [selecionados, setSelec] = useState([]);
  const [nomeHabito, setNomeHab] = useState("");
  const [buscarDeNovo, setBuscar] = useState(0);

  const { infoUsuario } = useContext(AuthContext);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const config = {
      headers: {
        Authorization: `Bearer ${infoUsuario.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((resposta) => {
      console.log(resposta.data);
      setHabitos(resposta.data);
    });
    promise.catch((erro) => {
      console.log(erro);
    });
  }, [buscarDeNovo]);

  function selecionarDia(i) {
    if (selecionados.includes(i)) {
      let arrayNovo = [...selecionados];
      let posIndice = arrayNovo.indexOf(i);
      let removeIndice = arrayNovo.splice(posIndice, 1);
      setSelec(arrayNovo);
    } else {
      let novoArray = [...selecionados, i];
      setSelec(novoArray);
    }
  }

  function salvarHabito(e) {
    e.preventDefault();

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const novoHabito = {
      name: nomeHabito,
      days: selecionados,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${infoUsuario.token}`,
      },
    };

    const promise = axios.post(URL, novoHabito, config);
    promise.then((resposta) => {
      console.log(resposta.data);
      let novoSelec = [];
      setSelec(novoSelec);
      setNomeHab("");
      let count = buscarDeNovo + 1;
      setBuscar(count);
      setDspCriar("none");
    });
    promise.catch((erro) => {
      console.log(erro.response);
      alert("deu erro");
    });
  }

  return (
    <>
      <Header />

      <SCContainerConteudo>
        <SCAddHabitos>
          <h1>Meus hábitos</h1>
          <button onClick={() => setDspCriar("flex")}>+</button>
        </SCAddHabitos>

        <SCCriarHabito dspCriarHabito={dspCriarHabito}>
          <SCConteudoCardCriar onSubmit={salvarHabito}>
            <input
              tyoe="text"
              required
              placeholder="nome do hábito"
              value={nomeHabito}
              onChange={(e) => setNomeHab(e.target.value)}
            />

            <SCDiasSemana selecionados={selecionados}>
              {dias.map((dia, i) => (
                <SCBotaoDia
                  type="button"
                  key={i}
                  onClick={() => selecionarDia(i)}
                  indice={i}
                  selecionados={selecionados}
                >
                  {dia}
                </SCBotaoDia>
              ))}
            </SCDiasSemana>

            <SCBotoesSalvar>
              <SCBotaoCancelar
                type="button"
                onClick={() => setDspCriar("none")}
              >
                Cancelar
              </SCBotaoCancelar>

              <SCBotaoSalvar type="submit">Salvar</SCBotaoSalvar>
            </SCBotoesSalvar>
          </SCConteudoCardCriar>
        </SCCriarHabito>

        <SCContainerCards>
          {habitos.map((hab) => (
            <SCCardHabito key={hab.id}>
              <SCConteudoCardHab>
                <SCDescricaoHabito>
                  <h1>{hab.name}</h1>
                  <SCContainerDiasHab>
                    {dias.map((dia, i) => (
                      <SCBotaoDiaHab
                        key={i}
                        type="button"
                        i={i}
                        habDias={hab.days}
                      >
                        {dia}
                      </SCBotaoDiaHab>
                    ))}
                  </SCContainerDiasHab>
                </SCDescricaoHabito>

                <div>
                  <img src={lixeira} alt="excluir" />
                </div>
              </SCConteudoCardHab>
            </SCCardHabito>
          ))}
        </SCContainerCards>

        <SCNenhumHabito habitos={habitos}>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </SCNenhumHabito>
      </SCContainerConteudo>

      <Footer />
    </>
  );
}

const SCContainerConteudo = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 70px;
  position: fixed;
  left: 0;
  right: 0;
`;

const SCAddHabitos = styled.div`
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
  }
`;

const SCCriarHabito = styled.div`
  display: ${(props) => props.dspCriarHabito};
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
`;
const SCConteudoCardCriar = styled.form`
  background-color: #ffffff;
  width: 92%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 8px;
    margin-bottom: 10px;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }
`;
const SCDiasSemana = styled.div`
  background-color: #ffffff;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SCBotaoDia = styled.button`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: ${(props) =>
    props.selecionados.includes(props.indice) ? "#d5d5d5" : "#ffffff"};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) =>
    props.selecionados.includes(props.indice) ? "#ffffff" : "#d5d5d5"};
`;

const SCContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  margin-bottom: 50px;
`;
const SCCardHabito = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  border-radius: 5px;
  margin-top: 15px;
`;
const SCConteudoCardHab = styled.div`
  width: 92%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const SCDescricaoHabito = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 20px;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
  }
`;
const SCContainerDiasHab = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SCBotaoDiaHab = styled.button`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  background: ${(props) =>
    props.habDias.includes(props.i) ? "#d5d5d5" : "#ffffff"};
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) =>
    props.habDias.includes(props.i) ? "#ffffff" : "#d5d5d5"};
`;

const SCNenhumHabito = styled.div`
  display: ${(props) => (props.habitos.length === 0 ? "flex" : "none")};
  width: 94%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-top: 20px;
`;

const SCBotoesSalvar = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40%;
`;
const SCBotaoCancelar = styled.button`
  width: 84px;
  height: 35px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #52b6ff;
`;
const SCBotaoSalvar = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 5px;
  border: none;
  margin-left: 5px;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
