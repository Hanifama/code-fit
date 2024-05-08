import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const LoginPage = ( ) =>{
    return(
        <AuthLayouts title="Login" desc="ini adalah login" type="login">
            <FormLogin/>
        </AuthLayouts>
    )
}

export default LoginPage