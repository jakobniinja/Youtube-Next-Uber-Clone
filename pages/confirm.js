import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'


const Confirm = () => {
    const getCordinates = () => {
        const location = "Stockholm"
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`)
        .then((res) =>  res.json())
        .then((data) => console.log(data))
    }
    useEffect(() => {
        getCordinates();
    }, [])
    
    return (
        <Wrapper>
            <Map/>
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