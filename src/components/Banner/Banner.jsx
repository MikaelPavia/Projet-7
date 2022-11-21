import '../Banner/Banner.scss'
import PropTypes from 'prop-types'



function PrintBanner({banniereImg, text}) {
    return (

        <div className='divBanner'>
            <img src={banniereImg} alt='' className='bannerImg'></img>
            <div className='bannerBackgroundColor'></div>
            <div className='banner'>{text}</div>
        </div>

)
}


PrintBanner.propTypes = {
    banniereImg: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    
    }
    
PrintBanner.defaultProps = {
    banniereImg: '',
    text: ''

}

export default PrintBanner

