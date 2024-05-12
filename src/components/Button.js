function Button({ children, onClick }) {
    return (
        <button
            className="w-full capitalize px-10 py-5 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold shadow-md"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button