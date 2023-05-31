import logo from "../assets/logoTrackit.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TelaCadastro() {
  return (
    <SCContainerPagina>
      <SCContainerLogin>
        <SCDivImagem>
          <img src={logo} alt="Logo Trackit" />
        </SCDivImagem>

        <SCFormContainer>
          <input placeholder="email" />
          <input placeholder="senha" />
          <input placeholder="nome" />
          <input placeholder="foto" />
          <button>Entrar</button>
        </SCFormContainer>

        <Link to="/">
          <SCFacaLogin>Já tem uma conta? Faça login!</SCFacaLogin>
        </Link>
      </SCContainerLogin>
    </SCContainerPagina>
  );
}

const SCContainerPagina = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SCContainerLogin = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SCDivImagem = styled.div`
  width: 180px;
  height: 178px;
`;

const SCFormContainer = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 10px;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }

  button {
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
`;

const SCFacaLogin = styled.p`
  box-sizing: border-box;
  color: #52b6ff;
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  margin-top: 15px;
  cursor: pointer;
`;
