import "./Itinerary.scss";
import { useState, useEffect } from "react";
// COMPONENTS
import HeaderItinerary from "./HeaderItinerary";
import DayContainer from "./DayContainer";
import CardContainer from "./CardContainer";
import AddButton from "../atoms/buttons/AddButton";
import ModalAddCard from "../Modals/ModalAddCard"


// DATA
import db from "../../resources/firebase/config"
import { collection, getDocs } from "firebase/firestore/lite"


// Library


const Itinerary = () => {
	const [trip, setTrip] = useState({})
  const [loading, setLoading] = useState(false)
  const [infoTrip] = useState('');
  const [days, setDays] = useState(1);
  const [dayActived, setDayActived] = useState(1)
  const [itineraryDay,setItineraryDay ] = useState("")
  const totalDays = [...Array.from({length:trip.days},(_,i)=>i+1)]
  
  const [openModal, setOpenModal] = useState(false)
	const [newCard, setNewCard] = useState(emptyCard)
  
	function emptyCard() {
    return {
      id: "holaaaaaaa",
			type: "",
			title: "",
			subtitle: "",
			date: "",
			departure: "",
		}
	}
   
  
  const handleNewCard = (type, value) => {
    setNewCard({ ...newCard, [type]: value })
    console.log(newCard)
	}

  const saveNewCard = () => {
    setLoading(true)
    if(itineraryDay[dayActived]){
      const array = [...itineraryDay[dayActived]]
      array.push(newCard)
      setItineraryDay({...itineraryDay,[dayActived]:array})
      setLoading(false)
    }else{
      const array = []
      array.push(newCard)
      setItineraryDay({...itineraryDay,[dayActived]:array})
    }
    setLoading(false)

	}
  
  useEffect(() => {
    setLoading(true)
    async function getCities() {
      const citiesCol = collection(db, "itinerary")
      const citySnapshot = await getDocs(citiesCol)
      const cityList = citySnapshot.docs[0].data()
      setTrip(cityList)
      setDays(cityList.days)
      setItineraryDay(cityList.itinerary)
      console.log("useEffecttttt")
    }
    getCities()    
    setLoading(false)
  }, [])
  

  
  
  

  return (
    <>
    <div className="Itinerary">
      <HeaderItinerary  {...infoTrip} setDays={setDays}/>
      <DayContainer totalDays={totalDays} dayActived={dayActived} setDayActived={setDayActived}  />
      <AddButton click={setOpenModal} />
      {loading ? <p>?quieres añadir una nuevo destino? </p> : <CardContainer itinerary={itineraryDay[dayActived]}  />}
    </div>
    {openModal && (
				<ModalAddCard
					openModal={openModal}
					setOpenModal={setOpenModal}
					setNewCard={handleNewCard}
          setItineraryDay={saveNewCard}
				/>
			)}
    </>
  )
}



export default Itinerary;
