const regex = /[^\d]/g;

export default (value) => {
  if (!value) return value;

  return value.replace(regex, '');
};
