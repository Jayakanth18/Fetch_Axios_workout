import React, { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resolve) => resolve.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Fetch With Promise</h2>
      <ul>
        {data.map((item) => {
         return <li key={item.id}>{item.title}</li>
})}
      </ul>
    </div>
  );
}

export default Fetch;
