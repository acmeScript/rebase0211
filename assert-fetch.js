const { ok, headers } = await fetch("http://localhost/api", {
  cors: "no-cors"
});
assert(
  ok,
  headers.get("Cache-Control") === "max-age=666",
  headers.get("pragma") === false
);
