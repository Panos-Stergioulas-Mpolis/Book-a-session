import { Link } from "react-router-dom";
import "./errorpage.scss"

function ErrorPage(){
    return (
        <div className="error-page">
        <h1 className="error-title">Oops Something Went Wrong!</h1>
        <Link to="/" className="home-button">Return Home</Link>
        </div>
        
    )
}

export default ErrorPage;