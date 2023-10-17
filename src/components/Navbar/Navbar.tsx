import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./logo.svg" alt="logo" />
                <span>reactadmin</span>
            </div>
            <div className="icons">
                <img src="./search.svg" alt="search" className="icon" />
                <img src="./app.svg" alt="app" className="icon" />
                <img src="./expand.svg" alt="expand" className="icon" />
                <div className="notifications">
                    <img src="./notifications.svg" alt="notification" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt="photo"
                    />
                    Jane
                </div>
                <img src="./settings.svg" alt="settings" className="icons" />
            </div>
        </nav>
    );
};

export default Navbar;
