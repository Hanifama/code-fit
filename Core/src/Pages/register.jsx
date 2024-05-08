import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPage = ( ) =>{
    return(
        <AuthLayouts title="Register" desc="ini adalah register" type="register">
            <FormRegister/>
        </AuthLayouts>
    )
}

export default RegisterPage