const classNames = (classesObject) => {
  return Object.entries(classesObject)
    .filter(([_, value]) => value === true)
    .map(([key, _]) => key)
    .join(" ");
};

export default classNames;
