import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null)
    }

    this.playerMarker = 'X';
    this.computerMarker = 'O';
    
    this.playerMove = this.playerMove.bind(this);
  }

  componentDidUpdate() {
    if (this.props.resetGame) {
      this.setState({squares: Array(9).fill(null)})
      this.props.toggleResetGame();
    }
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
    if (this.props.gameOver) return;
    if (this.state.squares[i]) return;

    const squaresCopy = [...this.state.squares];
    squaresCopy[i] = this.playerMarker;

    this.setState({
      squares: squaresCopy
    }, () => {
      if (this.detectWinner(this.playerMarker)) {
        this.props.winnerDetected('Player');
      } else {
        this.computerMove();
      }
    });
  }

  computerMove() {
    if (this.props.gameOver) return;

    setTimeout(() => {
      const availableIndices = this.state.squares.map((square, i) => !square ? i : null).filter(square => square);
      
      const computerMove = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      const squaresCopy = [...this.state.squares];
      squaresCopy[computerMove] = this.computerMarker;
      
      this.setState({
        squares: squaresCopy
      }, () => {
        if (this.detectWinner(this.computerMarker)) {
          this.props.winnerDetected('Computer');
        }
      });
    }, 1000)
  }

  detectWinner(marker) {
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    return winningMoves.some(combo => {
      if (this.state.squares[combo[0]] === marker &&
      this.state.squares[combo[1]] === marker &&
      this.state.squares[combo[2]] === marker) return true

      return false;
    });
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
