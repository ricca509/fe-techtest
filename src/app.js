import { renderToDom } from "./utils/dom";
import Title from "./components/title";
import NumberGrid from "./components/number-grid";

const app = (maxNumberToShow) => {
  const handleNumberSelection = (evt) => {};

  const render = () => {
    renderToDom(
      [
        Title(),
        NumberGrid({
          numbersToShow: maxNumberToShow,
          selectedNumbers: [1, 2],
          onSelection: handleNumberSelection,
        }),
      ],
      document.querySelector("#app")
    );
  };

  render();
};

export default app;
