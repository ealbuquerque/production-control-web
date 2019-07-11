const regex = /^(\d{1})(h)?$/;

export default (value) => {
  if (!value) return value;

  const result = value.match(regex);
  return result && result.length ? result[0] : undefined;
};
