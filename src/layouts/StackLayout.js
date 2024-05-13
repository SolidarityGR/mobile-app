import classNames from "classnames"

function StackLayout({ name, children, className }) {
	const layoutClasses = classNames(
		name,
		"stack-layout h-full flex flex-col justify-center items-center gap-10",
		className
	)

	return <div className={layoutClasses}>{children}</div>
}

export default StackLayout
