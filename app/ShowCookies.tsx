"use client";

export default () => (
  <>
    <h2>Cookies</h2>
    <pre>{(document.cookie ?? "").replaceAll(";", ";\n")}</pre>
  </>
);
