import logo from "../assets/logoTrackit.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function fazerCadastro(e) {
    e.preventDefault(); //previne a perca dos dados dos values, quando o react re-renderiza a tela

    const objCadastro = { email, name, image, password };

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const promise = axios.post(URL, objCadastro);

    promise.then((resposta) => {
      console.log(resposta.data);
      alert("Vocé foi cadastrado com Sucesso!");
      navigate("/");
    });
    promise.catch((erro) => {
      alert(erro.response.data.message);
    });
  }

  return (
    <SCContainerPagina>
      <SCContainerLogin>
        <SCDivImagem>
          <img src={logo} alt="Logo Trackit" />
        </SCDivImagem>

        <SCFormContainer onSubmit={fazerCadastro}>
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="url"
            placeholder="foto"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
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
