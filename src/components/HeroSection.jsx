import Animation from './Animation'
import DescriptionText from './DescriptionText'

const HeroSection = () => {
  return (
    <div>
        <div className='container' id="about-section">
        <div className='row justify-content-start'>
          <div className='col-md-4 d-flex mt-5 text-start'>
            <DescriptionText />
          </div>
          <div className='col-md-8'>
          <Animation />  
          </div>


    </div>

  </div> 
  <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>   
</div>
  )
}

export default HeroSection