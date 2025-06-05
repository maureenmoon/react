import React from "react";
import mockContents from "../data/mockContents";

// function contentList({ contents }) {
//   return (
//     <div>
//       {contents.map((item, idx) => {
//         <div key={idx} className="content-card">
//           <h3>{item.title}</h3>
//           <p>{item.address}</p>
//         </div>;
//       })}
//     </div>
//   );
// }

// const ContentList = () => {
const ContentList = ({ contents }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* {mockContents.map((content) => ( */}
      {contents.map((content) => (
        <div key={content.id} className="border p-2 rounded shadow-md">
          <img
            src={content.imageUrl}
            alt={content.title}
            className="w-full h=40 object-cover rounded"
          />
          <div className="mt-2 text-sm text-gray-600">{content.address}</div>
          <div className="text-lg font-semibold">{content.title}</div>
          <div className="text-yellow-600 text-sm mt-1">
            {content.likeCount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentList;
