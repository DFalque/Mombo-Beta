import "./Itinerary.scss";
import { useState } from "react";
// COMPONENTS
import CardItinerary from "./CardItinerary";
import HeaderItinerary from "./HeaderItinerary";
// DATA
import dataCards from "../../data/cards";
import dataTrip from "../../data/dataTrip";
// LIBRERIAS
import { DragDropContext, Droppable, } from "react-beautiful-dnd";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState(dataCards);
  const [trip, setTrip] = useState(dataTrip);
  console.log(trip)

  function draging ( sourceIndex, destinationIndex, idCard ) {
    const newState = [...itinerary];
     const findCard = newState.find((a) => a.id === idCard);
     console.log(findCard)
     const cardDrag = newState.splice(sourceIndex, 1);
    newState.splice(destinationIndex, 0, ...cardDrag);
    console.log(itinerary);
    console.log(newState);
    setItinerary(newState);
    }
  
  const onDragEnd = (result) => {
    const { destination,source, draggableId } = result;
    //const dId = destination.droppableId; // el ID de la columan destino
    const dIndex = destination.index; // la posición de la columna destino
    const sIndex = source.index; // la posición origen
    //const sId = source.droppableId; // el ID de la columna origen

    console.log(draggableId);
    console.log(`Este es la posición origen ${sIndex}`);
    console.log(`Este es la posición destino ${dIndex}`)
    

    draging( sIndex,dIndex, draggableId);
  };

  
  return (
    <div className="Itinerary">
      <HeaderItinerary/>
      <div className="Itinerary__days">
        <div className="Itinerary__days__day"> 
          <p>1</p>
          <p> Día</p>
        </div>
        <div className="Itinerary__days__day" > 
        <p>2</p>
          <p> Día</p>
        </div>
        <div className="Itinerary__days__day" > 
        <p>3</p>
          <p> Día</p>
        </div>
        <div className="Itinerary__days__day" > 
        <p>4</p>
          <p> Día</p>
        </div>
        <div className="Itinerary__days__day" > 
        <p>5</p>
          <p> Día</p>
        </div>
        <div className="Itinerary__days__day" > 
        <p>6</p>
          <p> Día</p>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd} >
        <Droppable droppableId="Columna1">
          {(provided) => (
            <div
              className="Itinerary__cards"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itinerary.map((card, index) =>{ 
                return (<CardItinerary {...card} index={index} />) }  ) }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}



export default Itinerary;
