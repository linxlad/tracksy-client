export function colourStringToHex(colour) {
  const colourKeyValuePair = {
    red: '#DB2828',
    orange: '#F2711C',
    yellow: '#FBBD08',
    olive: '#B5CC18',
    green: '#21BA45',
    teal: '#00B5AD',
    blue: '#2185D0',
    violet: '#6435C9',
    purple: '#A333C8',
    pink: '#E03997',
    brown: '#A5673F',
    grey: '#767676',
    black: '#1B1C1D',
    default: '#E0E1E2'
  };

  if (!colourKeyValuePair[colour]) {
    return colourKeyValuePair['default'];
  }

  return colourKeyValuePair[colour];
}