import styled from "styled-components"
import LocList from '../../datas/LocationList'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
const ChevronIcon = <FontAwesomeIcon icon={faChevronUp} />

const Body = styled.div``

const Banner = styled.img`
height: 350px;
width: 90%;
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
margin-top: 25px;
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
align-items: center;
`

const Title = styled.div`
height: 64px;
width: auto;
margin-top: 15px;
text-align: left;
color: #EF6C6C;
font-size: 40px;
`

const City = styled.div`
height: 20px;
width: auto;
text-align: left;
color: #EF6C6C;
font-size: 17px;
`

const Name = styled.div`
height: 50px;
width: auto;
text-align: right;
color: #EF6C6C;
font-size: 21px;
margin-right: 10px;

`

const ProfilePicture = styled.img`
height: 80px;
width: 80px;
border-radius: 40px;
`

const Tags = styled.div`
height: 50px;
width: auto;
margin-top: 15px;
display: flex;
justify-content: space-between;

`
const Tag = styled.div`
height: 25px;
width: auto;
background-color: #EF6C6C;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin-right: 15px;
padding-left: 30px;
padding-right: 30px;
`

const Ratings = styled.div`
height: 50px;
width: 180px;
margin-top: 15px;
`
const DivDescritpionEquipments = styled.div `
heigth: 200px;
width: 44%;
`
const TitleDivDescritpionEquipments = styled.div`
width: 100%;
height: 50px;
background-color: #EF6C6C;
color: white;
font-size: 20px;
border-radius: 10px;
display:flex;
justify-content: space-between;
align-items: center;
padding-right: 18px;
padding-left: 18px;

`
const Description = styled.div`
height: auto;
width: 100%;
font-size: 18px;
background-color: #f2f2f2;
border-radius: 10px;
padding-top: 15px;
padding-right: 20px;
padding-left: 15px;
padding-bottom: 50px;
color: #EF6C6C;
`

const Equipments = styled.div`
height: auto;
width: 100%;
font-size: 18px;
background-color: #f2f2f2;
border-radius: 10px;
padding-top: 15px;
padding-right: 20px;
padding-left: 15px;
padding-bottom: 50px;
color: #EF6C6C;
`

const Icon = styled.div`
font-size: 30px;
`


function FicheLogement() {
  const { id } = useParams()
  
    return (
      
      <Body>
        
        {LocList.map((loc) => (
          
        
      <div key={loc.id}>
        {loc.id === id ? (
          <div>
          <Banner src={loc.cover}></Banner>

          <DivInfos>
          <Div>
              <Title>{loc.title}</Title>
              <DivOwner>
                <Name>{loc['host'].name}</Name>
                <ProfilePicture src={loc['host'].picture}></ProfilePicture>
              </DivOwner>
          </Div>

          <City>{loc.location}</City>
          
          <Div>
          
            <Tags>
            {loc.tags.map((tag, index) => (
              <Tag key={loc + index}>{tag}</Tag>
            ))}
            </Tags>
            <Ratings></Ratings>
          </Div>
        </DivInfos>

        <DivInfos>
          
          <Div>
            <DivDescritpionEquipments>
                <TitleDivDescritpionEquipments><div>Description</div><Icon>{ChevronIcon}</Icon></TitleDivDescritpionEquipments>
                <Description>
                    {loc.description}
                </Description>
            </DivDescritpionEquipments>
            
            <DivDescritpionEquipments>
                <TitleDivDescritpionEquipments><div>Equipements</div><Icon>{ChevronIcon}</Icon></TitleDivDescritpionEquipments>
                  <Equipments>

                  </Equipments>
                </DivDescritpionEquipments>
            
          </Div>
        </DivInfos>

        </div>
        ): (
          null
          )}

      </div>
      ))}
      </Body>
    )
  }
  
  export default FicheLogement