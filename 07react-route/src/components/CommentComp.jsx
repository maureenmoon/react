import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CommentComp() {
  const { id } = useParams();
  const [comment, setCommentData] = useState([]);
  // const [loading, setLoaing] = useState(true);
  useEffect(() => {
    async function viewComment() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setCommentData(res.data);
    }
    viewComment();
  }, []);

  return (
    <div>
      <div className="container m-auto">
        <h3>
          댓글보기 : {id}/ <Link to="/list">목록으로 이동</Link>
        </h3>
        <ul className="space-y-4">
          {comment.map((comment) => (
            <li key={comment.id} className="border p-3 rounded shadow">
              <p>
                <strong>{comment.name}</strong>({comment.email})
              </p>
              <p className="text-gray-600">{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentComp;
