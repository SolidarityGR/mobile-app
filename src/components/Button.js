import classNames from "classnames"

function Button({ children, onClick, className }) {
	const btnClasses = classNames(
		"w-full capitalize py-5 px-10 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold shadow-md",
		className
	)

	return (
		<button
			className={btnClasses}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
