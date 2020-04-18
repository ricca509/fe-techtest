import NumberTile from "../number-tile";
import { toDomNodes } from "../../utils/dom";

const NumberGrid = ({ numbersToShow, onSelection, selectedNumbers = [] }) => {
  const numRange = new Array(numbersToShow).fill().map((_, index) => index + 1);

  const numbers = numRange
    .map((num) => {
      return NumberTile({
        ordinal: num,
        isSelected: selectedNumbers.includes(num),
      });
    })
    .join("");

  const numbersComponent = toDomNodes(`
    <ul data-role="number-grid" class="number-list">
      ${numbers}
    </ul>
  `);

  numbersComponent.addEventListener("click", onSelection, true);

  return numbersComponent;
};

export default NumberGrid;
