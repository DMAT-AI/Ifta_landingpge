import "./HowitWorks.css"

const HowItWorks = () => {
  return (
    <div className="container text-white mb-lg-5">3.
        <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 mb-5 ">
           How it works
        </h1>
        <div className="row border-custom">
        <div className="col-md-6">
            <div className="card text-bg-dark border-2 rounded-none">
                <video
                autoPlay
                loop
                controls
                muted
                playsInline
                className="w-full h-auto " // Add any additional classes for styling if needed
                >
                <source src="/sampleout.mov" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>

        </div>
        <div className="col-md-6">
        <div className="card text-bg-dark border-2 rounded-none">
                <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto " // Add any additional classes for styling if needed
                >
                <source src="/Screen Recording 2023-12-31 at 5.32.14 PM.mov" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
        
        </div>
        </div>
        <div className="row border-custom">
        <div className="col-md-12">
        <div className="card text-bg-dark border-2 rounded-none">
                <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto " // Add any additional classes for styling if needed
                >
                <source src="/Screen Recording 2023-12-31 at 5.24.38 PM.mov" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
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
        <br></br>


    </div>
  )
}

export default HowItWorks