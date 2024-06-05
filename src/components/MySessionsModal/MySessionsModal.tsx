import { useAppSelector } from "../../store/hooks";
import "./mysessionsmodal.scss"
import { createPortal } from "react-dom";
import BookedSession from "../BookedSession/BookedSession";

type MySessionsModalProps = {
    onClose: () => void;
}

function MySessionsModal({onClose}: MySessionsModalProps){

    const sessions = useAppSelector((state) => state.book.books)

    const mySessions = sessions.map((session) =>{
        return <BookedSession key={session.id} id={session.id} title={session.title} summary={session.summary} date={session.date}/>
    })

    return( createPortal(
        <section className="sessions-modal">
            <h2 className="sessions-modal-title">Upcoming Sessions</h2>
            {sessions.length > 0?
            <div className="sessions-modal-sessions-container">{mySessions}</div>:<p className="no-sessions">You don't have any sessions!</p>}
            <button className="close-modal-button" onClick={onClose}>Close</button>
        </section>, document.getElementById("modal")!)
    )
}

export default MySessionsModal;