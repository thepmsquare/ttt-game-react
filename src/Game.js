import React, { Component } from "react";
import { DefaultButton } from "@fluentui/react";
import "./stylesheets/Game.css";

class Game extends Component {
  render = () => {
    return (
      <div className="Game">
        <h1>Game</h1>
        <DefaultButton text="Standard" />
      </div>
    );
  };
}

export default Game;
