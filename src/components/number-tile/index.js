import classNames from "../../utils/class-names";

const NumberTile = ({ ordinal, isSelected = false }) => {
  const classes = classNames({
    number: true,
    selected: isSelected,
  });

  return `    
    <button data-role="number" data-number="${ordinal}" data-selected="${isSelected}" class="${classes}">
      ${ordinal}
    </button>  
  `;
};

export default NumberTile;
