import React, { useState } from "react";

export default function NovaFind() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query) return;
    setLoading(true);
    setTimeout(() => {
      setAnswer(`Here is an AI-generated answer for: "${query}"`);
      setResults([
        {
          title: "Result 1",
          link: "https://example.com/1",
          snippet: "This is a sample result related to your query."
        },
        {
          title: "Result 2",
          link: "https://example.com/2",
          snippet: "Another result that might be helpful."
        },
        {
          title: "Result 3",
          link: "https://example.com/3",
          snippet: "More information here about your question."
        }
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: "0 auto" }}>
      <h1>NovaFind</h1>
      <p>Your own AI-powered, privacy-first search engine</p>
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <input
          placeholder="Ask me anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {answer && <div style={{ marginBottom: 16 }}><strong>{answer}</strong></div>}

      {results.length > 0 && (
        <div>
          {results.map((res, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <a href={res.link} target="_blank" rel="noreferrer"><strong>{res.title}</strong></a>
              <p>{res.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}