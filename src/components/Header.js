import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const itemsCount = useSelector((store) => store.cart.itemsCount);
    
    return (
        <header className="header">
            <div className="logo">
                <img src={require("../../images/miggy-logo.png")} alt="miggy-logo"></img>
            </div>
            <ul className="nav-list">
                <li>
                    <Link to="/cart">
                        <div className="cart">
                            <img className="cart-icon" src={require("../../images/cart.png")} alt="cart-icon"></img>
                            <span className="cart-counter">{itemsCount}</span>
                        </div>
                    </Link>
                </li>
                <li><Link to = "/about">about us</Link></li>
                <li><Link to = "/">home</Link></li>
            </ul>
        </header>
    );
}

export default Header;