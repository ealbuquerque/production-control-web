import i18n from '../../../i18n';

export default (fields) => {
  const errors = {
  };

  if (!fields.name) {
    errors.name = i18n.t('general:formValidation.required');
  }

  if (!fields.employee) {
    errors.employee = i18n.t('general:formValidation.required');
  }

  if (!fields.rawMaterials) {
    errors.rawMaterials = i18n.t('general:formValidation.required');
  }

  return errors;
};
