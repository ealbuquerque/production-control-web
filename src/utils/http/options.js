export default (method, body) => ({
  body: body ? JSON.stringify(body) : undefined,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  method,
});
