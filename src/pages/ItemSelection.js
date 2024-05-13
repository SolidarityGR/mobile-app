import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemSelection() {
	let { type } = useParams()

	const [data] = useState(require(`../mocked_data/${type}.json`))

	return (
		<div className="item-selection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
			{data.map(({ image, name, provider_rating, available_no_contact }, index) => {
				return (
					<div
						key={`${index}-${name}`}
						className="flex md:flex-col gap-3 cursor-pointer"
					>
						<div className="aspect-square max-sm:size-12">
							<img
								className="max-sm:rounded-full h-full object-cover"
								src={image}
								alt="asdf"
							/>
						</div>
						<div className="flex flex-col w-full">
							<span>{name}</span>
							<div className="flex justify-between">
								{available_no_contact && (
									<span className="text-gray-600 text-sm align-middle">
										Available No Contact
									</span>
								)}
								<div className="ml-auto">
									{Array(5)
										.fill(0)
										.map((_, index) => (
											<span key={index}>★</span>
										))}
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ItemSelection
