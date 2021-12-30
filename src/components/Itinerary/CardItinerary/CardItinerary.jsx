
import { Draggable } from "react-beautiful-dnd"
import "./CardItinerary.scss"



const CardItinerary = ( {index, date, title, subtitle, departure, type, id}) => {

    if( !title ) return null
    return (
        <Draggable  key={id} draggableId={id} index={index} >
            {(provided)=>(
                <div className= "Card_Itinerary"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                <p className="Card_Itinerary__date">{date}</p>
                <h3 className="Card_Itinerary__title" >{title}</h3>
                <p className="Card_Itinerary__subtitle" >{subtitle}</p>
                <div className="Card_Itinerary__containerDeparture" >
                    <p>Departure</p>
                    <p>{departure}</p>
                </div>
                </div>
            )}
        </Draggable>
    )
}

export default CardItinerary
