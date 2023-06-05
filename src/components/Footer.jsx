import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export default function Footer() {
  const fillStyles = {
    path: {
      stroke: "#FFFFFF",
      strokeLinecap: "round",
    },
    trail: {
      stroke: "#52B6FF",
      strokeLinecap: "round",
    },
  };

  const { totalHabitos, totalHabFeitos, porcentagem } = useContext(AuthContext);

  return (
    <SCDivFooter data-test="menu">
      <Link data-test="habit-link" to={"/habitos"}>
        <h2>Hábitos</h2>
      </Link>

      <Link data-test="today-link" to={"/hoje"}>
        <SCCircularProgressbar value={porcentagem} styles={fillStyles}>
          <SCText>Hoje</SCText>
        </SCCircularProgressbar>
      </Link>

      <Link data-test="history-link" to={"/historico"}>
        <h2>Histórico</h2>
      </Link>
    </SCDivFooter>
  );
}

const SCDivFooter = styled.div`
  background: #ffffff;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1;

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #52b6ff;
  }
`;

const SCCircularProgressbar = styled(CircularProgressbar)`
  width: 90px;
  height: 90px;
  background-color: #52b6ff;
  border-radius: 50%;
  padding: 7px;
  transition: 0.5s;
  margin-bottom: 50px;
`;

const SCText = styled.text`
  z-index: 1;
`;
