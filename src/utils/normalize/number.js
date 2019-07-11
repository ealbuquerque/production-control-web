export default (value) => {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) return onlyNums;

  return value;
};
