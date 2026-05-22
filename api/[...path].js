export default function handler(req, res) {
  const path = req.url?.split("?", 1)[0] ?? "";

  if (req.method === "GET" && (path === "/api/healthz" || path === "/healthz")) {
    res.status(200).json({ status: "ok" });
    return;
  }

  res.status(404).json({ error: "Not found" });
}
