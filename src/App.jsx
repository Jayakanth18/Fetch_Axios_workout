import React from "react";
import Fetch from "./Components/Fetch";
import AsyncFetch from "./Components/AsyncFetch";
import Axios from "./Components/Axios";
import RootLayout from "./Layout/RootLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Layout/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="fetch" element={<Fetch />} />
          <Route path="asyncfetch" element={<AsyncFetch />} />
          <Route path="axios" element={<Axios />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Fetch />
    //   <AsyncFetch />
    //   <Axios />
    // </div>
  );
}

export default App;
