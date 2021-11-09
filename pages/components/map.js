import React,{useEffect}  from 'react'
import tw from "tailwind-styled-components";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const Map = ( props ) => {


mapboxgl.accessToken =
  "pk.eyJ1IjoiMTJhbiIsImEiOiJja3ZtbDAyMTkwYnR2MnBqcDM3ZndyZHI3In0.R9aYS_IKX0YllA3w-aLmSQ";
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
     center: [18.083871,59.280998],
      zoom:4, 
    });

    if(props.pickupCoordinates){
      addToMap(map, props.pickupCoordinates)
    }

        if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates){
      map.fitBounds([
        props.pickupCoordinates, props.dropoffCoordinates
      ],{
        padding: 60
      })
    }

  }, [ props.pickupCoordinates, props.dropoffCoordinates]);
  const addToMap = (map, coordinates) => {
   const marker1 = new mapboxgl.Marker()
.setLngLat(coordinates)
.addTo(map);
    
  }
    return (
        <Wrapper id ="map">
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`


