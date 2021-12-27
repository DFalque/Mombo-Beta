import { useEffect, useState } from "react"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import TextField from "@mui/material/TextField"
import DateRangePicker from "@mui/lab/DateRangePicker"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import Box from "@mui/material/Box"
//import DateFnsAdapter from "@mui/lab/AdapterDateFns";
// COMPONENTS
import AddButton from "../../atoms/buttons/AddButton"
import "./HeaderItinerary.scss"

const HeaderItinerary = (props) => {
	const { title, setDays } = props
	const [value, setValue] = useState([null, null])

	useEffect(() => {
		if (value[0] != null && value[1] != null) {
			console.log("El número de días de dura el viaje es")
			const firstDay = value[0]
			const secondDay = value[1]
			const dias = secondDay.getDate() - firstDay.getDate() + 1
			setDays(dias)
		}
	}, [value])

	return (
		<div className="HeaderItinerary">
			<h2>{title}</h2>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateRangePicker
					startText="Check-in"
					endText="Check-out"
					value={value}
					onChange={(newValue) => {
						setValue(newValue)
					}}
					renderInput={(startProps, endProps) => (
						<>
							<TextField {...startProps} />
							<Box sx={{ mx: 2 }}> to </Box>
							<TextField {...endProps} />
						</>
					)}
				/>
			</LocalizationProvider>
		</div>
	)
}

export default HeaderItinerary
