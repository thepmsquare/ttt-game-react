import React, { Component } from "react";
import { DefaultButton, getTheme, ChoiceGroup, Text } from "@fluentui/react";
import "./stylesheets/Game.css";
const theme = getTheme();
class Game extends Component {
  constructor(props) {
    super(props);
    this.tiles = [];
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        this.tiles.push([i, j]);
      }
    }
    this.modeOptions = [
      { key: "A", text: "1 Player", iconProps: { iconName: "Robot" } },
      {
        key: "B",
        text: "2 Players",
        iconProps: { iconName: "ConnectContacts" },
      },
    ];
    this.avatarOptions = [
      { key: "X", iconProps: { iconName: "Cancel" } },
      { key: "O", iconProps: { iconName: "CircleRing" } },
    ];
    this.state = {
      mode: "B",
      player1: "X",
      gameStart: false,
      currentPlayer: "",
      board: [],
      outcome: "",
    };
  }
  // to check if bigArray contains all elements of smallerArray.
  arrayContainsOtherArray = (bigArray, smallerArray) => {
    return smallerArray.every((element) => bigArray.includes(element));
  };
  handleStart = () => {
    let initialBoard = this.tiles.map((tile) => {
      return { row: tile[0], col: tile[1], value: -1 };
    });
    this.setState((curState) => {
      return {
        gameStart: true,
        currentPlayer: curState.player1,
        board: initialBoard,
      };
    });
  };
  handleRadioChange = (event, { key }) => {
    let stateKey = event.target.name;
    this.setState(() => {
      return { [stateKey]: key };
    });
  };
  handleTileClick = (e) => {
    if (!this.state.outcome) {
      const clickedRow = parseInt(e.target.getAttribute("row"));
      const clickedCol = parseInt(e.target.getAttribute("col"));
      // const clickedPosition = `${clickedRow}-${clickedCol}`;
      const newBoard = [...this.state.board];
      const changeThisIndex = this.state.board.findIndex(
        (element) => element.row === clickedRow && element.col === clickedCol
      );
      // to disable clicking same tile twice.
      if (newBoard[changeThisIndex].value === -1) {
        newBoard[changeThisIndex].value = this.state.currentPlayer;
        const newCurrentPlayer = this.state.currentPlayer === "X" ? "O" : "X";
        const outcome = this.checkOutcome();
        // neither tie nor win.
        if (outcome === -1) {
          // two player mode
          if (this.state.mode === "B") {
            this.setState(() => {
              return { board: newBoard, currentPlayer: newCurrentPlayer };
            });
          }
          // single player mode
          else {
            this.setState(
              () => {
                return { board: newBoard };
              },
              () => {
                this.handleComputerTurn();
              }
            );
          }
        } else if (outcome === "win") {
          this.setState(() => {
            return { board: newBoard, outcome: "win" };
          });
        } else if (outcome === "tie") {
          this.setState(() => {
            return { board: newBoard, outcome: "tie" };
          });
        }
      }
    }
  };
  checkOutcome = () => {
    const { board, currentPlayer } = this.state;
    //static win positions :( to avoid complex logic.
    const winPositions = [
      ["1-1", "1-2", "1-3"],
      ["2-1", "2-2", "2-3"],
      ["3-1", "3-2", "3-3"],
      ["1-1", "2-1", "3-1"],
      ["1-2", "2-2", "3-2"],
      ["1-3", "2-3", "3-3"],
      ["1-1", "2-2", "3-3"],
      ["1-3", "2-2", "3-1"],
    ];
    const objectPositionsOfCurrentPlayer = board.filter(
      (element) => element.value === currentPlayer
    );
    const positionsOfCurrentPlayer = objectPositionsOfCurrentPlayer.map(
      (position) => `${position.row}-${position.col}`
    );
    if (
      winPositions.some((winPosition) =>
        this.arrayContainsOtherArray(positionsOfCurrentPlayer, winPosition)
      )
    ) {
      return "win";
    } else if (board.every((element) => element.value !== -1)) {
      return "tie";
    }

    return -1;
  };
  handleGoBack = () => {
    this.setState(() => {
      return {
        mode: "B",
        player1: "X",
        gameStart: false,
        currentPlayer: "",
        board: [],
        outcome: "",
      };
    });
  };
  handleComputerTurn = () => {
    const computerValue = this.state.player1 === "X" ? "O" : "X";
    const options = this.state.board.filter((element) => element.value === -1);
    const randomIndex = Math.floor(Math.random() * options.length);
    const newBoard = [...this.state.board];
    const changeThisIndex = newBoard.findIndex(
      (element) =>
        element.row === options[randomIndex].row &&
        element.col === options[randomIndex].col
    );
    newBoard[changeThisIndex].value = computerValue;
    this.setState(() => {
      return { board: newBoard };
    });
  };
  handlePlayAgain = () => {
    this.setState(
      (curState) => {
        return {
          mode: curState.mode,
          player1: curState.player1,
          currentPlayer: curState.player1,
          outcome: "",
        };
      },
      () => {
        this.handleStart();
      }
    );
  };
  render = () => {
    return (
      <div className="Game">
        {!this.state.gameStart && (
          <div className="Game-one">
            <ChoiceGroup
              label="Select Mode"
              selectedKey={this.state.mode}
              options={this.modeOptions}
              name="mode"
              disabled={this.state.gameStart}
              onChange={this.handleRadioChange}
            />
            <ChoiceGroup
              label="Start as..."
              selectedKey={this.state.player1}
              options={this.avatarOptions}
              name="player1"
              disabled={this.state.gameStart}
              onChange={this.handleRadioChange}
            />
            <DefaultButton
              text="Start"
              onClick={this.handleStart}
              disabled={this.state.gameStart}
            />
          </div>
        )}
        {this.state.gameStart && (
          <div className="Game-two">
            <Text>
              {this.state.outcome === "win"
                ? `${this.state.currentPlayer} Wins`
                : this.state.outcome === "tie"
                ? "Tie"
                : `${this.state.currentPlayer} Turn`}
            </Text>
            <div className="Game-gridContainer">
              {this.tiles.map((tile, index) => {
                return (
                  <div
                    key={tile.join("-")}
                    style={{
                      boxShadow: theme.effects.elevation8,
                    }}
                    row={tile[0]}
                    col={tile[1]}
                    className="Game-gridItem"
                    onClick={this.handleTileClick}
                  >
                    {this.state.board[index].value !== -1 &&
                      this.state.board[index].value}
                  </div>
                );
              })}
            </div>
            {this.state.outcome && (
              <DefaultButton
                text="Play Again?"
                onClick={this.handlePlayAgain}
              />
            )}
            <DefaultButton text="Go Back" onClick={this.handleGoBack} />
          </div>
        )}
      </div>
    );
  };
}

export default Game;
