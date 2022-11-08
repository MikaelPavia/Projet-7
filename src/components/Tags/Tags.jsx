import LocList from '../../datas/LocationList'
import { useParams } from "react-router-dom"
import '../Tags/Tags.scss'

function Tags () {
    
    const { id } = useParams()
    const loc = LocList.find((location) => {
        
        return id === location.id
    
      })
    return (

            <div className="tags">
                  
                  {loc.tags.map((tag, index) => (

                      <div key={loc + index} className="tag">{tag}</div>

                  ))}

            </div>
    )
    
}

export default Tags