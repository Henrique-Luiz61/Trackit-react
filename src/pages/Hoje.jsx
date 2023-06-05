import Header from "../components/Header";
import Footer from "../components/Footer";
import check from "../assets/check.png";
import styled from "styled-components";
import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import axios from "axios";

export default function Hoje() {
  const [habitos, setHabitos] = useState([]);
  const [dia, setDia] = useState(dayjs().locale("pt-br").format("dddd, DD/MM"));
  const [habFeitos, setFeitos] = useState([]);
  const [buscarDeNovo, setBuscar] = useState(0);

  const {
    infoUsuario,
    totalHabitos,
    setTotalHab,
    totalHabFeitos,
    setTotalFeitos,
    porcentagem,
    setPorcentagem,
  } = useContext(AuthContext);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${infoUsuario.token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((resposta) => {
      console.log(resposta.data);
      let habitosHoje = resposta.data;
      setHabitos(habitosHoje);
      setTotalHab(resposta.data.length);
      setTotalFeitos(resposta.data.filter((hab) => hab.done === true).length);
      let resultado = Math.ceil((totalHabFeitos / totalHabitos) * 100);
      setPorcentagem(Number(resultado));
    });
    promise.catch((erro) => {
      alert(erro.responde.data.message);
    });
  }, [habFeitos, buscarDeNovo]);

  function concluirDesconcluirHab(idHab, doneHab) {
    if (habFeitos.includes(idHab) === false) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHab}/check`;

      const config = {
        headers: {
          Authorization: `Bearer ${infoUsuario.token}`,
        },
      };

      const promise = axios.post(URL, idHab, config);

      promise.then((resposta) => {
        console.log(resposta.data);
        let novoArray = [...habFeitos, idHab];
        setFeitos(novoArray);
        let novo = buscarDeNovo + 1;
        setBuscar(novo);
      });
      promise.catch((erro) => {
        alert(erro.response.data.message);
      });
    } else {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHab}/uncheck`;

      const config = {
        headers: {
          Authorization: `Bearer ${infoUsuario.token}`,
        },
      };

      const promise = axios.post(URL, idHab, config);

      promise.then((resposta) => {
        let arrayNovo = [...habFeitos];
        let posIndice = arrayNovo.indexOf(idHab);
        let removeIndice = arrayNovo.splice(posIndice, 1);
        setFeitos(arrayNovo);
      });
      promise.catch((erro) => {
        console.log(erro.response.data.messsage);
        alert("deu erro: ", erro.response.data);
      });
    }
  }

  return (
    <>
      <Header />

      <SCContainerConteudo>
        <SCDataProgresso habFeitos={habFeitos}>
          <h1 data-test="today">{dia}</h1>
          <p data-test="today-counter">
            {habitos.length === 0
              ? "Nenhum hábito concluído ainda"
              : `${porcentagem}% dos hábitos concluidos`}
          </p>
        </SCDataProgresso>

        <SCContainerHabitos>
          {habitos.map((hab) => (
            <SCCardHabito data-test="today-habit-container" key={hab.id}>
              <SCDescricaoHabito>
                <h1 data-test="today-habit-name">{hab.name}</h1>
                <p>
                  Sequência atual:{" "}
                  <SCSeqAtual
                    data-test="today-habit-sequence"
                    habFeitos={habFeitos}
                    id={hab.id}
                  >
                    {hab.currentSequence}{" "}
                    {hab.currentSequence === 1 ? "dia" : "dias"}
                  </SCSeqAtual>{" "}
                </p>
                <p>
                  Seu recorde:{" "}
                  <SCRecorde
                    data-test="today-habit-record"
                    currentSequence={hab.currentSequence}
                    highestSequence={hab.highestSequence}
                    habFeitos={habFeitos}
                    idHabito={hab.id}
                  >
                    {hab.highestSequence}{" "}
                    {hab.highestSequence === 1 ? "dia" : "dias"}
                  </SCRecorde>{" "}
                </p>
              </SCDescricaoHabito>

              <div>
                <SCBotaoCheck
                  data-test="today-habit-check-btn"
                  onClick={() => concluirDesconcluirHab(hab.id, hab.done)}
                  habFeitos={habFeitos}
                  idHab={hab.id}
                >
                  <img src={check} alt="check" />
                </SCBotaoCheck>
              </div>
            </SCCardHabito>
          ))}
        </SCContainerHabitos>
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

const SCDataProgresso = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  position: inherit;
  z-index: 1;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    color: #126ba5;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) =>
      props.habFeitos === undefined || props.habFeitos.length === 0
        ? "#bababa"
        : "#8FC549"};
  }
`;

const SCContainerHabitos = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-top: 100px;
  overflow-y: scroll;
  margin-bottom: 50px;
`;

const SCCardHabito = styled.div`
  width: 99%;
  height: 94px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SCDescricaoHabito = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
  }
`;

const SCSeqAtual = styled.strong`
  color: ${(props) =>
    props.habFeitos.includes(props.id) ? "#8FC549" : "#666666"};
`;

const SCRecorde = styled.strong`
  color: ${(props) =>
    props.currentSequence === props.highestSequence &&
    props.habFeitos.includes(props.idHabito)
      ? "#8FC549"
      : "#666666"};
`;

const SCBotaoCheck = styled.button`
  width: 69px;
  height: 69px;
  background: ${(props) =>
    props.habFeitos.includes(props.idHab) ? "#8FC549" : "#ebebeb"};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  cursor: pointer;
`;
