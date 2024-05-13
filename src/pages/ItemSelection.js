import { useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemSelection() {
	let { type } = useParams()

	const [data] = useState(require(`../mocked_data/${type}.json`))

	return (
		<div className='flex flex-col gap-5'>
			{data.map(({ image, name, provider_rating, available_no_contact }, index) => {
				return (
					<div
						key={`${index}-${name}`}
						className='bg-red-300 p-2 flex gap-3'
					>
						<img
							className='size-12 rounded-full'
							src={image}
							alt='asdf'
						/>
						<div className='flex flex-col w-full'>
							<span>{name}</span>
							<div className='flex justify-between'>
								{available_no_contact && (
									<span className='text-gray-600 text-sm align-middle'>
										Available No Contact
									</span>
								)}
								<div className='ml-auto'>
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
