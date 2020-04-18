const getMultiplesOf = (num, calculateUpToMaxOf) => {
  const range = new Array(calculateUpToMaxOf)
    .fill()
    .map((_, index) => index + 1);

  return range.map((n) => num * n).filter((n) => n <= calculateUpToMaxOf);
};

export default getMultiplesOf;
