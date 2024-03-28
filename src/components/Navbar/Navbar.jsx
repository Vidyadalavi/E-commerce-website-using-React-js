import {useState , useContext} from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContaxt } from "../Context/ShopContaxt";
const Navbar =()=>{
     let[Line,setLine] =useState("Shop");
     const {getTotalCartItems}= useContext(ShopContaxt);

    return(
        <div className="navbar">
            <div className="nav-logo">
               <img src={logo } height="40px" alt=""/>
               <p>SHOPPER</p>
            </div>
            
                <ul className="nav-menu">
                    <li onClick={()=>{setLine("Shop")}}><Link  style={{textDecoration:"none"}} to="/">Shop</Link>{Line==="Shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setLine("Mens")}}><Link style={{textDecoration:"none"}} to="/mens">Men</Link> {Line==="Mens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setLine("women")}}> <Link style={{textDecoration:"none"}} to="/womens">Women</Link>{Line==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setLine("Kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kid</Link>{Line==="Kids"?<hr/>:<></>}</li>
                    </ul>
            <div className="nav-login-cart">
                <a href="/login"><button>Login</button></a>
                <a href="cart"><img src={cart_icon} alt=""/></a>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
         </div>
    )
}
export default Navbar;