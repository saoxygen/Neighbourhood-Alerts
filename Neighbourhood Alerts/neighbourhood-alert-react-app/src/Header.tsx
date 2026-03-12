
function Header() {

    return (
        <header>
            <div id="logo">
                <img src="./src/assets/logo.jpg" className="remove_white" alt="Neighbourhood Alert Logo" />
            </div>
            <nav>
                <ul>
                    <a href="#" className="btn"><li className="flex-center"><i className="fa-solid fa-car icons"></i>Vehicle</li></a>
                    <a href="#" className="btn"><li className="flex-center"><i className="fa-solid fa-user icons"></i>Person</li></a>
                    <a href="#" className="btn"><li className="flex-center"><i className="fa-solid fa-location-dot icons"></i>Area</li></a>
                </ul>
            </nav>
            <div id="cta">
                <button className="btn">Create Alert</button>
            </div>
        </header>
    );

}

export default Header;