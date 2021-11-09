import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'

import Link from "next/link"


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
            <Link  href="/search">
                <ButtonContainer>
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </ButtonContainer>
            </Link>
            <Map  pickupCoordinates={pickupCoordinates}  dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>
                <RideSelector/>
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
w-12 h-12 rounded-full bg-opacity-0
`
            
const ButtonContainer = tw.div`
flex rounded-full h-24 w-24 flex items-center justify-center bg-opacity-0

`