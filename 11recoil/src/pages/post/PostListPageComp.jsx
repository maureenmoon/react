import React from "react";
import { useRecoilState } from "recoil";
import { postListState } from "./atom/postListState";

function PostListPageComp() {
  const postList = useRecoilState(postListState);
  return (
    <div>
      {postList.map((item, i) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}

export default PostListPageComp;
