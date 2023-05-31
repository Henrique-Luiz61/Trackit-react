import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function Habitos() {
  return (
    <>
      <Header />

      <SCContainerConteudo>
        <SCAddHabitos>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </SCAddHabitos>

        <SCCriarHabito>
          <SCConteudoCard>
            <input placeholder="nome do hábito" />

            <SCDiasSemana>
              <button>D</button>
              <button>S</button>
              <button>T</button>
              <button>Q</button>
              <button>Q</button>
              <button>S</button>
              <button>S</button>
            </SCDiasSemana>

            <SCBotoesSalvar>
              <SCBotaoCancelar>Cancelar</SCBotaoCancelar>
              <SCBotaoSalvar>Salvar</SCBotaoSalvar>
            </SCBotoesSalvar>
          </SCConteudoCard>
        </SCCriarHabito>

        <SCNenhumHabito>
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

    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
  }
`;

const SCCriarHabito = styled.div`
  background-color: blue;
  display: flex;
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

  button {
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const SCNenhumHabito = styled.div`
  display: flex;
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

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
