import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ContentList from "../components/ContentList";
import MapView from "../components/MapView";
import { Link } from "react-router-dom";

function Home() {
  const [contents, setContents] = useState([]);
  const fetchContents = async (keyword) => {
    //replace with open API call later
    const results = [
      {
        title: "Seoul Tower",
        address: "Seoul",
        likeCount: "5005",
        lat: "37.5511694",
        lng: "126.9882266",
      },
      {
        title: "Nami",
        address: "Gapyeong",
        likeCount: "2034",
        lat: "37.7902872",
        lng: "127.5250841",
      },
    ];
    setContents(results);
  };

  return (
    <div>
      <SearchBar onSearch={fetchContents} />
      <div>
        <h3>Map of Serch Results</h3>
        <Link
          to="/search"
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
        >
          See Best Contenss (50km)
        </Link>
      </div>

      <MapView places={contents} />
      <ContentList contents={contents} />
    </div>
  );
}

export default Home;
