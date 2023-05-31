import Header from "../components/Header";
import Footer from "../components/Footer";
import check from "../assets/check.png";
import styled from "styled-components";

export default function Hoje() {
  return (
    <>
      <Header />

      <SCContainerConteudo>
        <SCDataProgresso>
          <h1>Segunda, 17/05</h1>
          <p>Nenhum hábito concluído ainda</p>
        </SCDataProgresso>

        <SCContainerHabitos>
          <SCCardHabito>
            <SCDescricaoHabito>
              <h1>Ler 1 capítulo do livro</h1>
              <p>Sequência atual: 5 dias</p>
              <p>Seu recorde: 5 dias</p>
            </SCDescricaoHabito>

            <div>
              <SCBotaoCheck>
                <img src={check} alt="check" />
              </SCBotaoCheck>
            </div>
          </SCCardHabito>

          <SCCardHabito>
            <SCDescricaoHabito>
              <h1>Ler 1 capítulo do livro</h1>
              <p>Sequência atual: 5 dias</p>
              <p>Seu recorde: 5 dias</p>
            </SCDescricaoHabito>

            <div>
              <SCBotaoCheck>
                <img src={check} alt="check" />
              </SCBotaoCheck>
            </div>
          </SCCardHabito>

          <SCCardHabito>
            <SCDescricaoHabito>
              <h1>Ler 1 capítulo do livro</h1>
              <p>Sequência atual: 5 dias</p>
              <p>Seu recorde: 5 dias</p>
            </SCDescricaoHabito>

            <div>
              <SCBotaoCheck>
                <img src={check} alt="check" />
              </SCBotaoCheck>
            </div>
          </SCCardHabito>
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
    color: #bababa;
  }
`;

const SCContainerHabitos = styled.div`
  width: 94%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
  margin-top: 20px;
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

const SCBotaoCheck = styled.button`
  width: 69px;
  height: 69px;
  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  cursor: pointer;
`;
