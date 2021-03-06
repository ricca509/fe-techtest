export const renderToDom = (nodes, targetElement) => {
  if (!targetElement) {
    throw new Error("Not valid element");
  }

  const nodeElements = Array.isArray(nodes) ? nodes : [nodes];

  const documentFragment = document.createDocumentFragment();

  nodeElements.forEach((child) => {
    if (typeof child === "string") {
      documentFragment.append(
        document.createRange().createContextualFragment(child)
      );
    } else {
      documentFragment.append(child);
    }
  });

  targetElement.innerHTML = "";
  targetElement.append(documentFragment);

  return targetElement;
};

export const toDomNodes = (html) =>
  new DOMParser().parseFromString(html, "text/html").body.childNodes[0];
