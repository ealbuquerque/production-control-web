import i18n from '../../../i18n';

export default (fields) => {
  const errors = {
  };

  if (!fields.name) {
    errors.name = i18n.t('general:formValidation.required');
  }

  if (!fields.workPeriod) {
    errors.workPeriod = i18n.t('general:formValidation.required');
  }

  return errors;
};
