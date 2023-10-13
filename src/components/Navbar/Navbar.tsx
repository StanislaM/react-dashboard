import logo from '@/assets/logo.svg';
import search from '@/assets/search.svg';
import app from '@/assets/app.svg';
import expand from '@/assets/expand.svg';
import settings from '@/assets/settings.svg';
import notification from '@/assets/notifications.svg';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <span>reactadmin</span>
            </div>
            <div className="icons">
                <img src={search} alt="search" className="icon" />
                <img src={app} alt="app" className="icon" />
                <img src={expand} alt="expand" className="icon" />
                <div className="notification">
                    <img src={notification} alt="notification" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt="photo"
                    />
                    Jane
                </div>
                <img src={settings} alt="settings" className="icons" />
            </div>
        </nav>
    );
};

export default Navbar;
