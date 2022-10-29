import styled from "styled-components"
import LocList from '../../datas/LocationList'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CollapseText from "../../components/Collapse/collapseText"
import CollapseList from "../../components/Collapse/collapseList"
import Rating from '@mui/material/Rating';
import Colors from "../../utils/style/style"

const FullStarIcon = <FontAwesomeIcon icon={faStar} color={Colors.primary}/>
const VoidStarIcon = <FontAwesomeIcon icon={faStar}/>

const Body = styled.div``

const Banner = styled.img`
height: 350px;
width: 90%;
border-radius: 10px;
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 60px;
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
color: ${Colors.primary};
font-size: 40px;
`

const City = styled.div`
height: 20px;
width: auto;
text-align: left;
color: ${Colors.primary};
font-size: 17px;
`

const Name = styled.div`
height: 50px;
width: auto;
text-align: right;
color: ${Colors.primary};
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
background-color: ${Colors.primary};
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
width: 160px;
margin-top: 15px;
display: flex;
justify-content:space-between;
color: blue;
`


const Div3 = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`


const Divtest = styled.div`
width: 45%;
`

function FicheLogement() {
  const { id } = useParams()
  
  const loc = LocList.find((location) => {
    return id === location.id
  })
  const rating = parseInt(loc.rating) 
    return  (
      
      <Body>
        
          <Banner src={loc.cover}></Banner>

          <DivInfos>
          <Div>
              <Title>{loc.title}</Title>
              <DivOwner>
                <Name>{loc.host.name}</Name>
                <ProfilePicture src={loc.host.picture}></ProfilePicture>
              </DivOwner>
          </Div>

          <City>{loc.location}</City>
          
          <Div>
          
            <Tags>
            {loc.tags.map((tag, index) => (
              <Tag key={loc + index}>{tag}</Tag>
            ))}
            </Tags>
            <Ratings>
              <Rating  name="read-only" value={rating} icon={FullStarIcon} emptyIcon={VoidStarIcon} readOnly />
            </Ratings>
          </Div>
        </DivInfos>









        <DivInfos>
<Div3>
  <Divtest>
<CollapseText
          title= "Description"
          description={loc.description}>
          </CollapseText>
          </Divtest>
          <Divtest>
          {/* <CollapseList list={'ceci est ma liste'}>
          </CollapseList> */}
          <CollapseList title='Équipements'></CollapseList>
          </Divtest>
          
</Div3>
          
          

        </DivInfos>

        
        
      {/* ))} */}
      </Body>
    )
    
  }
  
  export default FicheLogement