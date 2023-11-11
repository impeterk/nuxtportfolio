export default defineEventHandler(async (event) => {
  console.log("logging from server");
  const body = await readBody(event);
  console.log({ body });
  return body.test;
});
