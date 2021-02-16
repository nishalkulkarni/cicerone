import "normalize.css";
import PageHeader from "./Header";
import { Helmet } from "react-helmet";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Helmet>

      <PageHeader />
    </div>
  );
};

export default App;
