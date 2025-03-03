import { useLocation } from "react-router"
import { ErrorSection } from "../components/Error/Error"

export const ErrorPage = () => {
    const location = useLocation();

    return (
        <>
            <ErrorSection error={location.state}/>
        </>
    )
}