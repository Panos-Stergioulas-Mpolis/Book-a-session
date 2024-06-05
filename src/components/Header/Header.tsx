import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import "./header.scss"
import { useEffect, useState } from "react";
import MySessionsModal from "../MySessionsModal/MySessionsModal";

function Header(){

    const location = useLocation();

    const [selected, setSelected] = useState(true);
    const [mobileNav, setMobileNav] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleMobileNav(flag: boolean){
        setMobileNav(flag);
    }

    function handleModal(flag: boolean){
        setShowModal(flag)
    }

    useEffect(() =>{
        if(location.pathname === "/"){
            setSelected(true)
        }
        else{
            setSelected(false)
        }
    },[location.pathname])

    return(
        <nav className="nav-bar">
            <h2 className="nav-title">ReactMentoring</h2>
            <RxHamburgerMenu className="burger" onClick={()=>handleMobileNav(true)}/>
            <ul className="nav-items">
                <li><Link to="/" className={selected?"selected nav-item":"nav-item"}>Our Mission</Link></li>
                <li><Link to="/sessions" className={!selected?"selected nav-item":"nav-item"}>Browse Sessios</Link></li>
                <li className="nav-item" id="nav-button" onClick={() => handleModal(true)}>Upcoming Sessions</li>
            </ul>
            {mobileNav &&
            <ul className="mobile-items">
                <li><Link to="/" className={selected?"selected nav-item":"nav-item"} onClick={()=> handleMobileNav(false)}>Our Mission</Link></li>
                <li><Link to="/sessions" className={!selected?"selected nav-item":"nav-item"} onClick={()=> handleMobileNav(false)}>Browse Sessios</Link></li>
                <li className="nav-item" id="nav-button" onClick={() => handleModal(true)}>Upcoming Sessions</li>
            </ul>}
            {mobileNav &&  <div className="back-drop" onClick={()=> handleMobileNav(false)}></div>}
            {showModal &&  <div className="back-drop" onClick={()=> handleMobileNav(false)}></div>}
            {showModal && <MySessionsModal onClose={() => handleModal(false)}/>}
        </nav>
    )
}

export default Header;