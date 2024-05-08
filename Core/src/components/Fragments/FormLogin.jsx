import Button from "../Elements/Button/Index"
import InputForm from "../Elements/Input/Index"

const FormLogin = () => {
    return(
        <form action="">
        <InputForm 
        label="Email" 
        type="email" 
        placeholder="exampel.gmail.com" 
        name="email"/>
        <InputForm
        label="Password" 
        type="passwrod" 
        placeholder="****" 
        name="password"/>
        <Button
        variant= "bg-blue-600 w-full" 
        >
          Login
        </Button>
      </form>
    )
}

export default FormLogin