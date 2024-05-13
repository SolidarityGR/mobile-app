import Button from '../components/Button'
import StackLayout from '../layouts/StackLayout'

import { useNavigate } from 'react-router-dom'

function CategorySelection() {
	const navigate = useNavigate()

	return (
		<StackLayout>
			<Button onClick={() => navigate('./food')}>Food 🍲</Button>
			<Button onClick={() => navigate('./clothes')}>Clothes 👕</Button>
			<Button onClick={() => navigate('./other')}>Other ♻️</Button>
		</StackLayout>
	)
}

export default CategorySelection
