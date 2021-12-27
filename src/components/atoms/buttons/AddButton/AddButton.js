import "./AddButton.scss"

function AddButton(props) {
	const { click } = props

	const action = (value) => {
		console.log("pulsado el boton", value)
		click(value)
	}

	return (
		<button onClick={() => action(true)} className="AddButton">
			+ Añadir
		</button>
	)
}

export default AddButton
