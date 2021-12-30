import { useEffect, useState } from "react"
import Itinerary from "../../components/Itinerary"
import ModalAddCard from "../../components/Modals/ModalAddCard"
import "./Planner.scss"
import dataTrip from "../../data/dataTrip"
import db from "../../resources/firebase/config"
import { collection, getDocs, query } from "firebase/firestore/lite"

// COMPONENTS

const Planner = () => {
	const [trip, setTrip] = useState({})

	useEffect(() => {
		async function getCities() {
			const citiesCol = collection(db, "itinerary")
			const citySnapshot = await getDocs(citiesCol)
			const cityList = citySnapshot.docs.map((doc) => doc.data())
			setTrip(cityList[0])
			return cityList
		}
		getCities()
	}, [])

	return (
		<>
			<Itinerary trip={trip} />
		</>
	)
}

export default Planner
