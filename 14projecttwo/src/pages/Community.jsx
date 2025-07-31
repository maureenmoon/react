import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Community.css";

const mockIssues = [
  { id: 1, title: "How to reduce sugar intake?", date: "2024-07-10" },
  { id: 2, title: "Best exercises for weight loss", date: "2024-07-09" },
  { id: 3, title: "Healthy meal prep ideas", date: "2024-07-08" },
  // ...more issues
];

const Community = () => {
  const [page, setPage] = useState(1);
  const issuesPerPage = 10;
  const totalPages = 3; // Placeholder for pagination

  return (
    <div className="community-container">
      <div className="community-header">
        <h2>Community Issues</h2>
        <Link to="/community/new">
          <button>Create New Issue</button>
        </Link>
      </div>
      <ul className="issue-list">
        {mockIssues.map((issue) => (
          <li key={issue.id} className="issue-item">
            <Link to={`/community/${issue.id}`}>
              <span className="issue-title">{issue.title}</span>
              <span className="issue-date">{issue.date}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Community;
