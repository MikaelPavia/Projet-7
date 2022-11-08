import '../Owner/Owner.scss'
import PropTypes from 'prop-types'


function Owner ( {name, picture }) {

    return (
            <div className="divOwner">
                  
                  <div className="name">{name}</div>
                  
                  <img src={picture} alt='' className="profilePicture"></img>
      
            </div>
    )
            
}


Owner.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,

    }

export default Owner