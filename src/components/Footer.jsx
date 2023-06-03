import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <SCDivFooter data-test="menu">
      <Link data-test="habit-link" to={"/habitos"}>
        <h2>Hábitos</h2>
      </Link>

      <Link data-test="today-link" to={"/hoje"}>
        <button>Hoje</button>
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

  button {
    width: 90px;
    height: 90px;
    background: #52b6ff;
    border: none;
    border-radius: 100%;
    margin-bottom: 40px;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
`;
