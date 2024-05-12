import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import StackLayout from '../layouts/StackLayout'
import { useState } from 'react'
import Webcam from 'react-webcam'

function ItemSubmission() {
    let { type } = useParams()

    const [openCamera, setOpenCamera] = useState(false)

    return (
        <div className="h-full">
            <StackLayout>
                <button onClick={() => setOpenCamera(!openCamera)} className="size-40 w-full text-white bg-black rounded">
                    Take A Photo
                </button>

                {openCamera && <Webcam />}

                <input className="border border-black placeholder:text-black p-2 w-full" type="text" placeholder="Name" />
            </StackLayout>

            <div className="absolute bottom-0 w-full p-4">
                <Button>Submit{type === 'food' || type === 'clothes' ? ` ${type}` : ''}</Button>
            </div>
        </div>
    )
}

export default ItemSubmission