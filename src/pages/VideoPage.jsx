import "./VideoPage.css"

const VideoPage = () => {
  return (
    <div>
        <div className="container" id="pitch-video-section">
        <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 mb-5 ">
          Converge II IFTA PITCH  </h1>
          <a type="button" className="btn btn-outline-light rounded-none m-5" href="/" target ="_blank" rel="noreferrer" >Find out more about IFTA &rarr;</a>
        <div className="card text-bg-dark border-2 rounded-none video">
        <iframe width="100%" height="800px" src="https://www.youtube.com/embed/077ere5ac1c"  allowfullscreen></iframe>

            </div>

        </div>
    </div>
  )
}

export default VideoPage