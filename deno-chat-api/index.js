addEventListener("fetch", (e) => {
  const res = new Response("Hello World! 4th try", {
    headers: { "content-type": "text/plain" },
  });
  e.respondWith(res);
});
