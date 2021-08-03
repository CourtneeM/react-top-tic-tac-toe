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
    }
  }

  render() {
    return (
      <div>
        <Board />
        {this.state.winner ? <DisplayWinner winner={this.state.winner} /> : null}
        {this.state.gameOver ? <Controls /> : null}
      </div>
    );
  }
}

export default App;
