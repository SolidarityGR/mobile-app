import Button from "../components/Button"
import StackLayout from "../layouts/StackLayout"

import { useNavigate } from "react-router-dom"

function CategorySubmission() {
	const navigate = useNavigate()

	return (
		<StackLayout name="category-selection">
			<Button onClick={() => navigate("./food")}>Food 🍲</Button>
			<Button onClick={() => navigate("./clothes")}>Clothes 👕</Button>
			<Button onClick={() => navigate("./other")}>Other ♻️</Button>
		</StackLayout>
	)
}

export default CategorySubmission
