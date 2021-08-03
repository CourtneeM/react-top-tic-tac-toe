import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null)
    }

    this.playerMove = this.playerMove.bind(this);
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        playerMove={this.playerMove}
        index={i}
      />
    );
  }

  playerMove(i) {
    if (this.state.squares[i]) return;

    const squaresCopy = [...this.state.squares];
    squaresCopy[i] = 'X';

    this.setState({
      squares: squaresCopy
    }, () => this.computerMove());
  }

  computerMove() {
    setTimeout(() => {
      const availableIndices = this.state.squares.map((square, i) => !square ? i : null).filter(square => square);
      
      const computerMove = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      const squaresCopy = [...this.state.squares];
      squaresCopy[computerMove] = 'O';
      
      this.setState({
        squares: squaresCopy
      });
    }, 1000)
  }

  render() {
    return (
      <div style={styles.board}>
        <div className="board-row" style={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row" style={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="board-row" style={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const styles = {
  board: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '300px',
    margin: '40px auto 0',
    textAlign: 'center',
  },
  boardRow: {
    display: 'flex',
  }
}

export default Board;
