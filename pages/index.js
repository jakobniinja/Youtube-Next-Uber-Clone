
import tw from "tailwind-styled-components";
import Map from "./components/Map";



export default function Home() {
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
      <Header>
        <UberLogo
        src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
        />
       <Profile>
         <Name>Jakob /aro</Name>
         <UserImage>
         </UserImage>
         
         </Profile> 
      </Header>

        
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-white  h-screen

`;

const ActionItems = tw.div`
flex-1 

`;
const  Header = tw.div``


const UberLogo= tw.img`
h-28
`

const Profile = tw.div``

const Name = tw.div``

const UserImage = tw.img``




