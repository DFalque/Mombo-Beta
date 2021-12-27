import { useEffect, useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import CardItinerary from "../CardItinerary"

function CardContainer(props) {
	const { itinerary: itineraryProp } = props
	const [itinerary, setItinerary] = useState([])
	const [loading, setLoading] = useState(false)

	function draging(sourceIndex, destinationIndex, idCard) {
		const newState = itineraryProp
		const cardDrag = newState.splice(sourceIndex, 1)
		newState.splice(destinationIndex, 0, ...cardDrag)
		setItinerary(newState)
	}

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result
		const dIndex = destination.index
		const sIndex = source.index
		draging(sIndex, dIndex, draggableId)
	}

	useEffect(() => {
		setLoading(true)
		//setItinerary(itineraryProp)
		setLoading(false)
	}, [])

	if (loading) return null
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="Columna1">
				{(provided) => (
					<div
						className="Itinerary__cards"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{itineraryProp
							? itineraryProp.map((card, index) => {
									return <CardItinerary {...card} index={index} key={index} />
							  })
							: null}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default CardContainer
