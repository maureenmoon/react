import React from "react";
import ContentList from "../../components/ContentList";
import mockContents from "../../data/mockContents";

//dummy filter for best content(e.g., top 3 for now)
function getBestContenst(contents) {
  return contents.sort((a, b) => b.likeCount - a.likeCount).slice(0, 6); //or filter by distance later
}

function SearchPage() {
  const filteredContents = getBestContenst(mockContents);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Best Contents within 50km</h2>
      {/* <ContentList /> */}
      <ContentList contents={filteredContents} />
    </div>
  );
}

export default SearchPage;
