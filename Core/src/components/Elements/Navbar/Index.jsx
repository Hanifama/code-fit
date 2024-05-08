import Button from "../Button/Index"
import Header from "../Header/Index"

const Navbar = (props) => {    
    const navLinks = 
[
    {
        id : 1,
        title : 'Home',
        path : 'header'
    },
    {
        id : 2,
        title : 'About',
        path : 'Program'
    },
    {
        id : 3,
        title : 'Service',
        path : 'service'
    },
    {
        id : 4,
        title : 'Program',
        path : 'Program'
    },
    {
        id : 5,
        title : 'Community',
        path : 'Community'
    }

]  
    return(
        <div className="w-full h-screen bg-primary-light">
        <nav class="bg-primary-light mx-auto px-8 py-8 flex items-center justify-between gap-8 max-h-20">
         <img src="../public/img/logo-fit.png" alt="Logo" class="w-[150px] ml-11"/>
            <ul class="flex items-center gap-12 list-none">
                {navLinks.map ((item) => 
                    <li 
                    class="relative text-white pb-3 hover:text-secondary-dark hover:after:w-8 hover:after:bg-secondary-dark hover:after:bottom-0 hover:after:left-0 hover:after:absolute hover:after:h-0.5"
                    key={item.id}>
                        <a href={item.path}>
                            {item.title}
                        </a>
                    </li>
                )}                         
            </ul>
            <div>
                <Button
                variant= "bg-secondary-dark"
                toLink = "/register"  
                >
                Sign Up
                </Button>
                <Button
                variant= "tranparent" 
                toLink = "/login"                
                >
                Sign in
                </Button>
            </div>
        </nav>
        <Header/>
        </div>

      
    )
}

export default Navbar