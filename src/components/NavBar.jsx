
const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent ml-5 mr-5">
            <div className="container-fluid">
                <a className="navbar-brand text-3xl text-white" href="#">
                IFTA.
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" > */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active  text-white" aria-current="page" href="#">
                       1. About Section
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link  text-white" href="#">
                       2. Key Features
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link  text-white" href="#">
                       3. How it Works
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled  text-white" aria-disabled="true" href="#">
                        4.Contact Us
                    </a>
                    </li>
                </ul>
                {/* </div> */}
            </div>
            </nav>
      <hr className="bg-white text-2xl"></hr>
   
    </div>
  );
}

export default NavBar;
