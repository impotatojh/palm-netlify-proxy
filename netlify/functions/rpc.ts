// functions/rpc.ts
export default async (request, context) => {
  console.log(111, request.method);
  console.log(222, request.client);
  console.log(333, request.url);
};
