import { Link } from 'react-router-dom';

import './Menu.scss';
import { menu } from '../../data';

const Menu = () => {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <div className="title">{item.title}</div>
                    {item.listItems.map((link) => (
                        <Link className="listItem" to={link.url} key={link.id}>
                            <img
                                src={`./src/assets/${link.icon}`}
                                alt={link.title}
                            />
                            <span className="listItemTitle">{link.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;
