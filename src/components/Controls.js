import React from 'react';

function Controls(props) {
  return (
    <div style={styles.div}>
      <button onClick={() => props.resetGameClick()}>Reset Game</button>
    </div>
  );
}

const styles = {
  div: {
    textAlign: 'center',
  }
}

export default Controls;
