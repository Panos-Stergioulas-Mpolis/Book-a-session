import { removeBookedSession } from "../../store/book-slice";
import { useAppDispatch } from "../../store/hooks";
import "./bookesession.scss"

type BookedSessionProps = {
    id: string;
    title: string;
    summary: string;
    date: string;
}

function BookedSession({id, title, summary, date}: BookedSessionProps){

    const dispatch = useAppDispatch();

    function handleCansel(){
        dispatch(removeBookedSession({id}))
    }

    const Newdate = date.split('-')
    const formartedDate = `Nov ${Newdate[2]}, ${Newdate[0]}`

    return(
        <div className="booked-session">
            <h3 className="booked-session-title">{title}</h3>
            <p className="booked-session-summary">{summary}</p>
            <span className="booked-session-date">{formartedDate}</span>
            <button className="cansel-session-button" onClick={handleCansel}>Cansel</button>
        </div>
    )

}

export default BookedSession;