import React from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";
const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swupe up for more</Title>

      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
          <CarDetails>
              <Service>UberX</Service>
              <Time>12 min away</Time>
          </CarDetails>
          <Price>$120</Price>
        </Car>
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;
const CarList = tw.div`

`;

const Wrapper = tw.div`
flex-1 
`;

const Car = tw.div`

`;
const CarImage = tw.img`

`;


const CarDetails = tw.div`

`

const Service = tw.div`

`
const Time = tw.div`

`

const Price = tw.div`

`
