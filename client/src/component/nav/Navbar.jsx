import { textNav, imageLogo } from "../../utils";
const Navbar = () =>{
 return(
 <nav>
    <div className="nav__logo">
      <a href="#"><img src={imageLogo} alt="logo" /></a>
    </div>
    <ul className="nav__links">
        {textNav.map ((item) => 
        <li className="link" key={item.id}><a href={item.path}>{item.title}</a></li>
        )}
    </ul>
    <button className="btn">Join Now</button>
 </nav>
 )
}

export default Navbar;