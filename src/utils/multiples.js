const getMultiplesOf = (num, calculateUpToMaxOf) => {
  if (!num || !calculateUpToMaxOf) {
    throw new Error("Wrong arguments");
  }

  const range = new Array(calculateUpToMaxOf)
    .fill()
    .map((_, index) => index + 1);

  return range.map((n) => num * n).filter((n) => n <= calculateUpToMaxOf);
};

export default getMultiplesOf;
