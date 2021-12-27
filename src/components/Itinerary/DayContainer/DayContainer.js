import { useState, useEffect } from "react"
import DayButton from "../DayButton"
import "./DayContainer.scss"

function DayContainer(props) {
	const { totalDays, dayActived, setDayActived } = props
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		console.log("DIA ACTIVO CAMBIADO")
		setLoading(false)
	}, [loading])

	if (loading) return null
	return (
		<div className="Itinerary__days">
			{totalDays.map((day, index) => {
				return (
					<div className="Itinerary__days__day">
						<DayButton
							day={day}
							dayActived={dayActived}
							setDayActived={setDayActived}
							setLoading={setLoading}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default DayContainer
