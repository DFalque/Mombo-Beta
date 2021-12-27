

import { useEffect, useState } from "react"
import Itinerary from "../../components/Itinerary"
import ModalAddCard from "../../components/Modals/ModalAddCard"
import "./Planner.scss"
// COMPONENTS



const Planner = () => {
    const [openModal, setOpenModal] = useState(false)
    const [newCard, setNewCard] = useState(emptyCard)

    function emptyCard() {
        return{
            id: "",
			type: "",
			title: "",
			subtitle: "",
			date: "",
			departure: "",
        }
    }

    const handleNewCard = (type:any, value:any) => {
        console.log(type,value)
        setNewCard({...newCard,[type]:value})
    }

    useEffect(() => {
        console.log(openModal)
    }, [openModal])


    return (
        <>  
            <Itinerary setOpenModal={setOpenModal} newCard={newCard} />
             { openModal && 
             <ModalAddCard 
                openModal={openModal}
                setOpenModal={setOpenModal}
                setNewCard={handleNewCard}/>}
        </>
    )
}

export default Planner
