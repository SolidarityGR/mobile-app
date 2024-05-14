import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUpLogin from "./pages/SignUpLogin"

import CategorySelection from "./pages/CategorySelection"
import ItemSelection from "./pages/ItemSelection"

import CategorySubmission from "./pages/CategorySubmission"
import ItemSubmission from "./pages/ItemSubmission"

export default function App() {
	const pages = [
		{ text: "SignUpLogin", link: "/", component: <SignUpLogin /> },
		{
			text: "CategorySelect",
			link: "/category/select",
			component: <CategorySelection />,
		},
		{
			text: "ItemSelection",
			link: "/category/select/:type",
			component: <ItemSelection />,
		},
		{
			text: "CategorySubmit",
			link: "/category/submit",
			component: <CategorySubmission />,
		},
		{
			text: "ItemSubmission",
			link: "/category/submit/:type",
			component: <ItemSubmission />,
		},
	]
	//320px, 480px, 768px, 1024px, and 1200px
	return (
		<BrowserRouter>
			<div className="w-[320px] md:w-[480px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1200px] mx-auto h-full dark">
				<Routes>
					{pages.map(page => (
						<Route
							key={page.text}
							path={page.link}
							element={page.component}
						/>
					))}
				</Routes>
			</div>
		</BrowserRouter>
	)
}
