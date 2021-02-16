import "normalize.css";
import PageHeader from "./Header";
import Map from "./Map";
import { Helmet } from "react-helmet";
import React from "react";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Helmet>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Helmet>

      <PageHeader />
      <Map />
    </div>
  );
};

export default App;
