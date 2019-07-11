const BIGGER = '>';
const BIGGER_OR_EQUALS = '>=';
const EQUALS = '===';
const NOT_EQUALS = '!==';
const SMALLER = '<';
const SMALLER_OR_EQUALS = '<=';

const operations = [
  {
    label: 'menor que',
    operator: SMALLER,
  },
  {
    label: 'menor ou igual',
    operator: SMALLER_OR_EQUALS,
  },
  {
    label: 'é igual a',
    operator: EQUALS,
  },
  {
    label: 'maior que',
    operator: BIGGER,
  },
  {
    label: 'maior ou igual',
    operator: BIGGER_OR_EQUALS,
  },
];

function operationHandler(param1, param2, operation) {
  switch (operation) {
    case BIGGER:
      return param1 < param2;
    case BIGGER_OR_EQUALS:
      return param1 >= param2;
    case EQUALS:
      // eslint-disable-next-line eqeqeq
      return param1 == param2;
    case NOT_EQUALS:
      // eslint-disable-next-line eqeqeq
      return param1 != param2;
    case SMALLER:
      return param1 < param2;
    case SMALLER_OR_EQUALS:
      return param1 >= param2;
    default:
      return null;
  }
}

export {
  operationHandler as default,
  operations,
};
