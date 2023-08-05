"use client";
import { useState } from "react";

export default function VoiceNoteInput() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  let recognition;
  if (typeof window !== "undefined") {
    recognition = new webkitSpeechRecognition();
  }

  const handleStartClick = () => {
    setListening(true);
    recognition.continuous = true;
    recognition.lang = "es-ES";
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = (event) => {
      const texto =
        event.results[event.results.length - 1][0].transcript.toLowerCase();
      if (event.results[0].isFinal) {
        setListening(false);
        setText(texto);
      }
    };
  };

  const handleStopClick = () => {
    recognition.stop();
    recognition.abort();
    console.log("Speech recognition aborted.");
    console.log("get text: ", text);
    const data = convertStringToJson(text);
    console.log("data: ", data);
  };

  const clearText = () => {
    setText("");
  };

  const convertStringToJson = (input) => {
    const regex = /(.+) (\d+) (kg|lt|sobres) (\d+) soles/;
    const match = RegExp(regex).exec(input);
    console.log(match);

    if (!match) {
      return null;
    }

    const product = match[1];
    const quantity = parseInt(match[2], 10);
    const price = parseInt(match[4], 10);

    return {
      product,
      quantity,
      price,
    };
  };

  return (
    <div className="form-floating mx-3">
      <textarea
        className="form-control"
        placeholder="Ejemplo... producto gelatina universal sabor fresa cantidad 3 sobres precio 2 soles"
        id="floatingTextarea2"
        style={{ height: "100px" }}
        value={!listening ? text : ""}
        onChange={() => {}}
      ></textarea>
      <label htmlFor="floatingTextarea2">Nota de voz...</label>
      <div className="d-flex gap-2 justify-content-center pt-4 pb-3">
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
      </div>
      {text && !listening ? (
        <div className="d-flex gap-2 justify-content-center">
          <button onClick={clearText} className="btn">
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
  );
}
