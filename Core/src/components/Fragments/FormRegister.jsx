import Button from "../Elements/Button/Index"
import InputForm from "../Elements/Input/Index"

const FormRegister = () => {
    return(
        <form action="">
        <InputForm 
        label="Full Name" 
        type="text" 
        placeholder="Your Name" 
        name="full name"/>
        <InputForm 
        label="Email" 
        type="email" 
        placeholder="exampel.gmail.com" 
        name="email"/>
        <InputForm
        label="Password" 
        type="password" 
        placeholder="****" 
        name="password"/>
        <InputForm
        label="Confirm Password" 
        type="password" 
        placeholder="****" 
        name="confirmPassword"/>
        <Button
        variant= "bg-blue-600 w-full" 
        >
          Register
        </Button>
      </form>
    )
}

export default FormRegister