import React from 'react';

function Square({ value, onClick }) {
  return (
    <div onClick={onClick} style={{
      border: '2px solid red',
      width: '100%',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {value}
    </div>
  );
}

export default Square;
