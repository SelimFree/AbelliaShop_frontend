import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import useGlobalState from "../../hooks/useGlobalState";
import testContent from "./TextContent";
import Cart from "../Cart/Cart";
const Navbar = ({setSearch}) => {
    // Language selector
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const options = ["ENG", "RUS", "TKM"];
    const [burgerOpen, setBurgerOpen] = useState(false)
    const navigator = useNavigate();
    const cartItems = useSelector((state) => state.products.length);
    const [state, dispatch] = useGlobalState();

    const handleSearch = (event) => {
        event.preventDefault();
        setBurgerOpen(false);
        const userInput = event.target.firstElementChild.value;
        event.target.firstElementChild.value = "";
        setSearch(userInput);
        navigator("/products");
    };
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <div className="dropdown">
                            <div
                                className="dropdown-btn"
                                onClick={() => setIsActive(!isActive)}
                            >
                                {state.lang}
                                <KeyboardArrowDownIcon />
                            </div>
                            {isActive && (
                                <div className="dropdown-content">
                                    {options.map((option, i) => (
                                        <div
                                            className="item"
                                            key={i}
                                            onClick={() => {
                                                dispatch({ lang: option });
                                                setIsActive(!isActive);
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="item responsive">
                        <Link className="link" to="/products/filter=1">
                            {testContent().skincare}
                        </Link>
                    </div>
                    <div className="item responsive">
                        <Link className="link" to="/products/filter=2">
                            {testContent().haircare}
                        </Link>
                    </div>
                    <div className="item responsive">
                        <Link className="link" to="/products/filter=3">
                            {testContent().body}
                        </Link>
                    </div>
                    <div className="item responsive">
                        <Link className="link" to="/products/filter=4">
                            {testContent().accessories}
                        </Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/">
                        {testContent().title}
                    </Link>
                </div>
                <div className="right">
                    <div className="item responsive">
                        <Link className="link" to="/products">
                            {testContent().about}
                        </Link>
                    </div>
                    <div className="item responsive">
                        <Link className="link" to="/products">
                            {testContent().contacts}
                        </Link>
                    </div>
                    <div className="item responsive">
                        <Link className="link" to="/products">
                            {testContent().all}
                        </Link>
                    </div>
                    <div className="icons">
                        <form className="search responsive" onSubmit={handleSearch}>
                            <input
                                required
                                type="text"
                                placeholder={testContent().search}
                            />
                        </form>
                        {/* <FavoriteBorderOutlinedIcon /> Icon for favourite page*/}
                        <div
                            className="cartIcon"
                            onClick={() => setisOpen(!isOpen)}
                        >
                            <ShoppingCartOutlinedIcon fontSize="30px" />
                            <span>{cartItems}</span>
                        </div>
                        <MenuOutlinedIcon className="burger" onClick={() => setBurgerOpen(true)}/>
                    </div>
                </div>
                <div className={"burger-container" + (burgerOpen ? " burger-opened" : "")}>
                    <div className="burger-wrapper">
                        <div className="top">
                            <form className="search" onSubmit={handleSearch}>
                                <input type="text" className="search__input" id="name" placeholder="Products..." />
                            </form>
                            <CloseOutlinedIcon className="close-btn" onClick={() => setBurgerOpen(false)}/>
                        </div>
                        <div className="elements" onClick={() => setBurgerOpen(false)}>
                            <div className="item">
                                <Link className="link" to="/products/filter=1">
                                    {testContent().skincare}
                                </Link>
                            </div>
                            <div className="item">
                                <Link className="link" to="/products/filter=2">
                                    {testContent().haircare}
                                </Link>
                            </div>
                            <div className="item">
                                <Link className="link" to="/products/filter=3">
                                    {testContent().body}
                                </Link>
                            </div>
                            <div className="item">
                                <Link className="link" to="/products/filter=4">
                                    {testContent().accessories}
                                </Link>
                            </div>
                            <div className="item">
                                <Link className="link" to="/">
                                    {testContent().about}
                                </Link>
                            </div>
                            <div className="item">
                                <Link className="link" to="/">
                                    {testContent().contacts}
                                </Link>
                            </div>
                            <div className="item">
                                <Link className="link" to="/products">
                                    {testContent().all}
                                </Link>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <Cart setisOpen={setisOpen} />}
        </div>
    );
};

export default Navbar;
