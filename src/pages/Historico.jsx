import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

export default function Historico() {
  return (
    <>
      <Header />

      <SCContainerConteudo>
        <SCTituloHist>
          <h1>Histórico</h1>
        </SCTituloHist>

        <SCHistoricoVazio>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </SCHistoricoVazio>
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

const SCTituloHist = styled.div`
  width: 95%;
  margin-top: 20px;
  margin-bottom: 20px;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const SCHistoricoVazio = styled.div`
  width: 95%;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;
