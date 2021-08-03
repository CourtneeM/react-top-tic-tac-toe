import React from 'react';

function DisplayWinner(props) {
  return (
    <div>
      <p style={styles.p}>{props.winner} is the winner!</p>
    </div>
  );
}

const styles = {
  p: {
    textAlign: 'center',
  }
}

export default DisplayWinner;
