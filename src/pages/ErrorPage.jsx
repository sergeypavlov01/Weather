import { Error } from "../components/Error/Error"

export const ErrorPage = ({ error }) => {
    return (
        <>
            <Error errorMessage={error}/>
        </>
    )
}