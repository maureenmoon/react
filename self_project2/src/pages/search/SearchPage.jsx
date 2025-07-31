import React, { useEffect, useState } from "react";
import ContentList from "../../components/ContentList";
import mockContents from "../../data/mockContents";
import BasicMenu from "../../layouts/BasicMenu";
import SafeImage from "../../components/SafeImage";
import { useNavigate } from "react-router-dom";

//dummy filter for best content(e.g., top 3 for now)
function getBestContents(contents) {
  return contents.sort((a, b) => b.likeCount - a.likeCount).slice(0, 6); //or filter by distance later
}

function SearchPage() {
  const [minLikes, setMinLikes] = useState(0);
  const [location, setLocation] = useState("");
  const [contents, setContents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=Bcnj50fqIfqme6hTyzoWAsDyeWWqJ5qyvfm9Khh2KaQIilbYjDK1oIYaYAE7MWu5ZgIFoCcV3s%2FfplDD%2FGIIHw%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=test&_type=json`
        );

        // search by keyword:http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${GO_KEY}&listYN=Y&arrange=A&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&keyword=${searchKeyword}&_type=json

        const json = await res.json();
        const items = json.response.body.items.item;

        //transform API data to mock format
        //not copying item.contentid, so content.contentid is undefined.
        const transformed = items.map((item, index) => ({
          // id: index,
          id: item.contentid,
          contentid: item.contentid, // ✅ ADD THIS LINE!
          title: item.title || "Untitled",
          address: item.addr1 || "No address",
          imageUrl: item.firstimage || "",
          likeCount: Math.floor(Math.random() * 5000), //simulate likeCount
        }));
        setContents(transformed);
      } catch (error) {
        console.error("Error fetching API", error);
      }
    };
    fetchContents();
  }, []);

  // Filtering logic
  // const filteredContents = getBestContents(mockContents);
  // const filteredContents = mockContents.filter((content) => {
  const filtered = contents.filter((content) => {
    // const matchsLikes = parseInt(content.likeCount) >= minLikes;
    const matchsLikes = content.likeCount >= minLikes;
    //match location by checking if the typed location is in address(case-insensitive)
    const matchsLocation = location
      ? content.address.toLowerCase().includes(location.toLowerCase())
      : true;
    return matchsLikes && matchsLocation;
  });

  return (
    <>
      <div className="bg-success">
        <BasicMenu />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Best Contents within 50km</h2>

        {/* input fields for filtering */}
        <div className="flex gap-4 mb-6">
          <input
            type="number"
            value={minLikes}
            // onChange={(e) => setMinLikes(e.target.value)}
            onChange={(e) => setMinLikes(Number(e.target.value))}
            className="border px-2 py-1 rounded"
            placeholder="Minimum Likes"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded"
            placeholder="Search by location (e.g. Jeju)"
          />
        </div>
        {/* filtered list rendering */}
        {/* <ContentList contents={filteredContents} /> */}
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((content) => (
            <div
              key={content.contentid}
              className="border p-2 rounded shadow-md"
              onClick={() => navigate(`/content/${content.contentid}`)}
            >
              {/* <img
                src={content.imageUrl}
                alt={content.title}
                className="w-full h-40 object-cover rounded"
              /> */}
              <img
                src={
                  content.imageUrl && content.imageUrl.trim() !== ""
                    ? content.imageUrl
                    : "images/defaultImg.png"
                }
                alt={content.title || "No title"}
                className="w-full h-40 object-cover rounded"
              />

              <div className="mt-2 text-xs text-gray-600">
                {content.address}
              </div>
              <div className="text-lg font-semibold">{content.title}</div>
              <div className="text-yellow-600 text-sm mt-1">
                {content.likeCount || 0}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
