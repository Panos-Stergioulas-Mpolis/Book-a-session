import SessionPreview from "../../components/SessionsPreview/SessionPreview";
import { SESSIONS } from "../../constants/dummy-sessions";
import "./sessions.scss"


function Sessions(){

    const sessionData = SESSIONS;

    const sessions = sessionData.map((session) => {
        return <SessionPreview key={session.id} id={session.id} title={session.title} summary={session.summary} image={session.image}/>
    });
    
    return(
        <div className="sessions-page">
            <h2 className="sessions-page-title">Available mentoring sessions</h2>
            <p className="sessions-page-paragraph">From an one-on-one introuction to React's basics all the way up to a deep dive into state mechanics - we got jus the right session for you!</p>
            <div className="sessions-preview-container">{sessions}</div>
        </div>
    )
}

export default Sessions;