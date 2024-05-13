function StackLayout({ children }) {
	return (
		<div className='h-full flex flex-col justify-center items-center px-28 gap-10 '>
			{children}
		</div>
	)
}

export default StackLayout
