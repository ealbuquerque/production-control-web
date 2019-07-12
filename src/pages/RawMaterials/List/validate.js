import i18n from '../../../i18n';

export default (fields) => {
  const errors = {
  };

  if (fields.quantity || fields.operation) {
    if (!fields.quantity) {
      errors.quantity = i18n.t('general:formValidation.required');
    }

    if (!fields.operation) {
      errors.operation = i18n.t('general:formValidation.required');
    }
  }

  return errors;
};
