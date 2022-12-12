import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("tokyo")
  const handleChange = () =>{
    alert(city)
  }
  useEffect(() =>{
    handleChange("東京")
  },[city]);
  return (
    <>
      <select onChange={(e) => setCity(e.target.value)}>
        <option value="tokyo">東京</option>
        <option value="osaka">大阪</option>
        <option value="sapporo">札幌</option>
      </select>
    </>
  );
}

export default App;
