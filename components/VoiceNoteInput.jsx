"use client";
import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function VoiceNoteInput() {
  const { addList } = useGlobalState();
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState({});

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
        setList(convertStringToJson(texto));
      }
    };
  };

  const clearText = () => {
    setText("");
    setList({});
  };

  const convertStringToJson = (input) => {
    const regex = /(.+) (\d+) (kg|lt|sobres|sobre|bolsa|bolsas) (\d+) soles/;
    const match = RegExp(regex).exec(input);
    console.log(match);

    if (!match) {
      return null;
    }

    const description = match[1];
    const quantity = parseInt(match[2], 10);
    const price = parseInt(match[4], 10);

    return {
      description,
      quantity,
      price,
    };
  };

  const saveList = () => {
    console.log("list: ", list);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Lima",
    };
    const date = new Date().toLocaleString("es-PE", options).replace(",", "");
    addList({ ...list, date });

    setText("");
    setList({});
  };

  return (
    <div className="form-floating mx-3">
      <textarea
        className="form-control"
        placeholder="Ejemplo... arroz faraon | 5kg | 20 soles"
        id="floatingTextarea2"
        style={{ height: "100px" }}
        value={!listening ? text : ""}
        onChange={() => {}}
      ></textarea>
      <label htmlFor="floatingTextarea2">
        Ejemplo... arroz faraon | 5kg | 20 soles
      </label>
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
          <button onClick={saveList} className="btn btn-primary rounded">
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
