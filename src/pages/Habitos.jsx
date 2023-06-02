import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useState } from "react";

export default function Habitos() {
  const [dspCriarHabito, setDspCriar] = useState("none");
  const [habitos, setHabitos] = useState([]);
  const [dias, setDias] = useState(["D", "S", "T", "Q", "Q", "S", "S"]);
  const [selecionados, setSelec] = useState([]);
  const [estaSelec, setEstaSelec] = useState(false);

  function selecionarDia(i) {
    if (estaSelec === false) {
      let novoArray = [...selecionados, i];
      setSelec(novoArray);
      setEstaSelec(true);
    } else {
      let arrayNovo = [...selecionados];
      let posIndice = arrayNovo.indexOf(i);
      let removeIndice = arrayNovo.splice(posIndice, 1);
      setSelec(arrayNovo);
      setEstaSelec(false);
    }
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
          <SCConteudoCard>
            <input placeholder="nome do hábito" />

            <SCDiasSemana selecionados={selecionados}>
              {dias.map((dia, i) => (
                <SCBotaoDia
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
              <SCBotaoCancelar onClick={() => setDspCriar("none")}>
                Cancelar
              </SCBotaoCancelar>
              <SCBotaoSalvar>Salvar</SCBotaoSalvar>
            </SCBotoesSalvar>
          </SCConteudoCard>
        </SCCriarHabito>

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
  background-color: blue;
  display: ${(props) => props.dspCriarHabito};
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
`;
const SCConteudoCard = styled.div`
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
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 8px;

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
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) =>
    props.selecionados.includes(props.indice) ? "#ffffff" : "#d5d5d5"};
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
