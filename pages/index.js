import { useState } from "react";
import axios from "axios";

import s from "../styles/index.module.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  function handleSubmitEmail() {
    axios.post("/api/register-email", { email }).then((response) => {
      if (response.data.created) {
        setApiResponse("E-mail cadastrado com sucesso.");
      } else {
        setApiResponse("Houve um problema para cadastrar seu e-mail.");
      }
    });
  }

  return (
    <div className={s.container}>
      <div className={s.box}>
        <h2 className={s.title}>Insira seu e-mail:</h2>
        <p className={s.text}>
          Se inscreva em nossa newsletter para acompanhar mais de perto o mundo
          da tecnologia.
        </p>
        <div className={s.box2}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={s.input}
            placeholder="email@example.com"
          />
          <span className={s.text}>{apiResponse}</span>
        </div>

        <button className={s.button} onClick={handleSubmitEmail}>
          INSCREVER-SE
        </button>
      </div>
    </div>
  );
}
