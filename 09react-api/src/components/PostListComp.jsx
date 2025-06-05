import React, { useEffect, useState } from "react";
import Navcomp from "./Navcomp";
import FooterComp from "./FooterComp";

function PostListComp() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      try {
      } catch (error) {
      } finally {
      }
      const res = await axios("");
    }
  }, []);

  return;
  <>
    <Navcomp />
    <FooterComp />
  </>;
}

export default PostListComp;
