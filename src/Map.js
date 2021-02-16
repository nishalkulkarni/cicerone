import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";

const MapUtil = styled.div`
  padding: 0;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 75vh;
`;

const Sidebar = styled.div`
  display: inline-block;
  position: relative;
  left: 12px;
  top: 12px;
  background-color: #404040;
  color: #ffffff;
  z-index: 1 !important;
  padding: 6px;
  font-weight: bold;
`;

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 78,
      lat: 19,
      zoom: 5,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <MapUtil>
      
        <MapContainer
          ref={(el) => (this.mapContainer = el)}
          className="mapContainer"
        />
          <Sidebar>
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </Sidebar>
      </MapUtil>
    );
  }
}

export default Map;
