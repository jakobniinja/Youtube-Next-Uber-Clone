import Link from "next/link"
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Jakob /aro</Name>
            <UserImage src="https://images.squarespace-cdn.com/content/v1/534e4ffae4b02414fb6b56c1/1443360601736-0HCN7Y8IJRIRSM3NERKX/image.jpg?format=1000w" />
          </Profile>
        </Header>
        <ActionButtons>
       <Link href="/search">
         
          <ActoinButton>
            <ActionButtonImage src={"https://i.ibb.co/cyvcpfF/uberx.png"} />
            Ride
          </ActoinButton>
          </Link>
          <ActoinButton>
            <ActionButtonImage
              src={
                "https://i.ibb.co/n776JLm/bike.pnghttps://i.ibb.co/5RjchBg/uberschedule.pnghttps://i.ibb.co/cyvcpfF/uberx.png"
              }
            />
            Wheel
          </ActoinButton>

          <ActoinButton>
            <ActionButtonImage
              src={
                "https://i.ibb.co/5RjchBg/uberschedule.png://i.ibb.co/cyvcpfF/uberx.png"
              }
            />
            Reserve
          </ActoinButton>
        </ActionButtons>
        <InputButton>Where to ?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-white  h-screen

`;

const ActionItems = tw.div`
flex-1 p-4 


`;
const Header = tw.div`
flex justify-between items-center

`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-20 test-sm

`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px


`;

const ActionButtons = tw.div`
flex 

`;
const ActoinButton = tw.div`
flex bg-gray-200 flex-1 m-10 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl

`;
const ActionButtonImage = tw.img`
h-3/5 

`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-5

`