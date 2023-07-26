import { useState } from "react";
import "regenerator-runtime/runtime";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// entry: ["regenerator-runtime/runtime"];
import "regenerator-runtime/runtime.js";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
// import "core-js";
// install speechly
const appId = "c5a9bac5-4090-421c-93db-9798575b52a1";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// const speechRecognition = new SpeechlySpeechRecognition();
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    console.log("browser not supported");
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <>
      <div className="app">
        <div>
          <h1>Voice to text Transition App</h1>
        </div>
        <br />
        <div>
          <p>
            <strong>Microphone status:</strong>{" "}
            <span className="text-success fw-bold">
              {" "}
              {listening ? "Listening" : "Not listening"}
            </span>
          </p>
          <button
            className="btn btn-primary m-1"
            onClick={SpeechRecognition.startListening}
          >
            Start
          </button>
          <button
            className="btn btn-danger m-1"
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
          <button className="btn btn-warning m-1" onClick={resetTranscript}>
            Reset
          </button>
          <p> {transcript} </p>
        </div>
      </div>
    </>
  );
}

export default App;
