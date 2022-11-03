import '../Banner/style.scss'
// import styled from "styled-components"



function PrintBanner({banniereImg, text}) {
    return (
        <div className='divBanner'>
            <img src={banniereImg} alt='' className='bannerImg'></img>
            <div className='bannerBackgroundColor'></div>
            <div className='banner'>{text}</div>
        </div>
        

// {/* <DivBanner src={picture} alt={alt}>
// <Banner>Chez vous, partout et ailleurs</Banner>
// </DivBanner> */}

)
}

export default PrintBanner

