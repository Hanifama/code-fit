import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const error= useRouteError();
    return(
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl">Oppps!</h1>
            <p className="my-5 text-xl">Sorry, am unexpected error as accured</p>
            <p className="my-5 text-lg">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage