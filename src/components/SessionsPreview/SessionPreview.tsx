import { Link } from "react-router-dom";
import "./sessionspreview.scss"

type SessionPreviewProps = {
    id: string;
    title: string;
    summary: string;
    image: string;
}

function SessionPreview(props: SessionPreviewProps){

    return(
        <div className="session-preview">
            <div className="preview-image-container">
                <img src={props.image} alt="sessions-image" className="preview-image"/>
            </div>
            <div className="preview-info">
                <h4 className="preview-title">{props.title}</h4>
                <p className="preview-summary">{props.summary}</p>
            </div>
            <Link to={`/session-overview/${props.id}`} className="learn-more-button">Learn More</Link>
        </div>
    )
}

export default SessionPreview;