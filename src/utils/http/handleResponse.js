export default (response) => {
  if (response.ok) {
    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.indexOf('application/json') !== -1;

    if (isJson) {
      return response.json();
    }
    return response.text();
  }
  return response.json().then(data => Promise.reject(data));
};
