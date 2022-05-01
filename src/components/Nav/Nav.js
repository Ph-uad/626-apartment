import React from 'react';
// import CartIcon from './cartIcon/cartIcon';
import Classes from './nav.module.css';

function Nav() {
    return (
        <nav className={`${Classes['navigation']} flex`}>
            <span className={Classes.logo}>🦦</span>
            <ul className={` ${Classes['list']} flex`}>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>Apartments</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>About us</a></li>
                <li className={` ${Classes['list-item']}`}><a className={` ${Classes['list-link']}`} href='####'>Locations</a></li>
            </ul>
            {/* <CartIcon></CartIcon> */}
        </nav>
    );
}

export default Nav;