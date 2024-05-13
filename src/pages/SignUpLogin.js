import Button from "../components/Button"
import StackLayout from "../layouts/StackLayout"

import { useNavigate } from "react-router-dom"

function SignUpLogin() {
	const navigate = useNavigate()

	return (
		<StackLayout>
			<Button
				className="w-full"
				onClick={() => navigate("/category/select")}
			>
				I NEED 👍
			</Button>
			<Button
				className="w-full"
				onClick={() => navigate("/category/submit")}
			>
				I HAVE 👎
			</Button>
		</StackLayout>
	)
}

export default SignUpLogin
