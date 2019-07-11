import isObjectEqual from './object';

export default (array, compareTo) => (
  array.every(element => (
    compareTo.some(compareElement => (
      isObjectEqual(element, compareElement)
    ))
  ))
  && compareTo.every(element => (
    array.some(compareElement => (
      isObjectEqual(element, compareElement)
    ))
  ))
);
