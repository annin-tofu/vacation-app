// MAP

// https://github.com/visgl/react-map-gl 04:00:29:00
// Marker is the pin 04:01:01:00
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
// https://github.com/manuelbieh/geolib go to getCenter(coords) 04:00:57:00
import { getCenter } from "geolib";

function Map({ searchResults }) {
  // 04:01:07:30
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform the search results object into the { latitude:52.516272, longitude:13.377722 } object. as it is set as a default for geolib https://github.com/manuelbieh/geolib
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //The latitude/longitude of the center of locations coordinates  https://github.com/manuelbieh/geolib go to getCenter(coords) 04:00:57:00
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    // viewport: tells this map how it size itself. https://github.com/visgl/react-map-gl ,instead of hardcoding values for the latitude/longitude, take all of the search results on the page and find the actual center of all of those results, and use that latitue/longitude as the center of the map  04:00:39:00
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      //   mapStyle= "style URL" from "Share" on Mapbox Studio
      mapStyle="mapbox://styles/annin-tofu/cks2z90d64f9i17o6e5wkqe31"
      // 04:00:38:00
      mapboxApiAccessToken={process.env.mapbox_key}
      // {..viewport} means basically spreading out viewport stuff i.e.
      //   width= "100%",
      //   height= "100%",
      //   latitude= 37.7577,
      //   longitude= -122.4376,
      //   zoom= 11,
      {...viewport}
      //   everytime you scroll the map, it fires off an event and that event is contained within "nextViewport". and we use that event to update the UI/center of the map i.e.
      // latitude: 37.7577,
      // longitude: -122.4376,
      // gets changed
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {/* offset is set so so that the pin is right on the point 04:01:03:00 */}
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              //  onClick={() => setSelectedLocation(result)} >>when you click any of the pins, it sets the object inside the state
              onClick={() => setSelectedLocation(result)}
              //  animate-bounce to make the pin bounce up and down
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {/* the popup that should show if we click on a Marker */}
          {/* If selectedLocation.long matches (===) result.long then (?)  render  04:01:12:56 */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
