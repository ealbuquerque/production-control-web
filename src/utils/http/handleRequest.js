import {
  TOAST_ERROR,
  toastMessage,
} from '../../components/Toast';

import i18n from '../../i18n';

const handleError = reject => (error) => {
  const isOffline = !window.navigator.onLine;
  if (isOffline) toastMessage(i18n.t('general:errors.offline'), TOAST_ERROR);

  if (error && error.message) {
    const isNetworkError = error.message.indexOf('NetworkError when attempting to fetch resource') !== -1
      || error.message.indexOf('Failed to fetch') !== -1;
    if (isNetworkError) toastMessage(i18n.t('general:errors.apiNotFound'), TOAST_ERROR);
  }

  reject(error);
};

function handleResponse(response) {
  if (response.ok) {
    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.indexOf('application/json') !== -1;

    if (isJson) {
      return response.json();
    }
    return response.text();
  }
  return response.json().then(data => Promise.reject(data));
}

export default requestPromise => new Promise((resolve, reject) => {
  requestPromise
    .then(handleResponse)
    .then(resolve)
    .catch(handleError(reject));
});
