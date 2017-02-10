import React from 'react';
import { Link } from 'react-router';

const PageNav = () => (
    <nav className="PageNav">
        <div className="PageNav-logo">
            <img style={{width: '200px'}} src={require('./KeepCalmLogo.png')} alt=""/>
            {/*<span className="PageNav-logoIcon">&#0167;</span>*/}
            {/*<span className="PageNav-logoText">KeepCalm.top</span>*/}
        </div>
        <div className="PageNav-controls">
            <Link activeClassName="is-active" className="PageNav-controlsItem" to={'/generator'}>Generator</Link>
            <Link activeClassName="is-active" className="PageNav-controlsItem" to={'/history'}>History</Link>
        </div>
    </nav>
);

export default PageNav;