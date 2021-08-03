import React, { Component } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import DisplayWinner from './components/DisplayWinner';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: undefined,
      gameOver: false,
      resetGame: false,
    }

    this.winnerDetected = this.winnerDetected.bind(this);
    this.resetGameClick = this.resetGameClick.bind(this);
    this.toggleResetGame = this.toggleResetGame.bind(this);
  }

  winnerDetected(winner) {
    this.setState({
      winner: winner,
      gameOver: true,
    });
  }

  resetGameClick() {
    this.setState({
      winner: undefined,
      gameOver: false,
      resetGame: true,
    });
  }

  toggleResetGame() {
    this.setState({
      resetGame: false
    });
  }

  render() {
    return (
      <div>
        <Board
          winnerDetected={this.winnerDetected}
          gameOver={this.state.gameOver}
          resetGame={this.state.resetGame}
          toggleResetGame={this.toggleResetGame}
        />
        {this.state.winner ? <DisplayWinner winner={this.state.winner} /> : null}
        {this.state.gameOver ? <Controls resetGameClick={this.resetGameClick} /> : null}
      </div>
    );
  }
}

export default App;
