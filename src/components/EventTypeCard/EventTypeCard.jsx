import './EventTypeCard.css'

const EventTypeCard = ({eventType}) => {
    return (
        <div 
            className="EventTypeCard"
            id={eventType.id}
            style={{backgroundImage: `url(${eventType.img})`}}
        >
            <div className="EventTypeCard__container">
                <div className="EventTypeCard__text">
                    <h3 className="EventTypeCard__title">{eventType.name}</h3>
                    <p className="EventTypeCard__description">{eventType.description}</p>
                </div>
                <button className="EventTypeCard__btn">Sign up to talk</button>
            </div>
        </div>
    )
}

export default EventTypeCard