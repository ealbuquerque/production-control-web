export default (method, body) => ({
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : undefined,
  method,
});
