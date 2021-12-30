import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { useState } from "react"

import "./ModalAddCard.scss"

export default function FormDialog(props) {
	const { openModal, setOpenModal, setItineraryDay, setNewCard } = props
	const [open, setOpen] = useState(openModal)

	/*const handleClickOpen = () => {
		setOpen(true)
	}*/

	const handleClose = () => {
		setOpen(false)
		setOpenModal(false)
	}

	const save = () => {
		setOpen(false)
		setItineraryDay()
		setOpenModal(false)
	}

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Añade una nueva parada a tu Itinerario</DialogTitle>
			<DialogContent className="cosa">
				<DialogContentText>
					To subscribe to this website, please enter your email address here. We
					will send updates occasionally.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Tipo"
					type="email"
					variant="standard"
					autoComplete="off"
					onChange={(e) => setNewCard("type", e.target.value)}
				/>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Title"
					type="email"
					variant="standard"
					autoComplete="off"
					onChange={(e) => setNewCard("title", e.target.value)}
				/>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Subtitle"
					type="text"
					autoComplete="off"
					variant="standard"
					onChange={(e) => setNewCard("subtitle", e.target.value)}
				/>
				<TextField
					autoFocus
					margin="dense"
					id="date"
					label="Fecha"
					type="email"
					variant="standard"
					autoComplete="off"
					onChange={(e) => setNewCard("date", e.target.value)}
				/>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Llegada"
					type="text"
					variant="standard"
					autoComplete="off"
					onChange={(e) => setNewCard("departure", e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button onClick={save}>Guardar</Button>
			</DialogActions>
		</Dialog>
	)
}
