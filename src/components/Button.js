import classNames from "classnames"

function Button({ children, onClick, className }) {
	const btnClasses = classNames(
		"h-1/6 w-1/2 bg-[color:var(--accent)] hover:bg-[color:var(--primary)] rounded text-[color:var(--textdark)] font-semibold shadow-md text-2xl poppins-regular",
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
