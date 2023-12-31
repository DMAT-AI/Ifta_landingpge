import Spline from '@splinetool/react-spline';
import "./Animation.css"

const Animation = () => {
  return (
    <div className='container-fluid animation-spline' style={{width:"100%"}}>
    <Spline scene="https://prod.spline.design/VvkhuaNnmcR9-pn4/scene.splinecode" />
    </div>
  )
}

export default Animation