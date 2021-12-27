import { useState, useEffect } from "react"
import "./DayButton.scss"

function DayButton(props) {
	const { day, dayActived, setDayActived, setLoading } = props
	const [active, setActive] = useState(false)

	useEffect(() => {
		if (day === dayActived) {
			console.log("El día activado y el día coinciden")
			setActive(true)
		} else {
			setActive(false)
		}
	}, [])

	const handleClick = () => {
		setLoading(true)
		setDayActived(day)
		setActive(true)
	}
	return (
		<>
			{active ? (
				<p onClick={handleClick} style={{ color: "red" }}>{`Día ${day}`}</p>
			) : (
				<p onClick={handleClick}>{`Día ${day}`}</p>
			)}
		</>
	)
}

export default DayButton
