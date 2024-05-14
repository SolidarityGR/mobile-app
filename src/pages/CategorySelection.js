import Button from "../components/Button"
import StackLayout from "../layouts/StackLayout"

import { useNavigate } from "react-router-dom"

function CategorySelection() {
	const navigate = useNavigate()

	return (
		<StackLayout name="category-selection">
			<Button onClick={() => navigate("./food")}>food 🍲</Button>
			<Button onClick={() => navigate("./clothes")}>clothes 👕</Button>
			<Button onClick={() => navigate("./other")}>other ♻️</Button>
		</StackLayout>
	)
}

export default CategorySelection
