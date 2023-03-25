import { truncate } from "../../utils/string"
const GenQR = ({ setModalOpen, avatar, userAddress, setQrCode }) => {
    const onProfileOpen = () => {
        setModalOpen(true)
        setQrCode(false)
    }
    return (
        <div onClick={onProfileOpen} className="my-10">
            {/* <div className="h-16 w-16 rounded-full border-2 border-white">
                <img className="h-full w-full rounded-full object-cover" src={avatar} />
            </div>

            <div className="flex flex-col items-center space-y-1">
                <p className="font-semibold text-white">{truncate(userAddress)}</p>

                <p className="text-sm font-light italic text-gray-100">${truncate(userAddress)}</p>
            </div> */}
            <div>
            <button className="w-full rounded-lg bg-[#ffd711] py-3 hover:bg-opacity-70">
                <span className="font-medium text-blue">Generate QR</span>
            </button>
        </div>
        </div>
    )
}

export default GenQR