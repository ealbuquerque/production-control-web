import i18n from '../../../i18n';

export default (fields) => {
  const errors = {
  };
  if (!fields.name) {
    errors.name = i18n.t('general:formValidation.required');
  }

  if (fields.quantity && !fields.quantity.match(/[0-9]+/g)) {
    errors.quantity = i18n.t('general:formValidation.number');
  }

  return errors;
};
