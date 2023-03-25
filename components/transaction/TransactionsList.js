import { useMemo, useState } from 'react'
import SearchBar from '../home/SearchBar'
import TransactionDetailModal from './TransactionDetailModal'
import TransactionItem from './TransactionItem'

const TransactionsList = ({ connected, transactions }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentTransactionID, setCurrentTransactionID] = useState(null)
    const currentTransaction = useMemo(() => transactions.find((transaction) => transaction.id === currentTransactionID), [currentTransactionID])

    const toggleTransactionDetailModal = (value, transactionID) => {
        setCurrentTransactionID(transactionID)
        setModalOpen(value)
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-yellow to-blue pb-4 pt-10">
                <p className="mx-auto max-w-3xl px-10 font-medium uppercase text-black xl:px-0 flex items-center justify-center pb-4 ">Transaction History</p>
            </div>
            <SearchBar/>
            <div className="mx-auto max-w-3xl divide-y divide-gray-100 py-4 px-10 xl:px-0 text-[#ffd711]">
                {connected ? (
                    <>
                       
                        {transactions.map(({ id, to, amount, description, transactionDate }) => (
                            <TransactionItem className="text-white" key={id} id={id} to={to} description={description} transactionDate={transactionDate} amount={amount} toggleTransactionDetailModal={toggleTransactionDetailModal} />
                        ))}

                        <TransactionDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} currentTransaction={currentTransaction} />
                    </>
                ) : (
                    <div className="flex items-center justify-center pt-20">
                        <p className="text-2xl font-medium">Connect Wallet to See Transaction History</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TransactionsList
