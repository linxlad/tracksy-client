import React from 'react';

export const MultiLine = (text) => {
  return (
    text.split('<br />').map((item, key) => {
      return <span key={key}>{item.trim()}<br/></span>;
    })
  );
};

export default MultiLine;