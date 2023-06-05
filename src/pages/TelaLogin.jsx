import logo from "../assets/logoTrackit.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function TelaLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  const { setInfo } = useContext(AuthContext);

  function fazerLogin(e) {
    e.preventDefault(); //previne a perca dos dados dos values, quando o react re-renderiza a tela

    const objLogin = { email, password };

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const promise = axios.post(URL, objLogin);

    setCarregando(true);

    promise.then((resposta) => {
      setCarregando(false);
      setInfo(resposta.data);
      navigate("/hoje");
    });
    promise.catch((erro) => {
      setCarregando(false);
      console.log("erro: ", erro.response);
      alert(erro.response.data.message);
    });
  }

  return (
    <SCContainerPagina>
      <SCContainerLogin>
        <SCDivImagem>
          <img src={logo} alt="Logo Trackit" />
        </SCDivImagem>

        <SCFormContainer carregando={carregando} onSubmit={fazerLogin}>
          <input
            data-test="email-input"
            type="email"
            placeholder="email"
            disabled={carregando}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            data-test="password-input"
            type="password"
            placeholder="senha"
            disabled={carregando}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button data-test="login-btn" type="submit" disabled={carregando}>
            {carregando ? (
              <ThreeDots color="#ffffff" height={50} width={50} />
            ) : (
              "Entrar"
            )}
          </button>
        </SCFormContainer>

        <Link data-test="signup-link" to="/cadastro">
          <SCCadastre_se>Não tem uma conta? Cadastre-se</SCCadastre_se>
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
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: ${(props) => (props.carregando ? "#f2f2f2" : "#ffffff")};
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
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => (props.carregando ? 0.7 : 1)};

    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
`;

const SCCadastre_se = styled.p`
  box-sizing: border-box;
  color: #52b6ff;
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  margin-bottom: 35px;
  cursor: pointer;
`;
