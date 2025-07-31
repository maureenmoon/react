import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SafeImage from "./SafeImage";
import CommentComp from "./CommentComp";
import MapDetail from "./MapDetail";

function ContentDetail() {
  const { contentId } = useParams(); // Get dynamic ID from route
  console.log("useParams(): ", useParams());
  console.log("contentId from URL: ", contentId);
  const [detail, setDetail] = useState(null);
  const [topContents, setTopContents] = useState([]);

  //1. fetch content detail info
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        console.log("Fetching content detail for: ", contentId); // ✅ Debugging

        const response = await axios.get(
          "https://apis.data.go.kr/B551011/KorService1/detailCommon1",
          {
            params: {
              MobileOS: "ETC",
              MobileApp: "TripMaureen",
              serviceKey:
                "Bcnj50fqIfqme6hTyzoWAsDyeWWqJ5qyvfm9Khh2KaQIilbYjDK1oIYaYAE7MWu5ZgIFoCcV3s/fplDD/GIIHw==", // 🔑 decoded key
              contentId, // ✅ This must NOT be undefined!
              defaultYN: "Y",
              overviewYN: "Y",
              _type: "json",
            },
          }
        );

        console.log("Raw response: ", response.data); // ✅ Debugging
        // setDetail(response.data.response.body.items.item[0]);
        // const result = response?.data?.response?.body?.item?.item;//❌ item?.item is WRONG
        const result = response?.data?.response?.body?.items?.item;

        if (Array.isArray(result) && result.length > 0) {
          console.log("Valid detail", result[0]); // ✅ Debugging
          setDetail(result[0]);
        } else {
          console.warn("No detail data found", result);
        }
      } catch (err) {
        console.error("Failed to fetch detail", err);
      }
    };

    // if (contentId) {
    fetchDetail();
    // }
  }, [contentId]);

  //2. simulated top4 nearby contents (real implementation would use distance search API<==??)
  useEffect(() => {
    const fetchTopContents = async () => {
      try {
      } catch (err) {
        console.error("Failed to fetch top contents", err);
      }
    };
    fetchTopContents();
  }, [contentId]);

  // ✅ Loading state <== Always place hooks above return
  if (!detail) return <div>Loading content detail...</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      {/* sub-page#1 Basic info */}
      <section>
        <SafeImage
          src={detail.firstimage}
          alt={detail.title}
          className="w-full h-40 object-cover rounded"
        />
        <h1 className="text-2xl font-bold mt-4">{detail.title}</h1>
        <p className="text-gray-600 mt-2">
          {detail.addr1} {detail.addr2}
        </p>
        <p className="text-sm text-orange-500 mt-1">
          Likes: {detail.likeCount || 0}
        </p>
        <p className="text-gray-800 whitespace-pre-wrap mt-4">
          {detail.overview}
        </p>
      </section>

      {/* sub#2 Detail info & Map */}
      <section>
        <h2 className="text-x1 font-semibold mb-2">📍 Location Map</h2>
        {/* import MapDetail.jsx */}
        {detail.mapx && detail.mapy ? (
          <MapDetail
            mapx={detail.mapx}
            mapy={detail.mapy}
            title={detail.title}
          />
        ) : (
          <div className="w-full h-80 bg-gray-200 rounded flex items-center justify-center">
            No map coordinates available
          </div>
        )}
        {/* console.log("mapx/mapy passing to MapDetail",detail.mapx, detail.mapy) */}
      </section>

      {/* sub#3 Top 4 nearby contents */}
      <section>
        <h2 className="text-x1 font-semibold mb-4">
          🌟 Nearby Hot Spots (Top 4)
        </h2>
        <div>
          {topContents.map((item) => (
            <div key={item.contentId} className="border rounded shadow-sm p-2">
              <SafeImage
                src={item.firstimage}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <div className="mt-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{detail.addr1}</p>
                <p className="text-sm text-orange-500">
                  Likes: {detail.likeCount || 0}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sub#4 Commects */}
      <section>
        <h2 className="text-x1 font-semibold mb-4">💬 User Comment</h2>
        <CommentComp contentId={contentId} />
      </section>
    </div>
  );
}

export default ContentDetail;
