import React from 'react';

function DisplayWinner(props) {
  return (
    <div>
      {
        props.winner === 'tie' ?
        <p style={styles.p}>It's a tie!</p> :
        <p style={styles.p}>{props.winner} is the winner!</p>
      }
    </div>
  );
}

const styles = {
  p: {
    textAlign: 'center',
  }
}

export default DisplayWinner;
