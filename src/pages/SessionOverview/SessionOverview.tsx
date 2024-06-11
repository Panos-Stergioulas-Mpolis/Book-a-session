import { useState } from "react";
import "./sessionoverview.scss"
import BookModal from "../../components/BookModal/BookModal";
import { SESSIONS } from "../../constants/dummy-sessions";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";

function SessionOverview(){

    const [showModal, setShowModal] = useState(false);
    const {id} = useParams();
    const session = SESSIONS.find((ses) => ses.id === id)
  
    function handleModal(flag: boolean){
        setShowModal(flag);
    }

    let formartedDate = "";

    if(session){
        const date = session!.date.split('-')
        formartedDate = `Nov ${date[2]}, ${date[0]}`
    }
    

    return (
        <>
        {session && <div className="session-overview">
            <section className="overview-image-section">
                <img src={session!.image} alt="session image"/>
                <div className="overview-info-container">
                    <h1 className="overview-title">{session.title}</h1>
                    <p className="overview-date">{formartedDate}</p>
                    <button className="book-button" onClick={()=>handleModal(true)}>Book a session</button>
                </div>
            </section>
            <section className="overview-description-section">
                <p className="overview-description">{session.description}</p>
            </section>
            {showModal && <BookModal id={session.id} title={session.title} summary={session.summary} date={session.date} onClose={()=> handleModal(false)}/>}

            {showModal &&  <div className="back-drop"></div>}
        </div>}
        {!session && <ErrorPage/>}
        </>
    )
}

export default SessionOverview;