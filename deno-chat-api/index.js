addEventListener("fetch", (e) => {
  const res = new Response("Hello World! 3rd try", {
    headers: { "content-type": "text/plain" },
  });
  e.respondWith(res);
});
