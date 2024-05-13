import { useParams } from "react-router-dom"
import Button from "../components/Button"
import StackLayout from "../layouts/StackLayout"
import { useState } from "react"
import Webcam from "react-webcam"

function ItemSubmission() {
	let { type } = useParams()

	const [openCamera, setOpenCamera] = useState(false)

	return (
		<div className="h-full">
			<StackLayout
				name="item-submission"
				className="pb-24"
			>
				<button
					onClick={() => setOpenCamera(!openCamera)}
					className="w-full aspect-square text-white bg-black rounded"
				>
					Upload A Photo
				</button>

				{openCamera && <Webcam />}

				<input
					className="border border-black placeholder:text-black p-2 w-full rounded"
					type="text"
					placeholder="Name"
				/>
			</StackLayout>

			<div className="absolute bottom-0 left-0 w-full p-4 flex justify-center">
				<Button className="w-auto">
					Submit
					{type === "food" || type === "clothes" ? ` ${type}` : ""}
				</Button>
			</div>
		</div>
	)
}

export default ItemSubmission
