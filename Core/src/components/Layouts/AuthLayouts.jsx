import { Link } from "react-router-dom"

const Navigation = ({type}) => {
 if(type === "login"){
    return(
    <p className="text-sm mt-5 text-center">
        Don't have an account? {""}
        <Link to="/register" className="font-bold text-blue-500">
            Sign Up
        </Link>
    </p>
    )
 }else{
    return(
        <p className="text-sm mt-5 text-center">
            Already have an account? {""}
            <Link to="/login" className="font-bold text-blue-500">
                Sign In
            </Link>
        </p>
    )

 }
}

const AuthLayouts = (props) =>{
    const {children, title, desc, type}=props
    return(        
        <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
            <h1 className="text-blue-600 text-3xl mb-2">{title}</h1>
            <p className="font-medium text-slate-500 mb-8">
            {desc}
            </p>
            {children}
            <Navigation type={type}/>
        </div>
        </div>
    )
}

export default AuthLayouts