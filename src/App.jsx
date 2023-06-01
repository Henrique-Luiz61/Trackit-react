import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetStyle from "./css/ResetStyle";
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import axios from "axios";

export default function App() {
  axios.defaults.headers.common["Authorization"] = "1ErRmzeW0uJlwfU1ic4PWRZR";

  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
}
