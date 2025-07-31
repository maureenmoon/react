import React, { useEffect, useState } from "react";

export default function CommentComp({ contentid }) {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/common/commentsApi?contentid=${contentid}`)
      .then((res) => res.json())
      // .then((data) => setComments(data));
      .then((data) => {
        console.log("Fetched comments: ", data);
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          setError("API did not return an array");
        }
      })
      .catch((err) => {
        console.error("Fetch error", err);
      });
  }, [contentid]);

  const handleSubmit = () => {
    if (!input.trim()) return;

    fetch("/api/common/commentsApi", {
      method: "POST",
      // headers: { Contenttype: "application/json" },
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contentid, text: input }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to post comment");
        setComments((prev) => [...prev, { text: input }]);
        setInput("");
      })
      .catch((err) => {
        console.error("Post error: ", err);
        setError("Failed to submit comment");
      });
  };

  return (
    <div className="mt-6">
      <h2 className="text-x1 font-semibold">Comments</h2>
      {error && <p className="text-red-500">{error}</p>}

      <ul className="mt-2 space-y-2">
        {Array.isArray(comments) ? (
          comments.map((c, i) => (
            <li key={i} className="bg-gray-100 p-2 rounded">
              {c.text}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No comments available</li>
        )}
      </ul>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-1"
          placeholder="Add your comment..."
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-1 rounded"
        >
          Post
        </button>
      </div>
    </div>
  );
}
