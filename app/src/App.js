import React from "react";
import "./App.css";

import adamite from "@adamite/sdk";
import { CharacterSheet } from "./components/CharacterSheet";

async function saveString(text) {
  await adamite()
    .database()
    .collection("config")
    .doc("string")
    .update({ value: text });
}

function loadString() {
  return adamite()
    .database()
    .collection("config")
    .doc("string")
    .get()
    .then((document) => {
      return document.data;
    });
}

function App() {
  return (
    <>
      <CharacterSheet sheetId={"unknown"} />
    </>
  );
}

export default App;
