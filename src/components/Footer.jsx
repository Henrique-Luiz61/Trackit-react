import styled from "styled-components";

export default function Footer() {
  return (
    <SCDivFooter>
      <h2>Hábitos</h2>

      <button>Hoje</button>

      <h2>Histórico</h2>
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

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }
`;
