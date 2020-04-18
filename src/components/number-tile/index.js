const NumberTile = ({ ordinal }) => {
  return `
    <li data-role="number" data-number="${ordinal}">
      ${ordinal}
    </li>
  `;
};

export default NumberTile;
