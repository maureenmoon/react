import { useState, useEffect } from "react";
import supabase from "../src/utils/supabase";

function App() {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleUpload = () => {
    if (!file) {
      return alert("upload a file");
    }
    // const filePath = file.name
    const filePath = `${Date.now()}_${file.name}`;
    const { data, error } = supabase.storage
      .from("myfile")
      .upload(filePath, file);
    if (error) {
      alert("upload failed");
    } else {
      alert("upload succeed");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
}
export default App;
