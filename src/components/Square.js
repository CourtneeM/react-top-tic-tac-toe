import React from 'react';

function Square(props) {
  return (
    <div className="square" style={styles.square} onClick={() => props.playerMove(props.index)}>
      {props.value}
    </div>
  );
}

const styles = {
  square: {
    width: '100px',
    height: '100px',
    border: '1px solid #000',
  }
}

export default Square;
