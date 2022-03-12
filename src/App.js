import React, { useState } from "react";
import "./App.scss";
import Toggler from "./components/Toggler/Toggler";
import CardList from "./components/CardList/CardList";

function App() {
  const [switchState, setSwitchState] = useState(false);
  return (
    <div className="main">
      <h1>Our pricing</h1>
      <Toggler
        onClick={() => {
          setSwitchState(!switchState);
        }}
      />
      <CardList switchState={switchState} />
    </div>
  );
}

export default App;
