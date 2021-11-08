import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'


const Confirm = () => {

    const router =useRouter()
    const {pickup, dropoff} = router.query


    const [pickupCoordinates, setPickUpCoordinates ] = useState("")
    const [dropoffCoordinates, setDropoffCoordinates] = useState("")
    console.log("pickup: ", pickup )
    console.log("dropoff: ", dropoff )
    const getPickUpCoordinates= (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiMTJhbiIsImEiOiJja3ZtbDAyMTkwYnR2MnBqcDM3ZndyZHI3In0.R9aYS_IKX0YllA3w-aLmSQ",
            limit: 1
        }
            ))
        .then((res) =>  res.json())
        .then((data) => setPickUpCoordinates(data.features[0].center))
    }
    
    const getDropOffCordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
        new URLSearchParams({
            access_token:"pk.eyJ1IjoiMTJhbiIsImEiOiJja3ZtbDAyMTkwYnR2MnBqcDM3ZndyZHI3In0.R9aYS_IKX0YllA3w-aLmSQ",
            limit: 1
        }
            ))
        .then((res) =>  res.json())
        .then((data) =>setDropoffCoordinates(data.features[0].center))
    }
    
    useEffect(() => {
        getPickUpCoordinates(pickup);
        getDropOffCordinates(dropoff);
   }, [pickup, dropoff])
    return (
        <Wrapper>
            <Map  pickupCoordinates={pickupCoordinates}  dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>
                Ride Selector
               Confirm Button 
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const RideContainer = tw.div`
flex-1  
`
const Wrapper = tw.div`
flex h-screen flex-col
`