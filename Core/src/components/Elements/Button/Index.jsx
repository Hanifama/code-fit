import { Children } from "react"
import { Link } from "react-router-dom";

const Button = (props) =>{
    const {children, variant = "bg-black", toLink}= props;
    return(
        <button
        className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
        >
        <Link to={toLink} className="font-bold text-white">
        {children}
        </Link>        
        </button>
    )
}

export default Button