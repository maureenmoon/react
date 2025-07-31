import React from "react";
import mockContents from "../data/mockContents";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

const ContentList = ({ contents }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* {mockContents.map((content) => ( */}

      {contents.map((content) => (
        <Link
          to={`/content/${content.contentid}`} //use real API field here
          key={content.contentid}
          className="border p-2 rounded shadow-md hover:shadow-lg transition"
        >
          {/* only show image if content.firstimage is truthy */}
          <SafeImage
            src={content.firstimage}
            alt={content.title}
            className="w-full h-40 object-cover rounded"
          />

          <div className="mt-2 text-sm text-gray-600">
            {content.addr1}
            {content.addr2}
          </div>
          <div className="text-lg font-semibold">{content.title}</div>
          <div className="text-yellow-600 text-sm mt-1">
            {content.likeCount || 0}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContentList;
