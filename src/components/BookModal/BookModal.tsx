import "./bookmodal.scss"
import { createPortal } from 'react-dom';
import { bookSession } from "../../store/book-slice";
import { useAppDispatch } from "../../store/hooks";
import { type FormEvent } from "react";

type BookModalProps = {
    id: string;
    title: string;
    summary: string;
    date: string;
    onClose: () => void;
}

function BookModal({id, title, summary, date, onClose}: BookModalProps){

    const dispatch = useAppDispatch();

    function handleClick(event:FormEvent){
        event.preventDefault();
        dispatch(bookSession({id, title, summary, date}));
        onClose();
    }

    return( createPortal(
        <section className="book-modal-section">
            <h2 className="book-title">Book Session</h2>
            <form className="book-form" onSubmit={handleClick}>
                <div className="input-fields">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" required/>
                </div>
                <div className="input-fields">
                    <label htmlFor="email">Your Email</label>
                    <input id="email" type="email" required/>
                </div>
                <div className="book-buttons">
                    <button className="cancel-book-button" onClick={onClose}>cansel</button>
                    <button className="submit-book-button" type="submit">Book Session</button>
                </div>
            </form>
        </section>, document.getElementById("modal")!)
    )
}

export default BookModal;