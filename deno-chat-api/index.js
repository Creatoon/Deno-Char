addEventListener("fetch", (e) => {
  const res = new Response("Hello World! 2nd try", {
    headers: { "content-type": "text/plain" },
  });
  e.respondWith(res);
});
