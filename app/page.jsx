"use client";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  let recognition;
  if (typeof window !== "undefined") {
    recognition = new webkitSpeechRecognition();
  }

  const handleStartClick = () => {
    setListening(true);
    if (text) setText("");
    recognition.continuous = true;
    recognition.lang = "es-ES";
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = (event) => {
      console.log("inicia...");
      const texto = event.results[event.results.length - 1][0].transcript;
      console.log("texto: ", texto);
      console.log("acaba...");
      setText(texto);
    };
  };

  const handleStopClick = () => {
    setListening(false);
    recognition.abort();
  };

  return (
    <>
      <div className="form-floating mx-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          value={text}
        ></textarea>
        <label htmlFor="floatingTextarea2">Nota de voz...</label>
        <div className="d-flex gap-2 justify-content-center pt-4 pb-5">
          {listening ? (
            <button
              onClick={handleStopClick}
              className="btn btn-danger rounded-circle"
            >
              <i
                className="bi bi-pause-circle-fill"
                style={{ fontSize: "1.5rem", color: "white" }}
              ></i>
            </button>
          ) : (
            <button
              onClick={handleStartClick}
              className="btn btn-success rounded-circle"
              disabled={text ? true : false}
            >
              <i
                className="bi bi-mic-fill"
                style={{ fontSize: "1.5rem", color: "white" }}
              ></i>
            </button>
          )}
        </div>
        {text && !listening ? (
          <div className="d-flex gap-2 justify-content-center">
            <button className="btn">
              <i
                className="bi bi-trash3-fill"
                style={{ fontSize: "1.5rem", color: "gray" }}
              ></i>
            </button>
            <button className="btn btn-primary rounded">
              <i className="bi bi-save me-2" style={{ fontSize: "" }}></i>
              Registrar
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
