import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'

import Link from "next/link"


const Confirm = () => {

    const router =useRouter()
    const {pickup, dropoff} = router.query


    const [pickupCoordinates, setPickUpCoordinates ] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])
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
                <ButtonContainer>
            <Link  href="/search">
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
                </ButtonContainer>
            <Map  pickupCoordinates={pickupCoordinates}  dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>
                <RideSelector  
                pickupCoordinates={pickupCoordinates}  dropoffCoordinates={dropoffCoordinates} 
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                    Confirm UberX  
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const  RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2

`
const Wrapper = tw.div`
flex h-screen flex-col
`
const  ConfirmButton = tw.div`
bg-black text-white my-2 mx-4 text-center text-xl 
`
const BackButton = tw.img`
h-full object-contain
`
            
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer

`