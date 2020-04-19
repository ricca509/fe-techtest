import { renderToDom } from "./utils/dom";
import getMultiplesOf from "./utils/multiples";
import Title from "./components/title";
import NumberGrid from "./components/number-grid";

const app = (maxNumberToShow) => {
  let state = {
    selectedNumbers: [],
  };

  const setState = (newState) => {
    state = { ...state, ...newState };

    render();
  };

  const handleNumberSelection = (evt) => {
    const targetEl = evt.target;

    if (targetEl.getAttribute("data-role") !== "number") {
      return;
    }

    const selectedNumber = Number(targetEl.getAttribute("data-number"));

    if (state.selectedNumbers.includes(selectedNumber)) {
      setState({ selectedNumbers: [] });
    } else {
      setState({
        selectedNumbers: getMultiplesOf(selectedNumber, maxNumberToShow),
      });
    }
  };

  const render = () => {
    renderToDom(
      [
        Title(),
        NumberGrid({
          numbersToShow: maxNumberToShow,
          selectedNumbers: state.selectedNumbers,
          onSelection: handleNumberSelection,
        }),
      ],
      document.querySelector('[data-role="app-container"]')
    );
  };

  render();
};

export default app;
