import NumberTile from "../number-tile";

const NumberGrid = ({ numbersToShow }) => {
  const numRange = new Array(numbersToShow).fill().map((_, index) => index + 1);

  const numbers = numRange
    .map((num) => {
      return NumberTile({
        ordinal: num,
      });
    })
    .join("");

  return `
    <ul data-role="number-grid" class="number-list">
      ${numbers}
    </ul>
  `;
};

export default NumberGrid;
