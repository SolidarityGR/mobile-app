import Button from "../components/Button"
import StackLayout from "../layouts/StackLayout"
import { useRef, useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom"

function SignUpLogin() {
	const [loaded, setLoaded] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const navigate = useNavigate()

    useEffect(() => {
		setTimeout(()=>{
			setLoaded(true)
			setTimeout(()=>{
				setShowLogin(true)
			},3000)
		}, 100)
    }, [])

	if (showLogin) {
		return (
			<StackLayout className={`transition-opacity ease-in duration-2000 ${showLogin ? "opacity-100" : "opacity-0"}`}>
				<Button
					onClick={() => navigate("/category/select")}
				>
					i need help ❤️
				</Button>
				<Button
					onClick={() => navigate("/category/submit")}
				>
					i want to help 🥰
				</Button>
			</StackLayout>
		)
	} 
	
	return (
		<StackLayout>
			<div className={`logo text-2xl transition-opacity ease-in duration-2000 ${loaded ? "opacity-100" : "opacity-0"}`}>
				SOLIDARITY
			</div>
		</StackLayout>
	)

}

export default SignUpLogin
