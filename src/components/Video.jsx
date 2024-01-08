import "./Video.css"

const Video = () => {
  return (
    <div>
        <div className="container" id="pitch-video-section">
        <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 mb-5 ">
          Converge II IFTA PITCH  </h1>
        <div className="card text-bg-dark border-2 rounded-none video">
        <iframe width="100%" height="800px" src="https://www.youtube.com/embed/077ere5ac1c"  allowfullscreen></iframe>
            </div>

        </div>

    </div>
  )
}

export default Video