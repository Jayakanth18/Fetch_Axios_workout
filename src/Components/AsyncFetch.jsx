import React, { useState, useEffect } from "react";

function AsyncFetch() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await response.json();
      setRecord(json);
    }
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Fetch with Async Await</h1>
      {record.map((data) => (
        <li key={data.id}> {data.name} </li>
      ))}
    </div>
  );
}

export default AsyncFetch;
