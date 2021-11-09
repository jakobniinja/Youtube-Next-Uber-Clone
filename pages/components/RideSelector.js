import React from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";
const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swupe up for more</Title>

      <CarList>
        {carList.map((car) => (
          
         <Car key={car.multiplier} >
          <CarImage src={car.imgUrl}  />
          <CarDetails>
              <Service> {car.service} </Service>
              <Time> {Math.round(12 / car.multiplier)} min away</Time>
          </CarDetails>
          <Price> {15* car.multiplier} $ </Price>
        </Car> 
        ))}
        
      </CarList>
    </Wrapper>
  );
};

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
