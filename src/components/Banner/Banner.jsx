import '../Banner/Banner.scss'



function PrintBanner({banniereImg, text}) {
    return (

        <div className='divBanner'>
            <img src={banniereImg} alt='' className='bannerImg'></img>
            <div className='bannerBackgroundColor'></div>
            <div className='banner'>{text}</div>
        </div>

)
}

export default PrintBanner

