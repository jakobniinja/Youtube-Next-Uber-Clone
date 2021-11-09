import React,{useEffect, useState}   from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";
const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibmVlcmFqMTUwMjIwMDEiLCJhIjoiY2t2bG83dGk3M2lqdzJvcGdwNjdzM2toaCJ9.ab0UC-ACBsavsHhlpQOT5Q`
    )
      .then((res) => res.json())
      .then((res) => setRideDuration(() => res.routes[0].duration / 100))
      .catch((err) => console.log(err));
  }, [pickupCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={`uber-${index} `}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time> { Math.round(12/ car.multiplier) }  min away </Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * car.multiplier).toFixed(1)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
}

export default RideSelector;

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;
const CarList = tw.div`
overflow-y-scroll
`;

const Wrapper = tw.div`
flex flex-1  overflow-y-scroll flex-col
`;

const Car = tw.div`
flex p-4 items-center
`;
const CarImage = tw.img`
h-14 mr-4
`;


const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`
const Time = tw.div`
text-sm  text-blue-500
`

const Price = tw.div`

`
