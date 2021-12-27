import "./Itinerary.scss";
import { useState, useEffect } from "react";
// COMPONENTS
import HeaderItinerary from "./HeaderItinerary";
import DayContainer from "./DayContainer";
import CardContainer from "./CardContainer";
import AddButton from "../atoms/buttons/AddButton";


// DATA
import dataTrip from "../../data/dataTrip";
import trip from "../../data/trip";
// Library


const Itinerary = (props) => {
  const {setOpenModal} = props
  const [loading, setLoading] = useState(false)
  const [infoTrip] = useState(trip);
  const [days, setDays] = useState(trip.days);
  const [dayActived, setDayActived] = useState(1)
  const [itineraryDay,setItineraryDay ] = useState(dataTrip[dayActived])
  const totalDays = [...Array.from({length:days},(_,i)=>i+1)]

  useEffect(() => {
    setLoading(true)
    setItineraryDay(dataTrip[dayActived])
    console.log(dayActived)
    console.log("DIA ACTIVO CAMBIADO", dataTrip[dayActived])
    setLoading(false)
  }, [dayActived])

  useEffect(() => {
    setLoading(true)
    setLoading(false)
  }, [])



  
  return (
    <div className="Itinerary">
      <HeaderItinerary  {...infoTrip} setDays={setDays}/>
      <DayContainer totalDays={totalDays} dayActived={dayActived} setDayActived={setDayActived}  />
      <AddButton click={setOpenModal} />
      {loading ? <p>holaaaaaa </p> : <CardContainer itinerary={itineraryDay}  />}
    </div>
  )
}



export default Itinerary;
