const Action = ({ setModalOpen }) => {
    const onNewTransaction = () => {
        setModalOpen(true)
    }

    return (
        <div>
            <button onClick={onNewTransaction} className="w-full rounded-lg bg-[#ffd711] py-3 hover:bg-opacity-70 mt-20">
                <span className="font-medium text-blue">Send Crypto</span>
            </button>
        </div>
    )
}

export default Action
