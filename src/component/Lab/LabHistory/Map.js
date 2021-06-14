import React, { useEffect, useState } from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

export default function Map(props) {
  const latit=parseFloat(props.latitude);
  const long=parseFloat(props.longitude);
  console.log(latit, long, "lava")
  function mapfunc() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: latit, lng: long }}
      />)
  }
  const WrappedMap = withScriptjs(withGoogleMap(mapfunc));
  return (
    <>
      <div className="map_height">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${`AIzaSyDS9ePaBsFgdZt5v2wQrciYrLGhVJmvTWE`}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `440px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// export function App() {
//   return (
//     <div className="map_height">
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${`AIzaSyDS9ePaBsFgdZt5v2wQrciYrLGhVJmvTWE`}`}
//         loadingElement={<div style={{ height: `100%` }} />}
//         containerElement={<div style={{ height: `440px` }} />}
//         mapElement={<div style={{ height: `100%` }} />}
//       />
//     </div>
//   );
// }
