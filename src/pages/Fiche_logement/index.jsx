import styled from "styled-components"
// import LocList from '../../datas/LocationList'

const Banner = styled.div`
height: 350px;
width: 90%;
border: 3px solid red;
border-radius: 10px;
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 20px;
`

const DivInfos = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 15px;
border: 1px solid blue;
width: 90%;
`

const Div = styled.div`
display: flex;
justify-content: space-between;
`
const DivOwner = styled.div`
display: flex;
justify-content: space-between;
width: 180px;
`

const Title = styled.div`
height: 50px;
width: 500px;
border: 2px solid red;
`

const City = styled.div`
height: 20px;
width: 250px;
border: 2px solid red;
`

const Name = styled.div`
height: 50px;
width: 80px;
border: 2px solid red;
`

const ProfilePicture = styled.div`
height: 50px;
width: 80px;
border: 2px solid red;
`

const Tags = styled.div`
height: 50px;
width: 250px;
border: 2px solid red;
margin-top: 15px;
`

const Ratings = styled.div`
height: 50px;
width: 180px;
border: 2px solid red;
margin-top: 15px;
`


const Description = styled.div`
height: 50px;
width: 180px;
border: 2px solid red;
`

const Equipments = styled.div`
height: 50px;
width: 180px;
border: 2px solid red;
`


function FicheLogement() {
    return (
      <div>
        <Banner></Banner>
        <DivInfos>
          <Div>
              <Title></Title>
              <DivOwner>
                <Name></Name>
                <ProfilePicture></ProfilePicture>
              </DivOwner>
          </Div>

          <City></City>
          
          <Div>
            <Tags></Tags>
            <Ratings></Ratings>
          </Div>
        </DivInfos>
        <DivInfos>
          <Div>
            <Description></Description>
            <Equipments></Equipments>
          </Div>
        </DivInfos>
        
      </div>
    )
  }
  
  export default FicheLogement