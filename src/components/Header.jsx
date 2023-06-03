import styled from "styled-components";
import titulo from "../assets/trackit.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function Header() {
  const { infoUsuario } = useContext(AuthContext);

  return (
    <SCTopo data-test="header">
      <SCTitulo src={titulo} alt="trackit" />
      <SCImgUsuario
        data-test="avatar"
        src={infoUsuario.image}
        alt="imagem de usuario"
      />
    </SCTopo>
  );
}

const SCTopo = styled.div`
  box-sizing: border-box;
  background-color: #126ba5;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const SCTitulo = styled.img`
  width: 100px;
  height: 35px;
  margin-left: 15px;
`;

const SCImgUsuario = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 15px;
`;
